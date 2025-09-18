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


function selectLang(lang='python'){
  let data;
  if(lang == 'java'){
    function javaComp(){
      return "java compiling"
    }
    data = javaComp;
  }
  else if(lang == 'c'){
    function cComp(){
      return "c compiling"
    }
    data = cComp;
  }
  else{
    function default1(){
      return lang + " compiling"
    }
    data = default1;
  }

  return data;
}

console.log(selectLang()())