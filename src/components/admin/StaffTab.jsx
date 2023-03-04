import { useState } from "react";
import styles from "../../../styles/StaffTab.module.css";
import PersonalBookings from "./staff/PersonalBookings";
import PersonalInformation from "./staff/PersonalInformation";

const StaffTab = ({ staffs }) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // const handleStaffInfo

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>List of Staff</h1>
        </div>
        {staffs.map((staff) => (
          <div key={staff._id} className={styles.staffCard}>
            <div className={styles.staffInfo}>
              <h3 className={styles.name}>
                {staff.firstName} {staff.lastName}
              </h3>
              <h6>
                {staff.isActive ? "Currently Working" : "No longer Active"}
              </h6>
            </div>
            <div className={styles.staffSelector}>
              <div className={styles.buttonSelector}>
                <span className={styles.select}>X</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.right}>
        <div className={styles.recordTabMenu}>
          <div
            onClick={() => handleTabClick("tab1")}
            className={styles.recordTabItem}
          >
            Personal Information
          </div>
          <div
            onClick={() => handleTabClick("tab2")}
            className={styles.recordTabItem}
          >
            Bookings
          </div>
        </div>
        <div className={styles.content}>
          {activeTab === "tab1" && <PersonalInformation />}
          {activeTab === "tab2" && <PersonalBookings />}
          {activeTab === "tab3" && <div>Content for Tab 3</div>}
        </div>
      </div>
    </div>
  );
};

export default StaffTab;
