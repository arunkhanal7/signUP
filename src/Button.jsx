import React from "react";

const Button = ({ imageSrc, name, bgcolor, onClick }) => {
  return (
    <>
      <button
        onClick={()=>onClick(name)}
        className="btn"
        style={{ backgroundColor: bgcolor }}
      >
        {" "}
        <img src={imageSrc} alt="" srcset="" /> {name}
      </button>
    </>
  );
};

export default Button;
