import React from "react";
import ReactDOM  from "react-dom/client";


// React element
// jsx => 
// const heading = <h1 id="heading">hello dheeraj 🚀</h1>


// componenets
// functional component
// class component


const jsxElement = (
  <h2>it is jsx element or react element..</h2>
)
const number = 11666;

const jsxElement2 = (
  <h3>another jsx create element.. {number}, 
  {jsxElement}</h3>
);

const Title = ()=>{
  return(
    <div>
       <h2>Hello soumya i am 2nd functional component🚀🚀..</h2>
       {jsxElement2}
    </div>
  )
}



const Heading = ()=>{
  return(
    <div>
      <h1>Hello dheeraj from functional component🚀🚀</h1>
      <Title/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>)
