
import '../styles/header.css';
function Header() {
  return (
    <div className="header">
      <ul>
        <li>Logo</li>
      </ul>
      <ul className="flex">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Header;
