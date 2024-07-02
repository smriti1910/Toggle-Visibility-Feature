import React,{useState} from 'react'
import './App.css'

function App() {
  const name='Smriti';
  const regno='212221040156';
  const [isVisible,setVisible] = useState(false);

  
  // const [student, setStudent] = useState('Smritti');
  // function updateStud() {
  //   setStudent('Smriti');
  // }

  function changeState(){
    if(isVisible){
      setVisible(false);
      document.querySelector('.show').innerHTML = 'Show Details';
    }
    else
    {
      setVisible(true);
      document.querySelector('.show').innerHTML = 'Hide Details';
    }
  }
  return (
    <React.Fragment>
      <div className='main-div'>
        <img src='src/assets/icon.svg' alt="icon" width={90} height={90}></img>
        <h2>Name: {name}</h2>
        <p>Registration No: {regno}</p>
        {/* <p>{student}</p> */}
        <button onClick={()=>changeState()} className='show'>Show Details</button>

        {isVisible ? <p>Additional details or content can go here...</p> : <p></p>} 
      </div>  
    </React.Fragment>
  )
}

export default App
