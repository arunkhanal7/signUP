import React, { useState } from "react";
import data from "./Buttondet";
import Button from "./Button";
import Forms from "./Forms";

const App = () => {
  const [showButtons, setShowButtons] = useState(true);
  const [showName, setShowName] = useState('')
  function handleOnclick(name) {
    console.log(name)
    setShowName(name)
    setShowButtons(false);
  }

  return (
    <>
      <div className="container">
        <div className="text">
          <h1>Sign up with:</h1>
          <p>
            W3docs provides free learning materials for programming languages
            like HTML, CSS, Java Script, PHP etc.
          </p>
        </div>
        <hr></hr>

        {showButtons ? (
          <div className="block-item">
            {data.map((e) => (
              <Button
                key={e.name}
                onClick={handleOnclick}
                imageSrc={e.imageSrc}
                name={e.name}
                bgcolor={e.bgcolor}
              />
            ))}
          </div>
        ) : (
          <div className="block-item">
            <Forms  name={showName} />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
