import React,{useState} from "react";
import "./App.css";

export default function App() {

  const[name, setName] = useState();
  const[age, setAge] = useState();
  const [errorName,setErrorName] = useState('');
  const [errorAge,setErrorAge] = useState('');


  const [names, setNames] = useState([
    { id: 1, name:'Sean', age:23 },
    { id: 2, name:'Jules', age:15 },
  ])

  // REMOVE NAME FROM LIST
  const filterNames =(name) => {
    const newNames =  names.filter(person => person.name != name);
    setNames(newNames);
  }

  // ADD NAME TO LIST
  const addName = e => {
    e.preventDefault();

    if (!name || name.length < 5 ){
      setErrorName('Please enter name at least 5 letters long..');
      return ;
    }

    if (!age || age.length < 2 || isNaN(age)){
      setErrorAge('Please enter number at least 2 letters long..');
      return ;
    }
    
    setNames([ ...names,{ name, age, id: names.length + 1 }]);
    setName('');
    setAge('');
    setErrorName('');
    setErrorAge('');
  }

   //console.log(name,age);

  return (
    <div style={{width:'240px',margin:'auto', textAlign:'center',fontFamily:'arial',}}>

      <h3>List of people</h3>

     {/* ============= INPUT NAME ================*/}
      <br/><br/>
      <input placeholder='Enter name..' value={name} onChange={
        e => {
            setName(e.target.value);
            setErrorName('');
        }} />
      {/* DISPLAY ERRORS FOR NAME INPUT */}
      <p style={{fontSize:'11px', color:'red'}}>{ errorName ? errorName  : '' }</p>


      {/*  =========  INPUT AGE  ===================*/}
      <input placeholder='Enter age..' value={age} onChange={
        e => {
        setAge(e.target.value);
        setErrorAge('');
        }}/>
      {/* DISPLAY ERRORS FOR AGE INPUT */}
      <p style={{fontSize:'11px', color:'red'}}>{ errorAge ? errorAge  : '' }</p>


      <br/><br/>
      <button className="btn" onClick={addName} >
        Add name
      </button>

      <br/><br/><br/>
      

      {
          names.map(person => 
            <div className="list">

              <h4 key={person.id}> 
                <strong>{person.id} {person.name} {person.age}</strong> 
              </h4> 
              
              <span onClick={() => filterNames(person.name)} > Delete</span>   
            </div>
          )
      }{/* END OF MAP */}


      
    </div>
  );
}
