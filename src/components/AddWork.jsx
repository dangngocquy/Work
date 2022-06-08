import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md';
import { IoIosAdd } from 'react-icons/io';
import Modali, { useModali } from "modali";

function AddWork(){
	const [addModal, toggleaddModal] = useModali({
    animated: true,
    title: "Thông báo",
    message: "Bạn có chắc chắn tạo công việc này?",
    buttons: [
      <Modali.Button
        label="Hủy"
        isStyleCancel
        onClick={() => toggleaddModal()}
      />,
      <Modali.Button
        label="Chắc chắn"
        isStyleDestructive
        onClick={() => alert("Giao việc thành công")}
      />
    ]
    });
	return(
		<>  
		    <title>Thêm công việc | Division work</title>
		    <div className="AddWork">
		        <h1 style={{paddingBottom: '1rem'}}>Danh sách công việc</h1>
		        <div className="from__Addwork">
			        <div className="AddWork__flex AddWork__flex__inline">
			            <span className="AddWork__size" style={{fontWeight: 'bold'}}>Nhập mã nhân viên:</span>
			            <input type="text"/>
			        </div>
			        <div className="AddWork__flex AddWork__flex__inline">
			            <span className="AddWork__size" style={{fontWeight: 'bold'}}>Đặt tên công việc:</span>
			            <input type="text"/>
			        </div>
			        <div className="AddWork__flex AddWork__flex__inline">
			            <span className="AddWork__size" style={{fontWeight: 'bold'}}>Thời gian từ</span>
			            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: '8px'}}>
				            <input type="date"/>
				            <input type="time"/>
				        </div>
				        <span className="AddWork__size" style={{fontWeight: 'bold'}}>đến</span>
				        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: '8px'}}>
				            <input type="date"/>
				            <input type="time"/>
			            </div>
			        </div>
		        </div>
		        <from className="AddWork__flex AddWork__flex__inline">
				        <div>
				            <span className="AddWork__size" style={{fontWeight: 'bold'}}>Bước của công việc</span>
				        </div>
				        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
					        <input type="text" placeholder="Bước 1"/>
					        <FiEdit size={36} className="icon__FiEdit"/>
					        <MdDeleteOutline size={36} className="icon__FiEdit"/>
				        </div>
			      </from>
		        <div style={{display: 'flex', alignItems: 'center', marginTop: '1.5rem'}}>
    		        <Link to="AddWork" style={{color: '#28304c'}} className="icon__IoIosAdd">
    		            <IoIosAdd size={26}/>
    		            <p>Thêm bước</p>
    		        </Link>
		        </div>
		        <div>
    		        <button className="work__btn" onClick={toggleaddModal}>Giao việc</button>
    		        <Modali.Modal {...addModal}/>
    		    </div>
		    </div>
		</>
	)
}
export default AddWork;