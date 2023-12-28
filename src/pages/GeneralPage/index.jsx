import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/index';
import BlogComponent from '../../components/BlogComponent/index';
import data from '../../data/localapi.json';

const GeneralPage = () => {
  const [blogData, setBlogData] = useState([]);
  const [displayCount, setDisplayCount] = useState(3);
  const [initialDisplayCount, setInitialDisplayCount] = useState(3);

  useEffect(() => {
    setBlogData(data);
  }, []);

  const handleShowMore = () => {
    setDisplayCount(blogData.length);
  };

  const handleShowLess = () => {
    setDisplayCount(initialDisplayCount);
  };

  return (
    <>
      <Header />
      <BlogComponent />

      <section className='containers_fetched_inf'>
        {blogData.slice(0, displayCount).map((item, index) => (
          <div className='KKFIde_flex' key={index}>
            <div className='inJJ_Dq'>
              <div className='Ig_ffSq'>
                <img src={item.img} alt="imgd" />
              </div>
              <div className='nameofpublisher'>
                <span>{item.fullname}</span>
              </div>
              <div className='dateofpublish'>
                <span>{item.date}</span>
              </div>
              <div className='title_d'>
                <span>{item.title}</span>
              </div>
              <div className='cat_fetch_f'>
                {item.categories.map((category, index) => (
                  <span key={index}>{category}</span>
                ))}
              </div>
              <div className='text_fetch'>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
        {displayCount < blogData.length ? (
          <>
            <button onClick={handleShowMore}>Show More</button>
            <button onClick={handleShowLess}>Show Less</button>
          </>
        ) : (
          <button onClick={handleShowLess}>Show Less</button>
        )}
      </section>
    </>
  );
};

export default GeneralPage;
