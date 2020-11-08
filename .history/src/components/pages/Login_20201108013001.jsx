//react core

//import styles
import image from '../../artwork/7028de95-3f1c-4817-ac8e-846941592c57_200x200.png';
import '../../css/styles.css';

export default function Login() {
  return (
    <>
      <div className="INtStyle">
        <p> Welcome to Express Delivery </p>
        <p>
          {' '}
          If you are expecting a delivery please enter your package ID and click
          "find"{' '}
        </p>
        <img
          className="picture"
          src={image}
          alt="a package is delivered to the client "
        />
        <p> Please enter your name and phone number to login</p>
        <input placeholder="name" /> <input placeholder="phone number" />{' '}
        <div></div>
      </div>
    </>
  );
}
