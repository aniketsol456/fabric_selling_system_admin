import React, { useState } from 'react';
import './Coupon.css';

const Coupon = () => {
  const [coupons, setCoupons] = useState([
    { code: 'FABYOH50', validFrom: '01/11/2024', validTo: '31/03/2025', limitPerUser: 1 },
    { code: 'BLACKFRIDAY', validFrom: '01/11/2024', validTo: '01/02/2025', limitPerUser: 100 },
  ]);
  const [coupon, setCoupon] = useState({
    code: '',
    type: 'first-time',
    minValue: '',
    maxValue: '',
    validFrom: '',
    validTo: '',
    limitPerUser: '',
    discount: '',
    firstTime: '',
    enableCoupon: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCoupon({ ...coupon, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCoupons([...coupons, coupon]);
    setCoupon({
      code: '',
      type: 'first-time',
      minValue: '',
      maxValue: '',
      validFrom: '',
      validTo: '',
      limitPerUser: '',
      discount: '',
      firstTime: '',
      enableCoupon: false,
    });
  };

  const deleteCoupon = (couponCode) => {
    setCoupons(coupons.filter(coupon => coupon.code !== couponCode));
  };

  return (
    <div className="coupon-wrapper">
      <div className="coupon-form">
        <h2>Create a Coupon</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Coupon Code</label>
            <input
              type="text"
              name="code"
              value={coupon.code}
              onChange={handleInputChange}
              placeholder="Enter Coupon Code"
              required
            />
          </div>
          <div className="form-row">
            <label>Select Coupon Type</label>
            <select name="type" value={coupon.type} onChange={handleInputChange}>
              <option value="first-time">First Time Purchase</option>
              <option value="discount">Discount</option>
            </select>
          </div>
          <div className="form-row">
            <label>Min Value</label>
            <input
              type="number"
              name="minValue"
              value={coupon.minValue}
              onChange={handleInputChange}
              placeholder="$"
              required
            />
          </div>
          <div className="form-row">
            <label>Max Value</label>
            <input
              type="number"
              name="maxValue"
              value={coupon.maxValue}
              onChange={handleInputChange}
              placeholder="$"
              required
            />
          </div>
          <div className="form-row">
            <label>Valid From</label>
            <input
              type="date"
              name="validFrom"
              value={coupon.validFrom}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-row">
            <label>Valid To</label>
            <input
              type="date"
              name="validTo"
              value={coupon.validTo}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-row">
            <label>Limit Per User</label>
            <input
              type="number"
              name="limitPerUser"
              value={coupon.limitPerUser}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="add-coupon-btn">Save Coupon</button>
        </form>
      </div>

      <div className="coupon-table">
        <h3>Coupons List</h3>
        <table>
          <thead>
            <tr>
              <th>Coupon Code</th>
              <th>Valid From</th>
              <th>Valid To</th>
              <th>Limit Per User</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon) => (
              <tr key={coupon.code}>
                <td>{coupon.code}</td>
                <td>{coupon.validFrom}</td>
                <td>{coupon.validTo}</td>
                <td>{coupon.limitPerUser}</td>
                <td>
                  <button onClick={() => deleteCoupon(coupon.code)} className="delete-btn">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Coupon;
