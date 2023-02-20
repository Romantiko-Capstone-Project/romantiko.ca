import styles from "../../styles/Admin.module.css";
import Image from "next/image";

const Index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tabMenu}>
        <a className={styles.tabButton}>A</a>
        <a className={styles.tabButton}>B</a>
        <a className={styles.tabButton}>C</a>
      </div>

      <div className={styles.staffList}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>List of Staff</h1>
        </div>

        <div className={styles.staffCard}>
          <div className={styles.staffInfo}>
            <h3 className={styles.name}>Name: Joe Doe</h3>
            <a className={styles.info}>February 14, 2023 4:00 PM</a>
          </div>
          <div className={styles.staffSelector}>
            <div className={styles.buttonSelector}>
              <span className={styles.select}>X</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.record}>
        <h1 className={styles.titleRecord}>Personal Information</h1>
        <div className={styles.top}>
          <div className={styles.photo}>
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
              <button className={styles.actionButton}>Update</button>
              <button className={styles.actionButton}>Delete</button>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <h3 className={styles.infoLabel}>Name:</h3>
                <span> Joe Doe</span>
              </div>
              <div className={styles.infoItem}>
                <h3 className={styles.infoLabel}>Address:</h3>
                <span>78 Ave SW, AB, Canada</span>
              </div>
              <div className={styles.infoItem}>
                <h3 className={styles.infoLabel}>Username:</h3>
                <span>joe_doe</span>
              </div>
              <div className={styles.infoItem}>
                <h3 className={styles.infoLabel}>Phone Number:</h3>
                <span>+1 587-123-4567</span>
              </div>
              <div className={styles.infoItem}>
                <h3 className={styles.infoLabel}>Email Address:</h3>
                <span>joe_doe@gmail.com</span>
              </div>
              <div className={styles.infoItem}>
                <h3 className={styles.infoLabel}>Status:</h3>
                <span>Active</span>
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
          <div className={styles.itemList}>
            <div className={styles.itemContainer}>
              <h3 className={styles.itemTitle}>Most Recent Haircuts: </h3>
              <div className={styles.item}>
                <h3 className={styles.itemLabel}>Name:</h3>
                <div className={styles.itemInfo}> Joe Doe</div>
              </div>
              <div className={styles.item}>
                <h3 className={styles.itemLabel}>Name:</h3>
                <div className={styles.itemInfo}> Joe Doe</div>
              </div>
            </div>
            <div className={styles.itemContainer}>
              <h3 className={styles.itemTitle}>Availability: </h3>

              <div className={styles.item}>
                <h3 className={styles.itemLabel}>Name:</h3>
                <div className={styles.itemInfo}> Joe Doe</div>
              </div>
              <div className={styles.item}>
                <h3 className={styles.itemLabel}>Name:</h3>
                <div className={styles.itemInfo}> Joe Doe</div>
              </div>
            </div>
            <div className={styles.itemContainer}>
              <h3 className={styles.itemTitle}>Lastest Updates:: </h3>

              <div className={styles.item}>
                <h3 className={styles.itemLabel}>Name:</h3>
                <div className={styles.itemInfo}> Joe Doe</div>
              </div>
              <div className={styles.item}>
                <h3 className={styles.itemLabel}>Name:</h3>
                <div className={styles.itemInfo}> Joe Doe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
