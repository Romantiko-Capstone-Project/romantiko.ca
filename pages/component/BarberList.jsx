import React, { useState } from 'react';
import styles from "/styles/BarberList.module.css"
import {DropDownListComponent} from "@syncfusion/ej2-react-dropdowns"


const BarberList = () => {
    const [state, setState] = useState(false);
    const showDropdown=()=>{
        setState(true);
    }
    const hideDropdown=()=>{
        setState(false);
    }
    return (
        <div className={styles.dropdown} >
            <div className={styles.dropdownMenu} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                Dropdown
                {state ?(<ul className={styles.dropdownList} onMouseEnter={showDropdown}>
                    <li>1st Value</li>
                    <li>2nd Value</li>
                    <li>3rd Value</li>
                    <li>4th Value</li>
                    <li>5th Value</li>
                </ul>):
                null}
                
            </div>
        </div>
    );
}

export default BarberList;
