import React, { useState } from "react";
import "./ChangePassword.css";

const ChangePassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleChange = () => {
    if (email && newPassword && confirmPassword) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
  };

  return (
    <div className="change-password-container">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              handleChange();
            }}
            placeholder="Enter your email"
          />
        </div>

        <div className="input-group">
          <label>New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
              handleChange();
            }}
            placeholder="Enter new password"
          />
          <span className="hint">Minimum 8 characters required!</span>
        </div>

        <div className="input-group">
          <label>Confirm New Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              handleChange();
            }}
            placeholder="Confirm your new password"
          />
        </div>

        <button
          type="submit"
          className={`submit-btn ${!isButtonActive ? "inactive" : ""}`}
          disabled={!isButtonActive}
        >
          CONFIRM
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
