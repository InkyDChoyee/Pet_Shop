function addlist(){
    let li = document.createElement("li");
    let a = document.createElement("a");
    li.appendChild(a);

    let ul = document.getElementById("ul");
    ul.appendChild(li);
}

addlist();