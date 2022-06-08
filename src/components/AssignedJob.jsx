import RoundProgress from './RoundProgress';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { AiOutlineCheck } from 'react-icons/ai';
import { useState } from 'react';

function AssignedJob() {
    const [DropDownmenu, setDropDownmenu] = useState(false);
    return(
        <>
            <title>Việc đã làm | Division work</title>
            <div className="WorkDone">
                <div className="Filter">
                    <div style={{display: 'inline-block'}}>
                        <h1 style={{paddingBottom: '1rem'}}>Bộ lọc</h1>
                        <div className="WorkDone__filter">
                            <p style={{fontSize: '13px', fontWeight: 'bold'}}>Thời gian</p>
                            <span style={{display: 'flex', flexDirection: 'row', gap: '5px'}}>
                                <p style={{fontSize: '13px'}}>từ</p>
                                <input type="date" className="Date__WorkDone"/>
                                <p style={{fontSize: '13px'}}>đến</p>
                                <input type="date" className="Date__WorkDone"/>
                            </span>
                        </div>
                    </div>
                    <div>
                        <h1 style={{paddingBottom: '1rem'}}>Loại công việc</h1>
                        <div>
                            {DropDownmenu ?<div onClick={() => setDropDownmenu(false)} className="List__work">Danh sách công việc<RiArrowDropDownLine size={28}/></div>
                                          :<div onClick={() => setDropDownmenu(true)} className="List__work">Danh sách công việc<RiArrowDropUpLine size={28}/></div>
                            }
                            {DropDownmenu && (
                                <div className="from__menu__filter">
                                    <div className="WorkDone__from">
                                        <p>Việc đã hoàn thành</p>
                                    </div>
                                    <div className="WorkDone__from">
                                        <p>Việc đã quá hạn</p>
                                    </div>
                                    <div className="WorkDone__from">
                                        <p>Việc đã thu hồi</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <h1 style={{marginBottom: '2rem'}}>Kết quả</h1>
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
                                    <div style={{display: 'flex', color: 'rgb(3, 166, 109)', gap: '8px', alignItems: 'center'}}>
                                        <AiOutlineCheck className="icon__AiOutlineCheck"/>
                                        <p style={{fontSize: '11px'}}>Thành công</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <RoundProgress/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AssignedJob;