import React, { useRef, useState } from 'react';
import "./nameform.css"
function NameDisplay({ name }) {
  return <div className="name-display">Привет, {name}!</div>;
}

function NameForm() {
  const inputRef = useRef(null);
  const [name, setName] = useState('Vasya');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newName = inputRef.current.value;
    setName(newName);
  };

  return (
    <div className="name-form">
      <NameDisplay name={name} />
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} className="name-input" />
        <button type="submit" className="save-button">Save</button>
      </form>
    </div>
  );
}

export default NameForm;
