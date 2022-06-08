import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
function Login(){
	return(
		<>
		<title>Login | Division work</title>
		<div className="Background__login">
		    <form>
		        <h1 style={{background: '#f0f0f0', width: '100%', textAlign: 'center', marginBottom: '1.5rem', padding: '16px 0', borderTopLeftRadius: '6px', borderTopRightRadius: '6px'}}>Login</h1>
			    <div style={{padding: '0 2rem'}} className="form__input">
				    <input type="text" placeholder="Username" className="Login__input"/>
				    <input type="password" placeholder="Password" className="Login__input"/>
				    <div className="Login__checkbox">
				        <input type="checkbox" className="Login__input"/>
				        <p>Lưu mật khẩu</p>
				    </div>
				    <div className="Login__cheked">
				        <Link to="#/">Quên mật khẩu?</Link>
				        <button type="submit">Login</button>
				    </div>
			    </div>
			    <span style={{background: '#f0f0f0', width: '100%', display: 'flex', alignItems: 'center', fontSize: '13px', gap: '6px', alignItems: 'center', justifyContent: 'center', padding: '16px', marginTop: '16px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '6px' }}>
			        <p>Chưa có tài khoản</p>
			        <Link to="/Register/" style={{color: '#0078d4'}}>Đăng ký</Link>
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
export default Login;