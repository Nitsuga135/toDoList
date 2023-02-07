

let input = document.querySelector(".input");
let botonAgregar = document.querySelector(".boton-agregar");
let container = document.querySelector(".container");




class Item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea)
}
    crearDiv(nuevaTarea) {
        
        //input
        let inputItem = document.createElement("input")
        inputItem.type = "text";
        inputItem.disabled="true";
        inputItem.classList.add("item-input")
        inputItem.value = nuevaTarea;
        
        //div
        let div = document.createElement("div");
        div.classList.add("item")
        
        //botones
        //editar
        let botonEditar = document.createElement("button")
        botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>'
        botonEditar.classList.add("boton-editar");

        //remover
        let botonRemover = document.createElement("button")
        botonRemover.innerHTML = '<i class="fa-solid fa-trash"></i>';
        botonRemover.classList.add("boton-remover");

        div.appendChild(inputItem);
        div.appendChild(botonEditar);
        div.appendChild(botonRemover);
        container.appendChild(div);

        botonEditar.addEventListener("click", function(){
            
            

            if(inputItem.disabled == true){
                inputItem.disabled = false;
                botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>'
                
            }else if(inputItem.disabled == false){

                inputItem.disabled = true;
                botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>'
                

            }


        })
        botonRemover.addEventListener("click", function(){

            div.remove();
            

        })        
    }
}   

function chequearInput(){
    

        if(input.value != ""){

            let objeto = new Item(input.value);
            input.value = "";
            
        }


}
botonAgregar.addEventListener("click", function(){

    chequearInput()
    

})