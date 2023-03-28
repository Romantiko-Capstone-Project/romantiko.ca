import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "../../../styles/GalleryTab.module.css";

const ShopTab = () => {
    const [file, setFile] = useState(null);
    const [productName, setProductName] = useState(null);
    const [price, setPrice] = useState(null);
    const [description, setDescription] = useState(null);
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

    await axios.post("http://localhost:3000/api/products", newGallery);
      // setClose(true);
    setMsg(true);
    } catch (err) {
    console.log(err);
    }
    };

    useEffect(() => {
    const fetchImages = async () => {
    try {
        const { data } = await axios.get("http://localhost:3000/api/products");
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
        <h1>Product Form</h1>
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
        <div>
            <label>Product Name</label>
            <input 
                type="text" 
                onChange={(e) => setProductName(e.target.value)}
                className={styles.input}/>
        </div>
        <div>
            <label>Price</label>
            <input 
                type="number" 
                onChange={(e) => setPrice(e.target.value)}
                className={styles.input}/>
        </div>
        <div>
            <label>Description</label>
            <input 
                type="text" 
                onChange={(e) => setDescription(e.target.value)}
                className={styles.input}/>
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