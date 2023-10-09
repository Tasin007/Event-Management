import React, { useState } from "react";

const Register = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    // You can perform validation on the file type and size here if needed
    setProfilePic(file);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can now use the 'profilePic' state and 'formData' state
    // to handle the uploaded file and registration data.
    // Send the file and data to your server or perform any necessary actions.
    console.log("Profile Picture:", profilePic);
    console.log("Form Data:", formData);
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="profilePic" className="block text-gray-700">
              Profile Picture:
            </label>
            <input
              type="file"
              id="profilePic"
              accept="image/*"
              onChange={handleProfilePicChange}
              className="w-full border rounded p-2 mt-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full border rounded p-2 mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border rounded p-2 mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full border rounded p-2 mt-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
