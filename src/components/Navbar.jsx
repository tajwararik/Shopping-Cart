import NavButton from "./NavButton";

function Navbar() {
  const buttons = ["Home", "Shop", "About"];

  return (
    <nav>
      {buttons.map((button, index) => (
        <NavButton key={index}>{button}</NavButton>
      ))}
    </nav>
  );
}

export default Navbar;
