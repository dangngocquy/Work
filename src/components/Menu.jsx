import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { MdWork, MdAssignment } from 'react-icons/md';
import { RiDraftFill } from 'react-icons/ri';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { BiHistory } from 'react-icons/bi';
import Header from './Header';

function Menu (){
	const navLinkStyle = ({ isActive }) => ({
	    color: isActive ? "#0078d4" : "",
	    backgroundColor: isActive ? "#fff" : ""
    })
    const [toggleMenu, setToggleMenu] = useState(false);
	return(
		<div className="Menu__flex">
		    <div className="Grid__1">
		        <Header/>
		    </div>
			<div className="Flex__body">
				<div className="Menu Grid__2">
	                <NavLink to="/Dashboard/" style={navLinkStyle} className="Menu__active Menu_padding"> <MdWork size={20}/> <span style={{whiteSpace: 'nowrap'}}>Công việc</span></NavLink>
	                <NavLink to="Assign" style={navLinkStyle} className="Menu__active Menu_padding"> <MdAssignment size={20}/> <span style={{whiteSpace: 'nowrap'}}>Giao việc</span></NavLink>
	                <NavLink to="Draft" style={navLinkStyle} className="Menu__active Menu_padding"> <RiDraftFill size={20}/> <span style={{whiteSpace: 'nowrap'}}>Bản nháp</span></NavLink>
					{toggleMenu
					? <div className="Menu__active Menu_padding" onClick={() => setToggleMenu(false)}> <BiHistory size={20}/> <span style={{whiteSpace: 'nowrap'}}>Lịch sử</span><FiChevronUp size={20} /></div>
					: <div className="Menu__active Menu_padding" onClick={() => setToggleMenu(true)}> <BiHistory size={20}/> <span style={{whiteSpace: 'nowrap'}}>Lịch sử</span><FiChevronDown size={20} /></div>
					}
					{toggleMenu && (
						<div className="animation_dropdown">
		                <NavLink to="WorkDone" style={navLinkStyle} className="Menu__active Menu_padding"> <span>Việc đã làm</span></NavLink>
		                <NavLink to="AssignedJob" style={navLinkStyle} className="Menu__active Menu_padding"> <span>Việc đã giao</span></NavLink>
					</div>
					)}
				</div>
				<div className="Grid__3">
				    <Outlet/>
				</div>
			</div>
		</div>
	)
}
export default Menu;