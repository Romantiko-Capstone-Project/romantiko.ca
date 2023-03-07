import styles from "../../../styles/Gallery.module.css";
import Image from "next/image";
function GalleryStuff() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
           <img
              src="/img/gallery/haircut.jpg"
              className={styles.imagestuff}
            />
            <img
              src="/img/gallery/Haircut1.jpg"
              className={styles.imagestuff}
            />
            <img
              src="/img/gallery/haircut.jpg"
              className={styles.imagestuff}
            />
        </div>
        <div className={styles.column}>
           <img
              src="/img/gallery/Haircut2.jpg"
              className={styles.imagestuff}
            />
            <img
              src="/img/gallery/haircut.jpg"
              className={styles.imagestuff}
            />
            <img
              src="/img/gallery/haircut.jpg"
              className={styles.imagestuff}
            />
        </div>
        <div className={styles.column}>
           <img
              src="/img/gallery/haircut.jpg"
              className={styles.imagestuff}
            />
            <img
              src="/img/gallery/haircut.jpg"
              className={styles.imagestuff}
            />
            <img
              src="/img/gallery/Haircut3.jpg"
              className={styles.imagestuff}
            />
        </div>
        <div className={styles.column}>
           <img
              src="/img/gallery/haircut.jpg"
              className={styles.imagestuff}
            />
            <img
              src="/img/gallery/haircut.jpg"
              className={styles.imagestuff}
            />
            <img
              src="/img/gallery/haircut.jpg"
              className={styles.imagestuff}
            />
              <img
              src="/img/gallery/haircut.jpg"
              className={styles.imagestuff}
            />
        </div>
           



      </div>
      {/*<div className={styles.cardsContainer}> 
        <div className={styles.cardContainer}>
          <div className={styles.imageContainer}>
            <Image
              src="/img/gallery/haircut.jpg"
              layout="fill"
              object-fit="contain"
            ></Image>
          </div>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.imageContainer}>
            <Image
              src="/img/gallery/haircut.jpg"
              layout="fill"
              object-fit="contain"
            ></Image>
          </div>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.imageContainer}>
            <Image
              src="/img/gallery/haircut.jpg"
              layout="fill"
              object-fit="contain"
            ></Image>
          </div>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.imageContainer}>
            <Image
              src="/img/gallery/haircut.jpg"
              layout="fill"
              object-fit="contain"
            ></Image>
          </div>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.imageContainer}>
            <Image
              src="/img/gallery/haircut.jpg"
              layout="fill"
              object-fit="contain"
            ></Image>
          </div>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.imageContainer}>
            <Image
              src="/img/gallery/haircut.jpg"
              layout="fill"
              object-fit="contain"
            ></Image>
          </div>
        </div>




       
  </div>*/}
    </div>
  );
}

export default GalleryStuff;
