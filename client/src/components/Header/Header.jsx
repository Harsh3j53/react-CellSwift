import { useEffect, useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";
import "./Header.scss";

const Header = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const [ShowCart, setShowCart] = useState(false);
  const [ShowSearch, setShowSearch] = useState(false);
  const {cartCount} = useContext(Context);
  const navigate = useNavigate();
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const scrollToCategory = (category) => {
    const element = document.getElementById(category);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => scrollToCategory('category')}>Categories</li>
            <li onClick={() => navigate("/Login")}>{props.name ? `${props.name}` : "Login/Signup"}</li>
            <li>About</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            <img src="./assests/logo.png" alt="CellSwift." />
          </div>
          <div className="right">
            <TbSearch onClick={()=>setShowSearch(true) }/>
            <AiOutlineHeart />
            <span className="cart-icon" onClick={()=>setShowCart(true) }>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {ShowCart && <Cart setShowCart={setShowCart} />}
      {ShowSearch && <Search setShowSearch={setShowSearch}/>}
    </>
  );
};

export default Header;
