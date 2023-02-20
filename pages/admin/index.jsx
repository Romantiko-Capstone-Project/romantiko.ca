import styles from "../../styles/Admin.module.css";
import Image from "next/image";
import { useState } from "react";
import PersonalInformation from "../../src/components/admin/PersonalInformation";
import PersonalBookings from "../../src/components/admin/PersonalBookings";

const Index = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabMenu}>
        <a className={styles.tabButton}>Staff</a>
        <a className={styles.tabButton}>Shop</a>
        <a className={styles.tabButton}>Booking</a>
      </div>

      <div className={styles.staffList}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>List of Staff</h1>
        </div>

        <div className={styles.staffCard}>
          <div className={styles.staffInfo}>
            <h3 className={styles.name}>Joe Doe</h3>
            <h6>February 14, 2023 4:00 PM</h6>
          </div>
          <div className={styles.staffSelector}>
            <div className={styles.buttonSelector}>
              <span className={styles.select}>X</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.record}>
        <div className={styles.recordTabMenu}>
          <div
            onClick={() => handleTabClick("tab1")}
            className={styles.recordTabButton}
          >
            <h1 className={styles.titleRecord}>Personal Information</h1>
          </div>
          <div
            onClick={() => handleTabClick("tab2")}
            className={styles.recordTabButton}
          >
            <h1 className={styles.titleRecord}>Bookings</h1>
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

export default Index;
