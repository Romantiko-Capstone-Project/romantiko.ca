import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../../../../styles/PersonalInformation.module.css";
import axios from "axios";

const PersonalInformation = ({ selectedStaff, data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.photo}>
          <div className={styles.photoContainer}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src="/img/admin/user-photo.jpeg"
                alt="Picture of the author"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className={styles.buttons}>
              <button className={styles.actionButton}>Change</button>
              <button className={styles.actionButton}>Remove</button>
            </div>
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <h4 className={styles.infoLabel}>Name:</h4>
              <span className={styles.infoInput}>
                {selectedStaff
                  ? selectedStaff.firstName + " " + selectedStaff.lastName
                  : "empty"}
                {/* {staff.firstName} {staff.lastName} */}
              </span>
            </div>
            <div className={styles.infoItem}>
              <h4 className={styles.infoLabel}>Address:</h4>
              <span className={styles.infoInput}>
                {/* {staff.address} */}
                {selectedStaff ? selectedStaff.address : "empty"}
              </span>
            </div>
            <div className={styles.infoItem}>
              <h4 className={styles.infoLabel}>Username:</h4>
              <span className={styles.infoInput}>{data && data.username}</span>
            </div>
            <div className={styles.infoItem}>
              <h4 className={styles.infoLabel}>Phone Number:</h4>
              <span className={styles.infoInput}>
                {/* {staff.phoneNumber} */}
                {selectedStaff ? selectedStaff.phoneNumber : "empty"}
              </span>
            </div>
            <div className={styles.infoItem}>
              <h4 className={styles.infoLabel}>Email Address:</h4>
              <span className={styles.infoInput}>{data && data.email}</span>
            </div>
            <div className={styles.infoItem}>
              <h4 className={styles.infoLabel}>Status:</h4>
              <span className={styles.infoInput}>
                {/* {staff.isActive ? "Currently Working" : "No longer Active"} */}
                {selectedStaff ? selectedStaff.isActive.toString() : "empty"}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.action}>
            <button className={styles.actionButton}>Edit</button>
          </div>
          <div className={styles.action}>
            <button className={styles.actionButton}>Delete</button>
          </div>
          <div className={styles.action}>
            <button className={styles.actionButton}>Change Status</button>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.tablesContainer}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.trTitle}>
                <th>Most Recent Bookings:</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              <tr>
                <td>Booking 1: Joe Doe</td>
              </tr>
              <tr>
                <td>Booking 1: Joe Doe</td>
              </tr>
            </tbody>
          </table>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th>Availability:</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              <tr>
                <td>Time 1: MONDAY, 10:30A.M - 5:00P.M</td>
              </tr>
              <tr>
                <td>Time 2: FRIDAY, 9:30A.M - 4:00P.M</td>
              </tr>
            </tbody>
          </table>

          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th>Statistics:</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              <tr>
                <td>Number of bookings for this week: 10</td>
              </tr>
              <tr>
                <td>Number of bookings for previos week: 8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;

// const [data, setData] = useState({});
// const [id, setId] = useState(null);

// useEffect(() => {
//   if (selectedStaff) {
//     const { account } = selectedStaff;
//     setId(account);
//   }
// }, [selectedStaff]);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const { data } = await axios.get(
//         `http://localhost:3000/api/account/${id}`
//       ); // pass id as a parameter in the URL
//       setData(data);
//     } catch (error) {
//       console.log("Error in requesting data from account schema.");
//     }
//   };
//   fetchData();
// }, [id]);
