// function info(name , age , branch){
//   return "Hii, " + name + ", my age is " + age;
// }

// let x = (name , age , branch) =>{
//   return "Hii, " + name + ", my age is " + age;
// }

// function info(str="Hiii"){
//   console.log("hello " + str);
// }

// info("how r u")

// (function info(str="Hiii"){
//   console.log("hello " + str);
// })()


// function selectLang(lang='python'){
//   let data;
//   if(lang == 'java'){
//     function javaComp(){
//       return "java compiling"
//     }
//     data = javaComp;
//   }
//   else if(lang == 'c'){
//     function cComp(){
//       return "c compiling"
//     }
//     data = cComp;
//   }
//   else{
//     function default1(){
//       return lang + " compiling"
//     }
//     data = default1;
//   }

//   return data;
// }

// console.log(selectLang()())


// const button = document.getElementById('btn');
// console.log(button);

// function longData(){
//   console.log("start");
//   for(i = 0 ; i < 1000000 ; i++){
//     console.log(i);
//   }
//   console.log("end")
// }

// button.addEventListener('click' , longData);

// function msg(){
//   console.log("Welcome to js")
// }

// console.log("start");
// setTimeout(msg , 1000);
// console.log("end")

// function msg(arg){
//   console.log("hii rohan bhai" + arg)
// }

// function msgHandler(arg , clbk){
//   clbk(arg);
// }

// const arr = ["Rohan" , "Rohan bhai ki gf" , "Rajveer"]

// arr.forEach(element => {
//   msgHandler(element , msg);
// })


// const myPromise = new Promise((resolve , reject) => {
//   const password = "hueehfeih";
//   if(password.length > 8){
//     resolve("Pass is accepted");
//   }
//   else{
//     reject("Pass is rejected")
//   }
// })

// console.log(myPromise)

// myPromise.then(msg => {
//   console.log(msg)
// }).catch(err => {
//   console.log(err)
// }).finally(msg => {
//   console.log("Finally resource closed")
// })


// async function promiseHandler(){
//   try {
//     const data = await myPromise;
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }

const button = document.getElementById('btn')
const div = document.getElementsByClassName('container')

async function fetchData(){
  console.log("entered")
  const response = await fetch("https://fakestoreapi.com/products");
  const jsonData = await response.json();
  console.log(jsonData[0].image)

  const img = document.createElement('img');
  img.src = jsonData[0].image
  img.style.height = "200px"
  img.style.width = "200px"
  div[0].appendChild(img);
  const d = document.createElement('span');
  d.innerText = jsonData[0].id;
  div[0].appendChild(d);


  const a = document.createElement('span');
  a.innerText = jsonData[0].title;
  div[0].appendChild(a);


  
}

button.addEventListener('click' , fetchData);