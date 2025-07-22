import { Link } from "react-router-dom";
import NavButton from "./NavButton";

function Navbar({ buttons }) {
  return (
    <nav>
      {buttons.map((button, index) => (
        <Link
          key={index}
          to={button === "Home" ? "/" : `/${button.toLowerCase()}`}
        >
          <NavButton>{button}</NavButton>
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
