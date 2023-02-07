import styles from "/styles/MuiPicker.module.css";
import React from 'react';

const ClientInformation = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <label>
                    Name: <br />
                    <input type="text" name="name"></input>
                </label> <br />
                <label> 
                    Email: <br />
                    <input type="email" name="email"></input>
                </label> <br />
                <label>
                    Phone Number: <br />
                    <input type="tel" name="phonenumber"></input>
                </label> <br />
                <label>
                    Add a message: <br />
                    <textarea>
                        Notes...
                    </textarea>
                </label>
                
            </form>
        </div>
    );
}

export default ClientInformation;
