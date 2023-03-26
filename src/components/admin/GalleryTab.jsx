import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "../../../styles/GalleryTab.module.css";

const GalleryTab = () => {
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState(false);
  const [images, setImages] = useState([]);

  const handleCreate = async () => {
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
      const newGallery = {
        img: url,
      };
      console.log(newGallery);

      await axios.post("http://localhost:3000/api/gallery", newGallery);
      // setClose(true);
      setMsg(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/gallery");
        if (JSON.stringify(images) !== JSON.stringify(data)) {
          setImages(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchImages();
  }, [images]);

  return (
    <div>
      <div className="update-form">
        <h1>Gallery Form</h1>
        <br></br>
        <div>
          <label>Choose an image</label>
          <br></br>
          {/* Get rid of br and uses flex-box. */}
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            onClick={() => setMsg(false)}
          />
          {msg && <h3>The image has been succesfully uploaded.</h3>}
        </div>
        <button onClick={handleCreate}>Upload</button>
      </div>
      <div className={styles.container}>
        <div className={styles.imagesContainer}>
          {images.map((image) => (
            <div className={styles.imgContainer} key={image._id}>
              <Image
                src={image.img}
                alt="Haircut img not found"
                width="500"
                height="500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryTab;

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
