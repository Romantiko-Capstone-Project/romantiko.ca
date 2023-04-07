import { useState, useEffect } from "react";
import styles from "../../../styles/StaffTab.module.css";
import PersonalBookings from "./staff/PersonalBookings";
import PersonalInformation from "./staff/PersonalInformation";
import axios from "axios";

const StaffTab = () => {
  const [staffs, setStaffs] = useState([]);
  const [activeTab, setActiveTab] = useState("tab1");
  const [selectedStaff, setSelectedStaff] = useState(staffs[1]);

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
  }, [staffs]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleStaffClick = (staffMember) => {
    setSelectedStaff(staffMember);
  };

  const handleStaffUpdate = (updatedStaff) => {
    // Update the staffs array with the updated staff data
    setStaffs(
      staffs.map((staff) =>
        staff._id === updatedStaff._id ? updatedStaff : staff
      )
    );

    // Update the selectedStaff with the updated staff data
    setSelectedStaff(updatedStaff);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.border}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>List of Staff</h1>
          </div>
          <div className={styles.cardsContainer}>
            {staffs.map((staff) => (
              <div
                key={staff._id}
                className={styles.staffCard}
                onClick={() => {
                  handleStaffClick(staff);
                }}
              >
                <div className={styles.staffInfo}>
                  <h3 className={styles.name}>
                    {staff.firstName} {staff.lastName}
                  </h3>
                  <h6>
                    {staff.isActive ? "Currently Working" : "No longer Active"}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
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
          {activeTab === "tab1" && (
            <PersonalInformation
              selectedStaff={selectedStaff}
              onUpdate={handleStaffUpdate}
            />
          )}
          {activeTab === "tab2" && (
            <PersonalBookings selectedStaff={selectedStaff} />
          )}
          {activeTab === "tab3" && <div>Content for Tab 3</div>}
        </div>
      </div>
    </div>
  );
};

export default StaffTab;
