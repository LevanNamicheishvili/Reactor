import React, { useState, useRef, useEffect } from "react";
import scs from '../../assets/images/apiimages/scs.png';
import {useNavigate} from 'react-router-dom';


const RegModal = ({ isModalVisible, setIsModalVisible }) => {
  const modalRef = useRef();
  const [email, setEmail] = useState("");
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, setIsModalVisible]);

  const handleLogin = async () => {
    try {
      const response = await fetch("https://api.blog.redberryinternship.ge/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 204) {
        console.log("Login successful!");
        document.cookie = "isLoggedIn=true; path=/";
        setIsModalVisible(false);
        navigate('/admin');
      } else {
        const data = await response.json();
        setLoginError(data.message || "An error occurred during login.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginError("ⓘ ელ-ფოსტა არ მოიძებნა");
    }
  };

  return (
    <>
      {isModalVisible && (
        <div
          className="modaLDA"
          ref={modalRef}
          onClick={() => setIsModalVisible(false)}
        >
          <div
            className="MOdalLDcontetn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modalHeaderClose">
              <span onClick={() => setIsModalVisible(false)}>X</span>
            </div>

            <div className="hffV">
              <span>შესვლა</span>
            </div>

            <div className="imodalinput">
              <div className="dinELm">
                <span>ელ-ფოსტა</span>
              </div>
              <div className="inputmodaltxt">
                <input
                  type="email"
                  placeholder="Example@redberry.ge"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {loginError && <div className="error-message">{loginError}</div>}

            <button type="submit" onClick={handleLogin}>
              შესვლა
            </button>


            <div className="succes hidden">
              <div className="modalHeaderClose">
                <span onClick={() => setIsModalVisible(false)}>X</span>
              </div>
              <div style={{display : "flex", justifyContent : "center", marginBottom : '16px'}}>
              <img  src={scs} alt="" />
              </div>
              <div style={{display : 'flex' , justifyContent : 'center'}}> 
                <span style={{ marginBottom: '40px', fontSize : '20px', fontWeight : 'bold' }}>წარმატებული ავტორიზაცია</span>
              </div>
              <button style={{fontWeight : 'bold'}} >კარგი</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegModal;
