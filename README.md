# Codigo para consumir api smn argentino
## Como ejecutar el código
Ejecutar el código desde un computador
~~~
 ng serve
~~~
Ejecutar el código desde un hosting
~~~
 ng build
~~~
* crea la carpeta /dist
* si se utiliza un hosting como netlify.com se deberá subir la carpeta completa [smnapp.netlify.app/#/lista](smnapp.netlify.app/#/lista)
* si se utiliza un hosting como donweb se deberá subir la carpeta a partir de /dist/smnApp [http://c1970754.ferozo.com/#/lista](http://c1970754.ferozo.com/#/lista)
## Consigna
El servicio meteorológico nacional (SMN) brinda mediante una API la información
actualizada del clima para las ciudades más importantes de Argentina.
El objetivo es listar los datos brindados por la API respetando las siguientes reglas:
* Listar en una tabla todas las ciudades que brindadas. Se valora si la tabla se
encuentra paginada.
* Cada ciudad listada, deberá contar con un botón “Detalle” que al accionarlo
proporcionará más datos del clima.
* No es necesario que se utilice toda la información que se recibe de la API, sino
los datos más relevantes.
No hay restricciones en cuanto a la tecnología utilizar, ya sea si se utiliza HTML
puro o algún framework basado en componentes.
Se valora el uso de estilos que mejoren la calidad visual y experiencia del usuario al
utilizar la aplicación

