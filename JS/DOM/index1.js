// const div = document.getElementsByTagName('div')
// console.log(div)
// div[0].innerText = "Rohan bhai ki Gf ki jay"
// div[0].style.color = "pink"

const container = document.getElementsByClassName('container')
container[0].innerHTML = "<h2>Rohan bhai </h2>"

const h1 = document.createElement('h1')
h1.innerText = "CSE"
h1.style.color = "blue"

container[0].appendChild(h1);


const img = document.createElement('img');
img.src = "https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
img.style.height = "100px"
img.style.width = "100px"

const btn = document.getElementById('btn');


// function display(){
//   if(btn.innerText === "Get Data"){
//     container[0].appendChild(img);
//     btn.innerText = "Remove Data"
//   }
//   else{
//     container[0].removeChild(img);
//     btn.innerText = "Get Data"
//   }
  

// }

const loader = document.getElementsByClassName('loader')

function display(){

  if(btn.innerText === "Get Data"){
    loader[0].innerHTML = "<h2>Data is Loading..</h2>"
     setTimeout(() => {
    loader[0].innerHTML = ""
    container[0].appendChild(img);
    btn.innerText = "Remove Data"
  } , 1000);
  }
  else{
    container[0].removeChild(img);
    btn.innerText = "Get Data"
  }

}

btn.addEventListener('click' , display);
