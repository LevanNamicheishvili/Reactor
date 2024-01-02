import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.png';
import BlogComponent from '../../components/BlogComponent';

const AdminPage = () => {
  const [blogData, setBlogData] = useState([]);
  const [displayCount, setDisplayCount] = useState(50);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.blog.redberryinternship.ge/api/blogs', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer e0839ac730a62807c9958067e6f2bd5e00dfe98e25b714da17db167ccbfa565a',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        setBlogData(responseData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <header>
        <li>
          <img src={logo} alt="logo.png" />
          <a href="/admin/blogupload">
          <button className='logInButt'>
            დაამატე ბლოგი
          </button>
          </a>
        </li>
      </header>
      <BlogComponent />
      <section className='containers_fetched_inf'>
        {blogData.slice(0, displayCount).map((item, index) => (
          <div className='KKFIde_flex' key={index}>
            <div style={{ marginBottom: 20 }} className={`inJJ_Dq ${item.categories.map(category => category.title.toLowerCase()).join(' ')}`}>
              <div className='Ig_ffSq'>
                <img src={item.image} alt="imgd" />
              </div>
              <div className='nameofpublisher'>
                <span>{item.author}</span>
              </div>
              <div className='dateofpublish'>
                <span>{item.publish_date}</span>
              </div>
              <div className='title_d'>
                <span>{item.title}</span>
              </div>
              <div className='cat_fetch_f'>
                {item.categories.map((item, index) => (
                  <span style={{ backgroundColor: item.background_color, color: item.text_color }} key={index}>{item.title}</span>
                ))}
              </div>
              <div className='text_fetch'>
                <p>{item.description}</p>
              </div>
              <span style={{ fontSize: 14, color: '#5D37F3', cursor: 'pointer' }}>სრულად ნახვა ↗</span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default AdminPage;
