import { Injectable } from '@angular/core';
interface Disease {
  name: string;
  description: string;
  affectedAreas?: string[];
  cases?: number;
  outbreaks?: number;
}

interface DiseaseReport {
  month: string;
  diseases: Disease[];
}

@Injectable({
  providedIn: 'root'
})
export class DiseaseService {
  private reports: { [key: string]: any } = {
    'January': {
      month: 'Tháng 1',
      diseases: [
        {
          name: 'Sốt xuất huyết',
          description: 'Số ca sốt xuất huyết bắt đầu tăng do điều kiện thời tiết thất thường với mưa nhiều và khí hậu ẩm.',
          solutions: [
            'Diệt lăng quăng, bọ gậy: Loại bỏ nơi sinh sản của muỗi, dọn dẹp môi trường và phun thuốc diệt muỗi định kỳ.',
            'Giám sát và xử lý ổ dịch: Phát hiện và xử lý kịp thời ổ dịch mới, đặc biệt ở khu vực nguy cơ cao.'
          ],
        },
        {
          name: 'Tay chân miệng',
          description: 'Tăng dần vào các tháng đầu năm, với khoảng 164 ca tính đến cuối tháng 3.',
          solutions: [
            'Vệ sinh cá nhân: Rửa tay thường xuyên bằng xà phòng, đảm bảo vệ sinh sạch sẽ ở trường học và nhà.',
            'Giám sát dịch tễ: Phát hiện và cách ly sớm các ca bệnh để tránh lây lan.'
          ],
        },
        {
          name: 'Cúm và các bệnh đường hô hấp',
          description: 'Thời tiết lạnh và ẩm ở Tây Nguyên khiến các ca bệnh cúm và viêm phổi gia tăng.',
          solutions: [
            'Tiêm vắc-xin cúm: Đặc biệt cho người già, trẻ nhỏ và nhóm nguy cơ cao.',
            'Thực hiện 2K (Khẩu trang - Khử khuẩn): Đặc biệt tại các khu vực đông người.'
          ],
        },
      ],
    },
    'February': {
      month: 'Tháng 2',
      diseases: [
        {
          name: 'Sốt xuất huyết',
          description: 'Sốt xuất huyết tiếp tục gia tăng mạnh trong tháng này.',
          solutions: [
            'Diệt lăng quăng, bọ gậy: Dọn dẹp các dụng cụ chứa nước và phun thuốc diệt muỗi.',
            'Tuyên truyền phòng dịch: Khuyến khích cộng đồng tham gia các hoạt động vệ sinh môi trường.'
          ],
        },
        {
          name: 'Cúm',
          description: 'Các ca bệnh cúm và viêm phổi gia tăng do thời tiết lạnh và ẩm.',
          solutions: [
            'Tiêm phòng cúm: Cần tổ chức thêm các điểm tiêm chủng tại địa phương.',
            'Hạn chế tiếp xúc đông người: Đặc biệt trong khu vực có nhiều bệnh nhân cúm.'
          ],
        },
      ],
    },
    'March': {
      month: 'Tháng 3 ',
      diseases: [
        {
          name: 'Sốt xuất huyết',
          description: 'Số ca mắc sốt xuất huyết tiếp tục tăng cao trong tháng 3.',
          solutions: [
            'Diệt lăng quăng, bọ gậy: Duy trì vệ sinh môi trường và phun thuốc diệt muỗi.',
            'Giám sát dịch bệnh: Đảm bảo xử lý ổ dịch ngay khi phát hiện.'
          ],
        },
        {
          name: 'Tay chân miệng',
          description: 'Số ca bệnh duy trì ở mức cao do thời tiết thuận lợi cho lây lan.',
          solutions: [
            'Giữ vệ sinh sạch sẽ: Rửa tay và vệ sinh cá nhân cẩn thận.',
            'Giám sát tại trường học: Đảm bảo không có ổ dịch lan rộng.'
          ],
        },
      ],
    },
    'April': {
      month: 'Tháng 4 ',
      diseases: [
        {
          name: 'Sốt xuất huyết',
          description: 'Dịch bệnh sốt xuất huyết tiếp tục lan rộng với nhiều ổ dịch mới.',
          solutions: [
            'Phun thuốc diện rộng: Triển khai chiến dịch tại các khu vực có nguy cơ cao.',
            'Hướng dẫn cộng đồng: Phổ biến cách phòng chống qua các buổi họp tổ dân phố.'
          ],
        },
        {
          name: 'Thủy đậu',
          description: 'Các ổ dịch nhỏ xuất hiện ở một số địa phương.',
          solutions: [
            'Tiêm phòng đầy đủ: Đặc biệt cho trẻ em chưa được tiêm phòng.',
            'Cách ly bệnh nhân: Tránh lây lan trong cộng đồng.'
          ],
        },
      ],
    },
    'May': {
      month: 'Tháng 5 ',
      diseases: [
        {
          name: 'Sốt xuất huyết',
          description: 'Tháng cao điểm của dịch sốt xuất huyết với nhiều ca mắc mới.',
          solutions: [
            'Tăng cường tuyên truyền: Nâng cao nhận thức của người dân.',
            'Giám sát nghiêm ngặt: Đảm bảo không có ổ dịch bị bỏ sót.'
          ],
        },
        {
          name: 'Thủy đậu',
          description: 'Các ca bệnh tăng nhanh tại các khu vực đông dân cư.',
          solutions: [
            'Tổ chức tiêm phòng: Mở rộng điểm tiêm chủng tại các trạm y tế.',
            'Đẩy mạnh truyền thông: Hướng dẫn cộng đồng về cách phòng tránh.'
          ],
        },
      ],
    },
    'June': {
      month: 'Tháng 6 ',
      diseases: [
        {
          name: 'Sốt xuất huyết',
          description: 'Thời tiết mưa nhiều làm số ca sốt xuất huyết tăng mạnh.',
          solutions: [
            'Phun thuốc diệt muỗi: Đặc biệt tại các vùng chịu ảnh hưởng nặng nề.',
            'Kiểm soát môi trường: Hướng dẫn người dân vệ sinh nơi sinh sống.'
          ],
        },
      ],
    },
    'July': {
      month: 'Tháng 7 ',
      diseases: [
        {
          name: 'Tay chân miệng',
          description: 'Dịch bệnh vẫn duy trì ở mức cao trong tháng này.',
          solutions: [
            'Vệ sinh lớp học: Đảm bảo môi trường học đường sạch sẽ.',
            'Cách ly bệnh nhân: Phát hiện sớm và điều trị kịp thời.'
          ],
        },
      ],
    },
    'August': {
      month: 'Tháng 8 ',
      diseases: [
        {
          name: 'Dịch bệnh mùa đông',
          description: 'Chuẩn bị cho sự bùng phát của các bệnh hô hấp vào cuối năm.',
          solutions: [
            'Tăng cường tiêm phòng: Tiêm chủng ngừa cúm trước mùa lạnh.',
            'Khuyến khích giữ ấm: Hướng dẫn cộng đồng chăm sóc sức khỏe.'
          ],
        },
      ],
    },
    'September': {
      month: 'Tháng 9 ',
      diseases: [
        {
          name: 'Cúm và bệnh hô hấp',
          description: 'Thời tiết giao mùa làm tăng nguy cơ lây nhiễm bệnh hô hấp.',
          solutions: [
            'Giữ vệ sinh tốt: Che miệng khi ho và rửa tay thường xuyên.',
            'Tăng cường truyền thông: Hướng dẫn cộng đồng về biện pháp phòng chống.'
          ],
        },
      ],
    },
    'October': {
      month: 'Tháng 10 ',
      diseases: [
        {
          name: 'Cúm và bệnh hô hấp',
          description: 'Các ca bệnh cúm tiếp tục tăng do khí hậu lạnh hơn.',
          solutions: [
            'Tiêm phòng cúm: Đặc biệt tại các vùng có khí hậu lạnh.',
            'Hướng dẫn giữ ấm: Tuyên truyền qua các kênh truyền thông địa phương.'
          ],
        },
      ],
    },
    'November': {
      month: 'Tháng 11 ',
      diseases: [
        {
          name: 'Dịch bệnh mùa đông',
          description: 'Bắt đầu mùa cao điểm của bệnh cúm và bệnh hô hấp.',
          solutions: [
            'Tăng cường vệ sinh cá nhân: Rửa tay và sử dụng khẩu trang.',
            'Giám sát chặt chẽ: Phát hiện và điều trị kịp thời các ca bệnh nặng.'
          ],
        },
      ],
    },
    'December': {
      month: 'Tháng 12 ',
      diseases: [
        {
          name: 'Dịch bệnh mùa đông',
          description: 'Thời tiết lạnh làm tăng nguy cơ bùng phát các bệnh truyền nhiễm qua đường hô hấp.',
          solutions: [
            'Tăng cường tuyên truyền: Nâng cao ý thức cộng đồng về phòng chống bệnh.',
            'Tiêm phòng đầy đủ: Tổ chức các chiến dịch tiêm phòng tại địa phương.'
          ],
        },
      ],
    },
  };
  

  constructor() {}

  // Lấy tháng hiện tại từ hệ thống
  getCurrentMonth(): string {
    const currentMonthIndex = new Date().getMonth(); // Lấy tháng hiện tại (0-11)
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[currentMonthIndex]; // Trả về tháng hiện tại
  }

  // Trả về dữ liệu của tháng hiện tại
  getDiseaseReportByCurrentMonth() {
    const currentMonth = this.getCurrentMonth();  // Lấy tháng hiện tại
    return this.reports[currentMonth];    // Trả về dữ liệu của tháng đó
  }

}
