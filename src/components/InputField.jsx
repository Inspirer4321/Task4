import React, { useState, useRef } from "react";

const InputField = () => {
  const [visible, setVisible] = useState(true);
  const inputRef = useRef(null);

  const handleHide = () => {
    setVisible(false);
  };

  const handleShow = () => {
    setVisible(true);
  };

  return (
    <div>
      <div>
        <button onClick={handleShow}>Show</button>
        <button onClick={handleHide}>Hide</button>
      </div>
      {visible ? (
        <div>
          <input type="text" ref={inputRef} />
          <p>An input field!</p>
        </div>
      ) : (
        <p>An input field!</p>
      )}
  
    </div>
  );
};

export default InputField;
