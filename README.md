<h1 align="center" id="inicio"> Challenge Amigo Secreto 2025 </h1>
<h2 align="center"> Proyecto Challenge Amigo Secreto para Alura Latam / Marzo 2025 </h2>
<p align="center">
  <img src="assets/screenshots/ScrTitle.png" alt="Interfaz de la aplicación" width="400">
</p>

<h2 id="índice"> Índice</h2>
<ul>
  <li><a href="#descripción-del-proyecto">Descripción del proyecto</a></li>
  <li><a href="#estado-del-proyecto">Estado del proyecto</a></li>
  <li><a href="#funciones">Funciones</a></li>
  <li><a href="#desarrollo">Desarrollo y demostración del proyecto</a></li>
  <li><a href="#acceso-proyecto">Acceso al proyecto</a></li>
  <li><a href="#comentarios-finales">Comentarios finales</a></li>
</ul>

<h2 id="descripción-del-proyecto"> Descripción del proyecto</h2>
<p>Aplicación web interactiva para realizar sorteos de "Amigo Secreto", facil de utilizar con:</p>
<ul>
  <li> Sistema de gestión de participantes</li>
  <li> Validación de entradas duplicadas</li>
  <li> Algoritmo de selección aleatoria</li>
  <li> Función de reinicio completo</li>
</ul>

<a href="#índice">Volver al indice</a>

<h2 id="estado-del-proyecto"> Estado del proyecto</h2>
<p>Este proyecto se encuentra completado y funcional, aunque es posible modificarlo para mejorar su interfaz y agregar aun mas funciones</p>

<a href="#índice">Volver al indice</a>

<h2 id="funciones"> Variables y Funciones</h2>
<p> Aca las variables y funciones que fueron utilizadas en la estructura del código</p>
<ul>
  <li> Variables Principales</li>
       <p> Aqui declararamos el array para almacenar los nombres igresados y tambien declaramos el estado del sorteo al iniciar el codigo por primera vez</p>
       <img src="assets/screenshots/ScrVar1.png">
  <li> Variables Secundarias</li>
       <p> Aqui declararamos las variables que se utilizarán en las funciones del código</p>
       <img src="assets/screenshots/ScrVar2.png">
  <li> Habilitacion de tecla enter al ingresar nombres</li>
       <p> Dentro del codigo se agrego la funcion para habilitar la funcion de la tecla enter para poder ingresar nombres</p>
       <p> para asi facilitar aun mas el ingreso a la lista usando el teclado del pc, adicional a la funcion de presionar el boton de "Añadir"</p>
       <img src="assets/screenshots/ScrFnEntr.png">
  <li> Creando nuestra lista de amigos</li>
       <p> Esta es la funcion con la cual comenzamos a crear nuestra lista</p>
       <p> Incluye un par de validadores para asegurar que se ingresen nombres a la lista y que el nombre a escribir no se encuentre previamente ingresado</p>
       <img src="assets/screenshots/ScrInpt.png">
       <p> También previo al sorteo debemos corroborar que nuestra lista se encuentre con nombres ingresados para elegir a nuestro amigo secreto</p>
       <img src="assets/screenshots/ScrInptVal.png">
  <li> Realizando el sorteo</li>
       <p> Como su nombre lo indica, aqui con esta variable es donde ya con los nombres ingresados realizamos el sorteo para elegir a nuestro amigo secreto</p>
       <img src="assets/screenshots/ScrSrt.png">
  <li> Boton de Reinciar Sorteo</li>
       <p> Al hacer clic en "Sortear amigo", este boton cambia su apariencia y color transformandose temporalmente en el boton "Reiniciar Sorteo"</p>
       <img src="assets/screenshots/ScrTr1.png">
       <p> el cual, luego de presionarlo limpia la interfaz, reinicia todo el sorteo anterior y regresa a su estado anterior como boton "Sortear amigo"</p>
       <img src="assets/screenshots/ScrTr2.png">
       <p>Para hacer posible el cambio de apariencia en aquel boton se agregaron un par de variables y funciones en el codigo CSS</p>
       <img src="assets/screenshots/ScrCSSRst1.png">
       <p></p>
       <img src="assets/screenshots/ScrCSSRst2.png">
  <li> Actualizando y visualizando los nombres ingresados</li>
       <p> Aca hacemos posible que se vayan mostrando en pantalla los nombres que vamos ingresando al sorteo de nuestro Amigo Secreto</p>
       <p> Y se agrega un encabezado a la lista el cual aparece al ingresar el 1er nombre y solo queda al inicio de la lista</p>
       <p> previniendo que se repita en cada linea ai ingresar mas nombres</p>
       <img src="assets/screenshots/ScrActList.png">
  <li> Revelando quien es nuestro Amigo Secreto</li>
       <p> Aqui indicamos en pantalla, bajo el listado de nombres ingresados y al hacer clic en "Sortear Amigo" cual fue el nombre elegido</p>
       <p> para ser nuestro Amigo Secreto</p>
       <img src="assets/screenshots/ScrReslt.png">
       <p> Junto con la aparicion del resultado del sorteo el boton de "Sortear Amigo" se transforma en "Reiniciar Sorteo", como se explicó mas arriba</p>
  <li> Cerranndo y reiniciando</li>
       <p> Ya ejecutado el sorteo, teniendo elegido a nuestro Amigo Secreto y con el cambio de boton de "Sortear Amigo a "Reinciar Sorteo"</p>
       <p> limpiamos y reiniciamos todo nuestro programa</p>
       <p> despejando lo que aparece en pantalla</p>
       <img src="assets/screenshots/ScrCln.png">
       <p> y limpiando y vaciando el registro de nombres de amigos que se habian ingresado en el sorteo ya finalizado</p>
       <img src="assets/screenshots/ScrRst.png">
       <p> Este reseteo a nuestro sorteo ocurre al dar clic en el boton "Reiniciar sorteo", lo que tambien vuelve a transformar aquel boton</p>
       <p> volviendo a dejarlo como "Sortear Amigo", de la forma que fue explicada mas arriba</p>     
