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
    // Add the data to database
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    // mongodb.getItem('id')
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
    // db.remove
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
    // for (let i = 0; i < 3; i++) {
    //     setTimeout(() => {
    //         confetti({
    //             particleCount: 100,
    //             spread: 70,
    //             origin: { y: 0.6 }
    //         });
    //     }, i * 500);
    // }
var duration = 5 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
}, 250);
}

showTask();