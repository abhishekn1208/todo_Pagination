const URL = `https://jsonplaceholder.typicode.com/todos`;
 let container = document.getElementById("container")

 let next = document.getElementById("previous");
 let previous = document.getElementById("next")
let count = 1;

 let getdata = async ()=>{
    let res = await fetch(`${URL}?_page=${count}&_limit=3`);
    let data = await res.json();
    displayData(data)
 }

 getdata()

 let displayData = async (arr)=>{
    container.innerHTML = "";
    arr.forEach((ele) => {
        let card = document.createElement("div")
        card.style.border = "1px solid black"
        card.innerHTML = `<h3>${ele.title}</h3>
        <h4>${ele.userId}</h4>
        <h4>${ele.completed}</h4>`

        container.appendChild(card)
    });
 }


 next.addEventListener("click", function(){
    count++;
    getdata()
 })

 previous.addEventListener("click", function(){
    count++;
    getdata()
 })