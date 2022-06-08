import { Link } from 'react-router-dom';
import RoundProgress from './RoundProgress';
import { AiOutlineCheck } from 'react-icons/ai';

function Home (){
	return(
        <>
            <title>Công việc | Division work</title>
    		<div className="Container">
                <h1 style={{paddingBottom: '1rem'}}>Danh sách công việc</h1>
                <Link to="work" className="button">
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

                <Link to="work" className="button">
                    <div className="circular__flex">
                        <div className="text__flex">
                            <div className="button__name">
                                <span style={{fontWeight: 'bold',textAlign: 'left', marginBottom: '1.5rem'}}>
                                    <p>Tên CV2</p>
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
            </div>
        </>
	)
}
export default Home;