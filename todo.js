let input=document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(input.value ==""){
        alert("Please inter your task")
    }else{
        let newele=document.createElement("ul");
        newele.innerHTML=`${input.value} <i class="fa-solid fa-trash"></i>`
        text.appendChild(newele);
        input.value=""
        newele.querySelector("i").addEventListener("click",remove)
        function remove(){
            newele.remove()
        }
    }
}