import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CgMenuGridO, CgProfile } from 'react-icons/cg';
import { BiSearch } from 'react-icons/bi';
import { IoMdClose, IoMdNotifications } from 'react-icons/io';
import { AiFillSetting, AiOutlineLogout } from 'react-icons/ai';
import { Logo2, avatar } from '../asset';

function Header (){
    const [DropDown, setDropDown] = useState(false);
	return(
		<div className="Header">
            <div className="Header__flex__icon">
            	<CgMenuGridO size={32} color="#fff" className="icon__CgMenuGridO"/>
  
            	    <Link to="/Dashboard">
            	        <img src={Logo2} className="Logo"/>
            	    </Link>
	            <div className="Search">
	                <BiSearch size={22}/>
	                <input type="text" placeholder="Tìm kiếm bla bla..."/>
	                <IoMdClose size={22}/>
	            </div>
            </div>

            <div className="Avatar__flex">
            {/* <div className="icon__flex">
	                <AiFillSetting size={32}  color="#fff"className="icon__AiFillSetting"/>
	                <IoMdNotifications size={32} color="#fff" className="icon__IoMdNotifications"/>
                </div>*/}
            	{DropDown
	            ?   <div className="zoom__img" onClick={() => setDropDown(false)}>
	                    <img src={avatar} className="Avatar"/>
	                    <div className="avatar__overlay"></div>
	                </div>
	            :   <div className="zoom__img" onClick={() => setDropDown(true)}>
	                    <img src={avatar} className="Avatar"/>
	                    <div className="avatar__overlay"></div>
	                </div>
	            }
	            {DropDown && (
	             <div className="Dropdown__Profile animation_dropdown">
	                <div className="Menu__profile">
	                  <Link className="Menu__profile__flex" to="profile"><CgProfile size={21}/>Hồ sơ</Link>
	                  <div className="border"></div>
	                  <p className="Menu__profile__flex"><AiOutlineLogout size={21}/>Đăng xuất</p>
	                </div>
	             </div>
	            )}
            </div>
		</div>
	)
}
export default Header;