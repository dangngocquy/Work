
function Work(){
	return(
		<>
	        <title>Chi tiết công việc | Division work</title>
	        <div className="Work">
			    <div className="Assign">
				    <div className="button">
	                    <div className="circular__flex">
	                        <div className="text__flex">
	                            <div className="button__name">
	                                <span style={{fontWeight: 'bold'}}>Tên CV1: Phân chia tài liệu theo danh sách</span>
	                            </div>
	                        </div>
	                    </div>
	                </div>
                </div>
                <div className="Steps">
                    <h1>CHỌN CÁC BƯỚC ĐÃ THỰC HIỆN</h1>
                    <div className="Work__checkbox">
                       <input type="checkbox"/>
                       <p>Tên Bước 1</p>
                    </div>
                    <div className="Work__checkbox">
                       <input type="checkbox"/>
                       <p>Tên Bước 2</p>
                    </div>
                    <div className="Work__checkbox">
                       <input type="checkbox"/>
                       <p>Tên Bước 3</p>
                    </div>
                </div>
                <button className="work__btn">Cập nhật</button>
            </div>
		</>
	)
}
export default Work;