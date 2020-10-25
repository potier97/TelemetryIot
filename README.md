<h1 align="center">
  <img src="src/images/logo.png"/><br/>
  <a href="https://telemetry-iot.herokuapp.com/">TelemetryIot</a>
</h1>
 
Proyecto de una Aplicación Web para la presentación y distribución de datos ambientales de un Invernadero, capturados y procesados mediante una red IOT, compuesta de 5 nodos y un Gateway, el proyecto de la red IOT se encuentra en [AgroIot](https://github.com/potier97/AgroIot).  La Aplicación Web es construida mediante la tecnología de [React](https://es.reactjs.org/), conectado a la plataforma de servicios en la Nube [Firebase](https://firebase.google.com/) para la entrega de información en FireStore (Base de Datos) y Storage (Almacenamiento de contenido Multimedia), la Aplicación es distribuida en la Web mediante la plataforma de [Heroku](https://www.heroku.com/), esta se encuentra disponible en: [Telemetry Iot](https://telemetry-iot.herokuapp.com).

En este repositorio se explica cómo se compone la Aplicación Web (Vistas), las dependencias utilizadas para su construcción, su funcionamiento básico y la manera de poder descargar y replicar este proyecto en su Máquina.


## Objetivos
Los objetivos propuestos son de visión general para el proyecto: Red De Telemetría para el Análisis Productivo de Terrenos en Cultivos Agrícolas, que cubre este repositorio y [AgroIot](https://github.com/potier97/AgroIot), así mismo, estos se encuentran expuestos en la Aplicación Web.

##### Objetivo General 
 - Caracterizar las variables del entorno y del clima que inciden en el cultivo agrícola de tipo invernadero

##### Objetivo Específicos
- Telemetría: Establecer un protocolo de comunicación de los dispositivos IoT enfocados a la medición de variables del entorno y del clima, para garantizar una conexión segura y estable a una base de datos.
- Análisis: Identificar las variables del entorno y del clima que generen mayor impacto en el cultivo agrícola estudiado a través de procedimientos de Analítica.
- Nube: Establecer una plataforma de servicios y almacenamiento en la nube, para difusión y uso de la información acerca del cultivo agrícola estudiado.
 

## Resumen: 
  - [Vistas](https://github.com/potier97/TelemetryIot#vistas)
  - [Dependencias](https://github.com/potier97/TelemetryIot#)
  - [Funcionamiento](https://github.com/potier97/TelemetryIot#funcionamiento)
  - [Instalación](https://github.com/potier97/TelemetryIot#instalacion)


## Vistas

La aplicación Web: [Telemetry Iot](https://telemetry-iot.herokuapp.com) se compone de la siguiente estructura:

<h1 align="center">
  <img src="src/images/PagesTree.png"/><br/>
  Estructura Aplicación
</h1>

El flujo básico de la aplicación consiste en
 - Pagina de Bienvenida: Vista principal cuando no está registrado en la aplicación
 - Registro: Validación del usuario para poder ingresar a la vista Tablero, solo se registra mediante el proveedor Google o GitHub
 - Tablero: Contiene todas las vistas correspondientes a la aplicación Web
   - Métricas: Contiene las vistas de cada nodo por medio de pestañas 
     - Promedio: Información promediada de cada nodo, de las variables censadas y del último registro
     - Nodo Uno: Información del nodo Uno, de cada variable censada y del último registro
     - Nodo Dos: Información del nodo Dos, de cada variable censada y del último registro
     - Nodo Tres: Información del nodo Tres, de cada variable censada y del último registro
     - Nodo Cuatro: Información del nodo Cuatro, de cada variable censada y del último registro
     - Nodo Cinco: Información del Nodo Cinco, de cada variable censada y del último registro
   - Acerca: Informa al usuario sobre la ubicación geográfica de la red de telemetría, las condiciones ambientales alrededor de esta, y las características del mismo y del invernadero
   - Plantas: Conjunto de registros organizados en una tabla, que consiste en plantas y sus condiciones ambientales para que se puedan sembrar, el usuario puede registrar, actualizar o eliminar 
   - Análisis: Registro de las últimas 24 Horas de las variables ambientales censadas por medio de mapas de calor, y el despliegue del sistema de recomendación al usuario para sembrar en el invernadero de acuerdo a las plantas registradas
   - Imágenes: Evidencia fotográfica de la red de telemetría y el invernadero


## Dependencias Utilizadas 
- [Moment](https://momentjs.com/): Maneja las fechas, horas y sus diferentes formatos
- [Material-UI](https://material-ui.com/): Componentes para el desarrollo de UI
- [Axios](https://github.com/axios/axios): Solicitudes HTTP para APIS en el navegador
- [Chart.js](https://www.chartjs.org/): Gráficos simples y dinámicos
- [Dotenv](https://github.com/motdotla/dotenv#readme): Manejo de variables del Sistema
- [Firebase](https://github.com/firebase/firebase-js-sdk): Firebase SDK para js en el lado del cliente
- [Lodash](https://lodash.com/): Programación funcional y ágil para tareas comunes
- [React-responsive-carousel](http://react-responsive-carousel.js.org/): Componente de React para colección de imágenes

## Funcionamiento
El funcionamiento básico de esta aplicación ([Telemetry Iot](https://telemetry-iot.herokuapp.com)) consiste en: La presentación general de todos los datos censados y procesados de la red de Telemetría, que son guardados y obtenidos desde la plataforma de servicios de la nube de Firebase; La presentación de esta información se realiza mediante el uso de gráficos lineales simples y de eje compartido, además, se realiza un análisis espacial por cada tipo de variable ambiental censada para ser apreciada por medio de mapas de calor. 

El sistema permite realizar el registro, actualización o eliminación de plantas que puedan o quieran ser cultivadas en la zona de estudio, esto con el fin de realizar un análisis de las condiciones ambientales censadas y las condiciones de cada planta, y de esta manera asegurar y/o garantizar el desarrollo de la planta mejor acondiciona. 

Para poder visualizar esta información e ingresar a esta, el usuario debe de acceder a la aplicación, haciendo un registro de usuario por medio del proveedor de Google o GitHub

 
## Instalación
Para descargar e instalar este repo en su pc, tenga en cuenta que los siguientes programas deben estar instalados en su PC:
1. Git
2. Node - versión 12 
3. Npm O Yarn

Posterior a esto, continúe con:
1. Crear una carpeta donde va a alojar el código
2. Mediante CMD o POWERSHELL diríjase a la carpeta creada, usando CD
3. Descargar el repositorio por GIT, ingresando en la consola: `git clone https://github.com/potier97/TelemetryIot.git` o simplemente descárguelo mediante un archivo ZIP
4. Instale las dependencias del proyecto mediante NPM o YARN, estando ubicado en la carpeta del proyecto e ingresando: `npm install` o  `yarn install`
5. Ponga en funcionamiento el servidor local con: `npm start` o  `yarn start`
6. Tenga en cuenta que, si replica este proyecto, deberá crear su propio proyecto en Firebase, y demás servicios que le soliciten el uso de una Variable de Sistema en un archivo, SIN NOMBRE `.ENV` en la raíz del proyecto, por lo tanto, el archivo deberá verse y contener las siguientes Variables:

```env
REACT_APP_APIKEY_FIREBASE=******************************
REACT_APP_APIKEY_GOOGLEMAPS=******************************
REACT_APP_API_WEATHER=******************************
REACT_APP_APPID_FIREBASE=******************************
REACT_APP_AUTHDOMAIN_FIREBASE=******************************
REACT_APP_DATABASE_FIREBASE=******************************
REACT_APP_DATABASE_ID_PLANTS=******************************
REACT_APP_DATABASE_ID_WEATHER=******************************
REACT_APP_MEASUREMENTID_FIREBASE=******************************
REACT_APP_MESSAGINGSENDERID_FIREBASE=******************************
REACT_APP_PROJECT_ID=******************************
REACT_APP_STOREBUCKET_FIREBASE=******************************
```


License
----
TelemetryIot tiene la licencia [MIT](https://github.com/potier97/TelemetryIot/license)
