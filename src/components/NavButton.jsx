function NavButton({ children, handleClick }) {
  return <button onClick={handleClick}>{children}</button>;
}

export default NavButton;
