const boton = document.getElementById("addCart");
const counter = document.getElementById('counter');


counter.textContent = 0;
let value = 0;
boton.addEventListener('click',()=>{
    value++;
    counter.textContent = value; 
}) 


const cargarProducts = async()=>{
    
const API = "https://fakestoreapi.com/products";
    
const HTMLresponse = document.getElementById("grid-products")

    try{
        const respuesta = await fetch(API)

        if(respuesta.status===200){
            const datos = await respuesta.json()

            let productos = "";
            datos.forEach(product =>{
                productos += `<div class="card-products" id="card-products">
                                <img class="image-product" src="${product.image}" alt="producto">
                                <h1 class="title-card">${product.title}</h1>
                                <p class="subtitle-card">${product.category}</p>
                                <div class="price-button">
                                    <div class="price-card">$${product.price}</div>
                                    <button class="add-cart" id="addCart" >Add to cart</button>
                                </div>
                            </div>`
            })
            HTMLresponse.innerHTML = productos
        }

    }catch(error){
        console.log(error);
    }
}

cargarProducts()