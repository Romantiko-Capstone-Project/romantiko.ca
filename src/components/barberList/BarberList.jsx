import React, { useState } from 'react';
import styles from "/styles/BarberList.module.css"
//import {DropDownListComponent} from "@syncfusion/ej2-react-dropdowns"
import Dropdown from 'react-bootstrap/Dropdown'
//import DropdownButton from 'react-bootstrap/DropdownButton';

function BarberList() {
    
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Staff Member (All)</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Elvert</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Jasmine</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Jay</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Sarah</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default BarberList;
