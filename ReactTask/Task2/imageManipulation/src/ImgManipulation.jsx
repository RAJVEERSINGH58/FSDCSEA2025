import React, { useState } from 'react'

const ImgManipulation = () => {

  const [catHeight , setCatHeight] = useState(200);
  const [catWidth , setCatWidth] = useState(200);

  function handleWidth(){
    setCatWidth(catWidth + 10);
  }

   function handleHeight(){
    setCatHeight(catHeight+10);
  }

  return (
    <div>
      <h2>Image Manipulation</h2>
      <div style={{border:'2px solid red', height:'400px' , width:'400px'}}>
        <img src="https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" alt="" height={catHeight} width={catWidth}/>
      </div>
      <div>
        <button onClick={handleHeight}>Increase Height</button>
        <button onClick={handleWidth}>Increase Width</button>
        <button onClick={() => {setCatHeight(catHeight-10)}}>Decrease Height</button>
        <button onClick={() => setCatWidth(catWidth-10)}>Decrease Width</button>
      </div>
    </div>
  )
}

export default ImgManipulation
