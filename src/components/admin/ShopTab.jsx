import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "../../../styles/ShopTab.module.css";

const ShopTab = () => {
  const [file, setFile] = useState(null);

  const [productName, setProductName] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState(null);
  const [msg, setMsg] = useState(false);

  const [products, setProducts] = useState([]);

  const [isEditMode, setIsEditMode] = useState(false);

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
      const { url } = uploadRes.data; //url of img after API call.

      const _product = {
        productName,
        price,
        description,
        img: url,
      };
      console.log(_product);

      await axios.post("http://localhost:3000/api/products", _product);
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
        if (JSON.stringify(products) !== JSON.stringify(data)) {
          setProducts(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchImages();
  }, [products]);

  const handleClickDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleUpdate = async (id) => {
    try {
      setIsEditMode((prevState) => !prevState);
      // await axios.put(`http://localhost:3000/api/products/${id}`);
      const selectedProduct = id;
      console.log(selectedProduct);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickUpdate = async (id) => {

    
  };

  const [_file, _setFile] = useState(null);
  const [_productName, _setProductName] = useState(null);
  const [_description, _setDescription] = useState(null);
  const [_price, _setPrice] = useState(null);
  const [_msg, _setMsg] = useState(false);

  return (
    <div className={styles.container}>
      
      

      <h1 className={styles.pageTitle}>Manage Shop</h1>
      <div className={styles.left}>
      <div className={styles.createForm}>
      <div className="update-form">
        <h4>Create a Product</h4>
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
            className={styles.input}
            placeholder="Product Name..."
            size="25"
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            className={styles.input}
            placeholder="Price..."
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            className={styles.input}
            placeholder="Description..."
          />
        </div>
        <button className={styles.uploadButton} onClick={handleCreate}>Create</button>
      </div>
      </div>
      </div>
      <br></br>
      <div className={styles.right}>
      <div className={styles.container}>
        <div className={styles.productsContainer}>
          {products.map((product) => (
            <div className={styles.productContainer} key={product._id}>
              <Image
                src={product.img}
                alt="Haircut img not found"
                width="200"
                height="200"
              />
              <h2>{product.productName}</h2>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <div className={styles.createFormButtons}>
                <button 
                  className={styles.deleteButton} 
                  onClick={() => handleClickDelete(product._id)}>
                    Delete
                </button>
                <button 
                  className={styles.updateButton}
                  onClick={() => toggleUpdate(product._id)}>
                    Edit
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>
        {isEditMode && (
          <div className={styles.updateForm}>
            <div className="update-form">
              <h1>Update Form</h1>
              <br></br>
              <div>
                <label>Choose an image</label>
                <br></br>
                {/* Get rid of br and uses flex-box. */}
                <input
                  type="file"
                  onChange={(e) => _setFile(e.target.files[0])}
                  onClick={() => setMsg(false)}
                />
                {msg && <h3>The image has been succesfully uploaded.</h3>}
              </div>
              <div>
                <label>Product Name</label>
                <input
                  type="text"
                  onChange={(e) => _setProductName(e.target.value)}
                  className={styles.input}
                />
              </div>
              <div>
                <label>Price</label>
                <input
                  type="number"
                  onChange={(e) => _setPrice(e.target.value)}
                  className={styles.input}
                />
              </div>
              <div>
                <label>Description</label>
                <input
                  type="text"
                  onChange={(e) => _setDescription(e.target.value)}
                  className={styles.input}
                />
              </div>
              <button onClick={handleClickUpdate}>Upload</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopTab;
