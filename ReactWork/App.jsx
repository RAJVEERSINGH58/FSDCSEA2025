const parent = document.getElementById("parent");
// console.log(parent);

const root = ReactDOM.createRoot(parent);
// const h2 = React.createElement("h2" , {style:{color:'brown', backgroundColor:'black'}} , "Rajveer Singh")

// const li1 = React.createElement("li" , {} , "Mango")
// const li2 = React.createElement("li" , {} , "orange")
// const li3 = React.createElement("li" , {} , "watermelon")

// const ul = React.createElement("ul" , {} , [li1 , li2 , li3])

// const img = React.createElement("img" , {src:"https://tse2.mm.bing.net/th/id/OIP.B39-1EvwOFXOffOfIKZT0AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" , style:{height:"100px" , width:"100px" , borderRadius:"50%"}} )

// const myname = React.createElement('h3' , {} , "Rajveer Singh")
// const college = React.createElement('h3' , {} , "Abes Engineering College")
// const branch = React.createElement('h3' , {} , "CSE")

// const wrapper1 = React.createElement('div' , {} , myname , college , branch);

// const wrapper = React.createElement('div' , {style:{display:"flex" , gap:"20px" , padding:"25px" , alignItems:"center"}} , img , wrapper1);

const h21 = (
  <div
    style={{
      display: "flex",
      gap: "20px",
      padding: "25px",
      alignItems: "center",
    }}
  >
    <img
      // Correct Inline Style Syntax (Double Curley Braces)
      style={{
        height: "100px",
        width: "100px",
        borderRadius: "50%",
      }}
      // Properly separated src attribute
      src="https://tse2.mm.bing.net/th/id/OIP.B39-1EvwOFXOffOfIKZT0AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
    />
    <h3>Rajveer Singh</h3>
  </div>
);

root.render(h21);
