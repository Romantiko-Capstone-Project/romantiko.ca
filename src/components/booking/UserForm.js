import React, { useState } from "react";
import styles from "/styles/UserForm.module.css";

const UserForm = ({name, email, phone, note, onNameChange, onEmailChange, onPhoneChange, onNoteChange}) => {

  return (
    <form className={styles.form}>
      <h2>Contact Information</h2>
      <div className={styles.form_component}>
        <span>Full Name</span>
        <input
          className={styles.form_field}
          type="text"
          value={name}
          onChange={onNameChange}
          placeholder="Madame Michu"
        />
      </div>

      <div className={styles.form_component}>
        <span>Email</span>
        <input
          className={styles.form_field}
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="michum@gmail.com"
        />
      </div>

      <div className={styles.form_component}>
        <span> Phone Number</span>
        <input
          className={styles.form_field}
          type="tel"
          value={phone}
          onChange={onPhoneChange}
          placeholder="000-000-000"
        />
      </div>

      <div className={styles.form_component}>
        <span>Note</span>
        <textarea
          className={styles.form_field}
          value={note}
          onChange={onNoteChange}
          placeholder="Additional details..."
        />
      </div>
    </form>
  );
};

export default UserForm;
