import Image from "next/image";
import styles from '../../../styles/PersonalInformation.module.css'
const PersonalInformation = () => {
  return (
    <div>
      
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
              <span className={styles.infoInput}> Joe Doe</span>
            </div>
            <div className={styles.infoItem}>
              <h4 className={styles.infoLabel}>Address:</h4>
              <span className={styles.infoInput}>78 Ave SW, AB, Canada</span>
            </div>
            <div className={styles.infoItem}>
              <h4 className={styles.infoLabel}>Username:</h4>
              <span className={styles.infoInput}>joe_doe</span>
            </div>
            <div className={styles.infoItem}>
              <h4 className={styles.infoLabel}>Phone Number:</h4>
              <span className={styles.infoInput}>+1 587-123-4567</span>
            </div>
            <div className={styles.infoItem}>
              <h4 className={styles.infoLabel}>Email Address:</h4>
              <span className={styles.infoInput}>joe_doe@gmail.com</span>
            </div>
            <div className={styles.infoItem}>
              <h4 className={styles.infoLabel}>Status:</h4>
              <span className={styles.infoInput}>Active</span>
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
            <h5 className={styles.itemTitle}>Most Recent Bookings: </h5>
            <div className={styles.item}>
              <h5 className={styles.itemLabel}>Booking 1:</h5>
              <div className={styles.itemInfo}> Joe Doe</div>
            </div>
            <div className={styles.item}>
              <h5 className={styles.itemLabel}>Booking 2:</h5>
              <div className={styles.itemInfo}> Joe Doe</div>
            </div>
          </div>
          <div className={styles.itemContainer}>
            <h5 className={styles.itemTitle}>Availability: </h5>

            <div className={styles.item}>
              <h5 className={styles.itemLabel}>Time 1:</h5>
              <div className={styles.itemInfo}> Joe Doe</div>
            </div>
            <div className={styles.item}>
              <h5 className={styles.itemLabel}>Time 2:</h5>
              <div className={styles.itemInfo}> Joe Doe</div>
            </div>
          </div>
          <div className={styles.itemContainer}>
            <h5 className={styles.itemTitle}>Statistics </h5>

            <div className={styles.item}>
              <h5 className={styles.itemLabel}>Number of hours:</h5>
              <div className={styles.itemInfo}> Joe Doe</div>
            </div>
            <div className={styles.item}>
              <h5 className={styles.itemLabel}>Number of bookings:</h5>
              <div className={styles.itemInfo}> Joe Doe</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
