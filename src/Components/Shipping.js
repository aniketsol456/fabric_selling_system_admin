import React from 'react';
import './Shipping.css';

const Shipping = () => {
    return (
        <div class="shipping-form">
            <h2>Shipping Fees</h2>
            <form>
                <div class="form-group">
                    <label for="shipping-fees">Shipping Fees</label>
                    <input type="text" id="shipping-fees" placeholder="$ 50" />
                </div>
                <div class="form-group">
                    <label for="min-value">Min Value</label>
                    <input type="text" id="min-value" placeholder="$ 200" />
                    <small>Min value to avoid shipping fees</small>
                </div>
                <div class="form-group">
                    <label for="expected-delivery">Expected Delivery</label>
                    <input type="text" id="expected-delivery" placeholder="3" />
                    <small>Enter no.of.days will take to deliver the order</small>
                </div>
                <button type="submit" class="save-btn">Save</button>
            </form>
        </div>

    )
}

export default Shipping
