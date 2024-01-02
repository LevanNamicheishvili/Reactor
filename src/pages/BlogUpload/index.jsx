import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../assets/images/logo.png';
import Select from 'react-select';
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
  const categories = [
    { value: '1', label: 'მარკეტი' },
    { value: '2', label: 'აპლიკაცია' },
    { value: '3', label: 'ხელოვნური ინტელექტი' },
    { value: '4', label: 'UI/UX' },
    { value: '5', label: 'კვლევა' },
    { value: '6', label: 'Figmas' }

  ];

  return (
    <>
      <header className='upldPageH'>
        <img src={logo} alt="" />
      </header>
      <div className="flexup">
        <div className="container_sl">
          <form className='subm' onSubmit={handleSubmit}>
            <h1>ბლოგის დამატება</h1>
            <div className="picuploderdiv">
              <label>ატვირთეთ ფოტო</label>
              <input type="file" name="image" onChange={handleImageChange} accept="image/*" required />

            </div>
            <div className="detailsusrtitle">
              <div className="detailuser">
                <label>ავტორი*</label>
                <input placeholder='შეიყვანეთ ავტორი' type="text" name="author" value={formData.author} onChange={handleInputChange} required />
                <div className="listcriteriums">
                  <li>∙ მინიმუმ 4 სიმბოლო</li>
                  <li>∙ მინიმუმ ორი სიტყვა</li>
                  <li>∙ მხოლოდ ქართული სიმბოლოები</li>
                </div>
              </div>
              <div className="detailtitle">
                <label>სათაური*</label>
                <input placeholder='შეიყვანეთ სათაური' type="text" name="title" value={formData.title} onChange={handleInputChange} required />
                <div className="listcriteriums">
                  <li>∙ მინიმუმ 2 სიმბოლო</li>
                </div>
              </div>
            </div>
            <div className="description_ls">
              <label>აღწერა*</label>
              <textarea placeholder='შეიყვანეთ აღწერა' name="description" value={formData.description} onChange={handleInputChange} required />
              <span>მინიმუმ 2 სიმბოლო</span>
            </div>
            <div className="fjjKK">
              <div className="date_in">
                <label>გამოქვეყნების თარიღი*</label>
                <input style={{ paddingLeft: '14px', paddingRight: '12px' }} type="date" name="publish_date" value={formData.publish_date} onChange={handleInputChange} required />
              </div>

              <div className="cat_ls">
                <label>კატეგორია*</label>
                <Select
                  isMulti
                  name="categories"
                  options={categories}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={(selectedOptions) =>
                    setFormData({ ...formData, categories: selectedOptions.map(option => option.value) })
                  }
                  required
                />
              </div>
            </div>
            <div className="email_ls">
              <label>ელ-ფოსტა</label>
              <input placeholder='Example@redberry.ge' type="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </div>
            <div className="submitionbtn">
              <button type="submit">გამოქვეყნება</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogForm;
