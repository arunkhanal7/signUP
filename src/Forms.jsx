import React, { useState } from "react";


const Forms = ({name}) => {
  const [userName, setUserName] = useState("");
  return (
    <>
      <div className="form_container">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Logged In As ${userName} in ${name}`);
          }}
        >
          <h1>Sign In {name}</h1>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <input type="password" placeholder="Password" />
          </div>
          <button className="btn btn1">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Forms;
