import styles from "../../../styles/Gallery.module.css";
import Image from "next/image";
function GalleryStuff() {
  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}> 
        <div className={styles.cardContainer}>
          <div className={styles.imageContainer}>
            <Image
              src="/img/gallery/haircut.jpg"
              layout="fill"
              object-fit="contain"
            ></Image>
          </div>
          <h5>Hairstyle #1</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            mollis, nisi eu ullamcorper porttitor, urna sem sollicitudin mauris,
            et volutpat nibh quam vel lectus.
          </p>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.imageContainer}>
            <Image
              src="/img/gallery/haircut.jpg"
              layout="fill"
              object-fit="contain"
            ></Image>
          </div>
          <h5>Hairstyle #2</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            mollis, nisi eu ullamcorper porttitor, urna sem sollicitudin mauris,
            et volutpat nibh quam vel lectus.
          </p>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.imageContainer}>
            <Image
              src="/img/gallery/haircut.jpg"
              layout="fill"
              object-fit="contain"
            ></Image>
          </div>
          <h5>Hairstyle #3</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            mollis, nisi eu ullamcorper porttitor, urna sem sollicitudin mauris,
            et volutpat nibh quam vel lectus.
          </p>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.imageContainer}>
            <Image
              src="/img/gallery/haircut.jpg"
              layout="fill"
              object-fit="contain"
            ></Image>
          </div>
          <h5>Hairstyle #3</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            mollis, nisi eu ullamcorper porttitor, urna sem sollicitudin mauris,
            et volutpat nibh quam vel lectus.
          </p>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.imageContainer}>
            <Image
              src="/img/gallery/haircut.jpg"
              layout="fill"
              object-fit="contain"
            ></Image>
          </div>
          <h5>Hairstyle #3</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            mollis, nisi eu ullamcorper porttitor, urna sem sollicitudin mauris,
            et volutpat nibh quam vel lectus.
          </p>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.imageContainer}>
            <Image
              src="/img/gallery/haircut.jpg"
              layout="fill"
              object-fit="contain"
            ></Image>
          </div>
          <h5>Hairstyle #3</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            mollis, nisi eu ullamcorper porttitor, urna sem sollicitudin mauris,
            et volutpat nibh quam vel lectus.
          </p>
        </div>




       
      </div>
    </div>
  );
}

export default GalleryStuff;
