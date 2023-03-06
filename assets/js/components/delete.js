export function deleteIcon(){
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteTask);
    return i;
}

//*Borrando elemento li correspondiente al icono trash
const deleteTask = (event)=>{
    const elemento = event.target;
    elemento.parentElement.remove();
}

