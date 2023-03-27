import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../../../../styles/PersonalInformation.module.css";
import axios from "axios";

const PersonalInformation = ({ selectedStaff }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [firstName, setFirstName] = useState(selectedStaff?.firstName);
  const [lastName, setLastName] = useState(selectedStaff?.lastName);
  const [address, setAddress] = useState(selectedStaff?.address);
  const [phone, setPhone] = useState(selectedStaff?.phone);
  const [status, setStatus] = useState(!!selectedStaff?.isActive);

  const [data, setData] = useState({});
  const id = selectedStaff?.account;

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        console.log("fetchData error: ID not provided");
        return;
      }

      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/account/${id}`
        ); // pass id as a parameter in the URL
        setData(data);
      } catch (error) {
        console.log("fetchData error");
      }
    };
    fetchData();
  }, [id]);

  const toggleEditMode = () => {
    setIsEditMode((prevState) => !prevState);
  };

  const handleSaveChanges = async () => {
    const _staff = {
      firstName,
      lastName,
      address,
      phone,
      isActive: status ? true : false,
    };

    try {
      // Replace 'id' with the actual staff id
      const response = await axios.put(
        `http://localhost:3000/api/staff/${selectedStaff._id}`,
        _staff
      );
      console.log(response.data);

      // Switch back to view mode
      setIsEditMode(false);
    } catch (error) {
      console.error("Error updating staff:", error);
    }
  };

  const handleStatus = () => {
    const newStatus = !status;
    setStatus(newStatus);
    handleChangeStatus(newStatus);
  };

  const handleChangeStatus = async (newStatus) => {
    const _staff = {
      isActive: newStatus ? true : false,
    };

    try {
      const response = await axios.put(
        `http://localhost:3000/api/staff/${selectedStaff._id}`,
        _staff
      );
      console.log(response.data);
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };
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
              <h4 className={styles.infoLabel}>First Name:</h4>

              {isEditMode ? (
                <input
                  className={`${styles.infoInput} ${styles.isEditMode}`}
                  defaultValue={selectedStaff ? selectedStaff.firstName : "N/A"}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              ) : (
                <span className={styles.infoInput}>
                  {selectedStaff ? selectedStaff.firstName : "N/A"}
                </span>
              )}
            </div>

            <div className={styles.infoItem}>
              <h4 className={styles.infoLabel}>Last Name:</h4>
              {isEditMode ? (
                <input
                  className={`${styles.infoInput} ${styles.isEditMode}`}
                  defaultValue={selectedStaff ? selectedStaff.lastName : "N/A"}
                  onChange={(e) => setLastName(e.target.value)}
                />
              ) : (
                <span className={styles.infoInput}>
                  {selectedStaff ? selectedStaff.lastName : "N/A"}
                </span>
              )}
            </div>

            <div className={styles.infoItem}>
              <h4 className={styles.infoLabel}>Address:</h4>
              {isEditMode ? (
                <input
                  className={`${styles.infoInput} ${styles.isEditMode}`}
                  defaultValue={selectedStaff ? selectedStaff.address : "N/A"}
                  onChange={(e) => setAddress(e.target.value)}
                />
              ) : (
                <span className={styles.infoInput}>
                  {selectedStaff ? selectedStaff.address : "N/A"}
                </span>
              )}
            </div>
            <div className={styles.infoItem}>
              <h4 className={styles.infoLabel}>Username:</h4>
              <span className={styles.infoInput}>
                {data && data.username ? data.username : "N/A"}
              </span>
            </div>
            <div className={styles.infoItem}>
              <h4 className={styles.infoLabel}>Phone Number:</h4>
              {isEditMode ? (
                <input
                  className={`${styles.infoInput} ${styles.isEditMode}`}
                  defaultValue={
                    selectedStaff ? selectedStaff.phoneNumber : "N/A"
                  }
                  onChange={(e) => setPhone(e.target.value)}
                />
              ) : (
                <span className={styles.infoInput}>
                  {selectedStaff ? selectedStaff.phoneNumber : "N/A"}
                </span>
              )}
            </div>
            <div className={styles.infoItem}>
              <h4 className={styles.infoLabel}>Email Address:</h4>
              <span className={styles.infoInput}>
                {data && data.email ? data.email : "N/A"}
              </span>
            </div>
            <div className={styles.infoItem}>
              <h4 className={styles.infoLabel}>Status:</h4>
              {isEditMode ? (
                <select
                  className={styles.infoInput}
                  value={status ? true : false}
                  onChange={(e) => setStatus(e.target.value === "true")}
                >
                  <option value="true">Active</option>
                  <option value="false">Inactive</option>
                </select>
              ) : (
                <span className={styles.infoInput}>
                  {selectedStaff
                    ? selectedStaff.isActive
                      ? "Active"
                      : "Inactive"
                    : "N/A"}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.action}>
            <button
              className={styles.actionButton}
              onClick={isEditMode ? handleSaveChanges : toggleEditMode}
            >
              {isEditMode ? "Save" : "Edit"}
            </button>
          </div>
          <div className={styles.action}>
            <button className={styles.actionButton}>Delete</button>
          </div>
          <div className={styles.action}>
            <button className={styles.actionButton} onClick={handleStatus}>
              Change Status
            </button>
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
