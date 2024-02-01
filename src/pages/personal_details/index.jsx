import React from "react";
import { useLocation } from "react-router-dom";

const personal_details = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};

  return (
    <div>
      <h1>User Details</h1>
      <p>
        <strong>Name:</strong> {formData.name}
      </p>
      <p>
        <strong>Body Type:</strong> {formData.body_type}
      </p>
      <p>
        <strong>Gender:</strong> {formData.gender}
      </p>
      <p>
        <strong>Goal:</strong> {formData.goal}
      </p>
      <p>
        <strong>Age:</strong> {formData.age}
      </p>
      <p>
        <strong>Height:</strong> {formData.height} cm
      </p>
      <p>
        <strong>Weight:</strong> {formData.weight} lbs
      </p>
    </div>
  );
};

export default personal_details;
