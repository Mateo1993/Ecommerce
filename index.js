const boton = document.getElementById("addCart");
const counter = document.getElementById('counter');


counter.textContent = 0;
let value = 0;
boton.addEventListener('click',()=>{
    value++;
    counter.textContent = value; 
})
