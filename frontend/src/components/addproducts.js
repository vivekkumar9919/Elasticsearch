import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constant'
import {
    barcodeData, unitData, brandData,
    categoryData, subCategory, businessLocation, taxApplicable, productType
} from '../utils/addProductDropDown'

import '../style/addProduct.css';



const AddProduct = () => {
    const [formData, setFormData] = useState({
        productName: '',
        sku: '',
        barcodeType: '',
        unit: '',
        brand: '',
        category: '',
        subCategory: '',
        businessLocation: '',
        manageStock: '',
        alertQuantity: '',
        productDescription: '',
        weight: '',
        sellingStatus: 'Not for Selling',
        taxApplicable: 'None',
        sellingPriceTaxType: 'Exclusive',
        productType: '',
        excTax: '',
        incTax: '',
        margin: '20',
        defaultSellingPriceExc: '',
        defaultSellingPriceInc: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data:', formData, BASE_URL);
        try {
            const response = await axios.post(`${BASE_URL}api/products/add`, formData);

            console.log(response?.data);
            if (response.status === 200 || response.status === 201) {
                console.log('Product added successfully:', response.data);
                // You can reset the form or show a success message
            } else {
                console.error('Error adding product:', response.statusText);
                // Handle errors
            }
        } catch (error) {
            console.error('Error making the API call:', error);
        }
    };

    const handleImageUpload = (e) => {
        console.log('Image uploaded:', e.target.files);
    };

    return (
        <div className="add-product-container">
            <div className="header">
                <h1>Products</h1>
                <span className="subtitle">Add New Product</span>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-grid">
                    {/* Row 1 */}
                    <div className="form-group">
                        <label>Product name</label>
                        <div className="input-with-icon">
                            <i className="icon-box"></i>
                            <input
                                type="text"
                                placeholder="Product name"
                                name="productName"
                                value={formData.productName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>SKU</label>
                        <div className="input-with-icon">
                            <i className="icon-barcode"></i>
                            <input
                                type="text"
                                placeholder="SKU"
                                name="sku"
                                value={formData.sku}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Barcode Type*</label>
                        <select
                            name="barcodeType"
                            value={formData.barcodeType} // Single selected value
                            onChange={handleChange}
                        >
                            {barcodeData.map((type, index) => (
                                <option key={index} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Unit*</label>
                        <select
                            name="unit"
                            value={formData.unit} // Single selected value
                            onChange={handleChange}
                        >
                            {unitData.map((type, index) => (
                                <option key={index} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Row 2 */}
                    <div className="form-group">
                        <label>Brand</label>
                        <select
                            name="brand"
                            value={formData.brand} // Single selected value
                            onChange={handleChange}
                        >
                            <option value="">Select Brand</option>
                            {brandData.map((type, index) => (
                                <option key={index} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Category</label>
                        <select
                            name="category"
                            value={formData.category} // Single selected value
                            onChange={handleChange}
                        >
                            <option value="">Select Category</option>
                            {categoryData.map((type, index) => (
                                <option key={index} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Sub Category</label>
                        <select
                            name="subCategory"
                            value={formData.subCategory} // Single selected value
                            onChange={handleChange}
                        >
                            <option value="">Select Sub Categories</option>
                            {subCategory.map((type, index) => (
                                <option key={index} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Business Location</label>
                        <select
                            name="businessLocation"
                            value={formData.businessLocation} // Single selected value
                            onChange={handleChange}
                        >
                            <option value="">Select Business Location</option>
                            {businessLocation.map((type, index) => (
                                <option key={index} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Row 3 */}
                    <div className="form-group">
                        <label>Manage Stock</label>
                        <div className="input-with-icon">
                            <i className="icon-stock"></i>
                            <input
                                type="text"
                                placeholder="Manage Stock"
                                name="manageStock"
                                value={formData.manageStock}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Alert Quantity</label>
                        <input
                            type="text"
                            placeholder="Alert Quantity"
                            name="alertQuantity"
                            value={formData.alertQuantity}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Product Description</label>
                        <input
                            type="text"
                            placeholder="Short Description"
                            name="productDescription"
                            value={formData.productDescription}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Upload Product Image</label>
                        <div className="upload-input">
                            <input
                                type="file"
                                onChange={handleImageUpload}
                                accept="image/*"
                                id="productImage"
                            />
                            <label htmlFor="productImage" className="upload-label">
                                <i className="icon-upload"></i>
                                Upload Product Image
                            </label>
                        </div>
                    </div>

                    {/* Additional rows for tax and pricing */}
                    <div className="form-group">
                        <label>Tax Applicable</label>
                        <select
                            name="taxApplicable"
                            value={formData.taxApplicable}
                            onChange={handleChange}
                        >
                            {taxApplicable.map((type, index) => (
                                <option key={index} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Selling Price Tax Type*</label>
                        <select
                            name="sellingPriceTaxType"
                            value={formData.sellingPriceTaxType}
                            onChange={handleChange}
                        >
                            <option value="Exclusive">Exclusive</option>
                            <option value="Inclusive">Inclusive</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Product Type</label>
                        <select
                            name="productType"
                            value={formData.productType} // Single selected value
                            onChange={handleChange}
                        >
                            <option value="">Select Product Type</option>
                            {productType.map((type, index) => (
                                <option key={index} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Excise Tax</label>
                        <input
                            type="text"
                            placeholder="Excise Tax"
                            name="excTax"
                            value={formData.excTax}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Inclusive Tax</label>
                        <input
                            type="text"
                            placeholder="Inclusive Tax"
                            name="incTax"
                            value={formData.incTax}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Margin</label>
                        <input
                            type="text"
                            placeholder="Margin"
                            name="margin"
                            value={formData.margin}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Default Selling Price (Exclusive)</label>
                        <input
                            type="text"
                            placeholder="Default Selling Price (Exclusive)"
                            name="defaultSellingPriceExc"
                            value={formData.defaultSellingPriceExc}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Default Selling Price (Inclusive)</label>
                        <input
                            type="text"
                            placeholder="Default Selling Price (Inclusive)"
                            name="defaultSellingPriceInc"
                            value={formData.defaultSellingPriceInc}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="button-group">
                        <button type="submit" className="btn-add">Add</button>
                        <button type="button" className="btn-close">Close</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
