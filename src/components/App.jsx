import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstName(event) {
    setFirstName(event.target.value);
  }

  function handleLastName(event) {
    setLastName(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleFirstName}
        />
        <input name="lName" placeholder="Last Name" onChange={handleLastName} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
