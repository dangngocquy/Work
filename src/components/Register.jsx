import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
function Register(){
	return(
		<>
		<title>Register | Division work</title>
		<div className="Background__login">
		    <form style={{width: 'auto'}}>
		        <h1 style={{background: '#f0f0f0', width: '100%', textAlign: 'center', marginBottom: '1.5rem', padding: '16px 0', borderTopLeftRadius: '6px', borderTopRightRadius: '6px'}}>Register</h1>
			    <div style={{padding: '0 2rem'}} className="form__input">
				    <div className="form__input__flex">
					    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
						    <input type="text" placeholder="Họ" className="Login__input"/>
						    <input type="text" placeholder="Tên" className="Login__input"/>
						    <input type="email" placeholder="Địa chỉ Email" className="Login__input"/>
						    <input type="text" placeholder="Tên tài khoản" className="Login__input"/>
					    </div>
					    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
						    <input type="date" placeholder="Ngày sinh" className="Login__input"/>
						    <input type="password" placeholder="Mật khẩu" className="Login__input"/>
						    <input type="password" placeholder="Nhập lại mật khẩu" className="Login__input"/>
					    </div>
				    </div>
				    <div className="Login__cheked">
					    <div className="Login__checkbox">
					        <input type="checkbox" className="Login__input"/>
					        <p>Lưu mật khẩu</p>
					    </div>
				        <button type="submit">Register</button>
				    </div>
			    </div>
			    <span style={{background: '#f0f0f0', width: '100%', display: 'flex', alignItems: 'center', fontSize: '13px', gap: '6px', alignItems: 'center', justifyContent: 'center', padding: '16px', marginTop: '16px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '6px' }}>
			        <Link to="#/" style={{color: '#0078d4'}}>Quên mật khẩu?</Link>
			    </span>
		    </form>
		</div>
		<footer className="form__Login__footer">
			<div>Copyright <AiOutlineCopyrightCircle/> Division work 2022</div>
			<div>
				<Link to="#/" style={{color: '#0078d4', marginRight: '3px'}}>Chính sách</Link>{"-"}
				<Link to="#/" style={{color: '#0078d4', marginLeft: '3px'}}>Bảo mật</Link>
			</div>
		</footer>
		</>
	)
}
export default Register;