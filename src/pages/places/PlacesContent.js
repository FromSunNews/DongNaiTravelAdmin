import React, {
  useEffect,
  useState,
  memo
} from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import Card from '../../components/bootstrap/card'
import DataTable from '../../components/DataTable'
import { FaPlusCircle } from 'react-icons/fa'
import $ from "jquery"
import { cloneDeep } from 'lodash'
import ReactPaginate from 'react-paginate'
import CustomPagination from '../../components/CustomPagination'
import { useDispatch, useSelector } from 'react-redux'
import { addCategoryData, deleteCategoryData, selectCurrentSafetyReport, updateCategoryData } from '../../redux/safety_report/SafetyReportSlice'
// import MDEditor from '@uiw/react-md-editor'
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

import * as SettingSelector from '../../redux/settings/settingsSlice'

const PlacesContent = () => {
  const themeScheme = useSelector(SettingSelector.theme_scheme)
  
  const fakeValueContent = "![image](https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTNjKlQDFkixHA15yXfh7b7fNNEeIOXE5GvCS44Ol4SSZ_c61wVFweEuLMpDMBbMJe_B4IhhLt9OkncptcKRf8Js_MP6C4ut3zVH0oduQ)\n\n# LỊCH TRÌNH DU LỊCH ĐỒNG NAI\n\nChào mừng đến Đồng Nai - một nơi kết hợp giữa lịch sử, nghệ thuật, ẩm thực và cảnh quan đẹp. Dưới đây là lịch trình của chúng tôi cho chuyến đi của bạn với ngân sách là 5 triệu đồng và bạn muốn một kỳ nghỉ đôi. Hãy sẵn sàng cho một chuyến đi tuyệt vời và đáng nhớ!\n\n## Ngày 1: Khám phá thành phố Biên Hòa\n\n### Trùng Khánh Memorial House\n\n- Địa chỉ: 168T Trần Hưng Đạo, Phường Tân Tiến, Biên Hòa\n- Giá vé: miễn phí\n- Giờ tham quan: 8:00 sáng - 5:00 chiều\n\nTrùng Khánh Memorial House nằm tại trung tâm thành phố Biên Hòa với kiến trúc phương Tây kết hợp với kiểu Nhật, tọa lạc trong khuôn viên rộng và yên tĩnh. Nơi đây bao gồm một bảo tàng với các tài liệu, hiện vật về Trần Trọng Kim - người sáng lập ra Đài Truyền hình Việt Nam và một nhà văn, kịch tác tài ba.\n\n### Công Viên Văn Hóa Đồng Nai\n\n- Địa chỉ: Số 13 đường Phan Chu Trinh, Phường Tân Phong, Biên Hòa\n- Giá vé: miễn phí\n- Giờ tham quan: 6:00 sáng - 9:00 tối\n\nCông Viên Văn Hóa Đồng Nai là một công viên rộng lớn với những cảnh quan đẹp, dường như được thiết kế để thu hút các tín đồ của nghệ thuật và giải trí. Nơi đây cũng là nơi diễn ra các hoạt động văn hóa cho địa phương và các sự kiện giải trí hàng năm.\n\n### Ăn tối tại Chợ Bến Thành\n\n- Địa chỉ: 150-152 Lê Duẩn, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh\n- Giá vé: từ 100.000 đồng - 200.000 đồng\n- Thời gian hoạt động: 6:00 sáng - 10:00 tối\n\nChợ Bến Thành là một nơi không thể bỏ qua khi đến Sài Gòn, nơi bạn có thể thưởng thức hơn 300 loại đặc sản, các món ăn đường phố và những món ăn truyền thống của Nam Bộ. Đây là nơi lý tưởng cho bữa tối đầu tiên của bạn tại Đồng Nai!\n\n## Ngày 2: Tham quan các điểm đến ngoài trời\n\n### Thiên Đường Thác Bà Đôn\n\n- Địa chỉ: Phường Tân Tiến, Thành phố Biên Hòa\n- Giá vé: 25.000 đồng - 30.000 đồng\n- Giờ tham quan: 8:00 sáng - 5:00 chiều\n\nThác Bà Đôn là một trong những điểm du lịch nổi tiếng tại Đồng Nai, thu hút khách du lịch với giai điệu nhạc nước và những thước phim nước đang chảy. Bạn có thể dạo bộ trên cây cầu xoắn thắt, quan sát thác nước và tìm hiểu sự sống động của đặc sản địa phương.\n\n### Công viên Sơn Tiên\n\n- Địa chỉ: Khu đại lộ Võ Thị Sáu, Phường Tân Phong, TP.Biên Hòa \n- Giá vé: 30.000 đồng - 40.000 đồng\n- Giờ tham quan: 8:00 sáng - 4:00 chiều\n\nCông viên Sơn Tiên có diện tích gần 1.500ha với nhiều vị trí đẹp như hồ tiêu, ao sen, đồi cỏ, tuyến đường băng cũ và chiến trường Can Lộc. Nơi đây cũng có các hoạt động giải trí và vui chơi, bao gồm chèo thuyền, đi xe đạp, leo núi, trượt tuyết và nhiều hơn nữa.\n\n### Sân golf Đầm Vạc\n\n- Địa chỉ: Đồi Trường Sơn, Xã Hòa Bình, Huyện Tân Phú, TP. Đồng Nai\n- Giá vé: 400.000 đồng - 1.200.000 đồng\n- Giờ tham quan: cả ngày\n\nSân golf Đầm Vạc là nơi lý tưởng cho những tay golf hoặc những ai muốn tìm hiểu về môn thể thao này. Bạn có thể tận hưởng không gian xanh mát, thử thách tay golf của mình và tìm hiểu những tiêu chuẩn và công nghệ mới nhất trong golf.\n\n### Ăn tối tại Nếp Cẩm - Chợ Lớn\n\n- Địa chỉ: Vòng xoay Chợ Lớn, TP. Biên Hòa\n- Giá vé: từ 50.000 đồng - 120.000 đồng\n- Giờ hoạt động: 10:00 sáng - 10:00 tối\n\nNếp Cẩm - Chợ Lớn là một khu vực ẩm thực nổi tiếng với các món ăn địa phương và món ăn truyền thống của Việt Nam. Đây là nơi lý tưởng cho bữa ăn cuối cùng của bạn trong ngày thứ hai tại Đồng Nai.\n\n## Ngày 3: Khám phá lịch sử\n\n### Chiến khu Dầu Tiếng\n\n- Địa chỉ: Xã An Lập, Huyện Dầu Tiếng, Tỉnh Bình Dương\n- Giá vé: miễn phí\n- Giờ tham quan: 7:00 sáng - 6:00 chiều và từ 7:00 sáng đến 3:00 chiều vào thứ 7 và chủ nhật\n\nChiến khu Dầu Tiếng là một bộ giáp phòng không từng được sử dụng trong Chiến tranh Việt Nam, nằm ở đông nam Tây Ninh và Bình Dương. Bạn có thể tham quan các vị trí chiến lược, trại lính và các di tích khác của chiến tranh này.\n\n### Chùa Long Khánh\n\n- Địa chỉ: Phường Long Bình, TP. Biên Hòa\n- Giá vé: miễn phí\n- Giờ tham quan: 7:00 sáng - 5:00 chiều\n\nChùa Long Khánh được xây dựng vào thế kỷ 16 và là một trong những chùa lớn nhất ở Đồng Nai. Nơi đây có kiến trúc đặc sắc và nhiều di tích văn hóa lịch sử, bao gồm các tượng Phật được chạm khắc tinh xảo.\n\n### Bảo tàng Đồng Nai\n\n- Địa chỉ: số 100 Đường Đồng Khởi, Phường Quang Vinh, TP. Biên Hòa\n- Giá vé: 30.000 đồng - 50.000 đồng\n- Giờ tham quan: 8:00 sáng - 5:00 chiều\n\nBảo tàng Đồng Nai là một bảo tàng lịch sử với hơn 10.000 hiện vật liên quan đến lịch sử, văn hóa, địa lý và kinh tế của Đồng Nai.Bạn có thể tìm hiểu về lịch sử của thành phố và địa phương này thông qua các hiện vật và trưng bày tại đây.\n\n### Ăn tối tại Nhà hàng Thúy Nga\n\n- Địa chỉ: 180-182 Phạm Văn Thuận, Phường Tân Mai, TP. Biên Hòa \n- Giá vé: từ 200.000 đồng - 350.000 đồng\n- Giờ hoạt động: 10:00 sáng - 10:00 tối\n\nNhà hàng Thúy Nga có không gian sang trọng và menu đa dạng với nhiều món ăn đặc sản và các món ăn được làm từ đặc sản của địa phương.\n\n## Ngày 4: Hưởng thụ nghệ thuật và giải trí\n\n### Sân vận động Thống Nhất\n\n- Địa chỉ: Đường Lê Đức Thọ, Phường Phú Hữu, Quận 9, TP. Hồ Chí Minh\n- Giá vé: từ 50.000 đồng - 200.000 đồng\n- Giờ hoạt động: cả ngày\n\nNếu bạn muốn tham gia một trận bóng đá, đây là nơi lý tưởng để trải nghiệm. Sân vận động Thống Nhất là sân nhà của đội tuyển bóng đá quốc gia Việt Nam và cũng là nơi tổ chức các trận đấu quan trọng của giải bóng đá quốc gia.\n\n### Bảo tàng Mỹ thuật Đông Nam Á\n\n- Địa chỉ: số 7 Lê Văn Sỹ, Phường 1, Quận Tân Bình, TP. Hồ Chí Minh\n- Giá vé: từ 50.000 đồng - 100.000 đồng\n- Giờ tham quan: 9:00 sáng - 5:00 chiều\n\nBảo tàng Mỹ thuật Đông Nam Á hiện có hơn 20.000 tác phẩm của hơn 3.000 nghệ sĩ từ Đông Nam Á và các quốc gia khác. Bạn có thể ngắm nhìn những kiệt tác của nghệ thuật của Đông Nam Á và cảm nhận không gian nghệ thuật độc đáo.\n\n### Câu lạc bộ Thăng Long\n\n- Địa chỉ: số 74 Đỗ Quang, Phường Cống Vị, Quận Ba Đình, TP. Hà Nội\n- Giá vé: từ 50.000 đồng - 200.000 đồng\n- Giờ hoạt động: 9:00 sáng - 10:00 tối\n\nCâu lạc bộ Thăng Long là một nơi tuyệt vời để thưởng thức các bộ phim mình yêu thích, tập trung vào những bộ phim độc đáo, kinh điển của điện ảnh trong nước và nước ngoài. Nơi đây có một quầy bar và các hoạt động giải trí khác để bạn thư giãn sau khi xem phim.\n\n### Ăn tối tại Quán Ăn Người Làm Phim\n\n- Địa chỉ: 74 Nguyễn Khánh Toàn, Phường Quan Hoa, Quận Cầu Giấy, TP. Hà Nội \n- Giá vé: từ 100.000 đồng - 300.000 đồng\n- Giờ hoạt động: 10:00 sáng - 10:00 tối\n\nQuán Ăn Người Làm Phim là một nhà hàng với thiết kế độc đáo, tôn vinh nghệ thuật điện ảnh, với món ăn ngon và giá cả hợp lý.\n\n## Ngày 5: Tận hưởng cuối tuần tuyệt vời\n\n### Khu Du lịch Thác Giang Điền\n\n- Địa chỉ: Xã Phú Lý, Huyện Vĩnh Cửu, Đồng Nai\n- Giá vé: 50.000 đồng - 100.000 đồng\n- Giờ tham quan: 7:00 sáng - 5:30 chiều\n\nKhu Du lịch Thác Giang Điền nằm trong khu rừng Ngầm, với nhiều thác nước đẹp và các khu vườn hoa được bố trí đẹp mắt. Bạn có thể khám phá các khu vườn, thưởng thức đặc sản và tham gia các trò chơi dân gian.\n\n### Chợ Bàu Sen\n\n- Địa chỉ: thị trấn Bến Cát, Huyện Bến Cát, Tỉnh Bình Dương\n- Giá vé: miễn phí\n- Giờ tham quan: 7:00 sáng - 12:00 trưa\n\nChợ Bàu Sen là một chợ nổi tiếng với các loại hàng hoá đa dạng, bao gồm thực phẩm, quần áo, giày dép và đồ dùng gia đình. Bạn có thể tìm mua các món ăn đặc sản và đồ lưu niệm cho những người thân yêu.\n\n### Ăn tối tại Nhà hàng Phố Cổ\n\n- Địa chỉ: 20 Đào Duy Từ, Phường Hàng Buồm, Quận Hoàn Kiếm, TP. Hà Nội \n- Giá vé: từ 200.000 đồng - 400.000 đồng\n- Giờ hoạt động: 10:00 sáng - 10:00 tối\n\nNhà hàng Phố Cổ nằm ở trung tâm Hà Nội, với kiến trúc cổ điển và tinh tế. Nơi đây có các món ăn đặc sản phong phú, đa dạng từ đủ các vùng miền của Việt Nam.\n\n## Tổng kết\n\nĐó là lịch trình của chúng tôi cho chuyến đi tới Đồng Nai, hy vọng rằng bạn sẽ tận dụng hết ngày nghỉ của mình để khám phá được nhiều địa điểm mới lạ, trải nghiệm ẩm thực, tận hưởng không gian thiên nhiên, và tham gia các hoạt động giải trí thú vị. Chúc bạn có một chuyến đi đáng nhớ!"
  const mdParser = new MarkdownIt();
  const [valueEditor, setValueEditor] = useState(fakeValueContent)
  function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text);
    setValueEditor(text)
  }
  return (
    <>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header>
                <div className='d-flex flex-row w-100 align-items-center justify-content-between'>
                  <h4 className="card-title mb-0 fw-bold">Tạo nội dung</h4>
                  {/* <Button onClick={() => handleShowModal('CREATE_MODE')} variant="success" className='d-flex flex-row align-items-center px-2 py-1'>
                      <span class="btn-inner me-2">
                          <FaPlusCircle />
                      </span>
                      <div>Tạo mới</div>
                  </Button> */}
                  
                </div>
            </Card.Header>

            <Card.Body>
            <Row>
              <Col>
              {/* <div data-color-mode={themeScheme} m='10px 0'>
                <MDEditor
                  height='100vh'
                  value={valueEditor}
                  onChange={setValueEditor}
                />
              </div> */}
              <div data-color-mode={themeScheme} m='10px 0'>
                <MdEditor 
                  style={{ height: '100vh' }} 
                  renderHTML={text => mdParser.render(text)} 
                  onChange={handleEditorChange} 
                  value={valueEditor}
                />
              </div>
              </Col>
            </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </>
  )
}

export default memo(PlacesContent)