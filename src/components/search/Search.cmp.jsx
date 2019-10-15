import React,{useState} from 'react'
// import './Serach.style.scss'

const Serach =({setFilter})=>{

const[input,setInput]=useState('')

 const handleSerach=(ev)=>{
     ev.preventDefault();
     setInput('')
     setFilter(input)
 }

const handleChange=(ev)=>{
     setInput(ev.target.value)
 }

 return (
    <div className="demo">
        <form onSubmit={handleSerach}>
        <input type="text" placeholder="Search videos" onChange={handleChange} value={input}></input>
        <button className="search-btn">search</button>
        </form>
    </div>
)

}

export default Serach



