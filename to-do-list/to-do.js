let taskCount = 0;

function addNewTask() { 
    let inputTitulo = document.getElementById("inputTituloNovaTarefa");
    let inputTempo = document.getElementById("inputTempoNovaTarefa");
    let taskModelListItem = document.getElementById("task-model");
    let newListItem = taskModelListItem.cloneNode(true);
    newListItem.classList.remove("task-model");
    newListItem.id = "listItem"+ taskCount;
    taskModelListItem.parentElement.appendChild(newListItem);
    newListItem = document.getElementById(newListItem.id);
    newListItem.children[0].children[0].value = inputTitulo.value;
    newListItem.children[0].children[1].value = inputTempo.value;

    

    let btnEditar =  newListItem.children[1].children[0];
    let btnDeletar = newListItem.children[1].children[1];
    btnDeletar.onclick = function() {
        let li = this.parentElement.parentElement;
        li.style.display = "none";




    }

    taskCount++;

}

//newListItem.firstChild 
    /*  encontrar task-model
        clonar elementos task-model
        mudar propriedades
    */