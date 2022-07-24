// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

// const students =[
//   { name: 'Roy', job:'Student', inistitution: "EDU"},
//   { name: 'Chinmayi', job:'Student', inistitution: "EDU"},
//   { name: 'Progga', job:'Student', inistitution: "EDU"}
// ]
// const number = 3454
// const styleCss ={
//   color: 'red',
//   backgroundColor : 'white'
// }
// function App() {
//   const nayoks =['Rubel','BappaRaz','Jashim','Sashim']
  
  
//   return (
    
//     <div className="App">
//       {
//     // nayoks.map(nayok=><li>{nayok}</li>)
//   }
//   {
//     students.map(student => <Friend name={student.name}></Friend>)
//   }
//     <Person name={nayoks[2]}></Person>
//     <Friend></Friend>
//     <Person></Person>
//     <Friend rani={nayoks[3]}></Friend>
    

//     </div>
//   );
// }
// function Person(props){
//   console.log(props)
// return (
//   <div className='person'>
//     <h1>Hi Person</h1>
//     <h3>Hlw User {props.name}</h3>
// </div>
// )

// }

// function Friend(props){
//   return(
//     <div className='friend'>
//        <h1 >Mukut</h1>
//        <h2>{props.rani}</h2>
//     </div>
//   )
// }
function App(){
  
  return(
    <div className="App">
      
     {/* <Counter></Counter> */}
     <ExternalUSer></ExternalUSer>
    </div>
  )
}
// const products =[
//   {name: 'Laptop',price:61000},
//   {name: 'Phone',price:29000},
//   {name: 'Tab',price:32000},
//   {name: 'Watch',price:15000}
// ]
// {
//   products.map(product=> <Product name={product.name} price={product.price}></Product>)
// }
// {/* <Product name="Laptop"  price="61000"></Product>
// // <Product name="Phone" price="29000"></Product> */}


function ExternalUSer(){
  const [users,setUsers] = useState([])
  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=> res.json())
  .then(data=>setUsers(data))
  },[])
  return(
    <div>
<h1>External User</h1>
<h3>{users.length}</h3>
{
  users.map(user=> <User name={user.name} email={user.email}></User>)
}
    </div>
  )
}
function User(props){
  return(
    <div style={{border:'2px solid green', margin:'12px', padding:'12px',backgroundColor:'honeydew'}}>
      <h4>Name :{props.name}</h4>
      <p>Email : {props.email}</p>
    </div>
  )
}

// function Counter(){
//  const [count,setCount]= useState(22)
// const increaseCount =()=> setCount(count +1)
// const decreaseCount =()=> setCount(count -1)
// const increaseCount =()=>{
//   const newCount = count +1;
//   setCount(newCount)



//   return(
//     <div>
// <h1>Count: {count} </h1>
// <button onClick={increaseCount}>Increase</button>
// <button onClick={decreaseCount}>Decrease</button>
//     </div>
//   )
// }

export default App;
// {/* <div className="product">
//     <h2>Name:{props.name} </h2>
//     <h4>Price: {props.price}</h4>
//     </div> */}