</ul>

<a href="#índice">Volver al indice</a>

<h2 id="desarrollo"> Desarrollo y demostración del proyecto</h2>
<ul>
  <li> Iniciando el sorteo</li>
      <p> Al iniciar el sorteo, y luego de reiniciarlo al finalizar un sorteo previo, la interfaz se nos presentará de la siguiente forma</p>
      <img src="assets/screenshots/ScrInt-UI.png">
  <li> Ingresando nombres</li>
      <p> En el cuadro de texto de la interfaz ingresamos nuestros nombres</p>
      <img src="assets/screenshots/ScrActList-UI-1.png">
      <p> Si intentamos ejecutar el sorteo sin haber ingresado ningun nombre aparecerá la siguiente alerta</p>
      <img src="assets/screenshots/ScrInptVal-UI.png">
      <p> Si presionamos la tecla Enter o hacemos clic en el botón "Añadir" sin haber escrito ningun nombre en el cuadro de texto nos aparecerá la siguiente alerta</p>
      <img src="assets/screenshots/ScrInpt-UI-1.png">
      <p> Una vez que se ingresen nombres iran apareciendo de la siguiente forma</p>
      <img src="assets/screenshots/ScrActList-UI-2.png">
      <p> E iran agrandando la lista por cada vez que se ingrese un nombre al presionar Enter o hacer clic en el botón de "Añadir"</p>
      <p> Si al ingresar un nombre se detecta que ya ha sido previamente ingresado nos aparecerá la siguiente alerta</p>
      <img src="assets/screenshots/ScrInpt-UI-2.png">
  <li>Mostrando el resultado del sorteo</li>
      <p> Una vez que ya no ingresamos mas nombres a la lista y presionamos el boton de "Sortear Amigo" en una linea bajo el listado de nombres</p>
      <p> nos muestra en pantalla el nombre elegido como amigo secreto y nos cambia el boton de "Sortear Amigo" por "Reiniciar Sorteo"</p>
      <img src="assets/screenshots/ScrReslt-UI.png">
  <li>Reiniciando Todo</li>
      <p> Al hacer clic en "Reiniciar Sorteo" toda la interfaz se limpia y reinicia quedando lista para realizar otro sorteo</p>
      <img src="assets/screenshots/ScrInt-UI.png">
</ul>

<a href="#índice">Volver al indice</a>

<h2 id="acceso-proyecto"> Acceso al proyecto</h2>
<p> El proyecto esta disponible para clonar con el siguiente comando</p>
<pre><code>git clone https://github.com/FrancoCautivo/Challenge-Amigo-Secreto-2025.git</code></pre>

<a href="#índice">Volver al indice</a>

<h2 id="comentarios-finales"> Comentarios finales</h2>
<p> En lo personal la creación de este proyecto fue muy inspiradora, ya que a medida que uno va aprendiendo mas se abren infinitas posibilidades.</p>
<p> Este codigo que parece inicial se puede complementar con muchas mas funciones, las cuales se pueden ir añadiendo a medida que uno adquiera mas conocimiento.</p>
<p> Literalmente esto me abre el apetito por absorver aun mas conocimiento del mundo de la programación.</p>

<a href="#inicio">Volver al inicio del proyecto</a>
