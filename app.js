// --- 1. Declaración de variables y obtención de elementos ---
// Almacena los nombres participantes y controla el estado del sorteo
let nombres = [];
let sorteadoRealizado = false;

// Obtiene referencias a elementos HTML clave
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const btnSortear = document.getElementById('btnSortear');
const resultado = document.getElementById('resultado');

// --- 2. Manejadores de eventos ---
// Permite agregar nombres con la tecla Enter
inputAmigo.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    agregarAmigo();
  }
});

// --- 3. Funcionalidad principal: Gestión de participantes ---
// Valida y agrega nuevos participantes al array
function agregarAmigo() {
  const nombre = inputAmigo.value.trim();
  // Validaciones básicas
  if (!nombre) {
    alert("Debes escribir un nombre para poder agregarlo a la lista del sorteo");
    return;
  }
  if (nombres.includes(nombre)) {
    alert("A este amigo ya lo ingresaste. Ingresa a otro de tus amigos.");
    return;
  }
  // Actualización del estado e interfaz
  nombres.push(nombre);
  inputAmigo.value = "";
  actualizarListaAmigos();
  limpiarResultado();
}

// --- 4. Lógica del sorteo ---
// Maneja tanto la ejecución como el reinicio del sorteo
function sortearAmigo() {
  if (!sorteadoRealizado) {
    if (nombres.length === 0) {
      alert("No has ingresado a ningun amigo. Ingresa nombres para realizar el sorteo");
      return;
    }
    // Selección aleatoria y actualización de interfaz
    const nombreGanador = nombres[Math.floor(Math.random() * nombres.length)];
    mostrarResultado(`El nombre sorteado es: ${nombreGanador}`);
    // Cambio de estado y transformación del botón
    btnSortear.innerHTML = `<img src="assets/play_circle_outline.png" alt="Ícono para reiniciar"> Reiniciar sorteo`;
    btnSortear.classList.add('button-reset');
    btnSortear.setAttribute('aria-label', 'Reiniciar sorteo');
    sorteadoRealizado = true;
  } else {
    // Reinicio completo
    reiniciarSorteo();
    btnSortear.innerHTML = `<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Sortear amigo`;
    btnSortear.classList.remove('button-reset');
    btnSortear.setAttribute('aria-label', 'Sortear amigo secreto');
    sorteadoRealizado = false;
  }
}

// --- 5. Actualización de la interfaz de usuario ---
// Mantiene sincronizada la lista visual con el array de nombres
function actualizarListaAmigos() {
  const contenedorLista = listaAmigos.parentNode;
  let titulo = document.getElementById('tituloLista');
  // Gestión dinámica del título
  if (nombres.length > 0 && !titulo) {
    titulo = document.createElement('h2');
    titulo.id = 'tituloLista';
    titulo.textContent = 'Los amigos que participan en este sorteo son:';
    titulo.style.textAlign = 'center';
    titulo.className = 'result-list';
    contenedorLista.insertBefore(titulo, listaAmigos);
  } else if (nombres.length === 0 && titulo) {
    titulo.remove();
  }
  // Lista los nombres ingresados en la interfaz
  listaAmigos.style.textAlign = 'center';
  listaAmigos.innerHTML = nombres.map(nombre => `<li>${nombre}</li>`).join('');
}

// --- 6. Funciones auxiliares ---
// Muestra el resultado del sorteo
function mostrarResultado(mensaje) {
  resultado.innerHTML = `<li>${mensaje}</li>`;
}
// Limpia el área de resultados
function limpiarResultado() {
  resultado.innerHTML = "";
}
// Reinicia toda la aplicación a su estado inicial
function reiniciarSorteo() {
  nombres = [];
  inputAmigo.value = "";
  actualizarListaAmigos();
  limpiarResultado();
}
