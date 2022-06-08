import RoundProgress from './RoundProgress';
import { Link } from 'react-router-dom';
import { IoIosAdd } from 'react-icons/io';

function Assign (){
	return(
		<>
	        <title>Giao việc | Division work</title>
			<div className="Assign">
			   <div className="Container">
			       	<h1>Tạo công việc</h1>
                    <Link to="/Dashboard/work/" className="button">
	                    <div className="circular__flex">
	                        <div className="text__flex">
	                            <div className="button__name">
	                                <span style={{fontWeight: 'bold',textAlign: 'left', marginBottom: '1.5rem'}}>
	                                    <p>Tên CV1</p>
	                                    <p>Phân chia tài liệu theo danh sách</p>
	                                </span>
	                                <span>Người giao: Đặng Ngọc Quý</span>
	                            </div>
	                            <div className="flex__workdone">
	                                <div style={{display: 'flex', flexDirection: 'column'}}>
	                                    <span style={{textTransform: 'capitalize', paddingBottom: '10px', fontSize: '13px'}}>Thời gian bắt đầu</span>
	                                    <input type="date" className="Date__WorkDone"/>
	                                </div>
	                                <div className="Border__workdone"></div>
	                                <div style={{display: 'flex', flexDirection: 'column'}}>
	                                    <span style={{textTransform: 'capitalize', paddingBottom: '10px', fontSize: '13px'}}>Thời gian kết thúc</span>
	                                    <input type="date" className="Date__WorkDone"/>
	                                </div>
	                                <div className="Border__workdone"></div>
	                                <div style={{display: 'flex', flexDirection: 'column'}}>
	                                    <span style={{fontWeight: 'bold', paddingBottom: '10px', fontSize: '13px'}}>THỜI GIAN CÒN LẠI</span>
	                                    <div style={{display: 'flex', color: '#28304c', gap: '8px', alignItems: 'center'}}>
	                                        <h2>25 phút</h2>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                        <RoundProgress/>
	                        </div>
	                    </Link>

	                <div className="button">
	                    <div className="circular__flex">
	                        <div className="text__flex">
	                            <div className="button__name">
	                                <span style={{fontWeight: 'bold',textAlign: 'left', marginBottom: '1.5rem'}}>
	                                    <p>Tên CV1</p>
	                                    <p>Phân chia tài liệu theo danh sách</p>
	                                </span>
	                                <span>Người giao: Chề Triệu Vỹ</span>
	                            </div>
	                            <div className="flex__workdone">
	                                <div style={{display: 'flex', flexDirection: 'column'}}>
	                                    <span style={{textTransform: 'capitalize', paddingBottom: '10px', fontSize: '13px'}}>Thời gian bắt đầu</span>
	                                    <input type="date" className="Date__WorkDone"/>
	                                </div>
	                                <div className="Border__workdone"></div>
	                                <div style={{display: 'flex', flexDirection: 'column'}}>
	                                    <span style={{textTransform: 'capitalize', paddingBottom: '10px', fontSize: '13px'}}>Thời gian kết thúc</span>
	                                    <input type="date" className="Date__WorkDone"/>
	                                </div>
	                                <div className="Border__workdone"></div>
	                                <div style={{display: 'flex', flexDirection: 'column'}}>
	                                    <span style={{fontWeight: 'bold', paddingBottom: '10px', fontSize: '13px'}}>THỜI GIAN CÒN LẠI</span>
	                                    <div style={{display: 'flex', color: '#28304c', gap: '8px', alignItems: 'center'}}>
	                                        <h2>25 phút</h2>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                        <RoundProgress/>
	                        </div>
	                    </div>

    		        <div style={{display: 'flex', alignItems: 'center'}}>
	    		        <Link to="AddWork" style={{color: '#28304c'}} className="icon__IoIosAdd">
	    		            <IoIosAdd size={26}/>
	    		            <p>Tạo công việc</p>
	    		        </Link>
    		        </div>
    		    </div>
			</div>
		</>
	)
}
export default Assign;