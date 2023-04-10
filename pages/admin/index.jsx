import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styles from "../../styles/Admin.module.css";
import Image from "next/image";
import axios from "axios";

import StaffTab from "../../src/components/admin/StaffTab";
import ShopTab from "../../src/components/admin/ShopTab";
import ServicesTab from "../../src/components/admin/ServicesTab";
import GalleryTab from "../../src/components/admin/GalleryTab";
import BookingTab from "../../src/components/admin/BookingTab";

import { TiBusinessCard } from "react-icons/ti";
import { BsShop } from "react-icons/bs";
import { VscCalendar } from "react-icons/vsc";
import { ImScissors } from "react-icons/im";
import { TfiGallery } from "react-icons/Tfi";

const Index = () => {
  const router = useRouter();
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  const [staffs, setStaffs] = useState([]);
  const [tab, setTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setTab(tab);
  };

  useEffect(() => {
    if (!loggedIn) {
      router.push("/Login");
    }

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
      <div className={styles.item}>
        <div className={styles.border}>
          <div className={styles.tabMenu}>
            <div className={styles.tabButtonContainer}>
              <div
                className={styles.tabButton}
                onClick={() => handleTabClick("tab1")}
              >
                <TiBusinessCard size={30} />
                <a>Staff</a>
              </div>
            </div>
            <div className={styles.tabButtonContainer}>
              <div
                className={styles.tabButton}
                onClick={() => handleTabClick("tab2")}
              >
                <BsShop size={30} />
                <a>Shop</a>
              </div>
            </div>
            <div className={styles.tabButtonContainer}>
              <div
                className={styles.tabButton}
                onClick={() => handleTabClick("tab3")}
              >
                <VscCalendar size={30} />
                <a>Booking</a>
              </div>
            </div>
            <div className={styles.tabButtonContainer}>
              <div
                className={styles.tabButton}
                onClick={() => handleTabClick("tab4")}
              >
                <ImScissors size={30} />
                <a>Services</a>
              </div>
            </div>
            <div className={styles.tabButtonContainer}>
              <div
                className={styles.tabButton}
                onClick={() => handleTabClick("tab5")}
              >
                <TfiGallery size={30} />
                <a>Gallery</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        {tab === "tab1" && <StaffTab staffs={staffs} />}
        {tab === "tab2" && <ShopTab />}
        {tab === "tab3" && <BookingTab />}
        {tab === "tab4" && <ServicesTab />}
        {tab === "tab5" && <GalleryTab />}
      </div>
    </div>
  );
};

export default Index;
