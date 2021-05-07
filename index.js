const container = document.getElementById("container");
const input = document.getElementById("input_task");
const create = document.getElementById("create_button");

const newlistTask = document.createElement("div");
newlistTask.setAttribute("id" ,"list_tasks");
container.appendChild(newlistTask);

const listTask = document.getElementById("list_tasks");


create.addEventListener("click", function() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = !tasks ? [] : tasks;
    if (input.value !== "") {
        localStorage.setItem("tasks", JSON.stringify([...tasks, input.value]));
        showList();
        input.value = ""
    }  
})

function task(value) {
    return `<div class="task">
                <div class="infor_task task_item">
                    <div class="title">${value}</div>
                </div>
                <div class="action task_item">
                    <div class="task_state">

                    </div>
                    <div class="delete_task">
                        <img src="./public/garbage.svg" alt="garbage_icon">
                    </div>
                </div>
            </div>`
}

function showList() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = !tasks ? [] : tasks;
    listTask.innerHTML = tasks.map(element => { 
        return task(element);
    });
    deleteTask();
}
let tasks = JSON.parse(localStorage.getItem("tasks"));
showList();

function updateList(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = !tasks ? [] : tasks;
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks))
    showList();
}

function deleteTask() {
    const delButton = document.querySelectorAll(".delete_task");

    delButton.forEach((element, i) => {
        element.addEventListener("click", function(e) {
            updateList(i)
        })
    })
}