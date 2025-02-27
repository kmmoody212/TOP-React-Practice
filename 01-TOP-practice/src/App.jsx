// function Person() {
//     const [person, setPerson] = useState({ name: "John", age: 100 });
  
//     const handleIncreaseAge = () => {
//       console.log("in handleIncreaseAge (before setPerson call): ", person);
//       setPerson({ ...person, age: person.age + 1 });
//       // we've called setPerson, surely person has updated?
//       console.log("in handleIncreaseAge (after setPerson call): ", person);
//     };
  
//     // this console.log runs every time the component renders
//     // what do you think this will print?
//     console.log("during render: ", person);
  
//     return (
//       <>
//         <h1>{person.name}</h1>
//         <h2>{person.age}</h2>
//         <button onClick={handleIncreaseAge}>Increase age</button>
//       </>
//     );
//   }

// /////////////////// INSTRUCTIONS: ////////////////////////////
//  Update the Person component we’ve been using above.
//      1.) Add two separate input fields for the first name and the last name. Either of these should be able to update the full name in the h1 element with every keystroke.

import { useState } from "react";
  

export default function Person() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleFNChange(e) {
      setFirstName(e.target.value)
    }

    function handleLNChange(e) {
      setLastName(e.target.value)
    }
   
    return (
      <>
        
        <Input placeholder="First Name" value={firstName} onChange={handleFNChange} />
        <Input placeholder="Last Name" value={lastName} onChange={handleLNChange} />
        <h1>{firstName} {lastName}</h1>
      
      </>
    );
  }

  function Input({ placeholder, value, onChange }) {

    return (
      <>
      <input type="text" placeholder={placeholder} value={value} onChange={onChange}></input>
      </>
    )
  }
  