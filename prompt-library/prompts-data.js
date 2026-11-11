/* Ý AI? – Prompt Library · dữ liệu (tách riêng khỏi giao diện)
 *
 * THÊM PROMPT MỚI: chép một khối trong mảng "prompts" rồi sửa các trường:
 *   id                 mã duy nhất, chữ thường không dấu (ví dụ "c9")
 *   title              tên prompt
 *   category           một trong: content, design, event, office, research, data, learning, sales, pm, ux
 *   target_audiences   danh sách id trong "audiences"
 *   goals              danh sách id trong "goals" (dùng cho bộ lọc Mục tiêu công việc)
 *   purpose            mục đích sử dụng (1–2 câu)
 *   use_cases          tình huống ứng dụng
 *   prompt             toàn bộ nội dung prompt; phần người dùng tự điền đặt trong [ngoặc vuông]
 *   required_inputs    thông tin cần chuẩn bị trước khi dùng
 *   verification       lưu ý kiểm chứng kết quả
 *   difficulty         de | trung-binh | nang-cao
 *   tags               từ khóa đời thường để tìm kiếm
 *   compatible_tools   công cụ AI dùng được
 *   time, rank, added  thời gian ước tính, thứ tự gợi ý (số nhỏ đứng trước), ngày thêm (YYYY-MM-DD)
 * Lời dặn dành cho AI trong prompt dùng ngoặc kép, không dùng ngoặc vuông.
 */
