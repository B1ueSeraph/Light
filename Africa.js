let newt = "";
const newItem = document.querySelector("#newItem");
const sectionTag = document.querySelector("section");
document.querySelector('#GOD').addEventListener("submit", function(event){
    console.log("submitting the form")
    event.preventDefault();
    newt = document.querySelector("#newItem").value;
    newt = newItem.value;
    console.log(newt);
    let template = 
    `
    <p>* ${newt} </p>
    `;
    sectionTag.innerHTML= template;
})