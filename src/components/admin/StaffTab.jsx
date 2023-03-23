import { useState, useEffect } from "react";
import styles from "../../../styles/StaffTab.module.css";
import PersonalBookings from "./staff/PersonalBookings";
import PersonalInformation from "./staff/PersonalInformation";
import axios from "axios";

const StaffTab = ({ staffs }) => {
  const [activeTab, setActiveTab] = useState("tab1");
  // const [selectedButton, setSelectedButton] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(staffs[1]);

  const [data, setData] = useState({});
  const [id, setId] = useState(staffs[0]?.account);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/account/${id}`
        ); // pass id as a parameter in the URL
        setData(data);
      } catch (error) {
        const error_ = {
          username: "not found",
          email: "not found",
        };
        setData(error_);
        console.log("fetchData error");
      }
    };
    fetchData();
  }, [id]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleStaffClick = (staffMember) => {
    setSelectedStaff(staffMember);
    const { account } = staffMember;
    setId(account);
  };

  return (~~
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
                // style={{
                //   backgroundColor:
                //   selectedStaff === staff ? "#00000076" : "white",
                //   color:
                //   selectedStaff === staff ? "white": "black",
                // }}
              >
                <div className={styles.staffInfo}>
                  <h3 className={styles.name}>
                    {staff.firstName} {staff.lastName}
                  </h3>
                  <h6>
                    {staff.isActive ? "Currently Working" : "No longer Active"}
                  </h6>
                </div>
                {/* <div className={styles.staffSelector}>
                <div className={styles.buttonSelector}>
                  <span className={styles.select}>X</span>
                </div>
              </div> */}
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
            <PersonalInformation selectedStaff={selectedStaff} data={data} />
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
