import React, { useRef, useMemo, useContext } from 'react';
import './dialog.css';

const DialogContext = React.createContext();

const ShowDialog = () => {
  const dialogRef = useRef(null);
  const dialogContentRef = useRef(null);
  const dialogTitleRef = useRef(null);
  const dialogBodyRef = useRef(null);

  const handleCloseDialog = () => {
    dialogRef.current.style.display = 'none';
  };

  const handleOpenDialog = () => {
    dialogRef.current.style.display = 'block';
  };

  return (
    <div>
      <button onClick={handleOpenDialog} className="open-dialog-btn">
        Open Dialog
      </button>
      <div ref={dialogRef} className="dialog-container">
        <div ref={dialogContentRef} className="dialog-content">
          <h2 ref={dialogTitleRef} className="dialog-title">
            Dialog Title
          </h2>
          <p ref={dialogBodyRef} className="dialog-body">
            Dialog Body
          </p>
          <button onClick={handleCloseDialog} className="discard-btn">
            Discard
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowDialog;
