import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../../styles/AdminServices.module.css";
import Image from "next/image";
import DeleteIcon from '@mui/icons-material/Delete';

const ServicesTab = () => {
  const [file, setFile] = useState(null);
  const [serviceName, setServiceName] = useState(null);
  const [servicePrice, setServicePrice] = useState(null);
  const [serviceDescription, setServiceDescription] = useState(null);
  const [msg, setMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null)

  const handleCreate = async () => {
    setLoading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads"); //make sure the folder in the cloud is the same
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dyk9lstek/image/upload",
        data
      );
      // console.log(uploadRes.data);
      const { url } = uploadRes.data;
      const newServices = {
        serviceName,
        price: servicePrice,
        description: serviceDescription,
        img: url,
      };
      console.log(newServices);

      await axios.post("http://localhost:3000/api/services", newServices);
      // setClose(true);
      setImages([...images, { img: url }]);
      setMsg(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemove = async (id) => {
    try {
      console.log(id)
      await axios.delete(`http://localhost:3000/api/services/${id}`);
      setImages(images.filter((image) => image._id !== id));

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/services");
        setImages(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchImages();
  }, [images]);


  // eidt button
  const updateButton = async () => {

    if (!selectedServiceId) return;
    try {

      const _service = {
        serviceName,
        price, description
      }

      await axios.put(`http://localhost:3000/api/services/${selectedServiceId}`);

    } catch (error) {
      console.error(error)
    }
  }

  // handle edit
  const handleEditService = async (service) => {
    setModal(true)
    setServiceName(service.serviceName)
    setServicePrice(service.price)
    setServiceDescription(service.description)
    setSelectedServiceId(service._id)
  }

  return (
    <div className={styles.servicesContainer}>

      <div className={styles.container}>
        <div className={styles.imagesContainer}>
          {images.map((image) => (
            <div className={styles.imgContainer} key={image._id}>
              <Image
                src={image.img}
                alt="Haircut img not found"
                width="205"
                height="205"
              />
              <button className={styles.deleteButton}><DeleteIcon onClick={() => handleRemove(image._id)} /></button>
              <button className={styles.editButton} onClick={() => handleEditService(image)}>Edit</button>
              <div>
                Service Name: {image.serviceName}
              </div>
              <div>
                Price: {image.price}
              </div>
              <div>
                Description: {image.description}
              </div>
              {modal && (
                <div className={styles.modal}>
                  <div className={styles.overlay}>
                    <div className={styles.modalContent}>
                      <div className={styles.formContainer}>
                        <label>Choose an image: </label>
                        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                        <br></br>

                        <label>Service name: </label>
                        <input value={serviceName} type="text" placeholder={image.serviceName} onChange={(e) => setServiceName(e.target.value)} />
                        <br></br>
                        <label>Price:</label>
                        <input
                          value={servicePrice}
                          type="number"
                          onChange={(e) => setServicePrice(e.target.value)}
                        />
                        <br></br>
                        <label>Description: </label>

                        <textarea
                          value={serviceDescription}
                          onChange={(e) => setServiceDescription(e.target.value)}
                          placeholder="Description here..."
                        />
                        <br></br>
                        <button onClick={updateButton}>Edit</button>
                        {msg && <h3>The image has been succesfully uploaded.</h3>}
                        <button className="closeButton">CLOSE</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>



          ))}
        </div>
      </div>





    </div>


  );
};

export default ServicesTab;

// import Dropzone from "react-dropzone";
// import Masonry from "react-masonry-css";
// import { FaTrash } from "react-icons/fa";
// import styled from "styled-components";

// const breakpoints = {
//   default: 3,
//   1100: 3,
//   700: 2,
//   500: 1,
// };

// function GalleryTab() {
//   const [images, setImages] = useState([]);

//   const handleDrop = (acceptedFiles) => {
//     setImages([...images, ...acceptedFiles]);
//   };

//   const handleRemove = (index) => {
//     const newImages = [...images];
//     newImages.splice(index, 1);
//     setImages(newImages);
//   };

//   return (
//     <div>
//       <Dropzone onDrop={handleDrop}>
//         {({ getRootProps, getInputProps }) => (
//           <DropzoneWrapper {...getRootProps()}>
//             <input {...getInputProps()} />
//             <p>Drag and drop some files here, or click to select files</p>
//           </DropzoneWrapper>
//         )}
//       </Dropzone>
//       <Masonry breakpointCols={breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
//         {images.map((image, index) => (
//           <ImageWrapper key={index}>
//             <RemoveButton onClick={() => handleRemove(index)}>
//               <FaTrash />
//             </RemoveButton>
//             <Image src={URL.createObjectURL(image)} alt={`Image ${index}`} />
//           </ImageWrapper>
//         ))}
//       </Masonry>

//     </div>
//   );

// }

// const DropzoneWrapper = styled.div`
//   border: 2px dashed #ccc;
//   padding: 50px;
//   text-align: center;
//   margin-top: 50px;
//   margin-left: 50px;
// `;

// const ImageWrapper = styled.div`
//   position: relative;
// `;

// const RemoveButton = styled.button`
//   position: absolute;
//   top: 0;
//   right: 0;
//   background-color: #ff3b3b;
//   color: white;
//   border: none;
//   font-size: 1rem;
//   padding: 0.5rem;
//   border-radius: 0.5rem;
//   cursor: pointer;
//   z-index: 10;
// `;

// const Image = styled.img`
//   display: block;
//   width: 100%;
//   height: auto;
//   border-radius: 0.5rem;
//   margin-bottom: 1rem;
// `;

// export default GalleryTab;
