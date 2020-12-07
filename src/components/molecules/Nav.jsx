//Nav() is used to supply all pages with a Navigation bar

//react core
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

//import styles
import '../../css/styles.css';

//import components

//navigation bar component
export default function Nav() {
  return (
    <>
      <Link to="/home">
        <Button variant="text">Home</Button>
      </Link>

      <Link to="/login">
        <Button>Login</Button>
      </Link>

      <Link to="/signup">
        <Button>Sign Up</Button>
      </Link>
    </>
  );
}
