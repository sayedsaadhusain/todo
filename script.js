const input = document.getElementById("input");
const list = document.getElementById("list-item")
function add_item() {
    if(input.value === ''){
        alert("you should enter something");
    }
    else{
        let li = document.createElement("li");
        li.innerText = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    savedata();
}

function pushItem(e) {
    if(e.key == "Enter"){
        add_item();
    }
} 

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
})

function savedata() {
    localStorage.setItem("data",list.innerHTML);
}
function showitem() {
    list.innerHTML = localStorage.getItem("data");
}
showitem();