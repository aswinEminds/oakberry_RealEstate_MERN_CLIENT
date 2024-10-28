import React, { useState } from "react";
import "./addProperty.css";
import Form from "react-bootstrap/Form";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { addProperty } from "../../api/property_api";
import { useNavigate } from "react-router-dom";

const AddProperty = () => {
  // State for all input fields
  const [propertyName, setPropertyName] = useState("");
  const [propertyLocation, setPropertyLocation] = useState("");
  const [propertyType, setPropertyType] = useState("1");
  const [propertyImage, setPropertyImage] = useState(null);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [totalSqft, setTotalSqft] = useState(0);
  const [originalAmount, setOriginalAmount] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the form data
    const newProperty = {
      property_name: propertyName,
      property_location: propertyLocation,
      property_type: propertyType,
      propert_images: propertyImage,
      bedrooms,
      bathrooms,
      total_sqft: totalSqft,
      original_amount: originalAmount,
      discounted_amount: discountAmount,
      property_owner: localStorage.getItem("token"),
    };

    const res = await addProperty(newProperty);
    if (res) {
      setPropertyName("");
      setPropertyLocation("");
      setPropertyType("1");
      setPropertyImage(null);
      setBedrooms(0);
      setBathrooms(0);
      setTotalSqft(0);
      setOriginalAmount(0);
      setDiscountAmount(0);
    }

    alert("Property Added successfully..");
    navigate("/");
  };

  return (
    <div className="add-property-parent">
      <div className="container">
        <div className="heading">
          <i
            className="fa-solid fa-building-circle-check"
            style={{ color: "#ffffff", fontSize: 32 }}
          ></i>
          <h2>Add Property</h2>
        </div>
        <Form className="add-property-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="propertyName">
            <Form.Label>Property Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Eg: Deluxe villa in Beach side"
              value={propertyName}
              onChange={(e) => setPropertyName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="propertyLocation">
            <Form.Label>Property Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Eg: Pondicherry"
              value={propertyLocation}
              onChange={(e) => setPropertyLocation(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="propertyType">
            <Form.Label>Property Type</Form.Label>
            <Form.Select
              aria-label="Select property type"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              required
            >
              <option value="1">Rent</option>
              <option value="2">Sale</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="propertyImage">
            <Form.Label>Select Product Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setPropertyImage(e.target.files[0])}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="bedrooms">
            <Form.Label>Bedrooms</Form.Label>
            <Form.Control
              type="number"
              placeholder="0"
              value={bedrooms}
              onChange={(e) => setBedrooms(Number(e.target.value))}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="bathrooms">
            <Form.Label>Bathrooms</Form.Label>
            <Form.Control
              type="number"
              placeholder="0"
              value={bathrooms}
              onChange={(e) => setBathrooms(Number(e.target.value))}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="totalSqft">
            <Form.Label>Total Sq.ft</Form.Label>
            <Form.Control
              type="number"
              placeholder="0"
              value={totalSqft}
              onChange={(e) => setTotalSqft(Number(e.target.value))}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="originalAmount">
            <Form.Label>Original Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="0"
              value={originalAmount}
              onChange={(e) => setOriginalAmount(Number(e.target.value))}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="discountAmount">
            <Form.Label>Discount Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="0"
              value={discountAmount}
              onChange={(e) => setDiscountAmount(Number(e.target.value))}
              required
            />
          </Form.Group>

          <PrimaryButton text="Add Property" />
        </Form>
      </div>
    </div>
  );
};

export default AddProperty;
