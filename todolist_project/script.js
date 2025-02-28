const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("todo2");
const doneButton = document.getElementById("doneButton");
const popup = document.getElementById("popup");


function addTask() {
    if(inputBox.value ==='') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
    checkTasks();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI") {
        e.target.classList.toggle("checked");
        saveData();
        checkTasks();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
        checkTasks();
    } 
},false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
    checkTasks();
}
function checkTasks() {
    let tasks = listContainer.getElementsByTagName("li");
    let allCompleted = true;

    if (tasks.length === 0) {
        doneButton.style.display = "none";
        return;
    }

    for (let task of tasks) {
        if (!task.classList.contains("checked")) {
            allCompleted = false;
            break;
        }
    }

    doneButton.style.display = allCompleted ? "block" : "none";
}

function clearList() {
    listContainer.innerHTML = "";
    localStorage.removeItem("data");
    doneButton.style.display = "none";
    showPopupMessage();
    triggerCelebration();
}

function showPopupMessage() {
    popup.style.display = "block";
    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);
}

function triggerCelebration() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }, i * 500);
    }
}

showTask();



