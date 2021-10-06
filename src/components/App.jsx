import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: ""
  });

  function handleFullName(event) {
    setFullName({ ...fullName, [event.target.name]: event.target.value });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.firstName} {fullName.lastName}
      </h1>
      <form>
        <input
          name="firstName"
          placeholder="First Name"
          onChange={handleFullName}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          onChange={handleFullName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
