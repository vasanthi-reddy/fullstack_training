import React, { useState } from 'react'

function FormInput() {
    const[name, setName] = useState('');
    const[age, setAge] = useState('');

    const [submittedData, setSubmittedData] = useState(null);

    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (name.trim() === '' || age.trim() === '') {
          setError('Please enter both name and age!');
          setSubmittedData(null); 
        } else {
          setError(''); 
          setSubmittedData({ name, age }); 
        }
      };
  return (
    <div>
        <h1>UserInput</h1>
        <form onSubmit={handleSubmit}>
        <div>
        <label>Name:</label>
        <input type='text' value={name} 
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"></input><br></br>
        </div> 

       <div>
        <label>Age:</label>
        <input type='text' value={age} 
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your age"></input>
        </div> 

        <button type="submit">Submit</button>

        </form>

        {submittedData && (
        <p>
          Hello, my name is {submittedData.name} and I am {submittedData.age} years old.
        </p>
        )}

    </div>
  )
}

export default FormInput;