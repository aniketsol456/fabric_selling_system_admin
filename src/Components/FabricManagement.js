import React, { useState, useEffect } from "react";
import axios from "axios";
import './FabricManagement.css';

const FabricManagement = () => {
  const [formData, setFormData] = useState({
    name: "",
    color: "",
    type: "",
    weight: "",
    fabricContent: "",
    width: "",
    design: "",
    price: 0,
    discount: 0,
  });

  const [fabrics, setFabrics] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFabrics = async () => {
    try {
      setLoading(true); // Start loading
      const response = await axios.get("http://localhost:8009/fabric/all"); // Updated endpoint
      setFabrics(response.data.fabrics); // Ensure backend returns fabrics array
      setLoading(false); // Stop loading
    } catch (error) {
      console.error("Error fetching fabrics:", error);
      setLoading(false); // Stop loading on error
    }
  };

  useEffect(() => {
    fetchFabrics();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8009/fabric/create", formData); // Updated endpoint
      setFabrics([...fabrics, response.data.storedFabric]); // Update local state with the new fabric
      setFormData({
        name: "",
        color: "",
        type: "",
        weight: "",
        fabricContent: "",
        width: "",
        design: "",
        price: 0,
        discount: 0,
      });
    } catch (error) {
      console.error("Error adding fabric:", error);
    }
  };

  return (
    <div className="fabric-management-page">
      <h1>Fabric Management</h1>

      {/* Add Fabric Form */}
      <form onSubmit={handleSubmit}>
        {["name", "color", "type", "weight", "fabricContent", "width", "design"].map((field) => (
          <div key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleInputChange}
              required
            />
          </div>
        ))}
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Discount:</label>
          <input
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Fabric</button>
      </form>

      {/* Fabric List Table */}
      <h2>Fabric List</h2>
      {loading ? (
        <p>Loading fabrics...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Color</th>
              <th>Type</th>
              <th>Weight</th>
              <th>Fabric Content</th>
              <th>Width</th>
              <th>Design</th>
              <th>Price</th>
              <th>Discount</th>
            </tr>
          </thead>
          <tbody>
            {fabrics.map((fabric) => (
              <tr key={fabric._id}>
                <td>{fabric.name}</td>
                <td>{fabric.color}</td>
                <td>{fabric.type}</td>
                <td>{fabric.weight}</td>
                <td>{fabric.fabricContent}</td>
                <td>{fabric.width}</td>
                <td>{fabric.design}</td>
                <td>{fabric.price}</td>
                <td>{fabric.discount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FabricManagement;
