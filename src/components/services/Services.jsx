import styles from '../../../styles/services_style.module.css'
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";

const ServicesPage = () => {
  const [services, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/gallery%22");
        if (JSON.stringify(services) !== JSON.stringify(data)) {
          setServices(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchImages();
  }, [services]);

  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        {services.map((service) => (
          <div className={styles.imgContainer} key={service._id}>
            <Image
              src={service.img}
              alt="Service img not found"
              width="400"
              height="400"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;












// import { height } from "@mui/system";
// import React from "react";
// import { useState,useEffect } from "react";
// import axios from "axios";
// import styles from '../../../styles/services_style.module.css'
// import haircutImage from './h1.jpg';

// const [images, setImages] = useState([]);

// function ServicesPage(){
// return(
// <div>
//     <div className={styles.container}>
//         <div className={styles.service_card}>
//           <div className={styles.wrapper}>
//             <img src={haircutImage} alt="Haircut" width="400" height="400" style={{margin:20}}/>
//             <h1 className="haircut_title">This is the service title</h1>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla egestas euismod. Nulla sollicitudin felis sagittis, convallis libero eu, egestas dolor. Quisque mi ex, aliquet quis laoreet ut, elementum ac nulla. Quisque varius orci eu ultricies maximus. Praesent turpis purus, egestas et mattis vel, semper a sem. </p>
//                         <p><b>$99</b></p>
//                 <button className={styles.button}>Book now!</button>
//             </div>     
//         </div>

        

//     </div>

    
// </div>
// );
// }

// export default ServicesPage