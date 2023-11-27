const button = document.getElementById("btnReestablecer");
const span = document.getElementById("contadorVisitas");


const contadorLocalStorage = () => parseInt(localStorage.getItem('contador')) || 0;
let visitas = contadorLocalStorage();
const guardarContador = (contador) => localStorage.setItem('visitas', contador); 


const actualizarContador = () => {
    visitas.textContent = visitas;
}

visitas++;
actualizarContador();


button.addEventListener('click', () => {
    localStorage.setItem('visitas', 0)
    span.textContent = localStorage.getItem('visitas');
});

const contadorVisitas = document.getElementById("contadorVisitas")
const btnReestablecer = document.getElementById("btnReestablecer")
let contador = localStorage.getItem("contador") || 0
//let contador = localStorage.getItem("contador")? localStorage.getItem("contador") : 1
contador++
localStorage.setItem("contador", contador)
contadorVisitas.innerHTML = contador
const restablecerContador = () => {
    localStorage.removeItem("contador")
    contador = 0
    contadorVisitas.innerHTML = contador
}
btnReestablecer.addEventListener("click", restablecerContador)