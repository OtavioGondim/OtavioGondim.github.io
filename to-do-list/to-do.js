let taskCount = 0;

/**
 * Comentário sobre ter que ficar buscando os inputs sempre:
 * quando utilizamos os eventos do javascript, ex: onclick, onkeypress, onblur, etc, podemos receber um parametro
 * do tipo Event.
 * Esse parametro contem uma propriedade chamada target, que é basicamente o elemento de onde esse
 * evento foi disparado.
 * De acordo com seu html, sabemos que o button de id="btnaddtarefa" foi o responsável por disparar esse evento
 * quando clicado. Logo o event.target irá nos dar o elemento desse botão.
 *
 * No código HTML vemos que o botão tem 2 irmões, que são os inputs de titulo e tempo. Então ao invés de termos que
 * perder tempo buscando inputs como:
 *
 *      let inputTitulo = document.getElementById("inputTituloNovaTarefa");
 *      let inputTempo = document.getElementById("inputTempoNovaTarefa");
 *
 * poderiamos então fazer:
 *      let btnAddTarefa = event.target;
 *      let inputTitulo = btnAddTarefa.parentElement.children[0];    // <- obtendo o primeiro irmao, este aqui é o inputTituloNovaTarefa
 *      let inputTempo = btnAddTarefa.parentElement.children[1];    // <- obtendo o segundo irmao, este aqui é o inputTempoNovaTarefa
 *
 * mas para que seja possível utilizarmos o event, ao invés de adicionar o onclick no código html, como:
 *      <button id="btnaddtarefa" onclick="addNewTask()">
 *
 * vamos adicionar o evento de click no javascript:
 *      const btnAddTarefa = document.getElementById('btnaddtarefa'); // <- primeiro obtemos o botao
 *      btnAddTarefa.addEventListener('click', addNewTask); // <- segundo adicionamos o evento 'click' que irá chamar a
 *      funçao addNewTask, que nesse caso não vai ter parênteses na frente  ('addNewTask()') pq o javascript já está
 *      esperando uma função que tenha um parametro event.
 */

/**
 * Esse código abaixo não está dentro de nenhuma função, logo ele será executado assim que a página carregar. Ou seja,
 * assim que todo o HTML for exibido, esse código  vai ser executado. Então para que ele funcione corretamente, se você
 * verificar no seu html, tivemos que mover a tag <script pro final do arquivo html, pois esse script só pode ser executado
 * depois que a pagina html estiver sido renderizada por completo. Se não fizermos isso, o seguinte código:
 *      document.getElementById('btnaddtarefa')
 *
 * não iria encontrar nenhum elemento.
 */
const btnAddTarefa = document.getElementById('btnaddtarefa');
//adicionando o evento de click no botao de add tarefa
btnAddTarefa.addEventListener('click', addNewTask);

function addNewTask(event) {

    let btnAddTarefa = event.target;
    let inputTitulo2 = btnAddTarefa.parentElement.children[0];    // <- obtendo o primeiro irmao, este aqui é o inputTituloNovaTarefa
    let inputTempo2 = btnAddTarefa.parentElement.children[1];

    let inputTitulo = document.getElementById("inputTituloNovaTarefa");
    let inputTempo = document.getElementById("inputTempoNovaTarefa");
    let taskModelListItem = document.getElementById("task-model");
    let newListItem = taskModelListItem.cloneNode(true);
    //gerando um id para o novo item da lista
    newListItem.id = "listItem"+ taskCount;

    /**
     textContent é o texto contido entre tags, por exemplo na tag:
     <span>Titulo tarefa</span>
     o textContent seria 'Titulo tarefa'. Mesmo que a tag fosse um paragrafo:
     <p>Titulo tarefa</p>
     o textContent continuaria sendo 'Titulo tarefa'

     textContent é uma ótima solução, pois se no futuro vc quiser trocar a tag do elemento de <span> por <div>, ou pra <strong>,
     vc não vai precisar alterar o codigo.

     Mas caso você troque por um <input>, aí sim o código deve ser alterado, pois o input armazena o valor dentro dele.
     Logo você teria que utilizar o value ao inves do textContent.
     */
    //alterando o textContent dos netos do novo item da lista para o conteudo digitado pelo usuário nos inputs
    newListItem.children[0].children[0].textContent = inputTitulo.value;
    newListItem.children[0].children[1].textContent = inputTempo.value;

    let btnEditar =  newListItem.children[1].children[0];
    let btnDeletar = newListItem.children[1].children[1];
    btnDeletar.onclick = function() {
        //obtendo o item da lista onde o botao está localizado (nesse caso é o elemento avô dele)
        let li = this.parentElement.parentElement;
        //Essa linha abaixo apenas escondia o item da lista, mas ele ainda ficava presente no HTML.
        // li.style.display = "none";

        //essa forma de remoção abaixo seria a mais correta, pois remove o elemento do HTML totalmente
        //obtendo o pai de todos os itens da lista (li.parentNode) e removendo o item do pai(removeChild(li))
        li.parentNode.removeChild(li);
    }


    

    taskModelListItem.parentElement.appendChild(newListItem);

    //se deu tudo certo até aqui, essa linha vai incrementar o contador de tarefas que temos atualmente
    taskCount++;
}