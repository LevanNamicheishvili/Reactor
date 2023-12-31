import React, { useState } from 'react';
import axios from 'axios';

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    author: '',
    publish_date: '',
    categories: [],
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleCategoriesChange = (e) => {
    const selectedCategories = Array.from(e.target.selectedOptions, (option) => parseInt(option.value));
    setFormData({ ...formData, categories: selectedCategories });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = new FormData();
    postData.append('title', formData.title);
    postData.append('description', formData.description);
    postData.append('image', formData.image);
    postData.append('author', formData.author);
    postData.append('publish_date', formData.publish_date);
    postData.append('categories', JSON.stringify(formData.categories));
    postData.append('email', formData.email);

    try {
      const response = await axios.post(
        'https://api.blog.redberryinternship.ge/api/blogs',
        postData,
        {
          headers: {
            'Authorization': 'Bearer e0839ac730a62807c9958067e6f2bd5e00dfe98e25b714da17db167ccbfa565a',
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log(response.status, response.statusText);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />

      <label>Description:</label>
      <textarea name="description" value={formData.description} onChange={handleInputChange} required />

      <label>Image:</label>
      <input type="file" name="image" onChange={handleImageChange} accept="image/*" required />

      <label>Author:</label>
      <input type="text" name="author" value={formData.author} onChange={handleInputChange} required />

      <label>Publish Date:</label>
      <input type="date" name="publish_date" value={formData.publish_date} onChange={handleInputChange} required />

      <label>Categories:</label>
      <select multiple name="categories" value={formData.categories} onChange={handleCategoriesChange} required>
        <option value="1">Category 1</option>
        <option value="2">Category 2</option>
        <option value="3">Category 3</option>
      </select>

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogForm;