import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../../../../styles/PersonalInformation.module.css";
import axios from "axios";

const PersonalInformation = ({ selectedStaff, onUpdate }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [firstName, setFirstName] = useState(selectedStaff?.firstName);
  const [lastName, setLastName] = useState(selectedStaff?.lastName);
  const [address, setAddress] = useState(selectedStaff?.address);
  const [phone, setPhone] = useState(selectedStaff?.phoneNumber);
  const [status, setStatus] = useState(!!selectedStaff?.isActive);
  const [role, setRole] = useState(extraStaff?.role);

  const [isEditPic, setIsEditPic] = useState(false);
  const [extraStaff, setExtraStaff] = useState({});
  const [usr, setUsr] = useState(extraStaff?.username);
  const [email, setEmail] = useState(extraStaff?.email);
  const [img, setImg] = useState(extraStaff?.img);
  const [pwd, setPwd] = useState(extraStaff?.password);

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedStaff) {
        console.log("fetchData error: ID not provided");
        return;
      }

      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/account/${selectedStaff.account}`
        ); // pass id as a parameter in the URL
        setExtraStaff(data);
      } catch (error) {
        console.log("fetchData error");
      }
    };
    fetchData();
    setFirstName(selectedStaff?.firstName);
    setLastName(selectedStaff?.lastName);
    setAddress(selectedStaff?.address);
    setPhone(selectedStaff?.phoneNumber);
    setStatus(!!selectedStaff?.isActive);
    setRole(selectedStaff?.role);
  }, [selectedStaff]);

  const toggleEditMode = () => {
    setIsEditMode((prevState) => !prevState);
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    const _staff = {
      firstName,
      lastName,
      address,
      phoneNumber: phone,
      isActive: status ? true : false,
    };

    const _extraStaff = {
      username: usr,
      email,
      password: pwd,
    };

    try {
      await axios.put(
        `http://localhost:3000/api/staff/${selectedStaff._id}`,
        _staff
      );
      await axios.put(
        `http://localhost:3000/api/account/${selectedStaff.account}`,
        _extraStaff
      );
      const updatedStaff = { ...selectedStaff, ..._staff }; // UPDATED: include extraStaff properties

      // Call the callback function to update the parent component state
      onUpdate(updatedStaff);

      // Switch back to view mode
      setIsEditMode(false);
      // window.location.reload();
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

      // Update the parent component state
      onUpdate({ ...selectedStaff, ..._staff });

      // window.location.reload();
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const toggleEditPic = () => {
    setIsEditPic((prevState) => !prevState);
  };

  const handleDeleteAccount = async () => {
    //CODE MISSING FOR ROLE VERIFICATION.

    if (extraStaff.role === "admin") {
      console.log("Cannot delete admin account");
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost:3000/api/account/${selectedStaff.account}`
      );
      console.log(response.data);
      //window.location.reload();
    } catch (err) {
      console.error("Error deleting account:", err);
    }
  };

  const HandleDeletePicture = async () => {
    const defaultPicture =
      "https://res.cloudinary.com/dyk9lstek/image/upload/v1680847093/default-staff_q8f9pn.jpg";

    const _img = {
      img: defaultPicture,
    };

    try {
      await axios.put(
        `http://localhost:3000/api/account/${selectedStaff.account}`,
        _img
      );

      // Update the extraStaff state with the default picture
      // setExtraStaff((prevState) => ({ ...prevState, img: defaultPicture }));
    } catch (err) {
      console.error("Error deleting picture:", err);
    }
  };

  const handleFileChange = (e) => {
    setImg(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "uploads");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dyk9lstek/image/upload",
        data
      );
      const { url } = uploadRes.data;
      console.log(uploadRes.data);
      const newPicture = {
        img: url,
      };
      const updateRes = await axios.put(
        `http://localhost:3000/api/account/${selectedStaff.account}`,
        newPicture
      );
      console.log("New updated picture: ", updateRes.data);
      // setExtraStaff((prevState) => ({ ...prevState, img: url }));
    } catch (err) {
      console.error("Error uploading image:", err);
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
                src={
                  extraStaff
                    ? extraStaff.img
                    : "https://res.cloudinary.com/dyk9lstek/image/upload/v1680847093/default-staff_q8f9pn.jpg"
                }
                alt="Picture of the author"
                width="500"
                height="500"
              />
            </div>

            <div className={styles.buttons}>
              <button className={styles.actionButton} onClick={toggleEditPic}>
                Change
              </button>
              <button
                className={styles.actionButton}
                onClick={HandleDeletePicture}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
        {isEditPic ? (
          <div className={styles.changePicture}>
            <form onSubmit={handleSubmit}>
              <input type="file" accept="image/*" onChange={handleFileChange} />
              <button type="submit">Upload</button>
            </form>
          </div>
        ) : (
          ""
        )}

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
              {isEditMode ? (
                <input
                  className={`${styles.infoInput} ${styles.isEditMode}`}
                  defaultValue={
                    extraStaff && extraStaff.username
                      ? extraStaff.username
                      : "N/A"
                  }
                  onChange={(e) => setUsr(e.target.value)}
                />
              ) : (
                <span className={styles.infoInput}>
                  {extraStaff && extraStaff.username
                    ? extraStaff.username
                    : "N/A"}
                </span>
              )}
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
                {isEditMode ? (
                  <input
                    className={`${styles.infoInput} ${styles.isEditMode}`}
                    defaultValue={
                      extraStaff && extraStaff.email ? extraStaff.email : "N/A"
                    }
                    onChange={(e) => setEmail(e.target.value)}
                  />
                ) : (
                  <span className={styles.infoInput}>
                    {extraStaff && extraStaff.email ? extraStaff.email : "N/A"}
                  </span>
                )}
              </span>
            </div>
            <div className={styles.infoItem}>
              <h4 className={styles.infoLabel}>Status:</h4>
              {isEditMode ? (
                <select
                  className={styles.infoInput}
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
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
            <div className={styles.infoItem}>
              <h4 className={styles.infoLabel}>Password:</h4>
              <span className={styles.infoInput}>
                {isEditMode ? (
                  <input
                    className={`${styles.infoInput} ${styles.isEditMode}`}
                    defaultValue={
                      extraStaff && extraStaff.password
                        ? extraStaff.password
                        : "N/A"
                    }
                    onChange={(e) => setPwd(e.target.value)}
                  />
                ) : (
                  <span className={styles.infoInput}>
                    {extraStaff && extraStaff.password ? "********" : "N/A"}
                  </span>
                )}
              </span>
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
            <button className={styles.actionButton} onClick={handleStatus}>
              Change Status
            </button>
          </div>
          <div className={styles.action}>
            <button
              className={styles.actionButton}
              onClick={handleDeleteAccount}
            >
              Delete
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
