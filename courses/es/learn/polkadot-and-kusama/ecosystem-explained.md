---
title: Polkadot & Kusama structure
description: A course for those who see the Polkadot and Kusama ecosystem for the first time.
metaOptions: [Cursos online, Polkadot and Kusama]
defaultName: Polkadot and Kusama
---

# Video Lecture

https://youtu.be/n0BuV3-PPn4

<Spoiler title="<h2 style='display: inline;' >Lección 2. Estructura de Polkadot y Kusama</h2>">

# **Introducción**

Al haber cubierto qué es el ecosistema de Polkadot, es la hora de observar más de cerca cómo funciona y proporciona seguridad e interoperabilidad a todas los paracaídas de la red. 

Así como comprender la anatomía del cuerpo humano nos ayuda a comprender sus funciones, comprender la estructura de Polkadot y Kusama nos ayudará a comprender cómo funcionan. ¡Abróchense los cinturones! ¡Empezamos!

# **El ecosistema de Polkadot como ciudad del futuro**

## Relay Chain

El corazón de nuestra ciudad futurista. Es una carretera principal que mantiene todo  conectado y funcionando sin problemas
en Polkadot. Relay Chain es responsable de la seguridad compartida, el consenso y la interoperabilidad entre cadenas de la red.

En términos técnicos, Relay Chain es una cadena de bloques modular, construida con [Substrate](https://www.parity.io/blog/how-to-build-your-own-blockchain-using-parity-substrate/), un marco creado especialmente para el futuro de múltiples cadenas. En Polkadot cumple dos funciones principales: proporcionar seguridad para la red y permitir la interoperabilidad entre cadenas.

| Seguridad                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Interoperabilidad                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Los **validadores** apuestan sus tokens (DOT o KSM) <br/> como garantía para validar las pruebas de los **collators**,<br/> participar en la producción de nuevos bloques<br/> y confirmar la validez de las transacciones. <br/>Este modelo de seguridad colectiva permite <br/>que todos los **parachains** y **parathreads**<br/>se beneficien de la seguridad de Relay Chain,<br/> reduciendo el riesgo de ataques y mejorando <br/>la confianza en la red. | [Horizontal Relay-routed Message Passing (HRMP)](https://wiki.polkadot.network/docs/learn-xcm-transport) <br/>El protocolo proporciona interoperabilidad <br/>entre cadenas en Relay Chain,<br/> mientras que el más avanzado.<br/> [Cross-Chain Message Passing protocol (XCMP)](https://wiki.polkadot.network/docs/learn-xcm) <br/> aún está en implementación.<br/> HRMP permite que las paracaídas<br/> intercambien mensajes directamente<br/> entre sí a través de Relay Chain. |

Se puede considerar a los validadores como los agentes de policía de esta ciudad. Su trabajo es garantizar la legitimidad de todas las transacciones que ocurren en la red. Validan pruebas (resúmenes o representaciones del bloque y sus transacciones) de los collators (los que recopilan datos de parachain). Al hacerlo, ayudan a proteger Relay Chain y todas las cadenas conectadas.

Los participantes de la red nominan validadores con sus tokens, y las personas con más votos se convierten en validadores. Este sistema garantiza que la red sea justa y no esté controlada por unas pocas personas seleccionadas.

## **Comprender Parachains y Parathreads**

### **Parachains**

Saliendo de la carretera principal, tenemos los Parachains. Vamos a imaginarlos como barrios únicos, cada uno con sus propias vibraciones y especialidades. Las paracaídas se benefician de la seguridad y la interoperabilidad de Relay Chain, pero también pueden hacer lo suyo: podrían ser una zona residencial, un distrito comercial, un parque o un centro comercial que sirven para diferentes propósitos. También pueden tener sus propios tokens, reglas, manejar sus propias transacciones e incluso contratos inteligentes.

Cada parachain estaba conectado a la Relay Chain a través de nodos especiales llamados validadores. Son los encargados de verificar la información producida por los collators de cada parachain. Una vez verificadas, estas transacciones se incluyen en la cadena de bloques.

### **Parathreads**

Los parathreads son como tiendas pop-up o food trucks. Son similares a los paracaídas, pero no tienen espacios permanentes en la cadena de Relay Chain. Básicamente, alquilan espacio cuando lo necesitan, lo que los convierte en una opción flexible y rentable para cadenas de bloques menos activas.

Los parathreads son una característica propuesta para la red Polkadot y, si se implementan, funcionan de manera similar a los parachains pero con una diferencia clave.

En lugar de ocupar un espacio permanente en Relay Chain, los parathreads funcionan mediante un sistema de pago por uso, conectándose a la Relay Chain cuando es necesario. Este modelo propuesto sería una opción rentable para proyectos que no requieran conectividad continua a la red.

En teoría, al igual que los paracaídas, los parathreads tendrían sus propios tokens y funcionalidades específicas. También utilizarían collators para recopilar transacciones y producir pruebas para los validadores en la Relay Chain. Sin embargo, solo pagarían por los tiempos específicos en los que estén incluidos en la Relay Chain.

## **Puentes: conectando diferentes redes**

No todas las cadenas de bloques pueden convertirse en un paracaídas de la red Polkadot o Kusama. Para formar parte debe cumplir dos criterios específicos:

- **Estar basado en sustrato o ser compatible.** Polkadot y Kusama se basan en un Substrate framework. Para convertirse en una parachain, la cadena de bloques también debe construirse sobre Substrate o al menos ser compatible con él.
- **Adoptar un modelo de seguridad compartido.** Los Parachains potenciales deben adoptar el modelo de seguridad compartida de Polkadot o Kusama, lo que significa que no necesitan su propio conjunto de validadores o mineros para proteger su red. En cambio, confían en los validadores de Polkadot o Kusama.

Si una cadena de bloques no cumple con estos criterios, como tener un mecanismo de consenso diferente o no estar construida sobre Substrate, entonces necesitamos esos **puentes**.

En nuestra ciudad del futuro, podemos imaginar puentes... como puentes reales que permiten un libre flujo de bienes y suministros entre nuestra ciudad y las ciudades vecinas, es decir, cadenas de bloques externas como Ethereum o Bitcoin. Estas cadenas de bloques no pueden convertirse en paracaídas porque utilizan diferentes mecanismos de consenso y tienen su propia arquitectura, comunidad, modelos de gobernanza, y etc.
Convertirse en una paracadena significaría renunciar a la soberanía, ya que tendrían que ajustarse al consenso y al modelo de gobernanza de Polkadot.

Los puentes hacen posible que dichas redes externas interactúen y se comuniquen con la red Polkadot o Kusama sin tener que convertirse en paracaídas.

## **DOT y KSM: Governance, Staking y Bonding**

### **Governance**

Ser propietario de DOT y KSM equivale a poseer un boleto para votar en nuestro concejo municipal. Si los tienes, podrás participar en la decisión de cómo debe evolucionar la ciudad. Cuantos más tokens tengas, más podrás decir. Por ejemplo, los poseedores de tokens pueden votar para actualizar la red o aprobar la financiación para algunos proyectos, como este curso.
Imagínate tener derecho a votar sobre si nuestra ciudad tendrá un nuevo parque o qué tan altos pueden ser los edificios. Este concepto de sistema de gobernanza es muy relevante para el funcionamiento de las Organizaciones Autónomas Descentralizadas (DAO); sin embargo, no se consideran estrictamente DAO debido a los elementos de desarrollo centralizado.

Gracias a las actualizaciones recientes, Polkadot se ha vuelto aún más democrático con su modelo [OpenGov](https://polkadot.network/features/opengov/), que otorga más poder de decisión a los poseedores promedio de tokens DOT o KSM.

Algunos puntos clave sobre cómo funciona esto:

1. En la red no hay “ciudadanos de primera clase" y ninguna autoridad o grupo toma decisiones por sí solo. Todos los titulares de DOT o KSM pueden tomar decisiones y hacer cambios en los gastos de **Tesorería** de la red.
2. El nuevo organismo de expertos de la red, que reemplazó al consejo, la **Comunidad**, proporciona experiencia técnica pero no tiene poder duro sobre la red. Puede hacer algunas sugerencias para corregir errores o identificar errores maliciosos.
3. Un mecanismo único permite la celebración de múltiples referendos simultáneamente, lo que conduce a una toma de decisiones más rápida sin comprometer la seguridad.
4. La red principal y todas las paracaídas conectadas pueden actualizarse sin bifurcaciones, casi sin problemas.

### **Staking**

Cada titular de DOT o KSM puede bloquear sus tokens para validar transacciones (o designar a otra persona para que lo haga). A cambio de apostar y, por lo tanto, ayudar a proteger la red, el apostador gana una recompensa. Es como tu forma de contribuir a la seguridad de la ciudad. Al apostar tus tokens, estás diciendo: "Confío en esta ciudad y estoy dispuesto a arriesgar mis tokens por ella". Y la ciudad te recompensa por esa confianza. Si eres validador, incluso puedes participar en la creación de nuevos bloques y verificar transacciones, como si fueras parte del ayuntamiento. 

### **Bonding**

Esto es lo que haces cuando quieres agregar un nuevo edificio (o parachain) a nuestra ciudad. Vincula (o bloquea) sus tokens DOT o KSM durante un período determinado para asegurar un espacio para su parachain. Es como hacer un depósito para un terreno en el que quieres construir tu propio rascacielos. Después de que expire el contrato de arrendamiento, se le devuelve el depósito.

Además de vincular tokens para slots (ranuras) de parachain, los titulares de DOT y KSM también pueden vincular sus tokens para subastas, donde pueden participar en la subasta de otras ranuras de parachain. Es como comprar un terreno con un edificio ya construido. Los tokens se bloquean durante un período determinado y, si la subasta no tiene éxito, se devuelven los tokens. 
En la próxima lección, exploramos los mecanismos de validadores y collators con más detalle, y cómo trabajan juntos para proteger la red y permitir la comunicación entre cadenas.

## Kusama network

Si Polkadot es una ciudad del futuro, Kusama es su prima salvaje y experimental. Es como el festival Burning Man en la ciudad de Nueva York de Polkadot. Se puede decir que es como una versión más rápida, flexible y menos pulida de Polkadot. 
Polkadot y Kusama comparten la misma arquitectura central: Relay Chain, Parachains, Parathreads, y Bridges, así como los principios de interoperabilidad, escalabilidad y seguridad compartida. Sin embargo, aunque son arquitectónicamente similares, satisfacen diferentes necesidades:

- **2016:** Kusama funciona como un sandbox experimental (o caja de arena), que permite a los desarrolladores probar nuevos proyectos en un entorno real antes de aplicarlos a Polkadot. Es más tolerante al riesgo y mejor para proyectos innovadores.
- **2017:** Polkadot es una red estable, diseñada para transacciones seguras y de alto valor. La seguridad y estabilidad son su prioridad.

</Spoiler>

<Spoiler title="<h2 style='display: inline;' >Theory: Test</h2>">

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question2.1"
/>

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question2.2"
/>

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question2.3"
/>

</Spoiler>



<FeedbackBlock 
formUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Feedback"
lessonLabel="ecosystem-explained"
/>