<template>
  <div>
    <div style="border: 1px solid black; padding: 1rem; font-family: monospace">
      <div v-if="chosenAccount">
        <div style="margin-bottom: 1.5rem">
          <select @change="(event)=>processAccountChosen(event)" v-model="chosenAccount">
            <option disabled value="">Choose account</option>
            <option v-for="account in allAccounts" :key="account.address" :value="account">{{ account.meta.name }} –
              {{ account.address }}
            </option>
          </select>

        </div>

        <p style="margin-bottom: 0.75rem">Account Name: <b>{{ chosenAccount.meta.name }}</b></p>
        <p style="margin-bottom: 0.75rem">Substrate: <b>{{
            transformAddressToNetworks(chosenAccount.address).substrate
          }}</b></p>
        <p style="margin-bottom: 0.75rem">Polkadot: <b>{{
            transformAddressToNetworks(chosenAccount.address).polkadot
          }}</b></p>
        <p style="margin-bottom: 0.75rem">Kusama: <b>{{ transformAddressToNetworks(chosenAccount.address).kusama }}</b>
        </p>
        <p style="margin-bottom: 0.75rem">Robonomics: <b>{{
            transformAddressToNetworks(chosenAccount.address).robonomics
          }}</b></p>

        <div>
          <slot/>
        </div>
      </div>
      <div v-else>
        <p style="color: orange">Connect Polkadot wallet extension and refresh this page</p>
      </div>
    </div>
  </div>

</template>

<script>

import {web3Accounts, web3Enable, web3FromAddress} from '@polkadot/extension-dapp';
import {Keyring} from '@polkadot/keyring';
import {stringToHex} from "@polkadot/util";

const getInjectedAccounts = async () => {
  const allInjected = await web3Enable('kusama.practice course');
  const allAccounts = await web3Accounts();
  console.log(allAccounts)
  return allAccounts
}


export default {

  props: {},
  mounted: async function () {
    this.allAccounts = await getInjectedAccounts()
    const savedAddress = $cookies.get('account_address')
    if (savedAddress) {
      this.allAccounts.forEach(account => {
        if (account.address === savedAddress) {
          this.chosenAccount = account
        }
      })
    } else if (this.allAccounts.length > 0) {
      this.chosenAccount = this.allAccounts[0]
    }
    await this.authAccount(this.chosenAccount.address)
  },
  methods: {
    async processAccountChosen() {
      this.accountAddress = null
      this.accountSignature = null
      await this.authAccount(this.chosenAccount.address)
    },
    transformAddressToNetworks(address) {
      const keyring = new Keyring();
      const publicKey = keyring.decodeAddress(address)
      const kusamaAddress = keyring.encodeAddress(publicKey, 2)
      const substrateAddress = keyring.encodeAddress(publicKey, 42)
      const polkadotAddress = keyring.encodeAddress(publicKey, 0)
      const robonomicsAddress = keyring.encodeAddress(publicKey, 32)
      return {
        polkadot: polkadotAddress,
        kusama: kusamaAddress,
        robonomics: robonomicsAddress,
        substrate: substrateAddress
      }
    },
    async authAccount(address) {
      if ($cookies.get('account_address') !== address) {
        const injector = await web3FromAddress(this.chosenAccount.address);
        const signRaw = injector?.signer?.signRaw;
        if (!!signRaw) {
          const {signature} = await signRaw({
            address: this.chosenAccount.address,
            data: stringToHex(`kusama.practice ${address}`),
            type: 'bytes'
          });
          this.accountAddress = this.chosenAccount.address
          this.accountSignature = signature

          $cookies.set('account_signature', signature)
          $cookies.set('account_address', this.chosenAccount.address)
        }
      } else {
        this.accountSignature = $cookies.get('account_signature')
        this.accountAddress = address
      }
    }

  },
  data() {
    return {
      allAccounts: [],
      chosenAccountNum: 0,
      accountAddress: null,
      accountSignature: null,
      chosenAccount: null,
      selectedWalletAddress: null,
    }
  }
}
</script>