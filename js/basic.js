
const btn = document.getElementById("my-button");
btn.addEventListener("click", buttonClicked);

document.getElementById("add-data").addEventListener("click", addListElement);

function buttonClicked() {
    console.log("Hello world");

    const h1txt = document.getElementById("title-text");
    h1txt.innerText = "Moi maailma";
}

function addListElement() {
    const txt = document.getElementById("textarea").value;
    
    let listElement = document.createElement("li");
    listElement.innerText = txt;

    document.getElementById("list").appendChild(listElement);
}