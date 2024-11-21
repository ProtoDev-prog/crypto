import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow_icon.png";
import "./Navbar.css";
function Navbar({ setFunction }) {
  function handleChange(e) {
    setFunction(e.target.value);
    console.log(e.target.value);
  }
  return (
    <nav className="nav-bar">
      <img src={logo} alt="" width={"150px"} />
      <div className="right">
        <select onChange={handleChange}>
          <option value="usd">USD</option>
          <option value="inr">INR</option>
          <option value="eur">EUR</option>
        </select>
        <button className="sign-btn">
          Sign Up <img src={arrow} alt="" />
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
