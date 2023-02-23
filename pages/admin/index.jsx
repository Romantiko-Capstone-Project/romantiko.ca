import React, { useState, useEffect } from "react";
import styles from "../../styles/Admin.module.css";
import Image from "next/image";
import axios from "axios";

import PersonalInformation from "../../src/components/admin/PersonalInformation";
import PersonalBookings from "../../src/components/admin/PersonalBookings";
import { TiBusinessCard } from "react-icons/ti";
import { BsShop } from "react-icons/bs";
import { VscCalendar } from "react-icons/vsc";

const Index = () => {
  const [staffs, setStaffs] = useState([]);
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchStaffs = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/staff");
        setStaffs(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStaffs();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.tabMenu}>
        <div className={styles.tabButtonContainer}>
          <div className={styles.tabButton}>
            <TiBusinessCard size={30} />
            <a>Staff</a>
          </div>
        </div>
        <div className={styles.tabButtonContainer}>
          <div className={styles.tabButton}>
            <BsShop size={30} />
            <a>Shop</a>
          </div>
        </div>
        <div className={styles.tabButtonContainer}>
          <div className={styles.tabButton}>
            <VscCalendar size={30} />
            <a>Booking</a>
          </div>
        </div>
      </div>

      <div className={styles.staffList}>
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

      <div className={styles.record}>
        <div className={styles.recordTabMenu}>
          <div
            onClick={() => handleTabClick("tab1")}
            className={styles.recordTabButton}
          >
            <h3 className={styles.titleRecord}>Personal Information</h3>
          </div>
          <div
            onClick={() => handleTabClick("tab2")}
            className={styles.recordTabButton}
          >
            <h3 className={styles.titleRecord}>Bookings</h3>
          </div>
        </div>
        <div className={styles.content}>
          {activeTab === "tab1" && <PersonalInformation staffs={staffs} />}
          {activeTab === "tab2" && <PersonalBookings staffs={staffs} />}
          {activeTab === "tab3" && <div>Content for Tab 3</div>}
        </div>
      </div>
    </div>
  );
};

export default Index;
