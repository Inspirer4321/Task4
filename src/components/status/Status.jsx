import React, { useState } from "react";
import "./Status.css";

const Status = () => {
  const statuses = ["inprogress", "progress", "degress"];
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0);
  const [deliveryStatuses, setDeliveryStatuses] = useState(statuses);

  const handleDelivery = () => {
    if (currentStatusIndex < deliveryStatuses.length) {
      setDeliveryStatuses((prevStatuses) => {
        const updatedStatuses = [...prevStatuses];
        updatedStatuses[currentStatusIndex] = "Delivered";
        return updatedStatuses;
      });
    }
    setCurrentStatusIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="container">
      {deliveryStatuses.map((status, index) => (
        <div
          key={index}
          className={`status ${index === currentStatusIndex ? "active" : ""}`}
        >
          {status}
        </div>
      ))}
      <button onClick={handleDelivery} className="delivery-btn">
        Special Button
      </button>
    </div>
  );
};

export default Status;
