
// nesting element in react

// example

{/* <div id="parent">
  <div id="child">
     <h1>hello nesting element from react..</h1>
  </div>
</div> */}


const parent = React.createElement('div',{id:'parent'}, [
   React.createElement('div',{id:'child1'}, [
    React.createElement('h3',{},"i am h3 tag"),
    React.createElement('h4',{},"i am an h4 tag"),
   ]),
    React.createElement('h1',{id:'child2'}), [
    React.createElement('h2',{},"hello dheeraj"),
    React.createElement('h5',{},"i am h5 tag")
    ],
]);





// const heading1 = React.createElement('h3',{},"naamste duniya from React");


// note:-)

// React.createElement is known as javascript object after root.render method they convert in  html which browser can understand.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);