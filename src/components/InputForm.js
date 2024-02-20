import React, { useState } from 'react';


const InputForm = ({ addUser, updateUser, initialData }) => {
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.id) {
      updateUser(formData);
    } else {
      addUser(formData);
    }
    setFormData({ id: '', name: '', email: '', password:'' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <label>
        AddressMail:
        <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <label>
        Password:
        <input type="text" name="password" value={formData.password} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
    
  );
};

export default InputForm;