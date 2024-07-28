import { useState, useEffect } from 'react'
import './App.css'

// whenever a state variable changes react will re-render the component
const hello = <div style={{color: "#2ae261"}}><h1>Hello</h1><h2>Aditya</h2></div>; //if jsx in sinle line, this is a react element
const helloo = (<div>    
  <h1>Hello Aditya</h1>
  </div>);                                             //if jsx in multiple lines wrap it in ()
function App() {
  const [count, setCount] = useState(0);

  const Heading = (props) => {                         // this is a react Component since H is capital if h is small then it is a react element
    const {object}=props;                              // object as a prop
    console.log(object.name);
    return <div style = {{color: "#ba5050"}}>hello heading</div>               //some as below syntax but used more 
  };
  const Heading2 = () => (
    <div>hello heading2</div>
  );

  const elem = <span>Nucleusteq</span>
  const Middle = () => {
    return (<div className='mid'>
        <h1>I work in {elem}</h1>
        <button className='btn'>Click Me</button>
    </div>)
  }

  const Middlee = (props) => {
    console.log(props);     //props example
    return (<div>
        <h1>I work in {props.name}</h1>
        <button className='btn'>Click Me</button>
    </div>)
    
  }
  //const Loading = () => { <div>Loading....</div> };
  
  const obj ={
    name: 'aditya',
    age: '22'
  }
  useEffect(()=> {
    async function getData() {                        // fetch data
      const url = 'https://jsonplaceholder.typicode.com/posts';
      const res = await fetch(url);
      const data = await res.json();
      data.map( item => console.log(item.title));        // map function
    }
    getData();
  },[]);
  
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {hello}
        {helloo}
        <Middle />
        <Middlee  name='Aditya'/>     
        <Heading  object={obj}/>
        <Heading2 />
      </div>
    </>
  )
}

export default App