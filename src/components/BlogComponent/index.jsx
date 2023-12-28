import React from "react";
import blog from "../../assets/images/blog.png";

const BlogComponent = () => {
    return (
        <>
            <section className="blogHeader">
                <h1>ბლოგი</h1>
                <img src={blog} alt="blogpng" />
            </section>
            <div className="categories">
                <div className="flx_cat">
                <div className="cat_list">მარკეტი</div>
                <div className="cat_list">აპლიკაცია</div>
                <div className="cat_list">ხელოვნური ინტელექტი</div>
                <div className="cat_list">UI/UX</div>
                <div className="cat_list">კვლევა</div>
                <div className="cat_list">Figma</div>
                </div>
            </div>
        </>
    )
}

export default BlogComponent;