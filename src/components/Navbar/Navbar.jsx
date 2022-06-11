import React ,{useState} from 'react'
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import "./navbar.css"

const Navbar = () => {
   const [showMenu, setShowMenu] = useState(false);

  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className='nav nav_container'>
        <div className='nav_logo'>
            ACADEMICAS
        </div>
        <div className='nav_li'  id={showMenu ? "nav-li-mobile" : "nav-li-mobile-hide"}>
            <a href='#features'>Features</a>
            <a href='#matches'>Fixtures</a>
            <a href='#teamtrophies'>Trophies</a>
            <a href='#'>About</a>
            <a href='#'>Contact Us</a>
        </div>

        <div className="menu-icons" onClick={toogleMenu}>
        {showMenu ? (
          <RiCloseLine color="#fff" size={30} />
        ) : (
          <AiOutlineBars color="#fff" size={27} />
        )}
      </div>
    </div>
  )
}

export default Navbar