import RoundProgress from './RoundProgress';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

function AssignedJob() {
    const Data = [{
            id:1,
            status: <div style={{display: 'flex', color: 'rgb(3, 166, 109)', gap: '8px', alignItems: 'center'}}>
                        <AiOutlineCheck className="icon__AiOutlineCheck"/>
                        <p style={{fontSize: '11px'}}>Thành công</p>
                    </div>
        },
        {
            id:2,
            status: <div style={{display: 'flex', color: '#ee671f', gap: '8px', alignItems: 'center'}}>
                        <AiOutlineClose className="AiOutlineClose"/>
                        <p style={{fontSize: '11px'}}>Thất bại</p>
                    </div>
        },
        {
            id:3,
            status: <div style={{display: 'flex', color: '#ee671f', gap: '8px', alignItems: 'center'}}>
                        <AiOutlineClose className="AiOutlineClose"/>
                        <p style={{fontSize: '11px'}}>Thất bại</p>
                    </div>
        }]
    return(
        <>
            <title>Việc đã làm | Division work</title>
           <div className="WorkDone">
                <div className="Filter">
                    <div style={{display: 'inline-block'}}>
                        <h1 style={{paddingBottom: '1rem'}}>Bộ lọc</h1>
                        <div className="WorkDone__filter">
                            {/*<p style={{fontSize: '13px', fontWeight: 'bold'}}>Thời gian</p>*/}
                            <span style={{display: 'flex', flexDirection: 'row', gap: '5px'}}>
                                <p style={{fontSize: '13px'}}>Từ</p>
                                <input type="date" className="Date__WorkDone"/>
                                <p style={{fontSize: '13px'}}>đến</p>
                                <input type="date" className="Date__WorkDone"/>
                                <p style={{fontSize: '13px'}}>loại công việc</p>
                                <select className="select">
                                    <option>
                                        Việc đã hoàn thành
                                    </option>
                                    <option>
                                        Việc đã quá hạn
                                    </option>
                                </select>
                            </span>
                        </div>
                    </div>
                </div>
                <h1 style={{marginBottom: '2rem'}}>Kết quả</h1>
                <div className="scroll__history">
                    {Data.map((Data__history) => (
                    <div className="button">
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
                                        <span style={{fontWeight: 'bold', paddingBottom: '10px', fontSize: '13px'}}>Trạng thái</span>
                                        {Data__history.status}
                                    </div>
                                </div>
                            </div>
                            <RoundProgress/>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default AssignedJob;
