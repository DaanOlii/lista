function novaTarefa() {
    overlay.classList.add("active");
    modal.classList.add("active");
    criar.classList.add("active");

}
function fecharModal() {
    overlay.classList.remove("active");
    modal.classList.remove("active");
    criar.classList.remove("active");
    confirmacao.classList.remove("active");
}

function confirmarExclusao() {
    overlay.classList.add("active");
    modal.classList.add("active");
    confirmacao.classList.add("active");
}

document.addEventListener('keyup', (evento) => {
    if (evento.key == "Escape") {
        fecharModal();
    }
})

let tarefas = [
    {
        titulo: "Pendurar Quadro",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, laborum natus fugit necessitatibus at accusamus culpa tenetur ducimus doloribus quasi eveniet facere voluptate ex molestias ea magni alias eius perferendis!"
    },
    {
        titulo: "Almoçar",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, laborum natus fugit necessitatibus at accusamus culpa tenetur ducimus doloribus quasi eveniet facere voluptate ex molestias ea magni alias eius perferendis!"
    },
    {
        titulo: "estudar",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, laborum natus fugit necessitatibus at accusamus culpa tenetur ducimus doloribus quasi eveniet facere voluptate ex molestias ea magni alias eius perferendis!"
    },
    {
        titulo: "reunião",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, laborum natus fugit necessitatibus at accusamus culpa tenetur ducimus doloribus quasi eveniet facere voluptate ex molestias ea magni alias eius perferendis!"
    },
    {
        titulo: "levar filho no colegio",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, laborum natus fugit necessitatibus at accusamus culpa tenetur ducimus doloribus quasi eveniet facere voluptate ex molestias ea magni alias eius perferendis!"
    }
]