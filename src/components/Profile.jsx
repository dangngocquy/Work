import { avatar } from '../asset';
import { AiFillDelete } from 'react-icons/ai';
import { RiExchangeFundsLine } from 'react-icons/ri';

function Profile(){
	return(
		<>
		<title>Hồ sơ cá nhân Username | Division work</title>
		<h1 style={{marginBottom: '2rem', marginLeft: '2rem'}}>Thông tin cá nhân</h1>
	    <div className="Profile__flex">
			<div>
			   <img src={avatar} alt="Avatar Profile" className="Img__profile"/>
			   <button className="button__change__img"><RiExchangeFundsLine/>Thay đổi ảnh đại diện</button>
			   <button className="button_white"><AiFillDelete/>Xóa ảnh</button>
			</div>
			<div className="infomation__profile">
			    <div>
			        <span style={{fontWeight: 'bold', marginBottom: '5px'}}>Họ và tên</span>
			        <div className="From__profile">Đặng Ngọc Quý</div>
			    </div>
			    <div>
			        <span style={{fontWeight: 'bold', marginBottom: '5px'}}>Mã số nhân viên</span>
			        <div className="From__profile">S03053</div>
			    </div>
			    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
			        <span style={{fontWeight: 'bold'}}>Thay đổi mật khẩu</span>
			        <input type="password" placeholder="Nhập mật khẩu" className="input__profile"/>
			        <input type="password" placeholder="Nhập lại mật khẩu" className="input__profile"/>
			    </div>
			    <div className="button__check">
				    <button className="button_white">Hủy</button>
				    <button className="button__change__img" style={{marginBottom: '0'}}>Xác nhận</button>
			    </div>
			</div>
		</div>
		</>
	)
}
export default Profile;