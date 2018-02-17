# Nodepop

*Nodepop* es una aplicaci�n de backend que simula una p�gina web b�sica con anuncios de compra/venta de art�culos. Implementa una api para obtener anuncios de una base de datos *mongoDB* (*nodepopDB*) a la que se accede a trav�s del paquete *mongoose*.

Utilizar� la siguiente url: http://localhost:3000

La base de datos *nodepopDB* contiene una colecci�n llamada anuncios. Cada anuncio mostrar� los siguientes datos:

- Nombre del art�culo, un anuncio siempre tendr� un solo art�culo.
- Si el art�culo se vende o se busca.
- Precio. Ser� el precio del art�culo en caso de ser una oferta de venta. En caso de que sea un anuncio de �se busca� ser� el precio que el solicitante estar�a dispuesto a pagar.
- Foto del art�culo. Cada anuncio tendr� solo una foto.
- Tags del anuncio. Podr� contener uno o varios de estos cuatro: work, lifestyle, motor y mobile.

## 1. Entorno (versiones)

| Paquete | Versi�n |
| ------ | ------ |
| nvm | 1.1.5 |
| node | 8.9.4 |
| npm | 5.6.0 |

| Base de datos | Versi�n |
| ------ | ------ |
| mongo | 3.6.2 |

| Navegador | Versi�n |
| ------ | ------ |
| chrome | 64.0.3282.167 (Build oficial) (64 bits) |

##	2. Creaci�n de la base de datos nodepopDB
Como prerrequisito debe tener instalado *node.js* y el motor de *mongoDB*. 
```sh
Ejemplo en Windows: lo instala en:
C:\Program Files\MongoDB
```
Crear una carpeta en el disco duro para guardar la base de datos. Se recomienda no crearla dentro de la carpeta de instalaci�n de mongoDB por temas de permisos. 
```sh
Ejemplo en Windows: 
c:\data\db
```
Arrancar el motor de *mongoDB* con la instrucci�n: 
```sh
mongod --dbpath folderDB --directoryperdb
```
siendo folderDB la ruta de la capeta creada en el paso anterior. 
Al no referenciar el puerto, se utiliza el 27017 (puerto por defecto de *MongoDB*).
```sh
Ejemplo en Windows:
"C:\Program Files\MongoDB\Server\3.6\bin\mongod" --dbpath d:\data\db �directoryperdb 
```
Nota: Las comillas se utilizan en windows cuando existen carpetas de m�s de 8 caracteres.

Abrir el terminal de consola y posicionarse dentro de la carpeta *nodepop*. 

La aplicaci�n contiene un script de creaci�n / inicializaci�n de la base de datos llamado *install_db.js*. Se ha creado una variable de entorno para poder ejecutarlo m�s f�cilmente. Para crear la base de datos teclear:
```sh
npm run installDB
```

Una vez finalizada la ejecuci�n del script, comprobar si la base de datos ha sido creada. Para ello podemos abrir un cliente de *MongoDB* (con el motor de *MongoDB* arrancado previamente):

#### Cliente por consola

Teclear la instrucci�n:
```sh
mongo
```
```sh
Ejemplo en Windows:
"C:\Program Files\MongoDB\Server\3.6\bin\mongo"
```
Una vez abierto el cliente, visualizaremos las bases de datos creadas, teclear:
```sh
show dbs
```
Para comprobar si existe la base de datos *nodepopDB* y contiene datos, teclear:
```sh
use nodepopDB
```
Y a continuaci�n realizar una b�squeda de anuncios:
```sh
db.anuncios.find();
```
Se mostrar� una lista de los anuncios guardados en la base de datos.

#### Cliente con interfaz gr�fico, como por ejemplo Robo 3T

Crear una conexi�n con direcci�n *localhost* y puerto *27017*. 

Seleccionarla y pulsar el bot�n conectar.

Debe aparecer la base de datos *nodepopDB*.

Dentro de la carpeta colecciones, seleccionar la colecci�n *anuncios* y con el bot�n derecho del rat�n seleccionar *view documents*.

Se mostrar�n los anuncios guardados en la base de datos.

## 3. Probar el api

Con el motor de la base de datos arrancado y posicionado en la carpeta *nodepop*, teclear:
```sh
npm run start
```
Arrancar� la aplicaci�n con *node*. Si queremos arrancar la aplicaci�n con *modemon* para pruebas y desarrollo, teclear:
```sh
npm run dev
```

Abrir un navegador Chrome y en la barra de direcciones escribir: http://localhost:3000

