import styles from "/styles/ClientInformation.module.css";
import React from 'react';

const ClientInformation = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Client Information</h3>
            <p className={styles.desc}>Tell us a bit about yourself</p>
            <div className={styles.form}>
            <form className={styles.form}>
                <label className={styles.label}>
                    Name <br />
                    <input type="text" name="name"></input>
                </label> <br />
                <label className={styles.label}> 
                    Email <br />
                    <input type="email" name="email"></input>
                </label> <br />
                <label className={styles.label}>
                    Phone Number <br />
                    <input type="tel" name="phonenumber"></input>
                </label> <br />
                <label className={styles.label}>
                    Add a message <br />
                    <textarea>
                        Notes...
                    </textarea>
                </label>
                
            </form>
            </div>
        </div>
    );
}

export default ClientInformation;