window.YAI_DATA = {
  "version": "2.0",
  "petals": [
    {
      "id": "p1",
      "name": "Sáng tạo nội dung",
      "categories": [
        "content",
        "design"
      ]
    },
    {
      "id": "p2",
      "name": "Con người và văn hóa",
      "categories": [
        "event",
        "learning"
      ]
    },
    {
      "id": "p3",
      "name": "Vận hành",
      "categories": [
        "office",
        "pm"
      ]
    },
    {
      "id": "p4",
      "name": "Dữ liệu và nghiên cứu",
      "categories": [
        "research",
        "data"
      ]
    },
    {
      "id": "p5",
      "name": "Khách hàng và sản phẩm",
      "categories": [
        "sales",
        "ux"
      ]
    }
  ],
  "categories": [
    {
      "id": "content",
      "name": "Content & Communication",
      "vi": "Nội dung và truyền thông",
      "petal": "p1",
      "desc": "Viết bài đăng, email, thư mời và chuyển một nội dung thành nhiều định dạng."
    },
    {
      "id": "design",
      "name": "Design & Creative",
      "vi": "Thiết kế và sáng tạo",
      "petal": "p1",
      "desc": "Tạo hình minh họa, phát triển concept, key visual và kịch bản video."
    },
    {
      "id": "event",
      "name": "Event & Culture",
      "vi": "Sự kiện và văn hóa",
      "petal": "p2",
      "desc": "Lên ý tưởng chương trình, viết kịch bản MC, thiết kế hoạt động gắn kết."
    },
    {
      "id": "office",
      "name": "Office Productivity",
      "vi": "Hiệu quả công việc",
      "petal": "p3",
      "desc": "Tóm tắt tài liệu, chuẩn bị cuộc họp, chuyển ghi chú thành việc cần làm."
    },
    {
      "id": "research",
      "name": "Research & Analysis",
      "vi": "Nghiên cứu và phân tích",
      "petal": "p4",
      "desc": "Động não ý tưởng, tìm nguyên nhân gốc rễ, phản biện đề xuất."
    },
    {
      "id": "data",
      "name": "Data & Reporting",
      "vi": "Dữ liệu và báo cáo",
      "petal": "p4",
      "desc": "Viết báo cáo từ số liệu, phân tích phản hồi khảo sát, trực quan hóa dữ liệu."
    },
    {
      "id": "learning",
      "name": "Learning & HR",
      "vi": "Đào tạo và nhân sự",
      "petal": "p2",
      "desc": "Thiết kế buổi đào tạo, soạn câu hỏi kiểm tra, lập kế hoạch hội nhập nhân viên mới."
    },
    {
      "id": "sales",
      "name": "Sales & Customer Service",
      "vi": "Kinh doanh và chăm sóc khách hàng",
      "petal": "p5",
      "desc": "Phản hồi khách hàng, soạn câu hỏi thường gặp, luyện tư vấn bằng nhập vai."
    },
    {
      "id": "pm",
      "name": "Project Management",
      "vi": "Quản lý dự án",
      "petal": "p3",
      "desc": "Lập kế hoạch triển khai, báo cáo tiến độ, nhận diện và theo dõi rủi ro."
    },
    {
      "id": "ux",
      "name": "Đánh giá và tối ưu giao diện",
      "vi": "UI Design Audit",
      "petal": "p5",
      "desc": "Dùng AI đánh giá giao diện website, landing page, ứng dụng: 12 prompt, quy trình 6 bước, mẫu báo cáo và checklist.",
      "process": {
        "title": "Quy trình UI Design Audit 6 bước",
        "intro": "Dùng AI để đánh giá giao diện có căn cứ, không chỉ nhận xét cảm tính. Làm lần lượt 6 bước; bước 1 điền một lần trong phần Tùy chỉnh, các prompt hỗ trợ từ bước 2 đến bước 6.",
        "example_label": "Ví dụ minh họa: màn hình đăng ký sự kiện nội bộ trên điện thoại",
        "steps": [
          {
            "title": "Xác định bối cảnh",
            "items": [
              "Giao diện thuộc sản phẩm nào?",
              "Người dùng mục tiêu là ai?",
              "Mục tiêu chính của màn hình là gì?",
              "Người dùng cần thực hiện hành động nào?"
            ],
            "example": "Sản phẩm: trang đăng ký sự kiện. Người dùng: nhân viên. Hành động chính: bấm Đăng ký.",
            "groups": [],
            "tool_hint": "Điền bối cảnh một lần trong phần Tùy chỉnh của bất kỳ prompt nào; trang tự gắn vào cả 12 prompt."
          },
          {
            "title": "Đánh giá tổng thể",
            "items": [
              "Bố cục và cấu trúc thông tin.",
              "Phân cấp thị giác (Visual Hierarchy).",
              "Typography và khả năng đọc.",
              "Màu sắc và độ tương phản.",
              "Khoảng cách, căn chỉnh và hệ thống lưới.",
              "Tính nhất quán của component.",
              "Hình ảnh, icon và yếu tố đồ họa."
            ],
            "example": "Nút Đăng ký cùng màu, cùng cỡ với nút Chia sẻ nên không nổi bật.",
            "groups": [
              "A",
              "B",
              "C",
              "D"
            ]
          },
          {
            "title": "Phân tích trải nghiệm",
            "items": [
              "Người dùng có hiểu ngay màn hình đang nói về điều gì không?",
              "Thông tin quan trọng có dễ tìm không?",
              "CTA có rõ ràng không?",
              "Có bước nào gây nhầm lẫn hoặc tạo ma sát không?",
              "Giao diện có phù hợp với hành vi và nhu cầu người dùng không?"
            ],
            "example": "Phải cuộn xuống mới thấy thời gian, địa điểm; người dùng dễ bỏ sót.",
            "groups": [
              "E"
            ]
          },
          {
            "title": "Xác định vấn đề",
            "lead": "Phân loại vấn đề thành:",
            "items": [
              "Critical: Ảnh hưởng nghiêm trọng đến khả năng sử dụng hoặc hoàn thành tác vụ.",
              "High: Làm giảm đáng kể khả năng tiếp nhận thông tin hoặc trải nghiệm.",
              "Medium: Gây bất tiện hoặc thiếu nhất quán.",
              "Low: Vấn đề thẩm mỹ, có thể cải thiện sau."
            ],
            "example": "Không thấy nút Đăng ký ở màn hình đầu: mức High.",
            "groups": [
              "A"
            ]
          },
          {
            "title": "Đề xuất cải thiện",
            "lead": "Mỗi vấn đề cần có:",
            "items": [
              "Vị trí phát hiện.",
              "Mô tả vấn đề.",
              "Nguyên nhân.",
              "Ảnh hưởng đến người dùng.",
              "Đề xuất giải pháp cụ thể.",
              "Mức độ ưu tiên."
            ],
            "example": "Vị trí: cuối trang · Vấn đề: nút hành động chìm · Đề xuất: đưa nút lên vùng đầu, dùng một màu nhấn · Ưu tiên: High.",
            "groups": [
              "F"
            ]
          },
          {
            "title": "Kiểm tra sau cải tiến",
            "items": [
              "So sánh trước và sau.",
              "Kiểm tra các vấn đề đã được xử lý.",
              "Đảm bảo không phát sinh lỗi mới.",
              "Kiểm tra tính nhất quán với Design System.",
              "Đánh giá lại khả năng hoàn thành tác vụ."
            ],
            "example": "So ảnh trước và sau: nút Đăng ký thấy ngay; màu nút đúng Design System; không phát sinh lỗi mới.",
            "groups": [
              "F"
            ]
          }
        ]
      },
      "module": "audit"
    }
  ],
  "audiences": [
    {
      "id": "moi-nhan-su",
      "name": "Mọi nhân sự"
    },
    {
      "id": "quan-ly",
      "name": "Quản lý, trưởng nhóm"
    },
    {
      "id": "truyen-thong",
      "name": "Truyền thông, marketing"
    },
    {
      "id": "van-hoa",
      "name": "Đại sứ văn hóa, tổ chức sự kiện"
    },
    {
      "id": "nhan-su",
      "name": "Nhân sự, đào tạo"
    },
    {
      "id": "kinh-doanh",
      "name": "Kinh doanh, chăm sóc khách hàng"
    },
    {
      "id": "du-lieu",
      "name": "Phân tích, báo cáo"
    },
    {
      "id": "van-hanh",
      "name": "Vận hành, quản lý dự án"
    },
    {
      "id": "thiet-ke",
      "name": "Thiết kế, sản phẩm số"
    }
  ],
  "goals": [
    {
      "id": "viet",
      "name": "Viết, biên tập nội dung"
    },
    {
      "id": "y-tuong",
      "name": "Lên ý tưởng"
    },
    {
      "id": "ke-hoach",
      "name": "Lập kế hoạch"
    },
    {
      "id": "phan-tich",
      "name": "Phân tích, tổng hợp"
    },
    {
      "id": "hinh-anh",
      "name": "Tạo hình ảnh, video"
    },
    {
      "id": "danh-gia",
      "name": "Đánh giá, cải thiện"
    },
    {
      "id": "dao-tao",
      "name": "Đào tạo, luyện tập"
    }
  ],
  "difficulties": [
    {
      "id": "de",
      "name": "Dễ",
      "desc": "Điền vài chỗ trống là dùng được"
    },
    {
      "id": "trung-binh",
      "name": "Trung bình",
      "desc": "Cần chuẩn bị thông tin hoặc tài liệu đầu vào"
    },
    {
      "id": "nang-cao",
      "name": "Nâng cao",
      "desc": "Nhiều bước, cần đọc kỹ và kiểm chứng kỹ kết quả"
    }
  ],
  "prompts": [
    {
      "id": "c1",
      "title": "Bài đăng truyền thông nội bộ",
      "category": "content",
      "target_audiences": [
        "truyen-thong",
        "van-hoa",
        "moi-nhan-su"
      ],
      "purpose": "Giới thiệu một hoạt động trên kênh nội bộ, đủ thông tin và có cảm xúc, không bịa chi tiết.",
      "goals": [
        "viet"
      ],
      "use_cases": [
        "Giới thiệu một hoạt động, chương trình sắp diễn ra",
        "Thông báo một sáng kiến đã được duyệt",
        "Đăng tin trên nhóm chat, mạng nội bộ của đơn vị"
      ],
      "prompt": "Bạn là chuyên gia truyền thông nội bộ của một ngân hàng. [Đơn vị] sắp tổ chức [tên hoạt động] dành cho [đối tượng], thông điệp chính là [thông điệp]. Thông tin đã chốt: [thời gian, địa điểm, nội dung chính]. Hãy viết một bài đăng giới thiệu hoạt động trên [kênh nội bộ]. Trình bày gồm: tiêu đề tối đa 12 chữ, đoạn mở đầu 2 câu gợi cảm xúc, 3 điểm nổi bật dạng gạch đầu dòng, lời kêu gọi tham gia. Giọng văn [trẻ trung / trang trọng], tối đa 200 từ. Chỉ dùng thông tin đã cung cấp; chỗ nào thiếu thì ghi \"cần bổ sung\".",
      "required_inputs": [
        "Tên hoạt động, đối tượng và thông điệp chính",
        "Thông tin đã chốt và được phép công bố: thời gian, địa điểm, nội dung chính",
        "Kênh đăng và giọng văn mong muốn"
      ],
      "verification": [
        "Thời gian, địa điểm khớp đúng thông tin đã chốt.",
        "Không có hoạt động hay quà tặng nào AI tự thêm.",
        "Đọc to một lượt: giọng văn có giống cách đơn vị vẫn nói không?"
      ],
      "difficulty": "de",
      "tags": [
        "bài đăng",
        "tin nội bộ",
        "thông báo",
        "truyền thông nội bộ",
        "giới thiệu sự kiện",
        "viết bài"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "time": "5–10 phút",
      "added": "2026-11-11T15:29",
      "example": {
        "input": "Đơn vị: một khối khoảng 300 người · Hoạt động: Ngày hội gia đình · Đối tượng: cán bộ nhân viên và người thân · Thông điệp: Nơi làm việc cũng là ngôi nhà thứ hai · Đã chốt: sáng thứ Bảy, khu vui chơi cho trẻ em, góc chụp ảnh gia đình · Kênh: nhóm chat toàn khối · Giọng: trẻ trung",
        "output": "Một bài đăng khoảng 150–200 từ: tiêu đề ngắn, 2 câu mở đầu gợi hình ảnh gia đình, 3 gạch đầu dòng về khu vui chơi, góc chụp ảnh và lời mời người thân, kết bằng lời kêu gọi đăng ký. Địa điểm chưa có nên bài ghi \"cần bổ sung\" thay vì tự đặt."
      },
      "rank": 1
    },
    {
      "id": "c2",
      "title": "Email thư mời tham dự",
      "category": "content",
      "target_audiences": [
        "moi-nhan-su",
        "van-hoa",
        "nhan-su"
      ],
      "purpose": "Soạn thư mời rõ ràng, lịch sự, người nhận đọc lướt vẫn nắm đủ thông tin.",
      "goals": [
        "viet"
      ],
      "use_cases": [
        "Mời tham dự sự kiện, buổi đào tạo, buổi gặp mặt",
        "Mời đồng nghiệp, đơn vị khác dự một hoạt động chung"
      ],
      "prompt": "Bạn là thư ký sự kiện chu đáo. [Đơn vị] mời [đối tượng, số người] tham dự [hoạt động] vào [ngày, giờ] tại [địa điểm]. Người tham dự cần [trang phục hoặc chuẩn bị] và đăng ký trước [hạn đăng ký] qua [link hoặc đầu mối]. Hãy viết thư mời qua email. Trình bày: dòng tiêu đề email tối đa 10 chữ, lời chào, một đoạn nêu lý do mời, khối thông tin dạng \"Thời gian / Địa điểm / Trang phục / Đăng ký\", lời kết. Giọng ấm áp, lịch sự, tối đa 150 từ. Không thêm quà tặng, chương trình hay khách mời chưa được nêu.",
      "required_inputs": [
        "Đối tượng được mời và số người",
        "Ngày giờ, địa điểm, trang phục hoặc việc cần chuẩn bị",
        "Hạn và cách đăng ký (link biểu mẫu hoặc đầu mối)"
      ],
      "verification": [
        "Ngày, giờ, địa điểm và link đăng ký đúng từng ký tự.",
        "Tiêu đề email không gây hiểu nhầm là thư bắt buộc nếu không bắt buộc.",
        "Gửi thử cho chính mình để xem hiển thị trên điện thoại."
      ],
      "difficulty": "de",
      "tags": [
        "email",
        "thư mời",
        "mời họp",
        "mời sự kiện",
        "thư",
        "thông báo"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Copilot"
      ],
      "time": "Khoảng 5 phút",
      "added": "2026-11-11T15:29",
      "example": {
        "input": "Đơn vị: phòng Nhân sự · Đối tượng: 40 nhân viên mới trong quý · Hoạt động: buổi gặp mặt chào đón · Trang phục: thoải mái, lịch sự · Đăng ký qua: link biểu mẫu nội bộ",
        "output": "Email có tiêu đề ngắn kiểu \"Mời bạn đến buổi chào đón thành viên mới\", một đoạn lý do mời 2–3 câu, khối thông tin 4 dòng dễ đọc lướt và lời kết thân thiện, tổng dưới 150 từ."
      },
      "rank": 10
    },
    {
      "id": "c5",
      "title": "Một nội dung, bốn định dạng",
      "category": "content",
      "target_audiences": [
        "truyen-thong",
        "van-hoa",
        "moi-nhan-su"
      ],
      "purpose": "Chuyển một nội dung gốc thành tin nhắn, bài đăng, chữ poster và lời MC mà không viết lại từ đầu.",
      "goals": [
        "viet"
      ],
      "use_cases": [
        "Một nội dung cần đăng trên nhiều kênh cùng lúc",
        "Chuyển đề xuất đã duyệt thành tin nhắn, bài đăng, chữ poster, lời MC"
      ],
      "prompt": "Bạn là biên tập viên đa kênh. Dưới đây là nội dung gốc về [hoạt động]: [dán nội dung gốc]. Hãy chuyển thành 4 phiên bản: (1) tin nhắn nhóm chat tối đa 50 chữ, (2) bài đăng mạng nội bộ khoảng 150 chữ, (3) chữ cho poster gồm tiêu đề tối đa 6 chữ và 1 câu phụ, (4) lời MC thông báo đọc trong tối đa 40 giây. Trình bày mỗi phiên bản dưới một tiêu đề riêng. Giữ nguyên mọi thông tin thời gian, địa điểm, không thêm chi tiết mới.",
      "required_inputs": [
        "Nội dung gốc đã được duyệt",
        "Danh sách kênh sẽ dùng"
      ],
      "verification": [
        "So 4 phiên bản với bản gốc: thời gian, địa điểm, tên gọi thống nhất.",
        "Chữ poster đủ ngắn để đọc từ xa.",
        "Lời MC đọc thử không vấp."
      ],
      "difficulty": "de",
      "tags": [
        "đa kênh",
        "chuyển định dạng",
        "tin nhắn",
        "poster",
        "lời MC",
        "tái sử dụng nội dung"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT"
      ],
      "time": "Khoảng 5 phút",
      "added": "2026-11-11T15:29",
      "example": {
        "input": "Nội dung gốc: đoạn đề xuất 1 trang về hoạt động \"Một tháng một giá trị\" đã được duyệt",
        "output": "4 khối nội dung có tiêu đề riêng; tin nhắn ngắn có lời kêu gọi, bài đăng có mở đầu và 3 ý chính, poster chỉ còn tiêu đề và câu phụ, lời MC viết theo văn nói."
      },
      "rank": 14
    },
    {
      "id": "d1",
      "title": "Câu lệnh tạo hình minh họa",
      "category": "design",
      "target_audiences": [
        "truyen-thong",
        "thiet-ke",
        "van-hoa"
      ],
      "purpose": "Tạo hình đúng ý ngay từ vài lần đầu nhờ mô tả đủ chủ thể, phong cách, bố cục.",
      "goals": [
        "hinh-anh"
      ],
      "use_cases": [
        "Hình minh họa cho slide, poster, bài đăng",
        "Ảnh nền có khoảng trống để đặt chữ"
      ],
      "prompt": "Tạo một hình minh họa cho [poster / slide / bài đăng] về chủ đề [chủ đề]. Chủ thể chính: [mô tả chủ thể và hành động]. Bối cảnh: [không gian, thời điểm trong ngày]. Phong cách: [ảnh chụp chân thực / 3D / minh họa phẳng], ánh sáng [ấm / tự nhiên], bảng màu chủ đạo [2–3 màu]. Bố cục: chủ thể đặt [bên trái / chính giữa], chừa khoảng trống ở [vị trí] để đặt chữ. Tỉ lệ khung [16:9 / 1:1 / 9:16]. Không có chữ trong ảnh, không có logo, không có khuôn mặt người thật nhận diện được.",
      "required_inputs": [
        "Mục đích sử dụng và tỉ lệ khung hình",
        "Mô tả chủ thể, bối cảnh, phong cách, màu sắc mong muốn"
      ],
      "verification": [
        "Soi kỹ tay, mắt, chữ trong ảnh: AI hay vẽ sai các chi tiết này.",
        "Hình không giống logo, nhân vật hay thương hiệu của bên khác.",
        "Đọc điều khoản sử dụng của công cụ trước khi dùng cho ấn phẩm chính thức."
      ],
      "difficulty": "de",
      "tags": [
        "tạo ảnh",
        "hình ảnh",
        "minh họa",
        "ảnh AI",
        "poster",
        "banner",
        "vẽ"
      ],
      "compatible_tools": [
        "Gemini",
        "ChatGPT",
        "Canva"
      ],
      "time": "5–15 phút",
      "added": "2026-11-11T15:29",
      "example": {
        "input": "Dùng cho: poster · Chủ đề: ngày hội gia đình · Chủ thể: một gia đình nhỏ đang cùng xếp hình khối màu · Bối cảnh: sân cỏ buổi sáng · Phong cách: 3D mềm · Màu: cam, tím nhạt · Khoảng trống: phía trên · Tỉ lệ: 9:16",
        "output": "Hình dọc 9:16, gia đình ở nửa dưới, nửa trên trống để đặt tiêu đề trong Canva. Nếu lần đầu chưa ưng, chỉ sửa một yếu tố mỗi lần (ví dụ: \"giữ nguyên, đổi ánh sáng thành buổi chiều\")."
      },
      "rank": 4
    },
    {
      "id": "d2",
      "title": "Concept và key visual sự kiện",
      "category": "design",
      "target_audiences": [
        "truyen-thong",
        "thiet-ke",
        "van-hoa"
      ],
      "purpose": "Có 3 hướng nhận diện sự kiện để so sánh trước khi đặt thiết kế chi tiết.",
      "goals": [
        "y-tuong",
        "hinh-anh"
      ],
      "use_cases": [
        "Tìm hướng nhận diện cho sự kiện, chiến dịch",
        "So sánh nhiều hướng trước khi đặt thiết kế chi tiết"
      ],
      "prompt": "Bạn là giám đốc sáng tạo (creative director) chuyên sự kiện doanh nghiệp. Sự kiện [tên sự kiện] có thông điệp [thông điệp], dành cho [đối tượng], tổ chức tại [loại không gian]. Hãy đề xuất 3 hướng concept key visual khác nhau. Mỗi hướng gồm: tên concept, ý tưởng hình ảnh chính (2 câu), bảng màu 3–4 màu kèm mã HEX, kiểu chữ gợi ý, 3 ứng dụng (backdrop, thẻ đeo, bài đăng) và một câu lệnh tạo hình để thử trên công cụ AI. Trình bày dạng bảng so sánh. Concept phải thể hiện được [giá trị hoặc yếu tố con người], tránh hình ảnh sáo mòn như cái bắt tay hay bóng đèn.",
      "required_inputs": [
        "Tên sự kiện, thông điệp, đối tượng",
        "Loại không gian tổ chức",
        "Bộ nhận diện thương hiệu để đối chiếu"
      ],
      "verification": [
        "Đối chiếu màu, chữ với bộ nhận diện thương hiệu trước khi chốt.",
        "Màu đủ tương phản khi in backdrop và khi chiếu.",
        "Người duyệt chọn hướng; AI chỉ đề xuất."
      ],
      "difficulty": "trung-binh",
      "tags": [
        "key visual",
        "concept",
        "nhận diện sự kiện",
        "bảng màu",
        "ý tưởng thiết kế",
        "backdrop"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "time": "10–15 phút",
      "added": "2026-11-11T15:29",
      "example": {
        "input": "Sự kiện: Year End Party · Thông điệp: Humanize the Future · Đối tượng: toàn thể cán bộ nhân viên · Không gian: hội trường lớn · Yếu tố cần thể hiện: công nghệ phục vụ con người",
        "output": "Bảng 3 cột cho 3 concept khác hẳn nhau, mỗi concept có bảng màu với mã HEX, gợi ý kiểu chữ, 3 ứng dụng và một câu lệnh tạo hình để thử ngay."
      },
      "rank": 20
    },
    {
      "id": "d4",
      "title": "Kịch bản phân cảnh và câu lệnh tạo video",
      "category": "design",
      "target_audiences": [
        "truyen-thong",
        "thiet-ke",
        "van-hoa"
      ],
      "purpose": "Có storyboard 5 cảnh và câu lệnh cho từng cảnh để tạo video ngắn.",
      "goals": [
        "hinh-anh"
      ],
      "use_cases": [
        "Video teaser, video giới thiệu ngắn",
        "Chuẩn bị kịch bản trước khi quay hoặc tạo cảnh bằng AI"
      ],
      "prompt": "Bạn là đạo diễn video ngắn. Tôi cần video [số] giây cho [hoạt động], thông điệp [thông điệp], phát trên [màn hình sự kiện / điện thoại]. Hãy viết kịch bản phân cảnh (storyboard) 5 cảnh. Mỗi cảnh ghi: thời lượng, hình ảnh, chuyển động máy quay, chữ trên màn hình (tối đa 6 chữ), âm thanh. Sau đó viết riêng một câu lệnh tạo video cho từng cảnh bằng [tiếng Việt / tiếng Anh], mỗi câu dưới 60 từ, ghi rõ khung hình [16:9 / 9:16]. Cảnh do AI tạo không có chữ, không có người thật nhận diện được, không dùng nhạc có bản quyền.",
      "required_inputs": [
        "Thời lượng và nơi phát (màn hình sự kiện, điện thoại)",
        "Thông điệp chính",
        "Nhạc nền có giấy phép sử dụng"
      ],
      "verification": [
        "Cộng thời lượng các cảnh, khớp độ dài yêu cầu.",
        "Xem từng clip: không có chữ méo, khuôn mặt lạ giống người thật.",
        "Nhạc nền có giấy phép sử dụng."
      ],
      "difficulty": "nang-cao",
      "tags": [
        "video",
        "kịch bản video",
        "storyboard",
        "phân cảnh",
        "teaser",
        "clip"
      ],
      "compatible_tools": [
        "Claude",
        "Gemini",
        "CapCut"
      ],
      "time": "15–30 phút",
      "added": "2026-11-11T15:29",
      "example": {
        "input": "Video 30 giây · Hoạt động: teaser tiệc cuối năm · Thông điệp: cùng nhìn lại một năm · Phát trên: màn hình sự kiện 16:9",
        "output": "Bảng 5 cảnh có tổng thời lượng đúng 30 giây và 5 câu lệnh tạo cảnh riêng. Chữ trên màn hình thêm sau trong CapCut để không sai dấu."
      },
      "rank": 30
    },
    {
      "id": "e1",
      "title": "Ý tưởng chương trình văn hóa",
      "category": "event",
      "target_audiences": [
        "van-hoa",
        "quan-ly",
        "nhan-su"
      ],
      "purpose": "Có 3 ý tưởng chương trình khác nhau, so sánh được điểm mạnh và rủi ro.",
      "goals": [
        "y-tuong"
      ],
      "use_cases": [
        "Lên ý tưởng hoạt động văn hóa, gắn kết",
        "Chuẩn bị nhiều phương án để lãnh đạo chọn"
      ],
      "prompt": "Bạn là chuyên gia tổ chức sự kiện văn hóa doanh nghiệp. [Đơn vị] muốn tổ chức [loại hoạt động] cho [đối tượng, số người] vào [thời điểm], ngân sách [mức ngân sách], mục tiêu là [mục tiêu]. Văn hóa đơn vị: [2–3 đặc điểm]. Hãy đề xuất 3 ý tưởng chương trình khác nhau. Mỗi ý tưởng gồm: tên, thông điệp, mô tả 2 câu, 3 hoạt động chính, điểm khác biệt, rủi ro chính. Trình bày dạng bảng so sánh. Ít nhất một ý tưởng làm được với ngân sách thấp; không đề xuất hoạt động cần người nổi tiếng hoặc nhà cung cấp cụ thể.",
      "required_inputs": [
        "Loại hoạt động, đối tượng, số người, thời điểm",
        "Mức ngân sách khái quát và mục tiêu",
        "2–3 đặc điểm văn hóa của đơn vị"
      ],
      "verification": [
        "Ý tưởng phù hợp lịch làm việc thật của đơn vị.",
        "Rủi ro AI nêu có đủ chưa, bổ sung từ kinh nghiệm của bạn.",
        "Chi phí cần tự ước tính lại với báo giá thật."
      ],
      "difficulty": "trung-binh",
      "tags": [
        "ý tưởng sự kiện",
        "teambuilding",
        "gắn kết",
        "hoạt động văn hóa",
        "chương trình",
        "tất niên"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "time": "10 phút",
      "added": "2026-11-11T15:29",
      "example": {
        "input": "Loại hoạt động: chuỗi hoạt động đón Tết · 150 người · Ngân sách: vừa phải · Mục tiêu: gắn kết các phòng ít làm việc chung · Đặc điểm: trẻ, thích thử thách, làm việc nhiều ca",
        "output": "Bảng 3 ý tưởng, mỗi ý có tên, thông điệp, 3 hoạt động; một ý tưởng gần như không tốn chi phí; cột rủi ro nêu rõ vấn đề lịch làm việc theo ca."
      },
      "rank": 9
    },
    {
      "id": "c3",
      "title": "Kịch bản MC theo lịch trình",
      "category": "event",
      "target_audiences": [
        "van-hoa",
        "truyen-thong"
      ],
      "purpose": "Có ngay lời dẫn cho từng phần của chương trình, kèm ghi chú sân khấu.",
      "goals": [
        "viet"
      ],
      "use_cases": [
        "Lời dẫn cho lễ vinh danh, tiệc cuối năm, hội thao",
        "MC không chuyên cần kịch bản để tập"
      ],
      "prompt": "Bạn là MC dẫn sự kiện nội bộ có kinh nghiệm. Sự kiện [tên hoạt động] kéo dài [số] phút, dành cho [đối tượng], không khí mong muốn là [vui tươi / trang trọng]. Lịch trình: [dán lịch trình theo giờ]. Hãy viết kịch bản MC theo từng mục của lịch trình. Trình bày dạng bảng 3 cột: Thời điểm | Lời dẫn | Ghi chú sân khấu (nhạc, ánh sáng, người lên sân khấu). Câu ngắn, dễ nói, mỗi lời dẫn tối đa 60 chữ; phần mở màn có một câu tương tác với khán giả. Không tự đặt tên, chức danh khách mời; chỗ chưa có thì ghi \"chờ xác nhận\".",
      "required_inputs": [
        "Lịch trình theo giờ đã chốt",
        "Không khí mong muốn",
        "Tên, chức danh khách mời đã được xác nhận (nếu có)"
      ],
      "verification": [
        "Đọc thành tiếng và bấm giờ từng lời dẫn.",
        "Tên, chức danh đọc đúng, đã xác nhận với người được nhắc tên.",
        "Thứ tự khớp rundown cuối cùng của ban tổ chức."
      ],
      "difficulty": "trung-binh",
      "tags": [
        "MC",
        "lời dẫn",
        "kịch bản",
        "dẫn chương trình",
        "sân khấu"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT"
      ],
      "time": "10–15 phút",
      "added": "2026-11-11T15:29",
      "example": {
        "input": "Hoạt động: Lễ vinh danh cuối năm · 60 phút · Đối tượng: toàn khối · Không khí: trang trọng nhưng ấm áp · Lịch trình: 6 mục từ khai mạc đến chụp ảnh chung",
        "output": "Bảng 6 dòng theo đúng thứ tự lịch trình. Mỗi lời dẫn 2–3 câu ngắn, có câu hỏi tương tác ở phần mở màn, cột ghi chú nêu nhạc nền và thời điểm mời người lên sân khấu. Tên khách mời để \"chờ xác nhận\"."
      },
      "rank": 19
    },
    {
      "id": "e4",
      "title": "Minigame lan tỏa giá trị cốt lõi",
      "category": "event",
      "target_audiences": [
        "van-hoa",
        "nhan-su",
        "quan-ly"
      ],
      "purpose": "Thiết kế trò chơi ngắn, dễ hiểu luật, chốt được thông điệp văn hóa.",
      "goals": [
        "y-tuong"
      ],
      "use_cases": [
        "Trò chơi khởi động buổi họp, workshop",
        "Hoạt động lan tỏa giá trị cốt lõi"
      ],
      "prompt": "Bạn là người thiết kế trò chơi trải nghiệm (game designer) cho hoạt động nội bộ. Tôi cần một minigame [số] phút cho [số người] người tại [không gian], giúp mọi người hiểu giá trị cốt lõi [giá trị]. Đạo cụ có sẵn: [đạo cụ]. Hãy thiết kế 3 phương án minigame. Mỗi phương án gồm: tên, mục tiêu, luật chơi theo từng bước, cách chia đội, cách tính điểm, câu chốt thông điệp sau trò chơi, đạo cụ cần chuẩn bị. Trình bày mỗi phương án thành một khối riêng. Luật chơi giải thích được trong 1 phút, an toàn, phù hợp mọi độ tuổi và không khiến ai lúng túng trước đám đông.",
      "required_inputs": [
        "Thời lượng, số người, không gian",
        "Giá trị cốt lõi muốn truyền tải",
        "Đạo cụ có sẵn"
      ],
      "verification": [
        "Chơi thử với 3–4 đồng nghiệp trước buổi chính.",
        "Không có thử thách gây ngại hoặc mất an toàn.",
        "Câu chốt thông điệp đúng tinh thần giá trị cốt lõi."
      ],
      "difficulty": "trung-binh",
      "tags": [
        "trò chơi",
        "minigame",
        "khởi động",
        "giá trị cốt lõi",
        "tương tác",
        "icebreaker"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "time": "10 phút",
      "added": "2026-11-11T15:29",
      "example": {
        "input": "15 phút · 60 người · Không gian: phòng họp lớn, bàn tròn · Giá trị: một giá trị cốt lõi do đơn vị chọn · Đạo cụ: giấy note, bút, màn chiếu",
        "output": "3 phương án khác nhau (đố vui theo đội, ghép câu chuyện, thử thách hành động), mỗi phương án có luật chơi 4–5 bước, cách tính điểm rõ và một câu chốt nối trò chơi với giá trị."
      },
      "rank": 22
    },
    {
      "id": "o1",
      "title": "Tóm tắt tài liệu có trích dẫn",
      "category": "office",
      "target_audiences": [
        "moi-nhan-su",
        "quan-ly",
        "du-lieu"
      ],
      "purpose": "Nắm nhanh tài liệu dài, mỗi ý đều mở lại được đúng chỗ trong bản gốc.",
      "goals": [
        "phan-tich"
      ],
      "use_cases": [
        "Đọc nhanh báo cáo, quy định, tài liệu dài",
        "Chuẩn bị trước một cuộc họp"
      ],
      "prompt": "Bạn là trợ lý phân tích tài liệu. Tôi đính kèm [tên tài liệu], cần đọc để [mục đích, ví dụ chuẩn bị họp với ai]. Hãy tóm tắt tài liệu. Trình bày: (1) 3 câu tóm tắt chính; (2) 5 điểm quan trọng nhất, mỗi điểm kèm số trang hoặc trích dẫn nguyên văn; (3) bảng các con số và mốc thời gian quan trọng; (4) 3 câu hỏi nên đặt ra khi đọc. Chỉ dựa vào tài liệu đính kèm; nội dung nào tài liệu không đề cập thì ghi \"không có trong tài liệu\".",
      "required_inputs": [
        "Tài liệu được phép dùng với công cụ AI (không chứa dữ liệu khách hàng, thông tin mật)",
        "Mục đích đọc tài liệu"
      ],
      "verification": [
        "Mở 2–3 trích dẫn bất kỳ, kiểm tra câu trích có thật và đúng trang.",
        "Chỉ tải lên tài liệu được phép dùng với công cụ AI.",
        "Đọc lại phần kết luận của bản gốc, so với tóm tắt."
      ],
      "difficulty": "de",
      "tags": [
        "tóm tắt",
        "đọc tài liệu",
        "trích dẫn",
        "tài liệu dài",
        "báo cáo",
        "NotebookLM"
      ],
      "compatible_tools": [
        "NotebookLM",
        "Claude",
        "Copilot"
      ],
      "time": "Khoảng 5 phút",
      "added": "2026-11-11T15:29",
      "example": {
        "input": "Tài liệu: báo cáo tổng kết chương trình văn hóa năm (đã được phép chia sẻ) · Mục đích: chuẩn bị họp kế hoạch năm sau",
        "output": "3 câu tóm tắt, 5 điểm chính có số trang, bảng mốc và con số trích từ báo cáo, 3 câu hỏi gợi mở cho cuộc họp."
      },
      "rank": 2
    },
    {
      "id": "o5",
      "title": "Ghi chú họp thành kế hoạch hành động",
      "category": "office",
      "target_audiences": [
        "moi-nhan-su",
        "quan-ly",
        "van-hanh"
      ],
      "purpose": "Từ ghi chú rời rạc ra bảng việc cần làm, quyết định đã chốt và vấn đề còn mở.",
      "goals": [
        "ke-hoach"
      ],
      "use_cases": [
        "Sau cuộc họp cần giao việc ngay",
        "Tổng hợp ghi chú rời rạc thành danh sách việc"
      ],
      "prompt": "Bạn là trợ lý điều phối dự án. Dưới đây là ghi chú cuộc họp [tên cuộc họp] ngày [ngày họp]: [dán ghi chú]. Hãy chuyển thành kế hoạch hành động. Trình bày dạng bảng: Việc cần làm (bắt đầu bằng động từ) | Người phụ trách | Hạn | Trạng thái | Ghi chú. Sau bảng, liệt kê riêng các quyết định đã chốt và các vấn đề còn mở. Chỉ ghi người phụ trách và hạn khi ghi chú có nêu; nếu không, ghi \"chưa giao\" hoặc \"chưa có hạn\".",
      "required_inputs": [
        "Ghi chú cuộc họp, đã bỏ thông tin nhạy cảm"
      ],
      "verification": [
        "Người được giao việc trong bảng đúng như đã thống nhất.",
        "Không có quyết định nào AI tự suy ra từ thảo luận.",
        "Gửi lại bảng cho cả nhóm xác nhận."
      ],
      "difficulty": "de",
      "tags": [
        "ghi chú",
        "biên bản",
        "giao việc",
        "việc cần làm",
        "action items"
      ],
      "compatible_tools": [
        "Claude",
        "Copilot",
        "ChatGPT"
      ],
      "time": "Khoảng 5 phút",
      "added": "2026-11-11T15:29",
      "example": {
        "input": "Ghi chú tay 1 trang của buổi họp ban tổ chức ngày hội gia đình",
        "output": "Bảng 8 việc bắt đầu bằng động từ, 3 việc ghi \"chưa giao\"; danh sách 4 quyết định đã chốt và 2 vấn đề còn mở để đưa vào buổi họp sau."
      },
      "rank": 11
    },
    {
      "id": "o3",
      "title": "Chuẩn bị nội dung cuộc họp",
      "category": "office",
      "target_audiences": [
        "moi-nhan-su",
        "quan-ly",
        "van-hanh"
      ],
      "purpose": "Có chương trình họp, tài liệu gửi trước và mẫu biên bản trong một lần.",
      "goals": [
        "ke-hoach"
      ],
      "use_cases": [
        "Chuẩn bị cuộc họp cần ra quyết định",
        "Họp định kỳ cần chương trình rõ ràng"
      ],
      "prompt": "Bạn là thư ký cuộc họp chuyên nghiệp. Cuộc họp [tên hoặc mục đích] kéo dài [số] phút với [thành phần tham dự]. Kết quả cần đạt: [quyết định hoặc kết quả]. Thông tin nền: [dán thông tin]. Hãy chuẩn bị 4 phần: (1) chương trình họp có thời lượng từng mục và người trình bày; (2) tài liệu cần gửi trước; (3) các câu hỏi cần thống nhất; (4) mẫu biên bản để điền trong họp. Trình bày theo 4 tiêu đề trên. Tổng thời lượng các mục không vượt quá [số] phút.",
      "required_inputs": [
        "Mục đích, thời lượng, thành phần dự họp",
        "Kết quả cần đạt",
        "Thông tin nền đã được phép chia sẻ"
      ],
      "verification": [
        "Tổng thời lượng đúng bằng thời gian họp.",
        "Câu hỏi cần thống nhất bám đúng kết quả cần đạt.",
        "Gửi tài liệu trước ít nhất 1 ngày."
      ],
      "difficulty": "de",
      "tags": [
        "họp",
        "cuộc họp",
        "chương trình họp",
        "biên bản",
        "agenda"
      ],
      "compatible_tools": [
        "Claude",
        "Copilot",
        "ChatGPT"
      ],
      "time": "5–10 phút",
      "added": "2026-11-11T15:29",
      "example": {
        "input": "Cuộc họp: chốt concept tiệc cuối năm · 45 phút · Thành phần: ban tổ chức 6 người · Kết quả: chọn 1 trong 3 concept",
        "output": "Chương trình 5 mục cộng đúng 45 phút, danh sách 3 tài liệu gửi trước, 4 câu hỏi cần chốt và mẫu biên bản có ô quyết định, người phụ trách, hạn."
      },
      "rank": 21
    },
    {
      "id": "r1",
      "title": "Động não 15 ý tưởng theo 3 nhóm",
      "category": "research",
      "target_audiences": [
        "moi-nhan-su",
        "truyen-thong",
        "van-hoa",
        "quan-ly"
      ],
      "purpose": "Có nhiều ý tưởng nhanh, chia theo mức độ dễ làm và mức độ khác biệt.",
      "goals": [
        "y-tuong"
      ],
      "use_cases": [
        "Cần nhiều ý tưởng nhanh cho một vấn đề",
        "Mở đầu buổi họp động não của nhóm"
      ],
      "prompt": "Bạn là người điều phối buổi động não (brainstorm facilitator). Vấn đề cần ý tưởng: [vấn đề], cho [đối tượng], trong giới hạn [ngân sách, thời gian, nguồn lực]. Hãy đưa ra 15 ý tưởng chia 3 nhóm: an toàn (làm được ngay), đột phá (khác biệt), tiết kiệm (gần như không tốn chi phí); mỗi ý tưởng 1 câu. Sau đó chọn 3 ý tưởng đáng thử nhất và giải thích theo 2 tiêu chí: tác động và độ khả thi. Trình bày dạng danh sách đánh số. Tránh các ý tưởng chung chung như teambuilding thông thường hay bốc thăm trúng thưởng.",
      "required_inputs": [
        "Vấn đề cần giải quyết và đối tượng",
        "Giới hạn về ngân sách, thời gian, nguồn lực"
      ],
      "verification": [
        "Ý tưởng hay cần được hỏi lại người trong cuộc (nhân viên mới).",
        "Loại các ý tưởng đơn vị đã thử mà không hiệu quả.",
        "Ghi lại lý do chọn để trình bày khi xin duyệt."
      ],
      "difficulty": "de",
      "tags": [
        "brainstorm",
        "động não",
        "ý tưởng",
        "sáng tạo",
        "giải pháp"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "time": "Khoảng 5 phút",
      "added": "2026-11-11T15:29",
      "example": {
        "input": "Vấn đề: nhân viên mới ít tham gia hoạt động văn hóa · Đối tượng: nhân viên dưới 1 năm · Giới hạn: 2 tháng, ngân sách thấp",
        "output": "15 ý tưởng đánh số theo 3 nhóm, sau đó 3 ý tưởng được chọn kèm lý do về tác động và độ khả thi."
      },
      "rank": 3
    },
    {
      "id": "r5",
      "title": "Phản biện, tìm lỗ hổng đề xuất",
      "category": "research",
      "target_audiences": [
        "moi-nhan-su",
        "quan-ly"
      ],
      "purpose": "Để AI hỏi khó trước khi người duyệt hỏi, rồi củng cố đề xuất.",
      "goals": [
        "danh-gia"
      ],
      "use_cases": [
        "Trước khi trình đề xuất cho lãnh đạo",
        "Tự kiểm tra kế hoạch trước khi triển khai"
      ],
      "prompt": "Bạn là người phản biện độc lập (devil's advocate). Đây là đề xuất của tôi: [dán đề xuất]. Người duyệt là [đối tượng duyệt], họ quan tâm nhất tới [tiêu chí]. Hãy tìm lỗ hổng: 5 câu hỏi khó nhất người duyệt có thể hỏi, 3 giả định chưa được chứng minh, 3 rủi ro khi triển khai. Với mỗi điểm, gợi ý cách củng cố đề xuất. Trình bày dạng bảng: Điểm yếu | Vì sao đáng lo | Cách củng cố. Nói thẳng, cụ thể, không khen chung chung.",
      "required_inputs": [
        "Bản đề xuất, đã bỏ thông tin mật",
        "Người duyệt và điều họ quan tâm nhất"
      ],
      "verification": [
        "Chọn 2–3 điểm quan trọng nhất để sửa, không cần sửa hết.",
        "Cách củng cố cần số liệu thật, không lấy số AI gợi ý.",
        "Chuẩn bị sẵn câu trả lời cho 5 câu hỏi khó."
      ],
      "difficulty": "de",
      "tags": [
        "phản biện",
        "góp ý",
        "lỗ hổng",
        "câu hỏi khó",
        "kiểm tra đề xuất"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "time": "Khoảng 5 phút",
      "added": "2026-11-11T15:29",
      "example": {
        "input": "Đề xuất 2 trang cho ngày hội gia đình · Người duyệt: giám đốc khối · Quan tâm nhất: chi phí và tỉ lệ tham gia",
        "output": "Bảng 11 dòng: 5 câu hỏi khó về chi phí, tỉ lệ tham gia, an toàn trẻ em; 3 giả định chưa có số liệu; 3 rủi ro triển khai, mỗi dòng có cách củng cố cụ thể."
      },
      "rank": 16
    },
    {
      "id": "r2",
      "title": "Phân tích nguyên nhân gốc rễ",
      "category": "research",
      "target_audiences": [
        "quan-ly",
        "du-lieu",
        "van-hanh"
      ],
      "purpose": "Tìm nguyên nhân thật của một vấn đề trước khi nghĩ giải pháp.",
      "goals": [
        "phan-tich"
      ],
      "use_cases": [
        "Kết quả không như kỳ vọng, cần tìm lý do",
        "Trước khi đề xuất giải pháp cho một vấn đề lặp lại"
      ],
      "prompt": "Bạn là chuyên gia phân tích nguyên nhân gốc rễ. Vấn đề: [mô tả vấn đề]. Những gì đã biết: [dữ kiện, số liệu có nguồn]. Hãy phân tích bằng phương pháp 5 Whys (5 lần hỏi tại sao) và sơ đồ xương cá theo 4 nhóm: con người, quy trình, truyền thông, môi trường. Trình bày: chuỗi 5 câu hỏi tại sao; bảng nguyên nhân theo 4 nhóm; 3 nguyên nhân khả dĩ nhất và cách kiểm chứng từng nguyên nhân. Phân biệt rõ điều đã biết và điều chỉ là giả thuyết.",
      "required_inputs": [
        "Mô tả vấn đề",
        "Dữ kiện, số liệu có nguồn, đã ẩn danh"
      ],
      "verification": [
        "Mỗi nguyên nhân được đánh dấu \"đã biết\" hay \"giả thuyết\".",
        "Kiểm chứng ít nhất một giả thuyết trước khi kết luận.",
        "Không đưa dữ liệu cá nhân vào phần dữ kiện."
      ],
      "difficulty": "nang-cao",
      "tags": [
        "nguyên nhân",
        "5 whys",
        "xương cá",
        "phân tích vấn đề",
        "tại sao"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "time": "10 phút",
      "added": "2026-11-11T15:29",
      "example": {
        "input": "Vấn đề: số người đăng ký hoạt động văn hóa quý này thấp hơn quý trước · Đã biết: số đăng ký từng quý, lịch các hoạt động trùng với kỳ chốt số liệu",
        "output": "Chuỗi 5 câu hỏi tại sao, bảng nguyên nhân 4 nhóm, 3 nguyên nhân khả dĩ (ví dụ trùng lịch cao điểm) kèm cách kiểm chứng như hỏi nhanh 10 người hoặc so lịch."
      },
      "rank": 28
    },
    {
      "id": "o2",
      "title": "Báo cáo ngắn gửi lãnh đạo",
      "category": "data",
      "target_audiences": [
        "quan-ly",
        "du-lieu",
        "moi-nhan-su"
      ],
      "purpose": "Từ số liệu thô ra báo cáo 1 trang, nêu rõ việc cần lãnh đạo quyết.",
      "goals": [
        "viet",
        "phan-tich"
      ],
      "use_cases": [
        "Báo cáo kết quả một hoạt động, chương trình",
        "Đề xuất cần lãnh đạo quyết định"
      ],
      "prompt": "Bạn là chuyên viên báo cáo của [đơn vị]. Dưới đây là số liệu và ghi chú về [hoạt động hoặc giai đoạn]: [dán số liệu, ghi chú]. Người đọc là [lãnh đạo hoặc phòng ban], họ cần [quyết định cần đưa ra]. Hãy viết báo cáo ngắn gồm: kết quả chính (3 gạch đầu dòng có số liệu), so sánh với mục tiêu [mục tiêu], điều làm tốt, điều cần cải thiện, đề xuất và việc cần lãnh đạo quyết. Tối đa 1 trang, câu ngắn. Chỉ dùng số liệu đã cung cấp, không tự tính phần trăm khi thiếu số gốc; chỗ thiếu ghi \"cần bổ sung\".",
      "required_inputs": [
        "Số liệu đã kiểm chứng, không chứa dữ liệu khách hàng hay cá nhân",
        "Mục tiêu ban đầu để so sánh",
        "Quyết định cần lãnh đạo đưa ra"
      ],
      "verification": [
        "Từng con số khớp bảng gốc; tự tính lại phần trăm nếu có.",
        "Không đưa dữ liệu có họ tên lên công cụ AI công cộng.",
        "Đề xuất là của bạn, AI chỉ giúp diễn đạt.",
        "Người phụ trách số liệu rà soát và duyệt trước khi gửi."
      ],
      "difficulty": "trung-binh",
      "tags": [
        "báo cáo",
        "số liệu",
        "lãnh đạo",
        "tổng kết",
        "kết quả"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Copilot"
      ],
      "time": "10 phút",
      "added": "2026-11-11T15:29",
      "example": {
        "input": "Hoạt động: chuỗi workshop kỹ năng quý III · Số liệu: số buổi, số người đăng ký và tham dự thực tế, điểm khảo sát trung bình · Người đọc: giám đốc khối · Cần quyết: có mở rộng sang quý IV không",
        "output": "Báo cáo 1 trang: 3 kết quả có số, so với mục tiêu đã nêu, 2 điểm làm tốt, 2 điểm cần cải thiện và một đề xuất rõ ràng kèm việc cần quyết."
      },
      "rank": 13
    },
    {
      "id": "o4",
      "title": "Phân tích phản hồi khảo sát",
      "category": "data",
      "target_audiences": [
        "nhan-su",
        "du-lieu",
        "van-hoa",
        "quan-ly"
      ],
      "purpose": "Gom ý kiến mở thành chủ đề, có trích dẫn đại diện và đề xuất cải tiến.",
      "goals": [
        "phan-tich"
      ],
      "use_cases": [
        "Phản hồi sau sự kiện, buổi đào tạo",
        "Khảo sát mức độ hài lòng nội bộ"
      ],
      "prompt": "Bạn là chuyên viên phân tích trải nghiệm nhân viên. Dưới đây là [số] phản hồi khảo sát sau [hoạt động], đã được ẩn danh: [dán phản hồi]. Hãy phân tích: nhóm các ý kiến thành 4–6 chủ đề, mỗi chủ đề ghi số lượt nhắc tới và 1–2 trích dẫn nguyên văn đại diện; tách riêng điểm được khen và điểm cần cải thiện; đề xuất 3 cải tiến cho lần tổ chức sau. Trình bày bảng chủ đề trước, sau đó là danh sách đề xuất. Chỉ đếm từ dữ liệu đã cho, không suy diễn cảm xúc khi phản hồi không nói rõ.",
      "required_inputs": [
        "Phản hồi đã ẩn danh: xóa họ tên, mã nhân viên và mọi chi tiết nhận diện",
        "Số lượng phản hồi"
      ],
      "verification": [
        "Ẩn danh trước khi dán: bỏ họ tên, mã nhân viên, chi tiết nhận diện.",
        "Đếm thử lại một chủ đề để kiểm tra con số AI đưa ra.",
        "Trích dẫn đúng nguyên văn trong dữ liệu."
      ],
      "difficulty": "trung-binh",
      "tags": [
        "khảo sát",
        "phản hồi",
        "ý kiến",
        "góp ý",
        "phân tích định tính"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "time": "10–15 phút",
      "added": "2026-11-11T15:29",
      "example": {
        "input": "80 phản hồi mở sau buổi workshop, đã xóa họ tên và mã nhân viên",
        "output": "Bảng 5 chủ đề (ví dụ: thời lượng, nội dung thực hành, địa điểm) có số lượt nhắc và trích dẫn nguyên văn; 3 đề xuất gắn với chủ đề được nhắc nhiều nhất."
      },
      "rank": 23
    },
    {
      "id": "d3",
      "title": "Bố cục infographic từ nội dung có sẵn",
      "category": "data",
      "target_audiences": [
        "du-lieu",
        "truyen-thong",
        "thiet-ke"
      ],
      "purpose": "Biến số liệu hoặc nội dung dài thành bố cục infographic để dựng trên Canva.",
      "goals": [
        "hinh-anh",
        "phan-tich"
      ],
      "use_cases": [
        "Biến bảng số liệu thành hình dễ hiểu",
        "Tổng kết năm, báo cáo trực quan"
      ],
      "prompt": "Bạn là nhà thiết kế thông tin (information designer). Tôi có nội dung sau về [chủ đề]: [dán nội dung hoặc số liệu đã kiểm chứng]. Hãy lên bố cục cho một infographic khổ [dọc A4 / 1080×1350]. Trình bày: tiêu đề tối đa 8 chữ; 4–6 khối nội dung theo thứ tự đọc, mỗi khối gồm tiêu đề phụ, một con số hoặc ý chính, gợi ý biểu tượng; nếu có số liệu thì gợi ý loại biểu đồ phù hợp. Chỉ dùng số liệu trong nội dung đã cho, giữ nguyên đơn vị đo, ghi nguồn ở chân infographic.",
      "required_inputs": [
        "Số liệu đã kiểm chứng kèm nguồn",
        "Kích thước và kênh hiển thị"
      ],
      "verification": [
        "Từng con số khớp với bảng gốc.",
        "Biểu đồ vẽ đúng tỉ lệ, không cắt trục gây hiểu sai.",
        "Có dòng ghi nguồn."
      ],
      "difficulty": "trung-binh",
      "tags": [
        "infographic",
        "biểu đồ",
        "trực quan hóa",
        "số liệu",
        "dữ liệu"
      ],
      "compatible_tools": [
        "Claude",
        "Canva"
      ],
      "time": "10–20 phút",
      "added": "2026-11-11T15:29",
      "example": {
        "input": "Chủ đề: kết quả một năm hoạt động văn hóa của đơn vị · Nội dung: bảng tổng hợp số hoạt động, số người tham gia đã được xác nhận",
        "output": "Danh sách 5 khối theo thứ tự đọc từ trên xuống, mỗi khối có tiêu đề phụ, con số lấy đúng từ bảng, biểu tượng gợi ý; một khối dùng biểu đồ cột; dòng nguồn ở chân trang."
      },
      "rank": 29
    },
    {
      "id": "l1",
      "title": "Thiết kế buổi đào tạo nội bộ",
      "category": "learning",
      "target_audiences": [
        "nhan-su",
        "quan-ly",
        "moi-nhan-su"
      ],
      "goals": [
        "ke-hoach",
        "dao-tao"
      ],
      "purpose": "Có kịch bản buổi học xen kẽ lý thuyết và thực hành, đúng thời lượng, có cách kiểm tra người học đã hiểu.",
      "use_cases": [
        "Chuẩn bị buổi chia sẻ kiến thức trong đơn vị",
        "Biến một tài liệu hướng dẫn thành buổi học có tương tác"
      ],
      "prompt": "Bạn là chuyên gia thiết kế đào tạo (instructional designer) cho doanh nghiệp. Tôi cần một buổi đào tạo [số] phút về [chủ đề] cho [đối tượng, số người, trình độ hiện tại]. Sau buổi học, người học cần làm được: [2–3 kết quả cụ thể]. Hình thức: [trực tiếp / trực tuyến]. Hãy thiết kế kịch bản buổi học. Trình bày dạng bảng: Thời gian | Nội dung | Hoạt động của người học | Tài liệu, công cụ | Cách kiểm tra đã hiểu. Mỗi phần lý thuyết không quá 10 phút và đi kèm một hoạt động thực hành. Tổng thời lượng đúng [số] phút; không tự đưa số liệu hay quy định nội bộ nào tôi chưa cung cấp.",
      "required_inputs": [
        "Chủ đề và 2–3 kết quả người học cần đạt sau buổi học",
        "Thời lượng, số người, trình độ hiện tại của người học",
        "Tài liệu chuyên môn đã được phép dùng, nếu cần nội dung nghiệp vụ"
      ],
      "verification": [
        "Cộng lại thời lượng các phần, khớp tổng thời gian.",
        "Nội dung chuyên môn, quy định được người phụ trách nghiệp vụ duyệt trước khi dạy.",
        "Chạy thử một hoạt động thực hành với 2–3 đồng nghiệp."
      ],
      "difficulty": "trung-binh",
      "tags": [
        "đào tạo",
        "bài giảng",
        "workshop",
        "kịch bản lớp học",
        "chia sẻ kiến thức",
        "training"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "time": "15–20 phút",
      "added": "2026-11-11T15:47",
      "example": {
        "input": "Chủ đề: dùng AI viết bài đăng nội bộ · 60 phút · 25 nhân viên văn phòng, chưa dùng AI thường xuyên · Kết quả cần đạt: viết được prompt đủ 5 phần, biết kiểm chứng kết quả · Hình thức: trực tiếp",
        "output": "Bảng kịch bản 6–8 dòng, tổng đúng 60 phút. Mỗi phần lý thuyết không quá 10 phút và đi kèm một hoạt động thực hành; cột cuối nêu cách kiểm tra người học đã hiểu."
      },
      "rank": 7
    },
    {
      "id": "l2",
      "title": "Câu hỏi kiểm tra sau đào tạo",
      "category": "learning",
      "target_audiences": [
        "nhan-su",
        "moi-nhan-su",
        "quan-ly"
      ],
      "goals": [
        "dao-tao"
      ],
      "purpose": "Soạn nhanh bộ câu hỏi trắc nghiệm bám sát tài liệu, có đáp án và căn cứ để người dạy kiểm tra lại.",
      "use_cases": [
        "Kiểm tra mức độ hiểu bài sau buổi đào tạo",
        "Tạo câu hỏi ôn tập cho tài liệu hướng dẫn mới"
      ],
      "prompt": "Bạn là chuyên gia đánh giá đào tạo. Dựa trên tài liệu bài học dưới đây: [dán nội dung bài học hoặc tải tài liệu lên]. Hãy soạn [số] câu hỏi trắc nghiệm kiểm tra mức độ hiểu bài của [đối tượng]. Mỗi câu có 4 phương án, 1 đáp án đúng, giải thích ngắn vì sao đúng và ghi rõ đoạn tài liệu làm căn cứ. Trộn 3 mức: nhớ, hiểu, vận dụng vào tình huống công việc. Chỉ hỏi những gì có trong tài liệu; không tạo câu hỏi đánh đố hoặc bẫy câu chữ.",
      "required_inputs": [
        "Tài liệu bài học đã được phép dùng với công cụ AI",
        "Số câu hỏi và đối tượng làm bài"
      ],
      "verification": [
        "Mở đúng đoạn căn cứ của từng câu, kiểm tra đáp án.",
        "Người phụ trách chuyên môn duyệt bộ câu hỏi trước khi dùng.",
        "Bỏ câu có hai đáp án cùng đúng hoặc diễn đạt dễ hiểu nhầm."
      ],
      "difficulty": "de",
      "tags": [
        "trắc nghiệm",
        "câu hỏi",
        "kiểm tra",
        "bài kiểm tra",
        "quiz",
        "ôn tập"
      ],
      "compatible_tools": [
        "NotebookLM",
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "time": "Khoảng 10 phút",
      "added": "2026-11-11T15:47",
      "example": {
        "input": "Tài liệu: hướng dẫn quy trình đặt phòng họp nội bộ · 10 câu · Đối tượng: nhân viên mới",
        "output": "10 câu trắc nghiệm, mỗi câu 4 phương án và 1 đáp án đúng, có giải thích ngắn và đoạn tài liệu làm căn cứ; trộn câu hỏi nhớ, hiểu và vận dụng."
      },
      "rank": 12
    },
    {
      "id": "l3",
      "title": "Kế hoạch hội nhập nhân viên mới 30–60–90 ngày",
      "category": "learning",
      "target_audiences": [
        "nhan-su",
        "quan-ly"
      ],
      "goals": [
        "ke-hoach"
      ],
      "purpose": "Có lộ trình hội nhập rõ ràng cho nhân viên mới, phân vai cho người quản lý và người hướng dẫn.",
      "use_cases": [
        "Chuẩn bị đón nhân viên mới vào đơn vị",
        "Chuẩn hóa cách hội nhập giữa các nhóm"
      ],
      "prompt": "Bạn là chuyên viên nhân sự phụ trách hội nhập (onboarding). [Đơn vị] sắp đón [số] nhân viên mới ở vị trí [vị trí]. Những gì đã có sẵn: [tài liệu, buổi giới thiệu, người hướng dẫn]. Hãy lập kế hoạch hội nhập 30–60–90 ngày. Trình bày dạng bảng theo từng giai đoạn: Mục tiêu | Hoạt động | Người phụ trách (theo vai trò) | Dấu hiệu hoàn thành. Thêm một danh sách việc cần làm cho người quản lý trực tiếp trong tuần đầu tiên. Không đưa ra quy định về lương, thưởng, thử việc hay chính sách nhân sự; những phần đó ghi \"theo quy định hiện hành của đơn vị\".",
      "required_inputs": [
        "Vị trí và số nhân viên mới (không cần họ tên)",
        "Những tài liệu, buổi giới thiệu, người hướng dẫn đã có sẵn"
      ],
      "verification": [
        "Bộ phận nhân sự có thẩm quyền rà soát trước khi áp dụng.",
        "Đối chiếu với chính sách, quy trình hội nhập hiện hành.",
        "Không đưa thông tin cá nhân của nhân viên mới vào công cụ AI."
      ],
      "difficulty": "trung-binh",
      "tags": [
        "onboarding",
        "nhân viên mới",
        "hội nhập",
        "30-60-90",
        "người mới",
        "nhân sự"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Copilot"
      ],
      "time": "Khoảng 15 phút",
      "added": "2026-11-11T15:47",
      "example": {
        "input": "Đơn vị: phòng Truyền thông · 2 nhân viên mới vị trí chuyên viên nội dung · Đã có: sổ tay nhân viên, buổi giới thiệu chung, 1 người hướng dẫn",
        "output": "Bảng 3 giai đoạn 30–60–90 ngày với mục tiêu, hoạt động, người phụ trách theo vai trò và dấu hiệu hoàn thành; danh sách việc cho quản lý trong tuần đầu; phần chính sách ghi \"theo quy định hiện hành của đơn vị\"."
      },
      "rank": 24
    },
    {
      "id": "s1",
      "title": "Thư phản hồi phản ánh của khách hàng",
      "category": "sales",
      "target_audiences": [
        "kinh-doanh"
      ],
      "goals": [
        "viet"
      ],
      "purpose": "Soạn thư phản hồi lịch sự, đồng cảm, chỉ cam kết đúng hướng xử lý đã được xác nhận.",
      "use_cases": [
        "Trả lời phản ánh, góp ý của khách hàng qua email hoặc tin nhắn",
        "Chuẩn hóa giọng văn phản hồi trong nhóm chăm sóc khách hàng"
      ],
      "prompt": "Bạn là chuyên viên chăm sóc khách hàng tận tâm và chuyên nghiệp. Khách hàng phản ánh về [vấn đề, đã bỏ mọi thông tin nhận diện khách hàng]. Hướng xử lý đã được bộ phận phụ trách xác nhận: [hướng xử lý, thời hạn]. Hãy viết thư phản hồi qua [email / tin nhắn]. Trình bày: lời cảm ơn và ghi nhận phản ánh, tóm tắt vấn đề bằng lời của khách, hướng xử lý và thời hạn, đầu mối liên hệ, lời kết. Giọng lịch sự, đồng cảm, tối đa 180 từ. Không hứa hẹn bồi thường, lãi suất, phí hay cam kết nào ngoài hướng xử lý đã cung cấp; không quy lỗi cho khách hàng.",
      "required_inputs": [
        "Nội dung phản ánh đã ẩn danh: bỏ họ tên, số tài khoản, số thẻ, số điện thoại, địa chỉ",
        "Hướng xử lý và thời hạn đã được bộ phận phụ trách xác nhận",
        "Kênh gửi (email hoặc tin nhắn)"
      ],
      "verification": [
        "Trưởng nhóm chăm sóc khách hàng duyệt trước khi gửi; nội dung liên quan pháp lý, tài chính cần bộ phận có thẩm quyền xác nhận.",
        "Mọi cam kết khớp đúng hướng xử lý đã được xác nhận.",
        "Không dán dữ liệu khách hàng vào công cụ AI công cộng."
      ],
      "difficulty": "trung-binh",
      "tags": [
        "khách hàng",
        "phản ánh",
        "khiếu nại",
        "trả lời khách",
        "chăm sóc khách hàng",
        "email"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Copilot"
      ],
      "time": "Khoảng 5 phút",
      "added": "2026-11-11T15:47",
      "example": {
        "input": "Phản ánh đã ẩn danh: khách chờ lâu tại quầy giao dịch · Hướng xử lý đã xác nhận: bổ sung nhân sự giờ cao điểm từ tuần sau · Kênh: email",
        "output": "Thư dưới 180 từ: cảm ơn và ghi nhận, nhắc lại vấn đề bằng lời của khách, hướng xử lý và thời điểm áp dụng, đầu mối liên hệ. Không có lời hứa nào ngoài hướng đã xác nhận."
      },
      "rank": 6
    },
    {
      "id": "s2",
      "title": "Câu hỏi thường gặp từ tài liệu sản phẩm",
      "category": "sales",
      "target_audiences": [
        "kinh-doanh",
        "truyen-thong"
      ],
      "goals": [
        "viet",
        "phan-tich"
      ],
      "purpose": "Soạn bộ câu hỏi thường gặp (FAQ) dễ hiểu, mỗi câu trả lời đều có trích dẫn từ tài liệu đã công bố.",
      "use_cases": [
        "Chuẩn bị tài liệu hỗ trợ tư vấn cho nhân viên mới",
        "Tổng hợp câu hỏi khách hàng hay hỏi về một sản phẩm, dịch vụ"
      ],
      "prompt": "Bạn là chuyên viên tư vấn sản phẩm. Dựa trên tài liệu sản phẩm đã công bố công khai được tải lên: [tên tài liệu]. Hãy soạn [số] câu hỏi thường gặp (FAQ) mà [nhóm khách hàng] hay hỏi về [sản phẩm, dịch vụ], kèm câu trả lời ngắn gọn, dễ hiểu. Trình bày dạng bảng: Câu hỏi | Câu trả lời (tối đa 60 chữ) | Trích dẫn nguồn trong tài liệu. Chỉ dùng thông tin có trong tài liệu; câu nào tài liệu không trả lời được thì ghi \"cần bộ phận sản phẩm xác nhận\". Không tự đưa ra con số về lãi suất, phí, hạn mức.",
      "required_inputs": [
        "Tài liệu sản phẩm đã công bố công khai (trang web, tờ giới thiệu, điều khoản đã đăng)",
        "Nhóm khách hàng mục tiêu và số câu hỏi cần soạn"
      ],
      "verification": [
        "Bộ phận sản phẩm và tuân thủ duyệt trước khi sử dụng.",
        "Mở từng trích dẫn, đối chiếu với tài liệu gốc.",
        "Cập nhật lại khi tài liệu sản phẩm thay đổi."
      ],
      "difficulty": "trung-binh",
      "tags": [
        "FAQ",
        "câu hỏi thường gặp",
        "sản phẩm",
        "tư vấn",
        "khách hàng",
        "tài liệu sản phẩm"
      ],
      "compatible_tools": [
        "NotebookLM",
        "Claude",
        "ChatGPT"
      ],
      "time": "10–15 phút",
      "added": "2026-11-11T15:47",
      "example": {
        "input": "Tài liệu: trang giới thiệu công khai của một sản phẩm thẻ · Nhóm khách hàng: sinh viên · 8 câu hỏi",
        "output": "Bảng 8 dòng gồm câu hỏi, câu trả lời tối đa 60 chữ và vị trí trích dẫn trong tài liệu. Câu nào tài liệu không trả lời được ghi \"cần bộ phận sản phẩm xác nhận\"."
      },
      "rank": 18
    },
    {
      "id": "s3",
      "title": "Luyện tư vấn bằng nhập vai khách hàng",
      "category": "sales",
      "target_audiences": [
        "kinh-doanh",
        "nhan-su"
      ],
      "goals": [
        "dao-tao"
      ],
      "purpose": "Để AI đóng vai khách hàng, giúp bạn luyện tư vấn và nhận góp ý theo tiêu chí rõ ràng.",
      "use_cases": [
        "Luyện tập trước buổi tư vấn quan trọng",
        "Đào tạo nhân viên mới xử lý câu hỏi và phản đối"
      ],
      "prompt": "Bạn đóng vai một khách hàng [mô tả: nhu cầu, mối lo, mức độ hiểu biết] đang hỏi về [sản phẩm, dịch vụ]. Tôi là nhân viên tư vấn. Hãy trò chuyện với tôi từng lượt một, mỗi lượt chỉ 1–2 câu, đưa ra thắc mắc và phản đối tự nhiên như khách hàng thật. Sau [số] lượt hoặc khi tôi gõ \"kết thúc\", hãy nhận xét phần tư vấn của tôi theo 4 tiêu chí: lắng nghe, giải thích rõ ràng, xử lý phản đối, chốt bước tiếp theo; mỗi tiêu chí nêu 1 điểm tốt và 1 điểm cần cải thiện. Chỉ dùng thông tin sản phẩm tôi cung cấp: [thông tin sản phẩm đã công bố].",
      "required_inputs": [
        "Chân dung khách hàng giả định (không dùng thông tin khách hàng thật)",
        "Thông tin sản phẩm, dịch vụ đã công bố công khai"
      ],
      "verification": [
        "Thông tin sản phẩm AI nhắc tới phải khớp tài liệu đã công bố.",
        "Góp ý của AI là tham khảo; người hướng dẫn hoặc quản lý trực tiếp đánh giá kỹ năng thật.",
        "Không dùng nội dung luyện tập làm câu trả lời chính thức cho khách."
      ],
      "difficulty": "nang-cao",
      "tags": [
        "nhập vai",
        "luyện tập",
        "tư vấn",
        "role-play",
        "kỹ năng bán hàng",
        "xử lý phản đối"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "time": "15–20 phút luyện tập",
      "added": "2026-11-11T15:47",
      "example": {
        "input": "Khách hàng giả định: chủ cửa hàng nhỏ, ngại thủ tục phức tạp, ít dùng ứng dụng ngân hàng · Thông tin dịch vụ đã công bố · 6 lượt",
        "output": "AI hỏi từng lượt 1–2 câu như khách thật, có phản đối tự nhiên; sau 6 lượt nhận xét theo 4 tiêu chí, mỗi tiêu chí 1 điểm tốt và 1 điểm cần cải thiện."
      },
      "rank": 27
    },
    {
      "id": "p1",
      "title": "Báo cáo tiến độ dự án hằng tuần",
      "category": "pm",
      "target_audiences": [
        "van-hanh",
        "quan-ly",
        "moi-nhan-su"
      ],
      "goals": [
        "viet"
      ],
      "purpose": "Biến ghi chú tiến độ thành báo cáo tuần ngắn gọn, nêu rõ trạng thái và việc cần quyết định.",
      "use_cases": [
        "Gửi cập nhật tiến độ cho quản lý hoặc các bên liên quan",
        "Họp giao ban đầu tuần"
      ],
      "prompt": "Bạn là quản lý dự án (project manager) chuyên nghiệp. Dưới đây là ghi chú tiến độ tuần này của dự án [tên dự án]: [dán ghi chú: việc đã xong, đang làm, vướng mắc]. Mục tiêu giai đoạn: [mục tiêu, mốc]. Hãy viết báo cáo tiến độ tuần gửi [người nhận]. Trình bày: trạng thái chung (Đúng tiến độ / Có rủi ro / Chậm) kèm 1 câu lý do; 3–5 việc đã hoàn thành; việc tuần tới; vướng mắc cần hỗ trợ và người cần quyết định. Tối đa 200 từ, dạng gạch đầu dòng. Chỉ dùng thông tin trong ghi chú, không đánh giá trạng thái tốt hơn thực tế.",
      "required_inputs": [
        "Ghi chú tiến độ trong tuần, đã bỏ thông tin mật",
        "Mục tiêu và mốc của giai đoạn",
        "Người nhận báo cáo"
      ],
      "verification": [
        "Trạng thái chung phản ánh đúng thực tế, không tô hồng.",
        "Mỗi vướng mắc có người cần quyết định cụ thể.",
        "Người phụ trách dự án đọc lại trước khi gửi."
      ],
      "difficulty": "de",
      "tags": [
        "báo cáo tuần",
        "tiến độ",
        "dự án",
        "status report",
        "giao ban",
        "cập nhật"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Copilot",
        "Gemini"
      ],
      "time": "Khoảng 5 phút",
      "added": "2026-11-11T15:47",
      "example": {
        "input": "Dự án: ngày hội văn hóa · Ghi chú tuần: đã chốt địa điểm, đang chờ báo giá âm thanh, chưa có danh sách đội thi · Mốc: tổng duyệt sau 3 tuần · Người nhận: trưởng phòng",
        "output": "Báo cáo dưới 200 từ dạng gạch đầu dòng: trạng thái chung kèm 1 câu lý do, việc đã xong, việc tuần tới, vướng mắc kèm người cần quyết định."
      },
      "rank": 8
    },
    {
      "id": "e2",
      "title": "Kế hoạch tổ chức sự kiện",
      "category": "pm",
      "target_audiences": [
        "van-hanh",
        "van-hoa",
        "quan-ly"
      ],
      "purpose": "Có bảng đầu việc theo hạng mục, người phụ trách và mốc đếm ngược.",
      "goals": [
        "ke-hoach"
      ],
      "use_cases": [
        "Lập kế hoạch cho sự kiện, chương trình có nhiều đầu việc",
        "Phân công nhóm và theo dõi mốc đếm ngược"
      ],
      "prompt": "Bạn là quản lý dự án sự kiện. Sự kiện [tên sự kiện] diễn ra vào [ngày], còn [số] tuần chuẩn bị, đội ngũ gồm [các vai trò trong nhóm], ngân sách [mức ngân sách]. Hãy lập kế hoạch tổ chức. Trình bày dạng bảng: Hạng mục | Việc cụ thể | Người phụ trách (theo vai trò) | Hạn hoàn thành (đếm ngược D-…) | Phụ thuộc vào việc nào. Nhóm theo 5 hạng mục: nội dung, hậu cần, truyền thông, nhân sự, ngân sách. Cuối bảng thêm 5 rủi ro lớn nhất và phương án dự phòng. Không tự đặt số tiền; dùng mốc D-… nếu chưa có ngày cụ thể.",
      "required_inputs": [
        "Ngày diễn ra và số tuần chuẩn bị",
        "Các vai trò trong nhóm",
        "Mức ngân sách khái quát"
      ],
      "verification": [
        "Mốc thời gian khớp lịch nghỉ lễ và lịch công việc của đơn vị.",
        "Mỗi việc có đúng một người chịu trách nhiệm.",
        "Ngân sách điền từ số liệu thật, không lấy số AI gợi ý."
      ],
      "difficulty": "trung-binh",
      "tags": [
        "kế hoạch",
        "đầu việc",
        "phân công",
        "timeline",
        "mốc thời gian",
        "dự án"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Copilot"
      ],
      "time": "10–15 phút",
      "added": "2026-11-11T15:29",
      "example": {
        "input": "Sự kiện: Hội thao nội bộ · 6 tuần chuẩn bị · Đội ngũ: trưởng ban, 2 người hậu cần, 1 người truyền thông, 1 người tài chính",
        "output": "Bảng khoảng 20–25 đầu việc chia 5 hạng mục với mốc D-42 đến D+3, cột phụ thuộc giúp thấy việc nào phải xong trước; cuối bảng là 5 rủi ro như thời tiết, thiếu người đăng ký, kèm phương án dự phòng."
      },
      "rank": 17
    },
    {
      "id": "p2",
      "title": "Nhận diện và theo dõi rủi ro dự án",
      "category": "pm",
      "target_audiences": [
        "van-hanh",
        "quan-ly"
      ],
      "goals": [
        "phan-tich",
        "ke-hoach"
      ],
      "purpose": "Lập bảng rủi ro có mức ưu tiên, dấu hiệu cảnh báo sớm và biện pháp phòng ngừa.",
      "use_cases": [
        "Khởi động một dự án mới",
        "Rà soát rủi ro trước mốc quan trọng"
      ],
      "prompt": "Bạn là chuyên gia quản trị rủi ro dự án. Dự án [tên dự án] nhằm [mục tiêu], thời gian [thời gian], nguồn lực [nhân sự, ngân sách ở mức khái quát], các bên liên quan [các bên]. Hãy nhận diện 8–10 rủi ro chính. Trình bày dạng bảng: Rủi ro | Nguyên nhân | Khả năng xảy ra (Thấp/Trung bình/Cao) | Mức ảnh hưởng (Thấp/Trung bình/Cao) | Dấu hiệu cảnh báo sớm | Biện pháp phòng ngừa | Người theo dõi (theo vai trò). Sắp xếp theo mức ưu tiên giảm dần. Ghi rõ đánh giá nào là giả định cần nhóm dự án xác nhận.",
      "required_inputs": [
        "Mục tiêu, thời gian, nguồn lực của dự án ở mức khái quát",
        "Danh sách các bên liên quan (theo vai trò, không cần tên người)"
      ],
      "verification": [
        "Nhóm dự án rà soát và chỉnh lại mức khả năng, ảnh hưởng.",
        "Rủi ro tài chính, pháp lý, tuân thủ được bộ phận chuyên trách xác nhận.",
        "Cập nhật bảng rủi ro định kỳ, không dùng một lần rồi bỏ."
      ],
      "difficulty": "nang-cao",
      "tags": [
        "rủi ro",
        "quản trị rủi ro",
        "risk",
        "dự án",
        "phòng ngừa",
        "kế hoạch dự phòng"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Copilot"
      ],
      "time": "Khoảng 15 phút",
      "added": "2026-11-11T15:47",
      "example": {
        "input": "Dự án: chuỗi workshop AI cho 120 người trong 2 tháng · Nguồn lực: 4 người, ngân sách mức vừa · Các bên: ban tổ chức, giảng viên, đơn vị hậu cần",
        "output": "Bảng 8–10 rủi ro xếp theo ưu tiên, mỗi dòng có nguyên nhân, khả năng, ảnh hưởng, dấu hiệu cảnh báo sớm, biện pháp phòng ngừa và người theo dõi; đánh giá nào là giả định được ghi rõ."
      },
      "rank": 25
    },
    {
      "id": "ux1",
      "title": "Đánh giá tổng thể UI",
      "category": "ux",
      "target_audiences": [
        "thiet-ke",
        "quan-ly"
      ],
      "goals": [
        "danh-gia"
      ],
      "purpose": "Đánh giá giao diện theo 7 tiêu chí thiết kế và trải nghiệm, chỉ ra 5 vấn đề cần ưu tiên xử lý.",
      "use_cases": [
        "Rà soát website, landing page, ứng dụng trước khi ra mắt",
        "Đánh giá nhanh một thiết kế do đối tác gửi"
      ],
      "prompt": "Vai trò: Bạn là Senior UI/UX Designer và Design Lead.\n\nNhiệm vụ: Phân tích giao diện được cung cấp dưới góc độ thiết kế và trải nghiệm người dùng.\n\nĐánh giá các tiêu chí:\n1. Visual Hierarchy.\n2. Layout và bố cục.\n3. Typography.\n4. Color & Contrast.\n5. Spacing & Alignment.\n6. Component Consistency.\n7. Usability.\n\nVới mỗi tiêu chí, hãy:\n- Đánh giá hiện trạng.\n- Chỉ ra điểm tốt.\n- Phát hiện vấn đề cụ thể.\n- Giải thích tác động đến người dùng.\n- Đề xuất hướng cải thiện.\n\nCuối cùng, tổng hợp 5 vấn đề cần ưu tiên xử lý nhất. Không tự suy diễn những chi tiết không thể quan sát từ hình ảnh.",
      "required_inputs": [
        "Ảnh chụp giao diện rõ nét, đã che thông tin khách hàng, số liệu nội bộ",
        "Gửi kèm sau prompt 2–3 câu bối cảnh: sản phẩm, người dùng mục tiêu, mục tiêu của màn hình"
      ],
      "verification": [
        "Đối chiếu từng vấn đề với ảnh gốc, loại bỏ nhận xét không quan sát được.",
        "Đo lại độ tương phản màu bằng công cụ kiểm tra, không chỉ dựa vào AI.",
        "Designer và người phụ trách sản phẩm quyết định thứ tự xử lý."
      ],
      "difficulty": "trung-binh",
      "tags": [
        "UI",
        "giao diện",
        "đánh giá thiết kế",
        "audit",
        "website",
        "ứng dụng",
        "UX"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "time": "Khoảng 10 phút",
      "added": "2026-11-11T15:47",
      "source": "UI Design Audit · Prompt 01",
      "audit_no": 1,
      "audit_group": "A",
      "audit_roles": [
        "designer",
        "product",
        "reviewer",
        "marketing"
      ],
      "example": {
        "input": "Ảnh landing page đăng ký sự kiện (đã che thông tin) · Bối cảnh: nhân viên toàn hệ thống, mục tiêu là đăng ký tham gia",
        "output": "7 mục theo 7 tiêu chí, mỗi mục có hiện trạng, điểm tốt, vấn đề, tác động và hướng cải thiện; cuối cùng là 5 vấn đề cần ưu tiên."
      },
      "rank": 5
    },
    {
      "id": "ux2",
      "title": "Audit một màn hình ứng dụng",
      "category": "ux",
      "target_audiences": [
        "thiet-ke",
        "quan-ly"
      ],
      "goals": [
        "danh-gia"
      ],
      "purpose": "Xác định đúng vấn đề của một màn hình ứng dụng trước khi nghĩ tới redesign.",
      "use_cases": [
        "Một màn hình có tỉ lệ hoàn thành tác vụ thấp",
        "Chuẩn bị danh sách vấn đề để gửi nhóm thiết kế"
      ],
      "prompt": "Bạn là chuyên gia UX/UI chuyên thiết kế sản phẩm số.\n\nHãy audit màn hình ứng dụng được đính kèm. Tập trung vào:\n- Mục tiêu của màn hình.\n- Cấu trúc và thứ tự thông tin.\n- Khả năng nhận biết hành động chính.\n- Mức độ dễ hiểu của nội dung.\n- Tính nhất quán giữa các thành phần.\n- Khả năng sử dụng trên kích thước màn hình hiện tại.\n\nTrình bày kết quả theo bảng: Vấn đề | Vị trí | Mức độ ảnh hưởng | Nguyên nhân | Đề xuất.\n\nKhông đề xuất redesign ngay. Trước tiên cần xác định đúng vấn đề.",
      "required_inputs": [
        "Ảnh chụp giao diện rõ nét, đã che thông tin khách hàng, số liệu nội bộ",
        "Gửi kèm sau prompt 2–3 câu bối cảnh: sản phẩm, người dùng mục tiêu, mục tiêu của màn hình"
      ],
      "verification": [
        "Kiểm tra cột Vị trí: mỗi vấn đề chỉ đúng chỗ trên màn hình.",
        "Xác nhận vấn đề bằng quan sát người dùng thật khi có thể.",
        "Mức độ ảnh hưởng do nhóm sản phẩm chốt."
      ],
      "difficulty": "trung-binh",
      "tags": [
        "màn hình ứng dụng",
        "app",
        "audit",
        "bảng vấn đề",
        "usability",
        "UX"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "time": "Khoảng 10 phút",
      "added": "2026-11-11T15:47",
      "source": "UI Design Audit · Prompt 02",
      "audit_no": 2,
      "audit_group": "A",
      "audit_roles": [
        "designer",
        "product",
        "reviewer"
      ],
      "example": {
        "input": "Ảnh màn hình đặt lịch hẹn trên ứng dụng di động · Mục tiêu màn hình: chọn ngày giờ và xác nhận",
        "output": "Bảng Vấn đề | Vị trí | Mức độ ảnh hưởng | Nguyên nhân | Đề xuất. Chưa có phương án redesign."
      },
      "rank": 15
    },
    {
      "id": "ux3",
      "title": "Kiểm tra phân cấp thị giác",
      "category": "ux",
      "target_audiences": [
        "thiet-ke",
        "truyen-thong"
      ],
      "goals": [
        "danh-gia"
      ],
      "purpose": "Kiểm tra người xem có nhận ra nội dung quan trọng nhất trong 3 giây đầu không và sắp xếp lại thứ tự ưu tiên.",
      "use_cases": [
        "Landing page, banner, poster quá nhiều chữ",
        "Màn hình có nhiều yếu tố tranh nhau sự chú ý"
      ],
      "prompt": "Bạn là Art Director chuyên về thiết kế giao diện số.\n\nHãy phân tích hệ thống phân cấp thị giác của màn hình được cung cấp:\n- Tiêu đề chính có đủ nổi bật không?\n- Người xem có nhận ra nội dung quan trọng nhất trong 3 giây đầu không?\n- Các cấp thông tin có được phân biệt rõ ràng không?\n- Kích thước, độ đậm và màu sắc chữ có hợp lý không?\n- Có quá nhiều yếu tố cạnh tranh sự chú ý không?\n\nĐề xuất thứ tự ưu tiên thị giác mới và cách sắp xếp lại nội dung. Giữ nguyên ý nghĩa thông tin.",
      "required_inputs": [
        "Ảnh chụp giao diện rõ nét, đã che thông tin khách hàng, số liệu nội bộ",
        "Gửi kèm sau prompt 2–3 câu bối cảnh: sản phẩm, người dùng mục tiêu, mục tiêu của màn hình"
      ],
      "verification": [
        "Thử nghiệm 3 giây với 2–3 đồng nghiệp chưa xem thiết kế.",
        "Đề xuất sắp xếp lại giữ nguyên ý nghĩa thông tin.",
        "Đối chiếu với nhận diện thương hiệu trước khi sửa."
      ],
      "difficulty": "trung-binh",
      "tags": [
        "phân cấp thị giác",
        "visual hierarchy",
        "bố cục",
        "tiêu đề",
        "nổi bật",
        "thứ tự đọc"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "time": "5–10 phút",
      "added": "2026-11-11T15:47",
      "source": "UI Design Audit · Prompt 03",
      "audit_no": 3,
      "audit_group": "B",
      "audit_roles": [
        "designer",
        "marketing"
      ],
      "example": {
        "input": "Ảnh banner tuyển cộng tác viên truyền thông nội bộ có 4 khối chữ",
        "output": "Trả lời 5 câu hỏi về phân cấp thị giác, rồi đề xuất thứ tự ưu tiên mới, ví dụ tiêu đề → lợi ích → nút đăng ký, giữ nguyên nội dung."
      },
      "rank": 26
    },
    {
      "id": "ux4",
      "title": "Audit Typography",
      "category": "ux",
      "target_audiences": [
        "thiet-ke"
      ],
      "goals": [
        "danh-gia"
      ],
      "purpose": "Rà soát hệ thống chữ: font, cỡ, độ đậm, khoảng cách dòng, độ dài dòng và đề xuất thang chữ phù hợp.",
      "use_cases": [
        "Giao diện có quá nhiều cỡ chữ, khó đọc",
        "Chuẩn hóa typography trước khi đưa vào Design System"
      ],
      "prompt": "Bạn là chuyên gia Typography trong thiết kế sản phẩm số.\n\nKiểm tra:\n- Font family và tính nhất quán.\n- Font size và thang kích thước.\n- Font weight.\n- Line height.\n- Letter spacing.\n- Độ dài dòng và khả năng đọc.\n- Sự khác biệt giữa heading, body, caption và label.\n\nĐề xuất hệ thống typography phù hợp. Ưu tiên tận dụng font hiện có, không tự ý thay đổi nhận diện thương hiệu.",
      "required_inputs": [
        "Ảnh chụp giao diện rõ nét, đã che thông tin khách hàng, số liệu nội bộ",
        "Gửi kèm sau prompt 2–3 câu bối cảnh: sản phẩm, người dùng mục tiêu, mục tiêu của màn hình",
        "Nếu có: thông số font, cỡ chữ đang dùng hoặc link file thiết kế"
      ],
      "verification": [
        "Đo lại cỡ chữ, khoảng cách dòng trên file thiết kế gốc.",
        "Giữ font theo nhận diện thương hiệu; mọi thay đổi font cần người phụ trách thương hiệu duyệt.",
        "Kiểm tra khả năng đọc trên điện thoại thật."
      ],
      "difficulty": "nang-cao",
      "tags": [
        "typography",
        "font chữ",
        "cỡ chữ",
        "khả năng đọc",
        "chữ",
        "design system"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "time": "Khoảng 10 phút",
      "added": "2026-11-11T15:47",
      "source": "UI Design Audit · Prompt 04",
      "audit_no": 4,
      "audit_group": "B",
      "audit_roles": [
        "designer",
        "developer"
      ],
      "example": {
        "input": "Ảnh 3 màn hình của cùng ứng dụng, kèm danh sách cỡ chữ đang dùng",
        "output": "Nhận xét từng tiêu chí typography và một thang chữ đề xuất cho heading, body, caption, label, dùng font hiện có."
      },
      "rank": 31
    },
    {
      "id": "ux5",
      "title": "Kiểm tra bố cục và khoảng cách",
      "category": "ux",
      "target_audiences": [
        "thiet-ke"
      ],
      "goals": [
        "danh-gia"
      ],
      "purpose": "Rà soát lưới, căn chỉnh, khoảng cách và cách nhóm thông tin để giao diện gọn, dễ quét mắt.",
      "use_cases": [
        "Giao diện trông lộn xộn dù nội dung không nhiều",
        "Chuẩn bị bàn giao thiết kế cho lập trình viên"
      ],
      "prompt": "Bạn là UI Designer chuyên về hệ thống lưới và bố cục.\n\nHãy kiểm tra bố cục của giao diện được cung cấp:\n- Hệ thống lưới (grid): số cột, lề, khoảng cách giữa các cột có nhất quán không?\n- Căn chỉnh (alignment): các thành phần có thẳng hàng theo một trục rõ ràng không?\n- Khoảng cách (spacing): khoảng cách giữa các nhóm và trong từng nhóm có theo một thang thống nhất không?\n- Nhóm thông tin: nội dung liên quan có được đặt gần nhau và tách biệt với nhóm khác không?\n- Khoảng trống: có vùng nào quá chật hoặc quá trống không?\n\nTrình bày kết quả theo bảng: Vị trí | Vấn đề | Ảnh hưởng đến người dùng | Đề xuất (nêu rõ cách căn chỉnh hoặc khoảng cách nên dùng).\n\nChỉ nêu con số khoảng cách khi ước lượng được từ hình ảnh; nếu không chắc chắn, ghi \"cần đo lại trên file thiết kế\".",
      "required_inputs": [
        "Ảnh chụp giao diện rõ nét, đã che thông tin khách hàng, số liệu nội bộ",
        "Gửi kèm sau prompt 2–3 câu bối cảnh: sản phẩm, người dùng mục tiêu, mục tiêu của màn hình",
        "Nếu có: thông số lưới, thang khoảng cách đang dùng"
      ],
      "verification": [
        "Đo lại khoảng cách trên file thiết kế gốc, không dựa vào ước lượng từ ảnh.",
        "Đối chiếu đề xuất với thang khoảng cách của Design System.",
        "Xem lại trên cả màn hình lớn và điện thoại."
      ],
      "difficulty": "trung-binh",
      "tags": [
        "bố cục",
        "layout",
        "khoảng cách",
        "spacing",
        "căn chỉnh",
        "lưới",
        "grid"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "time": "Khoảng 10 phút",
      "added": "2026-11-11T16:20",
      "source": "UI Design Audit · Prompt 05",
      "audit_no": 5,
      "audit_group": "C",
      "audit_roles": [
        "designer",
        "developer"
      ],
      "example": {
        "input": "Ảnh trang tin tức nội bộ trên máy tính",
        "output": "Bảng Vị trí | Vấn đề | Ảnh hưởng | Đề xuất; khoảng cách không ước lượng được ghi \"cần đo lại trên file thiết kế\"."
      },
      "rank": 32
    },
    {
      "id": "ux6",
      "title": "Kiểm tra tính nhất quán của component",
      "category": "ux",
      "target_audiences": [
        "thiet-ke"
      ],
      "goals": [
        "danh-gia"
      ],
      "purpose": "Tìm các chỗ cùng một chức năng nhưng hiển thị khác nhau và đề xuất chuẩn hóa theo Design System.",
      "use_cases": [
        "Sản phẩm có nhiều người cùng thiết kế qua nhiều giai đoạn",
        "Chuẩn bị xây dựng hoặc cập nhật Design System"
      ],
      "prompt": "Bạn là Design System Lead.\n\nHãy rà soát các thành phần giao diện (component) trong các màn hình được cung cấp:\n- Nút (button): kiểu, kích thước, màu, bo góc.\n- Ô nhập liệu, thẻ (card), danh sách, biểu tượng (icon).\n- Cùng một chức năng có đang dùng nhiều kiểu hiển thị khác nhau không?\n- Trạng thái tương tác: mặc định, đang chọn, vô hiệu hóa, lỗi.\n- Mức độ khớp với Design System hoặc bộ nhận diện đã có.\n\nLập bảng: Component | Các biến thể đang có | Điểm không nhất quán | Đề xuất chuẩn hóa | Mức độ ưu tiên.\n\nƯu tiên tận dụng component đã có. Không tự đặt ra quy chuẩn mới khi chưa được cung cấp thông tin Design System; nếu thiếu, ghi rõ \"cần đối chiếu Design System\".",
      "required_inputs": [
        "Ảnh chụp 3–5 màn hình của cùng sản phẩm, đã che thông tin khách hàng, số liệu nội bộ",
        "Nếu có: ảnh hoặc mô tả bộ component chuẩn của Design System"
      ],
      "verification": [
        "Đối chiếu từng component với thư viện Design System gốc.",
        "Người phụ trách Design System quyết định biến thể nào là chuẩn.",
        "Kiểm tra lại các trạng thái tương tác trên sản phẩm thật."
      ],
      "difficulty": "nang-cao",
      "tags": [
        "component",
        "design system",
        "nhất quán",
        "nút",
        "button",
        "chuẩn hóa"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "time": "10–15 phút",
      "added": "2026-11-11T16:20",
      "source": "UI Design Audit · Prompt 06",
      "audit_extra": {
        "label": "Design System hoặc bộ component chuẩn",
        "ph": "Ví dụ: nút chính màu tím, bo góc 12px; mỗi màn hình chỉ một nút chính"
      },
      "audit_no": 6,
      "audit_group": "C",
      "audit_roles": [
        "designer",
        "developer",
        "product"
      ],
      "example": {
        "input": "Ảnh 5 màn hình của cùng sản phẩm, kèm mô tả nút chính trong Design System",
        "output": "Bảng component với các biến thể đang có, điểm không nhất quán, đề xuất chuẩn hóa và mức ưu tiên."
      },
      "rank": 33
    },
    {
      "id": "ux7",
      "title": "Kiểm tra màu sắc và độ tương phản",
      "category": "ux",
      "target_audiences": [
        "thiet-ke",
        "truyen-thong"
      ],
      "goals": [
        "danh-gia"
      ],
      "purpose": "Đánh giá cách dùng màu nhấn, màu trạng thái và độ tương phản chữ trên nền.",
      "use_cases": [
        "Banner, landing page nhiều màu, khó đọc chữ",
        "Màn hình có màu trạng thái dễ gây nhầm"
      ],
      "prompt": "Bạn là chuyên gia về màu sắc trong thiết kế giao diện.\n\nHãy phân tích cách dùng màu của giao diện được cung cấp:\n- Bảng màu có thống nhất và đúng nhận diện thương hiệu không?\n- Màu nhấn có được dành cho hành động chính không?\n- Màu trạng thái (thành công, cảnh báo, lỗi) có rõ ràng và nhất quán không?\n- Độ tương phản giữa chữ và nền có đủ để đọc dễ dàng không?\n- Có thông tin nào chỉ được truyền đạt bằng màu sắc không?\n\nTrình bày theo bảng: Vị trí | Màu đang dùng (ước lượng) | Vấn đề | Đề xuất.\n\nĐộ tương phản đánh giá từ hình ảnh chỉ là ước lượng; hãy đánh dấu các cặp màu cần đo lại bằng công cụ kiểm tra độ tương phản. Không đề xuất thay đổi màu thương hiệu chính.",
      "required_inputs": [
        "Ảnh chụp giao diện rõ nét, đã che thông tin khách hàng, số liệu nội bộ",
        "Gửi kèm sau prompt 2–3 câu bối cảnh: sản phẩm, người dùng mục tiêu, mục tiêu của màn hình",
        "Nếu có: mã màu của bộ nhận diện"
      ],
      "verification": [
        "Đo lại độ tương phản các cặp màu được đánh dấu bằng công cụ kiểm tra.",
        "Mọi thay đổi màu thương hiệu cần người phụ trách thương hiệu duyệt.",
        "Xem lại trên màn hình điện thoại ngoài trời và màn chiếu."
      ],
      "difficulty": "trung-binh",
      "tags": [
        "màu sắc",
        "độ tương phản",
        "contrast",
        "màu nhấn",
        "bảng màu",
        "color"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "time": "5–10 phút",
      "added": "2026-11-11T16:20",
      "source": "UI Design Audit · Prompt 07",
      "audit_no": 7,
      "audit_group": "D",
      "audit_roles": [
        "designer",
        "marketing",
        "developer"
      ],
      "example": {
        "input": "Ảnh poster sự kiện dùng nền gradient và chữ trắng",
        "output": "Bảng các vị trí dùng màu, vấn đề và đề xuất; các cặp màu cần đo lại độ tương phản được đánh dấu riêng."
      },
      "rank": 34
    },
    {
      "id": "ux8",
      "title": "Audit khả năng tiếp cận (Accessibility)",
      "category": "ux",
      "target_audiences": [
        "thiet-ke"
      ],
      "goals": [
        "danh-gia"
      ],
      "purpose": "Kiểm tra giao diện có dùng được cho người lớn tuổi, người hạn chế thị lực hoặc vận động không.",
      "use_cases": [
        "Sản phẩm phục vụ nhiều nhóm tuổi",
        "Rà soát trước khi ra mắt tính năng mới"
      ],
      "prompt": "Bạn là chuyên gia về khả năng tiếp cận (accessibility) trong sản phẩm số, am hiểu bộ tiêu chí WCAG.\n\nHãy kiểm tra giao diện được cung cấp dưới góc nhìn của người dùng lớn tuổi, người hạn chế thị lực hoặc vận động:\n- Cỡ chữ và độ tương phản có đủ để đọc không?\n- Vùng chạm của nút, liên kết có đủ lớn và đủ cách nhau không?\n- Biểu tượng có kèm nhãn chữ khi cần không?\n- Thông báo lỗi có nói rõ lỗi gì và cách sửa không?\n- Thứ tự đọc nội dung có hợp lý không?\n\nTrình bày theo bảng: Vấn đề | Vị trí | Nhóm người dùng bị ảnh hưởng | Mức độ (Critical / High / Medium / Low) | Đề xuất.\n\nChỉ đánh giá những gì quan sát được từ hình ảnh. Các tiêu chí phải kiểm tra trên sản phẩm thật (trình đọc màn hình, điều hướng bằng bàn phím) hãy liệt kê riêng thành danh sách cần kiểm tra thêm.",
      "required_inputs": [
        "Ảnh chụp giao diện rõ nét, đã che thông tin khách hàng, số liệu nội bộ",
        "Gửi kèm sau prompt 2–3 câu bối cảnh: sản phẩm, người dùng mục tiêu, mục tiêu của màn hình"
      ],
      "verification": [
        "Kiểm tra thật bằng trình đọc màn hình và bàn phím theo danh sách AI liệt kê.",
        "Đo lại độ tương phản và kích thước vùng chạm trên file thiết kế.",
        "Khi có thể, mời người dùng lớn tuổi thử thao tác."
      ],
      "difficulty": "nang-cao",
      "tags": [
        "accessibility",
        "khả năng tiếp cận",
        "WCAG",
        "người lớn tuổi",
        "vùng chạm",
        "trợ năng"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "time": "Khoảng 15 phút",
      "added": "2026-11-11T16:20",
      "source": "UI Design Audit · Prompt 08",
      "audit_no": 8,
      "audit_group": "D",
      "audit_roles": [
        "designer",
        "developer",
        "product"
      ],
      "example": {
        "input": "Ảnh màn hình đăng nhập và màn hình báo lỗi của ứng dụng",
        "output": "Bảng vấn đề kèm nhóm người dùng bị ảnh hưởng và mức độ; danh sách riêng các mục phải kiểm tra trên sản phẩm thật."
      },
      "rank": 35
    },
    {
      "id": "ux9",
      "title": "Audit luồng thao tác nhiều màn hình",
      "category": "ux",
      "target_audiences": [
        "thiet-ke",
        "quan-ly"
      ],
      "goals": [
        "danh-gia"
      ],
      "purpose": "Tìm điểm người dùng dễ dừng lại, nhầm lẫn hoặc bỏ dở trong một luồng nhiều bước.",
      "use_cases": [
        "Luồng đăng ký, đặt lịch, gửi yêu cầu có nhiều người bỏ dở",
        "Rà soát luồng trước khi phát triển"
      ],
      "prompt": "Bạn là UX Designer chuyên phân tích hành trình người dùng.\n\nTôi gửi kèm các màn hình theo đúng thứ tự của một luồng thao tác. Hãy phân tích:\n- Mục tiêu người dùng muốn hoàn thành trong luồng này.\n- Số bước và thao tác cần thiết; bước nào có thể gộp hoặc bỏ.\n- Điểm người dùng dễ dừng lại, nhầm lẫn hoặc bỏ dở.\n- Tính liên tục giữa các màn hình: tiêu đề, nút, thông tin có khớp nhau không?\n- Cách xử lý khi có lỗi hoặc khi người dùng muốn quay lại.\n\nTrình bày theo từng màn hình: Bước | Người dùng cần làm gì | Điểm gây ma sát | Đề xuất. Cuối cùng tóm tắt 3 điểm gây ma sát lớn nhất.\n\nKhông giả định nội dung của các màn hình không được cung cấp; nếu luồng thiếu bước, ghi rõ \"cần bổ sung màn hình\".",
      "required_inputs": [
        "Ảnh chụp từng màn hình theo đúng thứ tự, đã che thông tin khách hàng",
        "Mô tả ngắn điểm bắt đầu và điểm kết thúc của luồng"
      ],
      "verification": [
        "Đi lại luồng trên sản phẩm thật để xác nhận từng điểm ma sát.",
        "Đối chiếu với dữ liệu sử dụng thực tế nếu đơn vị có.",
        "Nhóm sản phẩm chốt bước nào được gộp hoặc bỏ."
      ],
      "difficulty": "nang-cao",
      "tags": [
        "luồng",
        "user flow",
        "hành trình người dùng",
        "nhiều bước",
        "bỏ dở",
        "ma sát"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "time": "15–20 phút",
      "added": "2026-11-11T16:20",
      "source": "UI Design Audit · Prompt 09",
      "audit_extra": {
        "label": "Các bước trong luồng",
        "ph": "Ví dụ: Trang chủ → Chọn sự kiện → Điền thông tin → Xác nhận"
      },
      "audit_no": 9,
      "audit_group": "E",
      "audit_roles": [
        "product",
        "designer"
      ],
      "example": {
        "input": "4 ảnh của luồng đăng ký sự kiện: Trang chủ → Chọn sự kiện → Điền thông tin → Xác nhận",
        "output": "Bảng theo từng bước: việc người dùng cần làm, điểm gây ma sát, đề xuất; cuối cùng là 3 điểm ma sát lớn nhất."
      },
      "rank": 36
    },
    {
      "id": "ux10",
      "title": "Kiểm tra CTA và nội dung chữ trên giao diện",
      "category": "ux",
      "target_audiences": [
        "thiet-ke",
        "truyen-thong"
      ],
      "goals": [
        "danh-gia"
      ],
      "purpose": "Rà soát tiêu đề, nút, nhãn, thông báo để người dùng hiểu ngay và biết bước tiếp theo.",
      "use_cases": [
        "Landing page, màn hình có tỉ lệ bấm nút thấp",
        "Chuẩn hóa cách gọi tên chức năng trong sản phẩm"
      ],
      "prompt": "Bạn là chuyên gia viết nội dung cho giao diện (UX Writing).\n\nHãy rà soát toàn bộ chữ trên giao diện được cung cấp: tiêu đề, nút, nhãn, thông báo, hướng dẫn.\n- Người dùng có hiểu ngay màn hình đang nói về điều gì không?\n- Nút hành động chính (CTA) có nói rõ điều sẽ xảy ra khi bấm không?\n- Từ ngữ có nhất quán, cùng một việc dùng cùng một cách gọi không?\n- Có thuật ngữ khó hiểu, câu quá dài hoặc giọng văn không phù hợp không?\n- Thông báo lỗi, thông báo xác nhận có giúp người dùng biết bước tiếp theo không?\n\nLập bảng: Vị trí | Nội dung hiện tại | Vấn đề | Đề xuất viết lại.\n\nGiữ nguyên ý nghĩa và thông tin gốc. Không tự thêm cam kết, số liệu, điều khoản hoặc thông tin sản phẩm chưa được cung cấp.",
      "required_inputs": [
        "Ảnh chụp giao diện rõ nét, đã che thông tin khách hàng, số liệu nội bộ",
        "Gửi kèm sau prompt 2–3 câu bối cảnh: sản phẩm, người dùng mục tiêu, mục tiêu của màn hình",
        "Nếu có: giọng văn, cách xưng hô theo quy định của đơn vị"
      ],
      "verification": [
        "Nội dung về sản phẩm, phí, điều khoản cần bộ phận phụ trách xác nhận trước khi thay.",
        "Đọc to đề xuất viết lại, kiểm tra có tự nhiên không.",
        "Giữ cách gọi tên chức năng thống nhất trên toàn sản phẩm."
      ],
      "difficulty": "trung-binh",
      "tags": [
        "CTA",
        "nút",
        "UX writing",
        "nội dung",
        "thông báo lỗi",
        "câu chữ",
        "landing page"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "time": "Khoảng 10 phút",
      "added": "2026-11-11T16:20",
      "source": "UI Design Audit · Prompt 10",
      "audit_no": 10,
      "audit_group": "E",
      "audit_roles": [
        "marketing",
        "product",
        "designer"
      ],
      "example": {
        "input": "Ảnh landing page có nút \"Gửi\" và thông báo lỗi \"Lỗi hệ thống\"",
        "output": "Bảng Vị trí | Nội dung hiện tại | Vấn đề | Đề xuất viết lại, ví dụ đổi tên nút thành một động từ nói rõ hành động."
      },
      "rank": 37
    },
    {
      "id": "ux11",
      "title": "Đề xuất redesign một màn hình",
      "category": "ux",
      "target_audiences": [
        "thiet-ke",
        "quan-ly"
      ],
      "goals": [
        "danh-gia"
      ],
      "purpose": "Biến kết quả audit đã thống nhất thành phương án thiết kế lại có căn cứ cho từng thay đổi.",
      "use_cases": [
        "Sau khi đã có danh sách vấn đề ưu tiên",
        "Chuẩn bị phương án để trình bày với nhóm sản phẩm"
      ],
      "prompt": "Bạn là Senior Product Designer.\n\nDựa trên kết quả audit và giao diện hiện tại được đính kèm, hãy đề xuất phương án redesign cho màn hình này.\n\nYêu cầu:\n1. Nêu mục tiêu của bản redesign, bám theo các vấn đề cần ưu tiên.\n2. Đề xuất cấu trúc mới: thứ tự các khối nội dung từ trên xuống dưới.\n3. Mô tả thay đổi của từng khối: bố cục, phân cấp, component, nội dung chữ.\n4. Giải thích mỗi thay đổi giải quyết vấn đề nào trong kết quả audit.\n5. Liệt kê những gì giữ nguyên.\n\nChỉ đề xuất 1 phương án chính và tối đa 1 phương án thay thế. Tận dụng component và nhận diện hiện có; không thêm tính năng mới khi chưa được yêu cầu.",
      "required_inputs": [
        "Ảnh màn hình hiện tại, đã che thông tin khách hàng",
        "Kết quả audit đã được nhóm thống nhất (bảng vấn đề và mức ưu tiên)"
      ],
      "verification": [
        "Mỗi thay đổi phải gắn với một vấn đề trong kết quả audit.",
        "Designer dựng lại phương án trên công cụ thiết kế; AI chỉ gợi ý hướng.",
        "Nhóm sản phẩm duyệt phạm vi trước khi thiết kế chi tiết."
      ],
      "difficulty": "nang-cao",
      "tags": [
        "redesign",
        "thiết kế lại",
        "phương án",
        "cải thiện giao diện",
        "đề xuất"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "time": "15–20 phút",
      "added": "2026-11-11T16:20",
      "source": "UI Design Audit · Prompt 11",
      "audit_extra": {
        "label": "Kết quả audit đã thống nhất",
        "ph": "Dán bảng vấn đề và mức ưu tiên",
        "multiline": true
      },
      "audit_no": 11,
      "audit_group": "F",
      "audit_roles": [
        "designer",
        "product"
      ],
      "example": {
        "input": "Ảnh màn hình hiện tại kèm bảng 5 vấn đề ưu tiên đã thống nhất",
        "output": "Mục tiêu redesign, cấu trúc khối mới từ trên xuống, thay đổi của từng khối gắn với vấn đề tương ứng, danh sách phần giữ nguyên."
      },
      "rank": 38
    },
    {
      "id": "ux12",
      "title": "So sánh trước và sau cải tiến",
      "category": "ux",
      "target_audiences": [
        "thiet-ke",
        "quan-ly"
      ],
      "goals": [
        "danh-gia"
      ],
      "purpose": "Kiểm tra từng vấn đề đã được xử lý chưa và bản mới có phát sinh lỗi mới không.",
      "use_cases": [
        "Nghiệm thu bản thiết kế sau chỉnh sửa",
        "Kiểm tra bản đã lập trình so với bản thiết kế"
      ],
      "prompt": "Bạn là UI/UX Reviewer.\n\nTôi gửi kèm 2 phiên bản của cùng một màn hình: bản trước và bản sau khi chỉnh sửa, cùng danh sách vấn đề đã xác định trước đó.\n\nHãy kiểm tra:\n- Từng vấn đề trong danh sách đã được xử lý chưa: Đã xử lý / Xử lý một phần / Chưa xử lý.\n- Có phát sinh vấn đề mới nào không?\n- Bản sau có nhất quán với Design System không?\n- Khả năng hoàn thành tác vụ chính có tốt hơn không, vì sao?\n\nTrình bày theo bảng: Vấn đề | Trạng thái | Căn cứ quan sát được | Việc cần làm tiếp.\n\nChỉ kết luận dựa trên những gì quan sát được trong hai hình ảnh. Không nhận xét cảm tính rằng bản sau \"đẹp hơn\" khi không chỉ ra căn cứ.",
      "required_inputs": [
        "Ảnh bản trước và bản sau, cùng kích thước, đã che thông tin khách hàng",
        "Danh sách vấn đề từ lần audit trước"
      ],
      "verification": [
        "Tự đối chiếu lại các vấn đề AI đánh dấu \"Đã xử lý\".",
        "Kiểm tra trên sản phẩm thật nếu đã lập trình.",
        "Người duyệt thiết kế ký nhận kết quả nghiệm thu."
      ],
      "difficulty": "trung-binh",
      "tags": [
        "trước sau",
        "so sánh",
        "nghiệm thu",
        "kiểm tra lại",
        "before after",
        "review"
      ],
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "time": "Khoảng 10 phút",
      "added": "2026-11-11T16:20",
      "source": "UI Design Audit · Prompt 12",
      "audit_extra": {
        "label": "Danh sách vấn đề từ lần audit trước",
        "ph": "Dán danh sách vấn đề cần kiểm tra",
        "multiline": true
      },
      "audit_no": 12,
      "audit_group": "F",
      "audit_roles": [
        "designer",
        "reviewer",
        "developer",
        "product"
      ],
      "example": {
        "input": "Ảnh bản trước và bản sau cùng kích thước, kèm danh sách 5 vấn đề",
        "output": "Bảng Vấn đề | Trạng thái | Căn cứ quan sát được | Việc cần làm tiếp, kèm vấn đề mới phát sinh nếu có."
      },
      "rank": 39
    }
  ],
  "clinic": [
    {
      "id": "k1",
      "tag": "Nội dung truyền thông",
      "title": "Bài viết ra quá chung chung",
      "before": "Viết bài về ngày hội gia đình.",
      "problems": [
        "Không có vai trò: AI viết giọng trung tính, giống văn mẫu.",
        "Không có bối cảnh: ngày hội của đơn vị nào, cho ai, thông điệp gì?",
        "Không có định dạng và độ dài: nhận về một bài dài, nhiều đoạn sáo rỗng.",
        "Không có giới hạn: AI tự bịa ngày giờ, địa điểm, hoạt động cho đủ ý."
      ],
      "after": "Bạn là chuyên gia truyền thông nội bộ. [Đơn vị] tổ chức ngày hội gia đình cho cán bộ nhân viên và người thân, thông điệp \"[thông điệp]\". Thông tin đã chốt: [thời gian, địa điểm, 3 hoạt động chính]. Hãy viết bài đăng cho nhóm chat của đơn vị gồm tiêu đề tối đa 10 chữ, 2 câu mở đầu, 3 gạch đầu dòng hoạt động và lời mời đăng ký. Giọng ấm áp, tối đa 150 từ. Chỉ dùng thông tin đã cho; thiếu thì ghi \"cần bổ sung\".",
      "why": [
        "Đủ 5 thành phần: vai trò, bối cảnh, nhiệm vụ, định dạng, ràng buộc.",
        "Thông tin thật được đưa vào trước, AI chỉ diễn đạt.",
        "Có lệnh ghi \"cần bổ sung\" nên dễ thấy chỗ còn thiếu, không bị bịa."
      ]
    },
    {
      "id": "k2",
      "tag": "Tạo hình ảnh",
      "title": "Hình tạo ra không đúng ý",
      "before": "Vẽ poster ngày hội gia đình thật đẹp, có chữ \"Ngày hội gia đình\" và logo công ty.",
      "problems": [
        "\"Thật đẹp\" không cho AI biết phong cách, màu sắc hay bố cục bạn muốn.",
        "Yêu cầu chữ tiếng Việt trong ảnh: công cụ tạo hình hay viết sai dấu, sai chữ.",
        "Yêu cầu vẽ logo: AI vẽ lại logo thường sai hình, và không nên tự chế logo thương hiệu.",
        "Không nói tỉ lệ khung và chỗ đặt chữ, nên khó dùng làm poster."
      ],
      "after": "Tạo hình minh họa cho poster dọc tỉ lệ 9:16 về ngày hội gia đình. Chủ thể: một gia đình nhỏ đang cùng xếp các khối màu trên sân cỏ buổi sáng. Phong cách 3D mềm, ánh sáng ấm, bảng màu cam và tím nhạt. Chủ thể đặt ở nửa dưới, chừa nửa trên trống để đặt chữ. Không có chữ, không có logo, không có khuôn mặt người thật nhận diện được.",
      "why": [
        "Mô tả cụ thể chủ thể, bối cảnh, phong cách, màu, bố cục và tỉ lệ.",
        "Tách chữ và logo ra khỏi ảnh: thêm sau trong Canva bằng font và logo chuẩn.",
        "Muốn sửa thì sửa từng yếu tố một, ví dụ \"giữ nguyên, đổi ánh sáng thành buổi chiều\"."
      ]
    },
    {
      "id": "k3",
      "tag": "Tổng hợp tài liệu",
      "title": "Tổng hợp nhưng không kiểm chứng được",
      "before": "Tóm tắt giúp tôi các hoạt động văn hóa nổi bật của công ty năm nay.",
      "problems": [
        "AI không có tài liệu của bạn, nên trả lời từ trí nhớ chung hoặc bịa cho đủ ý.",
        "Không yêu cầu nguồn: không biết thông tin nào đúng, thông tin nào sai.",
        "Không nói dùng để làm gì, nên tóm tắt không đúng trọng tâm."
      ],
      "after": "(Dùng NotebookLM, tải lên các bản tin và báo cáo nội bộ đã được phép dùng.) Chỉ dựa vào các tài liệu đã tải lên, liệt kê 5 hoạt động văn hóa nổi bật năm [năm] để tôi đưa vào [bài tổng kết / slide báo cáo]. Mỗi hoạt động gồm: tên, thời điểm, kết quả chính, tên tài liệu và trích nguyên văn câu làm căn cứ. Thông tin nào tài liệu không có thì ghi \"không có trong tài liệu\", không tự bổ sung.",
      "why": [
        "AI chỉ làm việc trên tài liệu bạn cung cấp, giảm khả năng bịa.",
        "Mỗi ý có trích dẫn nguyên văn, bạn mở file kiểm tra được ngay.",
        "Nói rõ mục đích sử dụng nên AI chọn đúng thông tin cần."
      ]
    },
    {
      "id": "k4",
      "tag": "Dữ liệu nội bộ",
      "title": "Dán nguyên dữ liệu có thông tin cá nhân",
      "before": "Phân tích bảng khảo sát này giúp tôi: [dán nguyên bảng có họ tên, mã nhân viên, phòng ban].",
      "problems": [
        "Đưa họ tên, mã nhân viên lên công cụ AI công cộng là rủi ro bảo mật.",
        "\"Phân tích\" quá rộng: AI không biết bạn cần đếm, nhóm chủ đề hay đề xuất.",
        "Không giới hạn suy diễn, AI có thể gán cảm xúc hoặc kết luận không có trong dữ liệu."
      ],
      "after": "(Trước khi dán: xóa cột họ tên, mã nhân viên, mọi chi tiết nhận diện.) Bạn là chuyên viên phân tích trải nghiệm nhân viên. Dưới đây là [số] phản hồi khảo sát sau [hoạt động], đã ẩn danh. Hãy nhóm thành 4–6 chủ đề, mỗi chủ đề ghi số lượt nhắc và 1 trích dẫn nguyên văn đại diện, rồi đề xuất 3 cải tiến. Trình bày dạng bảng. Chỉ đếm từ dữ liệu đã cho, không suy diễn cảm xúc khi phản hồi không nói rõ.",
      "why": [
        "Ẩn danh trước khi dán, đúng nguyên tắc dữ liệu nội bộ.",
        "Nhiệm vụ cụ thể (nhóm chủ đề, đếm, trích dẫn, đề xuất) nên kết quả dùng được ngay.",
        "Có ràng buộc chống suy diễn, dễ kiểm tra lại."
      ]
    }
  ],
  "audit": {
    "intro": [
      "Đánh giá chất lượng giao diện website, landing page, ứng dụng và sản phẩm số.",
      "Phát hiện vấn đề về bố cục, typography, màu sắc, hierarchy và tính nhất quán.",
      "Đánh giá trải nghiệm người dùng và khả năng tiếp nhận thông tin.",
      "Đưa ra đề xuất cải thiện có căn cứ, không chỉ nhận xét cảm tính.",
      "Viết prompt để AI hỗ trợ redesign một màn hình hoặc một luồng giao diện.",
      "Kiểm tra lại thiết kế sau khi chỉnh sửa."
    ],
    "groups": [
      {
        "id": "A",
        "name": "Audit tổng thể giao diện",
        "short": "Tổng thể"
      },
      {
        "id": "B",
        "name": "Audit Visual Hierarchy & Typography",
        "short": "Phân cấp & chữ"
      },
      {
        "id": "C",
        "name": "Audit Layout & Design System",
        "short": "Bố cục & component"
      },
      {
        "id": "D",
        "name": "Audit màu sắc và khả năng tiếp cận",
        "short": "Màu & tiếp cận"
      },
      {
        "id": "E",
        "name": "Audit trải nghiệm và nội dung",
        "short": "Luồng & nội dung"
      },
      {
        "id": "F",
        "name": "Redesign và kiểm tra sau cải tiến",
        "short": "Redesign & kiểm tra"
      }
    ],
    "roles": [
      {
        "id": "designer",
        "name": "Designer UI/UX",
        "short": "Designer"
      },
      {
        "id": "product",
        "name": "Product Owner, BA",
        "short": "Product, BA"
      },
      {
        "id": "developer",
        "name": "Lập trình giao diện (Front-end)",
        "short": "Front-end"
      },
      {
        "id": "marketing",
        "name": "Truyền thông, marketing",
        "short": "Truyền thông"
      },
      {
        "id": "reviewer",
        "name": "Quản lý, người duyệt thiết kế",
        "short": "Người duyệt"
      }
    ],
    "severity": [
      {
        "id": "critical",
        "name": "Critical",
        "desc": "Ảnh hưởng nghiêm trọng đến khả năng sử dụng hoặc hoàn thành tác vụ."
      },
      {
        "id": "high",
        "name": "High",
        "desc": "Làm giảm đáng kể khả năng tiếp nhận thông tin hoặc trải nghiệm."
      },
      {
        "id": "medium",
        "name": "Medium",
        "desc": "Gây bất tiện hoặc thiếu nhất quán."
      },
      {
        "id": "low",
        "name": "Low",
        "desc": "Vấn đề thẩm mỹ, có thể cải thiện sau."
      }
    ],
    "context_fields": [
      {
        "k": "product",
        "label": "Sản phẩm, giao diện",
        "ph": "Ví dụ: trang đăng ký sự kiện nội bộ"
      },
      {
        "k": "users",
        "label": "Người dùng mục tiêu",
        "ph": "Ví dụ: nhân viên các chi nhánh"
      },
      {
        "k": "goal",
        "label": "Mục tiêu chính của màn hình",
        "ph": "Ví dụ: để nhân viên đăng ký tham gia"
      },
      {
        "k": "action",
        "label": "Hành động người dùng cần thực hiện",
        "ph": "Ví dụ: bấm Đăng ký"
      },
      {
        "k": "platform",
        "label": "Nền tảng",
        "ph": "Ví dụ: ứng dụng di động",
        "chips": [
          "Website",
          "Landing page",
          "Ứng dụng di động",
          "Poster, banner"
        ]
      },
      {
        "k": "brand",
        "label": "Nhận diện, Design System",
        "ph": "Ví dụ: màu và font theo bộ nhận diện của đơn vị",
        "optional": true,
        "wide": true
      }
    ],
    "context_title": "Thông tin bối cảnh",
    "report": {
      "intro": "Dùng mẫu này để tổng hợp kết quả từ nhiều prompt thành một báo cáo thống nhất. Các cột của bảng vấn đề lấy theo Bước 5 của quy trình.",
      "sections": [
        {
          "title": "1. Thông tin chung",
          "fields": [
            "Sản phẩm, giao diện",
            "Màn hình hoặc luồng được audit",
            "Người dùng mục tiêu",
            "Mục tiêu chính của màn hình",
            "Hành động người dùng cần thực hiện",
            "Người thực hiện, ngày audit"
          ]
        },
        {
          "title": "2. Tóm tắt",
          "fields": [
            "Điểm tốt cần giữ",
            "Số vấn đề theo mức độ: Critical … · High … · Medium … · Low …",
            "5 vấn đề cần ưu tiên xử lý nhất"
          ]
        },
        {
          "title": "3. Danh sách vấn đề",
          "table": [
            "STT",
            "Vị trí phát hiện",
            "Mô tả vấn đề",
            "Nguyên nhân",
            "Ảnh hưởng đến người dùng",
            "Đề xuất giải pháp cụ thể",
            "Mức độ ưu tiên"
          ]
        },
        {
          "title": "4. Kế hoạch xử lý",
          "table": [
            "Vấn đề",
            "Người phụ trách",
            "Thời hạn",
            "Trạng thái"
          ]
        },
        {
          "title": "5. Kiểm tra sau cải tiến",
          "fields": [
            "So sánh trước và sau",
            "Kiểm tra các vấn đề đã được xử lý",
            "Đảm bảo không phát sinh lỗi mới",
            "Kiểm tra tính nhất quán với Design System",
            "Đánh giá lại khả năng hoàn thành tác vụ"
          ]
        }
      ],
      "note": "Kết quả do AI hỗ trợ cần được designer và người phụ trách sản phẩm rà soát trước khi sử dụng.",
      "ai_lead": "Hãy trình bày toàn bộ kết quả audit theo đúng mẫu báo cáo dưới đây. Mục nào chưa có thông tin thì ghi \"cần bổ sung\", không tự điền."
    },
    "example": {
      "title": "Trang đăng ký Ngày hội gia đình trên điện thoại",
      "note": "Giao diện giả định, dựng để minh họa cách đi qua 6 bước. Không phải sản phẩm thật và không có số liệu đo thật.",
      "context": [
        [
          "Sản phẩm",
          "Trang đăng ký sự kiện nội bộ, mở từ tin nhắn trên điện thoại"
        ],
        [
          "Người dùng mục tiêu",
          "Cán bộ nhân viên và người thân"
        ],
        [
          "Mục tiêu của màn hình",
          "Để nhân viên đăng ký tham gia"
        ],
        [
          "Hành động chính",
          "Bấm Đăng ký"
        ]
      ],
      "issues": [
        {
          "sev": "high",
          "loc": "Cuối trang",
          "problem": "Không thấy nút Đăng ký ở màn hình đầu",
          "cause": "Ảnh banner chiếm gần hết màn hình đầu",
          "impact": "Người dùng không biết bước tiếp theo, dễ bỏ qua",
          "fix": "Thu nhỏ ảnh, ghim nút Đăng ký ở cuối màn hình"
        },
        {
          "sev": "high",
          "loc": "Khối nút",
          "problem": "Nút Đăng ký cùng màu, cùng cỡ với nút Chia sẻ",
          "cause": "Chưa phân cấp hành động chính và phụ",
          "impact": "Khó nhận ra việc cần làm",
          "fix": "Một màu nhấn cho Đăng ký; Chia sẻ thành nút phụ"
        },
        {
          "sev": "medium",
          "loc": "Đoạn mô tả",
          "problem": "Thời gian, địa điểm nằm trong đoạn văn dài",
          "cause": "Thông tin quan trọng không được tách riêng",
          "impact": "Phải đọc hết mới thấy, dễ bỏ sót",
          "fix": "Tách thành 2 dòng thông tin có biểu tượng ngay dưới tiêu đề"
        },
        {
          "sev": "medium",
          "loc": "Tiêu đề",
          "problem": "Tiêu đề gần cùng cỡ với nội dung",
          "cause": "Thiếu thang chữ",
          "impact": "Khó quét nhanh nội dung chính",
          "fix": "Tăng cỡ và độ đậm tiêu đề theo thang chữ của Design System"
        },
        {
          "sev": "low",
          "loc": "Ảnh banner",
          "problem": "Chữ đặt trên nền ảnh nhiều chi tiết",
          "cause": "Không có lớp nền dưới chữ",
          "impact": "Khó đọc chữ trên ảnh",
          "fix": "Bỏ chữ khỏi ảnh hoặc thêm lớp nền tối"
        }
      ],
      "steps": [
        [
          "Bước 1",
          "Điền bối cảnh trong phần Tùy chỉnh",
          []
        ],
        [
          "Bước 2",
          "Đánh giá tổng thể và phân cấp thị giác",
          [
            "ux1",
            "ux3"
          ]
        ],
        [
          "Bước 3",
          "Phân tích CTA và nội dung chữ",
          [
            "ux10"
          ]
        ],
        [
          "Bước 4–5",
          "Xếp mức độ, đề xuất redesign",
          [
            "ux2",
            "ux11"
          ]
        ],
        [
          "Bước 6",
          "So sánh trước và sau",
          [
            "ux12"
          ]
        ]
      ],
      "verify": [
        "Nút Đăng ký nhìn thấy ngay ở màn hình đầu trên điện thoại thật",
        "Mỗi màn hình chỉ có một nút chính",
        "Thời gian, địa điểm đọc được mà không phải cuộn",
        "Màu và cỡ chữ đúng Design System",
        "Không phát sinh lỗi mới; người duyệt thiết kế ký nhận"
      ]
    },
    "checklist": [
      {
        "phase": "Trước khi audit",
        "items": [
          [
            "Đã xác định đủ bối cảnh",
            "Sản phẩm, người dùng mục tiêu, mục tiêu của màn hình, hành động người dùng cần thực hiện."
          ],
          [
            "Ảnh giao diện rõ nét và an toàn",
            "Đã che thông tin khách hàng, họ tên, số tài khoản và số liệu nội bộ trước khi gửi cho AI."
          ]
        ]
      },
      {
        "phase": "Trong khi audit",
        "items": [
          [
            "Đã xem đủ 7 nhóm tiêu chí tổng thể",
            "Bố cục, phân cấp thị giác, typography, màu sắc và độ tương phản, khoảng cách, component, hình ảnh và icon."
          ],
          [
            "Đã phân tích trải nghiệm",
            "Màn hình dễ hiểu, thông tin quan trọng dễ tìm, CTA rõ ràng, không có bước gây nhầm lẫn."
          ],
          [
            "Mỗi vấn đề đã được xếp mức độ",
            "Critical, High, Medium hoặc Low."
          ],
          [
            "Mỗi vấn đề có đủ 6 thông tin",
            "Vị trí, mô tả, nguyên nhân, ảnh hưởng đến người dùng, đề xuất giải pháp, mức độ ưu tiên."
          ],
          [
            "Đã đối chiếu kết quả của AI với ảnh gốc",
            "Loại bỏ nhận xét không quan sát được; đo lại độ tương phản, cỡ chữ trên file thiết kế."
          ]
        ]
      },
      {
        "phase": "Sau cải tiến",
        "items": [
          [
            "Đã so sánh trước và sau",
            "Kiểm tra từng vấn đề trong danh sách đã được xử lý."
          ],
          [
            "Không phát sinh lỗi mới",
            "Bản sau nhất quán với Design System và nhận diện thương hiệu."
          ],
          [
            "Đã đánh giá lại và được duyệt",
            "Kiểm tra lại khả năng hoàn thành tác vụ; designer và người phụ trách sản phẩm duyệt trước khi bàn giao."
          ]
        ]
      }
    ]
  }
};