Deber� aparecer una lista de anuncios, con fotos incluidas.

La api utiliza el m�todo en *query string* para capturar par�metros y poder filtrar consultas.

#### Consultas al api con GET

Para recibir la lista de anuncios en formato *JSON*, teclear:
http://localhost:3000/apiv1/anuncios


Filtros de propiedades:

- Por nombre de art�culo, que empiece por el dato buscado: 
http://localhost:3000/apiv1/anuncios?nombre=bicicleta

- Tipo de anuncio (venta o b�squeda):
http://localhost:3000/apiv1/anuncios?venta=true

- rango de precio (precio min. y precio max.), se usa un par�metro que tenga una de estas combinaciones:
   - n-m buscar� anuncios con precio incluido entre los valores n y m.
   http://localhost:3000/apiv1/anuncios?precio=50-250

   - n- buscar� los que tengan precio mayor que n.
   http://localhost:3000/apiv1/anuncios?precio=50-

   - -n buscar� los que tengan precio menor de n.
   http://localhost:3000/apiv1/anuncios?precio=-50

   - n buscar� los que tengan precio igual a n
    http://localhost:3000/apiv1/anuncios?precio=50

- Por tag, una condici�n por tag:
http://localhost:3000/apiv1/anuncios?tag=lifestyle

Filtros de paginaci�n:

- Saltar los n primeros resultados:
http://localhost:3000/apiv1/anuncios?start=1

- Obtener los n primeros resultados:
http://localhost:3000/apiv1/anuncios?limit=2

- Ordenar por una propiedad (ascendente):
http://localhost:3000/apiv1/anuncios?sort=precio

- Ordenar por una propiedad (descendente):
http://localhost:3000/apiv1/anuncios?sort=-precio

- Seleccionar propiedades a visualizar, separado por espacios: 
http://localhost:3000/apiv1/anuncios?fields=nombre%20precio%20-_id
Seleccionamos solo las propiedades nombre y precio y filtramos la propiedad _id.
Un espacio se convierte en %20 en una url una vez pulsado intro.

Tanto los filtros de propiedades como filtros de paginaci�n se pueden combinar:
http://localhost:3000/apiv1/anuncios?tag=lifestyle&sort=precio&start=1&fields=nombre%20precio%20-_id

#### Insertar, modificar o eliminar con el api con POST, PUT y DELETE:

Ser� necesaria una aplicaci�n externa que permita realizar peticiones HTTP, como por ejemplo *Postman*:

- Insertar un elemento (POST):
    - Seleccionar operaci�n POST.
    - Insertar en la url: 
    http://localhost:3000/apiv1/anuncios
    - En la pesta�a body, seleccionar el formato *x-www-form-urlencoded* e insertar una clave por cada una de las propiedades del anuncio (nombre, venta, precio, foto, tags), junto a su correspondiente valor.
    - Deber� devolver un *status 200* y un *JSON* con dos propiedades: 
        - "success": true
        - "result": el elemento nuevo insertado, incluyendo la propiedad _id (identificador �nico).

- Actualizar un elemento (PUT):
    - Seleccionar operaci�n PUT.
    - Insertar en la url: 
    http://localhost:3000/apiv1/anuncios/5a871b34791ea63dc44da85a
    *5a871b34791ea63dc44da85a* corresponde al identificador (_Id) del elemento a modificar, escribir uno que exista.
    - En la pesta�a body, seleccionar el formato x-www-form-urlencoded e insertar una clave por cada una de las propiedades del anuncio que queramos modificar, junto a su correspondiente valor.
    - Deber� devolver un *status 200* y un *JSON* con dos propiedades: 
        - "success": true
        - "result": el elemento modificado.

- Eliminar un elemento (DELETE):
    - Seleccionar operaci�n DELETE.
    - Insertar en la url:
    http://localhost:3000/apiv1/anuncios/5a871b34791ea63dc44da85a
    *5a871b34791ea63dc44da85a* corresponde al identificador (_Id) del elemento a modificar, escribir uno que exista.
    - Deber� devolver un *status 200* y un *JSON* con una propiedad: 
        - "success": true.
		
## 4. Visualizar lista de anuncios

Para visualizar la lista de anuncios, teclear: http://localhost:3000

## 5. Mostrar ayuda con Apidoc

Al mismo nivel que la carpeta *nodepop*, existe la carpeta *doc*. Dentro de ella, abrir el archivo *index.html* para mostrar la ayuda de las funciones del api.

La ayuda ha sido creada utilizando el paquete *apidoc*.
