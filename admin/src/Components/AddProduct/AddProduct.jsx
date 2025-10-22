import React,{useState} from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

function AddProduct() {
    const [image,setImage] = useState(false);
    const [productDetails,setProductDetails] = useState({
        name: "",
        image: "",
        category: "",
        new_price: "",
        old_price: "",
    })

    const addProduct = () => {
        
    }


    const imageHandler = (e) => {
        console.log(e.target.files[0]);
        setImage(e.target.files[0]);
    }

    const changeHandler = (e) => {
        setProductDetails({...productDetails,[e.target.name]: e.target.value})
    }
    return (
        <div className='add-product'>
            <div className="add-product-itemfield">
                <p>Product title</p>
                <input type="text" value={productDetails.name} placeholder='Type here' name='name'onChange={changeHandler} />
            </div>
            <div className="add-product-price">
                <div className="add-product-itemfield">
                    <p>Price</p>
                    <input type="text" value={productDetails.old_price} name='old_price' onChange={changeHandler} placeholder='Type here' />
                </div>
                <div className="add-product-itemfield">
                    <p>Offer Price</p>
                    <input type="text" name='new_price' value={productDetails.new_price} placeholder='Type here' onChange={changeHandler}/>
                </div>
            </div>

            <div className="add-product-itemfield">
                <p>Product Category</p>
                <select name="category" className='add-product-selector' value={productDetails.category} onChange={changeHandler}>
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className="add-product-itemfield">
                <p>Product Image</p>
                <label htmlFor="file-input">
                    <img src={image?URL.createObjectURL(image):upload_area} className='add-product-thumnail-img' alt="" />
                </label>
                <input type="file" onChange={imageHandler} name='image' id='file-input' hidden />
            </div>
            <button className='add-product-btn'>ADD</button>
        </div>
    )
}

export default AddProduct
