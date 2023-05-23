import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const contact = () => {
  return (
    <div className="contact">
      <div className="top">
        <h2>Contact Us</h2>
        <p>Email: info@moviewebsite.com</p>
        <p>Phone: +1-123-456-7890</p>
        <p>Address: 123 Movie Street, City, Country</p>
      </div>
      <div className="bottom">
        <a href="https://www.facebook.com/" target="blank">
          <AiFillFacebook className="icon" />
        </a>
        <a href="https://www.instagram.com/" target="blank">
          <AiOutlineInstagram className="icon" />
        </a>
      </div>
    </div>
  );
};

export default contact;
