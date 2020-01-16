import React from 'react';
import Accordion from './Component/Accordion';
import './App.css';

function App() {
  return (
    <div className="App">
	  <Accordion 
			step='1' 
			section='Your details' 
			firstlabel='First Name' 
			secondlabel='Email Address:'
			thirdlabel='Surname' />
	  <Accordion 
			step='2' 
			section='More comments' 
			firstlabel='Telephone number' 
			secondlabel='Date of birth'
			thirdlabel='Gender' />
	  <Accordion
			step='3' 
			section='Final Comments' 
			firstlabel='Comments'/>
	  		
    </div>
  );
}

export default App;
