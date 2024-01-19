import React,{useState,useEffect} from "react";
import Countries from "./Components/Countries.js";

const App =()=>{
  const [enterName,setEnteredName] = useState("")
  const [filteredCountries,setFilteredCountries] = useState(Countries)

  useEffect(()=>{
    searchInputName()
  },[enterName])


  function searchInputName(){
     setFilteredCountries(Countries.filter((countries)=>countries.toLocaleLowerCase().includes(enterName.toLocaleLowerCase())))
  }


  return (
    <div>
      <h1>Live Searching</h1>
      <form onSubmit={searchInputName}>
        <input type="text" placeholder="Enter country Name" onChange={(e)=>setEnteredName(e.target.value)}/>
        {/* <button>Submit</button> */}
      </form>
      {
         filteredCountries.map((countries,index)=>(
         <p key={index}>{countries}</p>
         ))
      }
    </div>
  )
}

export default App