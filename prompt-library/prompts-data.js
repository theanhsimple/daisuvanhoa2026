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
      "id": "nd01",
      "category": "content",
      "title": "Bài đăng mạng xã hội nội bộ ngắn",
      "target_audiences": [
        "moi-nhan-su",
        "truyen-thong",
        "van-hoa"
      ],
      "goals": [
        "viet"
      ],
      "difficulty": "de",
      "time": "Khoảng 5 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Viết 3 phiên bản bài đăng ngắn cho nhóm chat hoặc trang nội bộ, chọn được ngay bản phù hợp.",
      "use_cases": [
        "Thông báo nhanh một hoạt động trên nhóm chat",
        "Đăng tin lên trang mạng xã hội nội bộ"
      ],
      "prompt": "Bạn là người viết nội dung mạng xã hội nội bộ. Hãy viết 3 phiên bản bài đăng về [chủ đề hoặc hoạt động] cho [kênh: nhóm chat, trang nội bộ, Workplace]. Người đọc là [đối tượng]. Thông tin đã chốt: [thời gian, địa điểm, cách tham gia]. Mỗi phiên bản dưới 80 từ, có câu mở đầu gây chú ý, nội dung chính và lời kêu gọi hành động. Phiên bản 1 trang trọng, phiên bản 2 thân thiện, phiên bản 3 vui nhộn có tối đa 3 biểu tượng cảm xúc. Không thêm thông tin chưa được cung cấp.",
      "required_inputs": [
        "Chủ đề, hoạt động cần đăng",
        "Kênh đăng và người đọc",
        "Thông tin đã chốt: thời gian, địa điểm, cách tham gia"
      ],
      "verification": [
        "Thông tin thời gian, địa điểm khớp với thông báo chính thức.",
        "Biểu tượng cảm xúc phù hợp văn hóa kênh nội bộ.",
        "Người phụ trách kênh duyệt trước khi đăng."
      ],
      "tags": [
        "bài đăng",
        "mạng xã hội",
        "nhóm chat",
        "thông báo",
        "post",
        "caption"
      ],
      "example": {
        "input": "Chủ đề: giải chạy bộ nội bộ · Kênh: nhóm chat toàn khối · Người đọc: cán bộ nhân viên · Đăng ký trước thứ Sáu qua biểu mẫu",
        "output": "3 bài đăng dưới 80 từ với 3 giọng khác nhau, mỗi bài có câu mở đầu, thông tin đăng ký và lời kêu gọi; không có chi tiết nào ngoài thông tin đã cho."
      },
      "added": "2026-11-11T22:40",
      "rank": 40
    },
    {
      "id": "nd02",
      "category": "content",
      "title": "Bản tin nội bộ hằng tháng",
      "target_audiences": [
        "truyen-thong",
        "van-hoa",
        "quan-ly"
      ],
      "goals": [
        "viet",
        "phan-tich"
      ],
      "difficulty": "trung-binh",
      "time": "10–15 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Gom các tin rời rạc trong tháng thành một bản tin có cấu trúc, dễ đọc lướt.",
      "use_cases": [
        "Tổng hợp hoạt động của phòng, khối trong tháng",
        "Bản tin email gửi toàn đơn vị"
      ],
      "prompt": "Bạn là biên tập viên bản tin nội bộ. Dưới đây là các ghi chú tin tức tháng [tháng] của [đơn vị]: [dán ghi chú]. Hãy biên tập thành bản tin gồm: tiêu đề bản tin, đoạn mở đầu 2 câu, 3–5 mục tin, mỗi mục có tiêu đề in đậm và 2–3 câu nội dung, mục \"Sắp diễn ra\" và lời kết. Giọng văn gần gũi, chuyên nghiệp. Chỉ dùng thông tin trong ghi chú; mục nào thiếu dữ liệu thì ghi \"cần bổ sung\".",
      "required_inputs": [
        "Ghi chú các tin trong tháng (đã bỏ thông tin nhạy cảm)",
        "Tên đơn vị, tháng phát hành",
        "Các hoạt động sắp diễn ra nếu có"
      ],
      "verification": [
        "Tên người, chức danh, con số đối chiếu với nguồn tin.",
        "Tin có hình ảnh cần xin phép người xuất hiện trong ảnh.",
        "Lãnh đạo đơn vị duyệt trước khi gửi."
      ],
      "tags": [
        "bản tin",
        "newsletter",
        "tin tức",
        "tổng hợp tháng",
        "email nội bộ"
      ],
      "example": {
        "input": "Ghi chú 6 tin của phòng Truyền thông tháng 10: chào đón 3 nhân viên mới, kết quả cuộc thi ảnh, lịch đào tạo AI…",
        "output": "Bản tin có tiêu đề, mở đầu 2 câu, 5 mục tin có tiêu đề in đậm, mục Sắp diễn ra và lời kết; chỗ thiếu thông tin ghi “cần bổ sung”."
      },
      "added": "2026-11-11T22:40",
      "rank": 41
    },
    {
      "id": "nd03",
      "category": "content",
      "title": "Kịch bản video ngắn 60 giây",
      "target_audiences": [
        "truyen-thong",
        "van-hoa"
      ],
      "goals": [
        "viet",
        "hinh-anh"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot",
        "CapCut"
      ],
      "purpose": "Có kịch bản phân cảnh cho video dọc ngắn, quay được bằng điện thoại.",
      "use_cases": [
        "Video giới thiệu hoạt động, con người trong đơn vị",
        "Video nhắc nhở, truyền thông chính sách ngắn"
      ],
      "prompt": "Bạn là biên kịch video ngắn. Hãy viết kịch bản video dọc dài [thời lượng, ví dụ 60 giây] về [chủ đề] cho [kênh]. Thông điệp chính: [thông điệp]. Người xem: [đối tượng]. Trình bày dạng bảng: Giây | Hình ảnh cần quay | Lời thoại hoặc chữ trên màn hình | Âm thanh. 3 giây đầu phải gây chú ý; kết thúc bằng lời kêu gọi rõ ràng. Chỉ dùng bối cảnh quay được trong văn phòng bằng điện thoại; không dùng nhạc hoặc hình ảnh có bản quyền.",
      "required_inputs": [
        "Chủ đề và thông điệp chính",
        "Kênh đăng, thời lượng",
        "Bối cảnh, người có thể tham gia quay"
      ],
      "verification": [
        "Người xuất hiện trong video đồng ý được quay và đăng.",
        "Nhạc nền lấy từ thư viện được phép dùng.",
        "Kiểm tra chữ trên màn hình đọc kịp trong thời lượng."
      ],
      "tags": [
        "video",
        "kịch bản",
        "reels",
        "tiktok",
        "short video",
        "phân cảnh"
      ],
      "example": {
        "input": "Chủ đề: một ngày của đội hỗ trợ khách hàng · 60 giây · Kênh: trang nội bộ · Thông điệp: mỗi cuộc gọi là một lời cảm ơn",
        "output": "Bảng 7–9 dòng theo mốc giây, mở đầu bằng cảnh gây chú ý trong 3 giây, có chữ trên màn hình ngắn gọn và lời kêu gọi ở cảnh cuối."
      },
      "added": "2026-11-11T22:40",
      "rank": 42
    },
    {
      "id": "nd04",
      "category": "content",
      "title": "Thông cáo, thông báo chính thức",
      "target_audiences": [
        "truyen-thong",
        "quan-ly"
      ],
      "goals": [
        "viet"
      ],
      "difficulty": "nang-cao",
      "time": "10–15 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Copilot"
      ],
      "purpose": "Soạn bản thông báo chính thức đúng cấu trúc, câu chữ chặt chẽ, sẵn sàng cho người có thẩm quyền duyệt.",
      "use_cases": [
        "Thông báo thay đổi chính sách, quy trình nội bộ",
        "Bản tin công bố một sự kiện, kết quả"
      ],
      "prompt": "Bạn là chuyên viên truyền thông viết văn bản chính thức. Hãy soạn [loại văn bản: thông báo nội bộ hoặc thông cáo] về [nội dung]. Thông tin đã được duyệt: [các ý chính, thời điểm áp dụng, đầu mối liên hệ]. Cấu trúc: tiêu đề, đoạn mở nêu điều gì thay đổi và từ khi nào, các điểm chính dạng gạch đầu dòng, hướng dẫn người đọc cần làm gì, đầu mối liên hệ. Câu ngắn, rõ, không dùng từ ngữ cảm xúc. Không thêm số liệu, cam kết hay trích dẫn của bất kỳ ai khi chưa được cung cấp.",
      "required_inputs": [
        "Nội dung đã được duyệt",
        "Thời điểm áp dụng",
        "Đầu mối liên hệ"
      ],
      "verification": [
        "Pháp chế hoặc người có thẩm quyền rà soát trước khi phát hành.",
        "Ngày hiệu lực, tên đơn vị, đầu mối đúng từng chữ.",
        "Không có câu nào có thể hiểu theo hai nghĩa."
      ],
      "tags": [
        "thông cáo",
        "thông báo",
        "văn bản chính thức",
        "chính sách",
        "công bố"
      ],
      "example": {
        "input": "Loại: thông báo nội bộ · Nội dung: đổi giờ làm việc mùa đông từ ngày 1/12 · Đầu mối: phòng Hành chính",
        "output": "Văn bản 150–200 từ: tiêu đề, đoạn mở nêu thay đổi và ngày hiệu lực, 3–4 gạch đầu dòng, phần “Bạn cần làm gì”, đầu mối liên hệ."
      },
      "added": "2026-11-11T22:40",
      "rank": 43
    },
    {
      "id": "nd05",
      "category": "content",
      "title": "Viết lại nội dung cho dễ hiểu",
      "target_audiences": [
        "moi-nhan-su",
        "truyen-thong",
        "nhan-su"
      ],
      "goals": [
        "viet",
        "danh-gia"
      ],
      "difficulty": "de",
      "time": "Khoảng 5 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Biến đoạn văn nhiều thuật ngữ thành nội dung người không chuyên đọc hiểu ngay.",
      "use_cases": [
        "Giải thích quy trình, chính sách cho nhân viên mới",
        "Chuyển nội dung kỹ thuật sang ngôn ngữ đời thường"
      ],
      "prompt": "Bạn là biên tập viên chuyên viết dễ hiểu. Hãy viết lại đoạn sau cho [đối tượng người đọc] đọc hiểu ngay: [dán đoạn văn]. Yêu cầu: câu tối đa 20 chữ, giải thích thuật ngữ bằng ví dụ đời thường, giữ đúng 100% ý nghĩa và số liệu gốc. Trình bày: bản viết lại, sau đó bảng Thuật ngữ gốc | Cách nói dễ hiểu. Nếu có chỗ bản gốc chưa rõ nghĩa, liệt kê riêng thành câu hỏi cần làm rõ thay vì tự đoán.",
      "required_inputs": [
        "Đoạn văn cần viết lại (không chứa thông tin mật)",
        "Người đọc là ai"
      ],
      "verification": [
        "So từng ý với bản gốc, không mất hoặc đổi nghĩa.",
        "Số liệu, mốc thời gian giữ nguyên.",
        "Nhờ một người đúng đối tượng đọc thử."
      ],
      "tags": [
        "viết lại",
        "đơn giản hóa",
        "dễ hiểu",
        "thuật ngữ",
        "plain language",
        "biên tập"
      ],
      "example": {
        "input": "Đoạn hướng dẫn quy trình thanh toán công tác phí 250 chữ, nhiều thuật ngữ kế toán · Người đọc: nhân viên mới",
        "output": "Bản viết lại câu ngắn, kèm bảng 5–6 thuật ngữ và cách nói dễ hiểu, cuối cùng là 1–2 câu hỏi về chỗ bản gốc chưa rõ."
      },
      "added": "2026-11-11T22:40",
      "rank": 44
    },
    {
      "id": "nd06",
      "category": "content",
      "title": "Đặt tiêu đề và dòng mở đầu hấp dẫn",
      "target_audiences": [
        "truyen-thong",
        "moi-nhan-su"
      ],
      "goals": [
        "viet",
        "y-tuong"
      ],
      "difficulty": "de",
      "time": "Khoảng 3 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Có nhiều lựa chọn tiêu đề theo các hướng khác nhau, kèm lý do để chọn nhanh.",
      "use_cases": [
        "Tiêu đề email, bài đăng, bản tin",
        "Tiêu đề slide, banner sự kiện"
      ],
      "prompt": "Bạn là chuyên gia viết tiêu đề. Nội dung bài viết: [tóm tắt nội dung hoặc dán bài]. Kênh: [email, bài đăng, banner]. Người đọc: [đối tượng]. Hãy đề xuất 10 tiêu đề chia thành 5 hướng: lợi ích, câu hỏi, con số có trong nội dung, cấp bách, kể chuyện; mỗi hướng 2 tiêu đề, tối đa [số chữ] chữ. Với mỗi tiêu đề ghi 1 dòng lý do. Không dùng con số hoặc lời hứa không có trong nội dung; không giật tít.",
      "required_inputs": [
        "Nội dung hoặc bản tóm tắt bài",
        "Kênh và giới hạn độ dài"
      ],
      "verification": [
        "Tiêu đề không hứa điều nội dung không có.",
        "Số liệu trong tiêu đề khớp nội dung.",
        "Đọc thử trên điện thoại xem có bị cắt chữ."
      ],
      "tags": [
        "tiêu đề",
        "headline",
        "tít",
        "subject line",
        "mở bài"
      ],
      "example": {
        "input": "Nội dung: bài giới thiệu chương trình đào tạo AI 4 buổi · Kênh: email · Tối đa 10 chữ",
        "output": "10 tiêu đề chia 5 hướng, mỗi tiêu đề kèm 1 dòng lý do, không có con số nào ngoài “4 buổi”."
      },
      "added": "2026-11-11T22:40",
      "rank": 45
    },
    {
      "id": "nd07",
      "category": "content",
      "title": "Câu chuyện con người truyền cảm hứng",
      "target_audiences": [
        "truyen-thong",
        "van-hoa"
      ],
      "goals": [
        "viet"
      ],
      "difficulty": "trung-binh",
      "time": "15–20 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "purpose": "Viết bài chân dung đồng nghiệp từ ghi chú phỏng vấn, giữ đúng lời người được phỏng vấn.",
      "use_cases": [
        "Chuyên mục gương mặt tiêu biểu, đại sứ văn hóa",
        "Bài vinh danh cá nhân, tập thể"
      ],
      "prompt": "Bạn là phóng viên nội bộ. Dưới đây là ghi chú phỏng vấn [tên người hoặc vai trò, đã được đồng ý chia sẻ]: [dán ghi chú]. Hãy viết bài chân dung khoảng [số từ] từ theo cấu trúc: mở đầu bằng một khoảnh khắc cụ thể, hành trình làm việc, giá trị văn hóa người đó thể hiện ([giá trị]), câu nói đáng nhớ, kết bài. Chỉ dùng chi tiết có trong ghi chú; trích dẫn phải đúng nguyên văn và để trong ngoặc kép. Đề xuất thêm 3 tiêu đề.",
      "required_inputs": [
        "Ghi chú phỏng vấn đã được người được phỏng vấn đồng ý",
        "Giá trị văn hóa muốn làm nổi bật",
        "Độ dài mong muốn"
      ],
      "verification": [
        "Người được phỏng vấn đọc và đồng ý bản cuối.",
        "Mọi trích dẫn đúng nguyên văn ghi chú.",
        "Không đưa thông tin đời tư khi chưa được phép."
      ],
      "tags": [
        "chân dung",
        "câu chuyện",
        "storytelling",
        "phỏng vấn",
        "vinh danh",
        "gương mặt"
      ],
      "example": {
        "input": "Ghi chú phỏng vấn một chuyên viên 8 năm ở chi nhánh, giá trị: tận tâm · 400 từ",
        "output": "Bài 400 từ mở đầu bằng một khoảnh khắc cụ thể, có 2 trích dẫn đúng nguyên văn trong ghi chú và 3 tiêu đề gợi ý."
      },
      "added": "2026-11-11T22:40",
      "rank": 46
    },
    {
      "id": "nd08",
      "category": "content",
      "title": "Lịch nội dung một tháng",
      "target_audiences": [
        "truyen-thong",
        "van-hoa",
        "quan-ly"
      ],
      "goals": [
        "ke-hoach",
        "y-tuong"
      ],
      "difficulty": "trung-binh",
      "time": "10–15 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Lập lịch đăng bài theo tuần, cân bằng chủ đề và kênh.",
      "use_cases": [
        "Lên kế hoạch truyền thông cho một chiến dịch",
        "Duy trì trang nội bộ đều đặn"
      ],
      "prompt": "Bạn là người lập kế hoạch nội dung. Hãy lập lịch nội dung tháng [tháng] cho [kênh] của [đơn vị]. Mục tiêu: [mục tiêu truyền thông]. Các mốc đã có: [sự kiện, ngày quan trọng]. Tần suất: [số bài mỗi tuần]. Trình bày bảng: Tuần | Ngày đăng | Chủ đề | Dạng nội dung (bài viết, ảnh, video, bình chọn) | Mục tiêu | Người phụ trách (để trống). Cân bằng giữa thông tin, gắn kết và vinh danh. Không tự đặt thêm sự kiện ngoài các mốc đã cho.",
      "required_inputs": [
        "Kênh, mục tiêu truyền thông",
        "Các mốc, sự kiện trong tháng",
        "Tần suất đăng"
      ],
      "verification": [
        "Đối chiếu ngày đăng với lịch sự kiện chính thức.",
        "Kiểm tra nguồn lực làm được khối lượng đề xuất.",
        "Trưởng nhóm duyệt kế hoạch."
      ],
      "tags": [
        "lịch nội dung",
        "content calendar",
        "kế hoạch truyền thông",
        "lịch đăng bài"
      ],
      "example": {
        "input": "Tháng 12 · Kênh: trang nội bộ · Mục tiêu: gắn kết cuối năm · Mốc: tiệc cuối năm, hội thao · 3 bài/tuần",
        "output": "Bảng 12–13 dòng theo 4 tuần, dạng nội dung đa dạng, chỉ dùng các mốc đã cho, cột người phụ trách để trống."
      },
      "added": "2026-11-11T22:40",
      "rank": 47
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
      "id": "tk01",
      "category": "design",
      "title": "Brief thiết kế poster sự kiện",
      "target_audiences": [
        "van-hoa",
        "truyen-thong",
        "thiet-ke"
      ],
      "goals": [
        "hinh-anh",
        "ke-hoach"
      ],
      "difficulty": "de",
      "time": "Khoảng 5 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Có bản brief đầy đủ để gửi designer hoặc tự làm trên Canva, tránh sửa đi sửa lại.",
      "use_cases": [
        "Đặt thiết kế poster, banner cho sự kiện",
        "Chuẩn bị thông tin trước khi tự thiết kế"
      ],
      "prompt": "Bạn là art director. Hãy viết brief thiết kế [loại ấn phẩm: poster, banner, backdrop] cho [sự kiện]. Thông tin: [tên sự kiện, thời gian, địa điểm], thông điệp chính [thông điệp], đối tượng xem [đối tượng], kích thước [kích thước], nơi sử dụng [in ấn hoặc màn hình]. Brief gồm: mục tiêu, nội dung chữ bắt buộc theo thứ tự ưu tiên, phong cách hình ảnh, màu sắc theo nhận diện [màu hoặc bộ nhận diện], những điều cần tránh, định dạng file bàn giao. Không tự thêm nội dung chữ ngoài thông tin đã cho.",
      "required_inputs": [
        "Thông tin sự kiện và thông điệp",
        "Kích thước, nơi sử dụng",
        "Bộ nhận diện hoặc màu chủ đạo"
      ],
      "verification": [
        "Nội dung chữ đúng chính tả, đúng thông tin.",
        "Kích thước, định dạng khớp yêu cầu in hoặc màn hình.",
        "Logo dùng đúng phiên bản trong bộ nhận diện."
      ],
      "tags": [
        "brief",
        "poster",
        "banner",
        "thiết kế",
        "ấn phẩm",
        "canva"
      ],
      "example": {
        "input": "Poster A3 cho ngày hội đọc sách · In ấn · Màu tím và cam theo nhận diện",
        "output": "Brief 1 trang: mục tiêu, 5 dòng chữ theo thứ tự ưu tiên, phong cách, màu, điều cần tránh, định dạng bàn giao."
      },
      "added": "2026-11-11T22:40",
      "rank": 48
    },
    {
      "id": "tk02",
      "category": "design",
      "title": "Gợi ý bảng màu và font chữ",
      "target_audiences": [
        "thiet-ke",
        "truyen-thong",
        "van-hoa"
      ],
      "goals": [
        "y-tuong",
        "hinh-anh"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Có 3 phương án phối màu và font hài hòa, kèm mã màu để dùng ngay.",
      "use_cases": [
        "Chọn tông màu cho chủ đề sự kiện",
        "Làm bộ slide, ấn phẩm đồng bộ"
      ],
      "prompt": "Bạn là chuyên gia nhận diện thương hiệu. Chủ đề: [chủ đề]. Cảm xúc muốn truyền tải: [ví dụ trẻ trung, ấm áp]. Màu bắt buộc phải có: [màu thương hiệu hoặc \"không có\"]. Hãy đề xuất 3 bảng màu, mỗi bảng 5 màu kèm mã HEX và vai trò (nền, chữ, nhấn, phụ). Kèm mỗi bảng 1 cặp font tiêu đề và nội dung hỗ trợ tiếng Việt có sẵn trên Google Fonts hoặc Canva. Giải thích ngắn vì sao hợp chủ đề và lưu ý độ tương phản chữ trên nền.",
      "required_inputs": [
        "Chủ đề và cảm xúc mong muốn",
        "Màu thương hiệu bắt buộc"
      ],
      "verification": [
        "Thử font hiển thị đủ dấu tiếng Việt.",
        "Đo độ tương phản chữ và nền bằng công cụ kiểm tra.",
        "Không thay màu thương hiệu chính khi chưa được duyệt."
      ],
      "tags": [
        "bảng màu",
        "font",
        "phối màu",
        "typography",
        "nhận diện",
        "màu sắc"
      ],
      "example": {
        "input": "Chủ đề: Tết sum vầy · Cảm xúc: ấm áp, hiện đại · Màu bắt buộc: tím thương hiệu",
        "output": "3 bảng màu 5 mã HEX có vai trò từng màu, mỗi bảng 1 cặp font hỗ trợ tiếng Việt và 2–3 câu giải thích."
      },
      "added": "2026-11-11T22:40",
      "rank": 49
    },
    {
      "id": "tk03",
      "category": "design",
      "title": "Prompt tạo ảnh minh họa phong cách đồng bộ",
      "target_audiences": [
        "thiet-ke",
        "truyen-thong"
      ],
      "goals": [
        "hinh-anh"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "ChatGPT",
        "Gemini",
        "Canva"
      ],
      "purpose": "Tạo một bộ ảnh minh họa cùng phong cách cho bài viết, slide hoặc ấn phẩm.",
      "use_cases": [
        "Cần 4–6 ảnh minh họa đồng bộ cho một bộ slide",
        "Ảnh minh họa cho chuỗi bài đăng"
      ],
      "prompt": "Bạn là họa sĩ minh họa. Hãy viết [số lượng] prompt tạo ảnh cho bộ minh họa chủ đề [chủ đề], dùng chung một phong cách: [phong cách, ví dụ flat 2D, màu pastel, nét viền mỏng], bảng màu [màu], tỷ lệ [tỷ lệ khung hình]. Mỗi prompt mô tả: chủ thể, hành động, bối cảnh, góc nhìn, ánh sáng. Lặp lại nguyên văn đoạn mô tả phong cách ở cuối mỗi prompt để ảnh đồng bộ. Không có chữ trong ảnh, không vẽ người nổi tiếng, logo hay nhân vật có bản quyền.",
      "required_inputs": [
        "Chủ đề và số lượng ảnh",
        "Phong cách, bảng màu, tỷ lệ"
      ],
      "verification": [
        "Kiểm tra ảnh không có chữ sai, logo hoặc nhân vật có bản quyền.",
        "Chọn ảnh đồng bộ nhất, tạo lại ảnh lệch phong cách.",
        "Ghi chú ảnh do AI tạo nếu đơn vị có quy định."
      ],
      "tags": [
        "tạo ảnh",
        "minh họa",
        "image prompt",
        "phong cách",
        "AI art",
        "đồng bộ"
      ],
      "example": {
        "input": "Chủ đề: làm việc nhóm hiệu quả · 5 ảnh · Flat 2D, pastel tím cam · Tỷ lệ 16:9",
        "output": "5 prompt tạo ảnh, mỗi prompt có chủ thể, bối cảnh, góc nhìn, ánh sáng và cùng một đoạn mô tả phong cách ở cuối."
      },
      "added": "2026-11-11T22:40",
      "rank": 50
    },
    {
      "id": "tk04",
      "category": "design",
      "title": "Bố cục slide từ nội dung thô",
      "target_audiences": [
        "moi-nhan-su",
        "quan-ly",
        "thiet-ke"
      ],
      "goals": [
        "ke-hoach",
        "viet"
      ],
      "difficulty": "de",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Chia nội dung dài thành từng slide với tiêu đề, ý chính và gợi ý hình minh họa.",
      "use_cases": [
        "Chuẩn bị bài thuyết trình từ tài liệu Word",
        "Rút gọn báo cáo thành slide"
      ],
      "prompt": "Bạn là chuyên gia thiết kế bài thuyết trình. Từ nội dung sau: [dán nội dung], hãy chia thành khoảng [số slide] slide cho buổi thuyết trình [thời lượng] phút với người nghe là [đối tượng]. Mỗi slide gồm: tiêu đề là một câu kết luận, tối đa 3 ý ngắn, gợi ý hình hoặc biểu đồ minh họa, ghi chú lời nói 2–3 câu. Slide đầu là mở đề, slide cuối là kết luận và lời kêu gọi. Không thêm số liệu ngoài nội dung gốc.",
      "required_inputs": [
        "Nội dung thô cần trình bày",
        "Số slide, thời lượng, người nghe"
      ],
      "verification": [
        "Mỗi số liệu trên slide có trong nội dung gốc.",
        "Tập nói thử theo ghi chú để canh thời gian.",
        "Kiểm tra mỗi slide chỉ một ý chính."
      ],
      "tags": [
        "slide",
        "thuyết trình",
        "bố cục",
        "presentation",
        "outline",
        "powerpoint"
      ],
      "example": {
        "input": "Báo cáo 2 trang về kết quả chương trình đào tạo · 8 slide · 10 phút · Người nghe: ban lãnh đạo",
        "output": "8 slide với tiêu đề dạng kết luận, tối đa 3 ý mỗi slide, gợi ý biểu đồ và ghi chú lời nói."
      },
      "added": "2026-11-11T22:40",
      "rank": 51
    },
    {
      "id": "tk05",
      "category": "design",
      "title": "Ý tưởng concept trang trí sự kiện",
      "target_audiences": [
        "van-hoa",
        "thiet-ke"
      ],
      "goals": [
        "y-tuong",
        "hinh-anh"
      ],
      "difficulty": "trung-binh",
      "time": "10–15 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Có 3 concept trang trí kèm vật dụng chính, màu sắc và điểm check-in.",
      "use_cases": [
        "Trang trí sảnh, sân khấu cho sự kiện nội bộ",
        "Góc check-in chụp ảnh"
      ],
      "prompt": "Bạn là nhà thiết kế không gian sự kiện. Sự kiện: [tên sự kiện], chủ đề [chủ đề], địa điểm [loại không gian và diện tích ước lượng], số khách [số người], ngân sách [mức ngân sách]. Hãy đề xuất 3 concept trang trí, mỗi concept gồm: tên và ý tưởng 2 câu, bảng màu, 5–7 hạng mục chính (backdrop, cổng, bàn đón khách…), một góc check-in, vật liệu dễ tìm và có thể tái sử dụng. Đánh dấu hạng mục nào cần đơn vị thi công. Không đưa giá cụ thể; chỉ ghi mức chi phí tương đối (thấp, vừa, cao).",
      "required_inputs": [
        "Chủ đề, địa điểm, số khách",
        "Mức ngân sách"
      ],
      "verification": [
        "Khảo sát mặt bằng thật trước khi chốt.",
        "Hỏi báo giá thật từ nhà cung cấp.",
        "Kiểm tra an toàn phòng cháy với vật liệu trang trí."
      ],
      "tags": [
        "trang trí",
        "concept",
        "backdrop",
        "check-in",
        "sân khấu",
        "không gian"
      ],
      "example": {
        "input": "Sự kiện: tất niên · Chủ đề: hành trình di sản · Sảnh 300 m² · 250 khách · Ngân sách vừa",
        "output": "3 concept, mỗi concept có ý tưởng, bảng màu, 5–7 hạng mục, góc check-in, mức chi phí tương đối, không có con số giá."
      },
      "added": "2026-11-11T22:40",
      "rank": 52
    },
    {
      "id": "tk06",
      "category": "design",
      "title": "Prompt tạo video ngắn từ ảnh",
      "target_audiences": [
        "truyen-thong",
        "thiet-ke"
      ],
      "goals": [
        "hinh-anh"
      ],
      "difficulty": "nang-cao",
      "time": "10–15 phút",
      "compatible_tools": [
        "Gemini",
        "ChatGPT",
        "CapCut"
      ],
      "purpose": "Viết prompt chuyển động cho công cụ tạo video AI từ ảnh có sẵn.",
      "use_cases": [
        "Biến ảnh sự kiện thành clip mở đầu",
        "Video nền cho màn hình LED"
      ],
      "prompt": "Bạn là đạo diễn hình ảnh chuyển động. Tôi có ảnh: [mô tả ảnh hoặc đính kèm]. Hãy viết 3 prompt tạo video dài [số giây] giây từ ảnh này, mỗi prompt mô tả: chuyển động máy quay (lia, đẩy vào, xoay), chuyển động của chủ thể, ánh sáng, nhịp độ, cảm xúc. Giữ nguyên khuôn mặt và trang phục người trong ảnh; không thêm chữ, logo hoặc người mới. Ghi chú phương án nào phù hợp làm video mở màn, video nền hoặc chuyển cảnh.",
      "required_inputs": [
        "Ảnh gốc (đã được phép sử dụng)",
        "Thời lượng và mục đích dùng"
      ],
      "verification": [
        "Người trong ảnh đồng ý cho chỉnh sửa bằng AI.",
        "Kiểm tra video không biến dạng khuôn mặt, tay.",
        "Ghi chú nội dung do AI tạo nếu đơn vị yêu cầu."
      ],
      "tags": [
        "video AI",
        "chuyển động",
        "image to video",
        "motion",
        "clip"
      ],
      "example": {
        "input": "Ảnh tập thể đội tình nguyện trước tòa nhà · 6 giây · Dùng làm video mở màn",
        "output": "3 prompt chuyển động khác nhau, mỗi prompt có chuyển động máy quay, ánh sáng, nhịp độ và ghi chú mục đích phù hợp."
      },
      "added": "2026-11-11T22:40",
      "rank": 53
    },
    {
      "id": "tk07",
      "category": "design",
      "title": "Góp ý thiết kế theo tiêu chí",
      "target_audiences": [
        "thiet-ke",
        "truyen-thong",
        "quan-ly"
      ],
      "goals": [
        "danh-gia"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "ChatGPT",
        "Gemini",
        "Claude"
      ],
      "purpose": "Nhận góp ý có cấu trúc cho poster, banner, slide trước khi phát hành.",
      "use_cases": [
        "Duyệt nhanh ấn phẩm trước khi in",
        "Tự kiểm tra thiết kế khi không có designer"
      ],
      "prompt": "Bạn là trưởng nhóm thiết kế khó tính nhưng công bằng. Tôi gửi kèm [loại ấn phẩm] dùng cho [mục đích, nơi hiển thị], người xem là [đối tượng]. Hãy góp ý theo 6 tiêu chí: thông điệp chính có nổi bật không, thứ tự đọc, chữ có đọc được ở khoảng cách xem thực tế không, màu sắc và nhận diện, khoảng trống, lỗi chính tả. Mỗi tiêu chí chấm 1–5 và nêu 1 điểm tốt, 1 điểm cần sửa cụ thể. Cuối cùng liệt kê 3 việc nên sửa trước tiên. Không đề xuất thay đổi nội dung thông tin.",
      "required_inputs": [
        "Ảnh ấn phẩm",
        "Mục đích và nơi hiển thị",
        "Người xem"
      ],
      "verification": [
        "Xem lại góp ý trên bản in thử hoặc màn hình thật.",
        "Đối chiếu lỗi chính tả AI phát hiện với bản gốc.",
        "Người phụ trách thương hiệu duyệt bản sửa."
      ],
      "tags": [
        "góp ý",
        "review",
        "đánh giá thiết kế",
        "poster",
        "feedback"
      ],
      "example": {
        "input": "Ảnh banner sảnh 2×1 m cho ngày hội sức khỏe · Người xem: nhân viên đi qua sảnh",
        "output": "Bảng 6 tiêu chí có điểm 1–5, mỗi tiêu chí 1 điểm tốt và 1 điểm cần sửa; cuối cùng là 3 việc ưu tiên."
      },
      "added": "2026-11-11T22:40",
      "rank": 54
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
      "id": "sk01",
      "category": "event",
      "title": "Kịch bản MC chương trình",
      "target_audiences": [
        "van-hoa",
        "truyen-thong"
      ],
      "goals": [
        "viet",
        "ke-hoach"
      ],
      "difficulty": "trung-binh",
      "time": "15–20 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Có kịch bản dẫn chương trình theo từng phần, lời dẫn tự nhiên, đúng thời lượng.",
      "use_cases": [
        "Dẫn lễ kỷ niệm, tất niên, hội thao",
        "Dẫn workshop, buổi chia sẻ nội bộ"
      ],
      "prompt": "Bạn là biên kịch MC sự kiện. Chương trình: [tên sự kiện], thời lượng [thời lượng], khán giả [đối tượng, số người], phong cách dẫn [trang trọng hoặc sôi động]. Trình tự đã chốt: [dán danh sách các phần, người phát biểu, tiết mục]. Hãy viết kịch bản MC dạng bảng: Thời gian | Phần | Lời dẫn | Ghi chú kỹ thuật (nhạc, đèn, màn chiếu). Lời dẫn mỗi lần không quá 60 giây đọc. Tên người, chức danh để trong [ngoặc vuông] để ban tổ chức điền chính xác. Thêm 2 câu dẫn dự phòng khi chương trình bị chậm.",
      "required_inputs": [
        "Trình tự chương trình đã chốt",
        "Thời lượng, khán giả, phong cách"
      ],
      "verification": [
        "Tên, chức danh người phát biểu do ban tổ chức điền và kiểm tra.",
        "Đọc to để canh thời gian từng phần.",
        "Thống nhất ghi chú kỹ thuật với đội âm thanh ánh sáng."
      ],
      "tags": [
        "MC",
        "kịch bản",
        "dẫn chương trình",
        "lời dẫn",
        "sự kiện"
      ],
      "example": {
        "input": "Lễ vinh danh đại sứ văn hóa · 90 phút · 150 người · Trang trọng, ấm áp · 7 phần đã chốt",
        "output": "Bảng theo mốc thời gian, lời dẫn mỗi phần dưới 60 giây, tên người để trong [ngoặc vuông], có 2 câu dẫn dự phòng."
      },
      "added": "2026-11-11T22:40",
      "rank": 55
    },
    {
      "id": "sk02",
      "category": "event",
      "title": "Trò chơi gắn kết đội nhóm",
      "target_audiences": [
        "van-hoa",
        "quan-ly",
        "nhan-su"
      ],
      "goals": [
        "y-tuong"
      ],
      "difficulty": "de",
      "time": "Khoảng 5 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Có danh sách trò chơi phù hợp không gian, số người và thời gian.",
      "use_cases": [
        "Mở đầu buổi họp, workshop",
        "Team building trong nhà hoặc ngoài trời"
      ],
      "prompt": "Bạn là người tổ chức hoạt động gắn kết. Hãy gợi ý [số lượng] trò chơi cho [số người] người, không gian [trong phòng họp, sảnh, ngoài trời], thời lượng mỗi trò [số phút]. Mục tiêu: [phá băng, phối hợp, sáng tạo]. Mỗi trò chơi gồm: tên, mục tiêu, dụng cụ, luật chơi từng bước, cách chia đội, câu hỏi tổng kết rút bài học. Ưu tiên trò không cần vận động mạnh, phù hợp mọi lứa tuổi, không gây khó xử cho người hướng nội.",
      "required_inputs": [
        "Số người, không gian, thời lượng",
        "Mục tiêu hoạt động"
      ],
      "verification": [
        "Chơi thử trước với 3–4 người.",
        "Chuẩn bị đủ dụng cụ.",
        "Có phương án cho người không muốn tham gia vận động."
      ],
      "tags": [
        "trò chơi",
        "team building",
        "phá băng",
        "icebreaker",
        "gắn kết",
        "hoạt động nhóm"
      ],
      "example": {
        "input": "30 người · Phòng họp lớn · 10 phút mỗi trò · Mục tiêu: phá băng đầu workshop",
        "output": "5 trò chơi, mỗi trò có mục tiêu, dụng cụ, luật chơi từng bước, cách chia đội và 1–2 câu hỏi tổng kết."
      },
      "added": "2026-11-11T22:40",
      "rank": 56
    },
    {
      "id": "sk03",
      "category": "event",
      "title": "Câu hỏi đố vui theo chủ đề",
      "target_audiences": [
        "van-hoa",
        "nhan-su",
        "truyen-thong"
      ],
      "goals": [
        "y-tuong",
        "dao-tao"
      ],
      "difficulty": "de",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot",
        "NotebookLM"
      ],
      "purpose": "Soạn bộ câu đố vui từ tài liệu có sẵn, có đáp án và nguồn.",
      "use_cases": [
        "Minigame trong sự kiện, workshop",
        "Cuộc thi tìm hiểu văn hóa, lịch sử đơn vị"
      ],
      "prompt": "Bạn là người soạn câu đố vui. Dựa trên tài liệu sau: [dán tài liệu hoặc đính kèm], hãy soạn [số câu] câu đố vui cho [đối tượng] chủ đề [chủ đề]. Mỗi câu gồm: câu hỏi, 4 phương án, đáp án đúng, câu giải thích ngắn và trích đoạn tài liệu làm căn cứ. Sắp xếp từ dễ đến khó. Chỉ hỏi về thông tin có trong tài liệu; không hỏi về thông tin cá nhân.",
      "required_inputs": [
        "Tài liệu làm nguồn câu hỏi",
        "Số câu, đối tượng, chủ đề"
      ],
      "verification": [
        "Đối chiếu từng đáp án với trích đoạn tài liệu.",
        "Thử với 2–3 người để cân độ khó.",
        "Kiểm tra không có hai đáp án cùng đúng."
      ],
      "tags": [
        "đố vui",
        "quiz",
        "minigame",
        "câu hỏi",
        "cuộc thi",
        "trắc nghiệm"
      ],
      "example": {
        "input": "Tài liệu: lịch sử 30 năm hình thành đơn vị · 15 câu · Đối tượng: nhân viên mới",
        "output": "15 câu từ dễ đến khó, mỗi câu 4 phương án, 1 đáp án, giải thích ngắn và trích đoạn làm căn cứ."
      },
      "added": "2026-11-11T22:40",
      "rank": 57
    },
    {
      "id": "sk04",
      "category": "event",
      "title": "Checklist hậu cần sự kiện",
      "target_audiences": [
        "van-hoa",
        "van-hanh"
      ],
      "goals": [
        "ke-hoach"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Không bỏ sót việc hậu cần trước, trong và sau sự kiện.",
      "use_cases": [
        "Chuẩn bị sự kiện nội bộ quy mô vừa",
        "Bàn giao việc cho nhóm hỗ trợ"
      ],
      "prompt": "Bạn là trưởng ban hậu cần sự kiện. Sự kiện: [tên], ngày [ngày], địa điểm [địa điểm], [số khách] khách, hình thức [trong nhà hoặc ngoài trời]. Hãy lập checklist hậu cần chia 4 mốc: trước 2 tuần, trước 1 ngày, trong ngày sự kiện, sau sự kiện. Mỗi mốc gồm các nhóm: địa điểm, âm thanh ánh sáng, ăn uống, đón khách, an toàn và y tế, truyền thông, thanh toán. Trình bày dạng bảng: Việc | Mốc | Người phụ trách (để trống) | Ghi chú. Thêm 5 rủi ro thường gặp và phương án dự phòng.",
      "required_inputs": [
        "Thông tin sự kiện",
        "Số khách, hình thức tổ chức"
      ],
      "verification": [
        "Rà lại với nhà cung cấp và địa điểm thật.",
        "Phân công người phụ trách từng việc.",
        "Kiểm tra phương án y tế, thoát hiểm."
      ],
      "tags": [
        "hậu cần",
        "checklist",
        "logistics",
        "chuẩn bị sự kiện",
        "dự phòng"
      ],
      "example": {
        "input": "Hội thao cuối năm · Sân vận động thuê ngoài · 400 người · Ngoài trời",
        "output": "Bảng 30–40 việc chia 4 mốc và 7 nhóm, cột người phụ trách để trống, kèm 5 rủi ro và phương án dự phòng."
      },
      "added": "2026-11-11T22:40",
      "rank": 58
    },
    {
      "id": "sk05",
      "category": "event",
      "title": "Phát biểu khai mạc, bế mạc",
      "target_audiences": [
        "quan-ly",
        "van-hoa"
      ],
      "goals": [
        "viet"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Soạn bài phát biểu ngắn, đúng tinh thần sự kiện cho người lãnh đạo đọc.",
      "use_cases": [
        "Lãnh đạo khai mạc sự kiện, hội nghị",
        "Phát biểu bế mạc, cảm ơn"
      ],
      "prompt": "Bạn là người viết diễn văn. Hãy soạn bài phát biểu [khai mạc hoặc bế mạc] dài khoảng [số phút] phút đọc cho [chức danh người phát biểu] tại [sự kiện]. Khán giả: [đối tượng]. Ý chính cần nói: [các ý]. Cấu trúc: chào hỏi, ý nghĩa sự kiện, 2–3 thông điệp chính, lời cảm ơn, lời chúc. Câu ngắn, dễ đọc thành tiếng, có chỗ ngắt nghỉ. Tên khách mời và đơn vị để trong [ngoặc vuông]. Không thêm thành tích, số liệu khi chưa được cung cấp.",
      "required_inputs": [
        "Người phát biểu, sự kiện, khán giả",
        "Ý chính cần nói",
        "Thời lượng"
      ],
      "verification": [
        "Người phát biểu đọc thử và chỉnh theo giọng của mình.",
        "Danh sách khách mời, thứ tự chào hỏi đúng nghi thức.",
        "Số liệu, thành tích được xác nhận."
      ],
      "tags": [
        "phát biểu",
        "diễn văn",
        "khai mạc",
        "bế mạc",
        "lãnh đạo",
        "speech"
      ],
      "example": {
        "input": "Phát biểu khai mạc hội thao · 3 phút · Giám đốc khối · Ý chính: tinh thần đoàn kết, an toàn",
        "output": "Bài khoảng 350 từ, câu ngắn dễ đọc, tên khách mời trong [ngoặc vuông], không có thành tích nào ngoài ý đã cho."
      },
      "added": "2026-11-11T22:40",
      "rank": 59
    },
    {
      "id": "sk06",
      "category": "event",
      "title": "Khảo sát sau sự kiện",
      "target_audiences": [
        "van-hoa",
        "nhan-su"
      ],
      "goals": [
        "phan-tich",
        "ke-hoach"
      ],
      "difficulty": "de",
      "time": "Khoảng 5 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Thiết kế phiếu khảo sát ngắn, đo được mức hài lòng và ý kiến cải thiện.",
      "use_cases": [
        "Lấy phản hồi sau sự kiện, đào tạo",
        "So sánh chất lượng giữa các lần tổ chức"
      ],
      "prompt": "Bạn là chuyên gia thiết kế khảo sát. Hãy soạn phiếu khảo sát sau [sự kiện] cho [đối tượng], làm trong tối đa [số phút] phút. Gồm: 5–7 câu chấm điểm thang 1–5 về [các khía cạnh: nội dung, tổ chức, địa điểm…], 1 câu đo mức sẵn sàng giới thiệu cho đồng nghiệp, 2 câu hỏi mở. Câu hỏi trung lập, không gợi ý câu trả lời. Không hỏi thông tin định danh cá nhân. Kèm gợi ý tiêu đề và lời mở đầu 2 câu cho phiếu.",
      "required_inputs": [
        "Sự kiện và đối tượng tham gia",
        "Các khía cạnh cần đánh giá"
      ],
      "verification": [
        "Làm thử phiếu để kiểm tra thời gian.",
        "Câu hỏi không dẫn dắt.",
        "Khảo sát ẩn danh đúng như lời mở đầu."
      ],
      "tags": [
        "khảo sát",
        "survey",
        "phản hồi",
        "đánh giá sự kiện",
        "form"
      ],
      "example": {
        "input": "Sau workshop AI 120 người · 3 phút · Khía cạnh: nội dung, diễn giả, thực hành, hậu cần",
        "output": "Phiếu 9–10 câu: 6 câu thang 1–5, 1 câu mức sẵn sàng giới thiệu, 2 câu mở; có tiêu đề và lời mở đầu, không hỏi họ tên."
      },
      "added": "2026-11-11T22:40",
      "rank": 60
    },
    {
      "id": "sk07",
      "category": "event",
      "title": "Kế hoạch chương trình văn hóa theo năm",
      "target_audiences": [
        "van-hoa",
        "quan-ly"
      ],
      "goals": [
        "ke-hoach",
        "y-tuong"
      ],
      "difficulty": "nang-cao",
      "time": "15–20 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Phác thảo lịch hoạt động văn hóa cả năm gắn với giá trị cốt lõi.",
      "use_cases": [
        "Lập kế hoạch cho đội đại sứ văn hóa",
        "Đề xuất ngân sách và nguồn lực năm"
      ],
      "prompt": "Bạn là chuyên gia văn hóa doanh nghiệp. Giá trị cốt lõi của đơn vị: [các giá trị]. Nguồn lực: [số người phụ trách, mức ngân sách]. Các mốc cố định trong năm: [ngày kỷ niệm, lễ tết]. Hãy đề xuất kế hoạch hoạt động văn hóa 12 tháng dạng bảng: Tháng | Hoạt động | Giá trị gắn kết | Hình thức | Quy mô | Cách đo hiệu quả. Cân bằng hoạt động lớn và nhỏ, trực tiếp và trực tuyến. Không quá [số] hoạt động lớn mỗi năm. Ghi rõ đây là bản đề xuất cần lãnh đạo duyệt.",
      "required_inputs": [
        "Giá trị cốt lõi",
        "Nguồn lực, ngân sách",
        "Các mốc cố định"
      ],
      "verification": [
        "Đối chiếu với lịch kinh doanh để tránh mùa cao điểm.",
        "Ước tính chi phí thật trước khi trình.",
        "Lãnh đạo và bộ phận nhân sự duyệt."
      ],
      "tags": [
        "kế hoạch năm",
        "văn hóa doanh nghiệp",
        "giá trị cốt lõi",
        "đại sứ văn hóa",
        "lịch hoạt động"
      ],
      "example": {
        "input": "Giá trị: tận tâm, đổi mới, hợp tác · 5 người phụ trách · Ngân sách vừa · Mốc: ngày thành lập, Tết, 8/3, 20/10",
        "output": "Bảng 12 tháng, mỗi tháng 1–2 hoạt động gắn với giá trị, có hình thức, quy mô và cách đo; tối đa 4 hoạt động lớn."
      },
      "added": "2026-11-11T22:40",
      "rank": 61
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
      "id": "cv01",
      "category": "office",
      "title": "Trả lời email khó",
      "target_audiences": [
        "moi-nhan-su",
        "quan-ly",
        "kinh-doanh"
      ],
      "goals": [
        "viet"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 5 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Soạn email phản hồi lịch sự, rõ lập trường khi phải từ chối, phản đối hoặc báo tin không vui.",
      "use_cases": [
        "Từ chối một đề nghị, yêu cầu ngoài phạm vi",
        "Phản hồi email có giọng gay gắt"
      ],
      "prompt": "Bạn là chuyên gia giao tiếp công sở. Tôi nhận được email sau: [dán email, đã bỏ thông tin nhạy cảm]. Mục tiêu của tôi: [đồng ý một phần, từ chối, xin thêm thời gian…]. Điều tôi có thể đề xuất: [phương án thay thế]. Hãy viết 2 phiên bản trả lời: một bản ngắn gọn, một bản chi tiết hơn. Giọng lịch sự, bình tĩnh, không đổ lỗi, không xin lỗi quá mức. Tối đa 150 từ mỗi bản. Không hứa điều tôi chưa nêu.",
      "required_inputs": [
        "Email nhận được (đã ẩn thông tin nhạy cảm)",
        "Mục tiêu khi trả lời",
        "Phương án có thể đề xuất"
      ],
      "verification": [
        "Đọc lại giọng điệu khi đặt mình vào vị trí người nhận.",
        "Không có cam kết nào ngoài điều bạn đã nêu.",
        "Email quan trọng nên nhờ quản lý xem trước."
      ],
      "tags": [
        "email",
        "trả lời",
        "từ chối",
        "giao tiếp",
        "phản hồi khó"
      ],
      "example": {
        "input": "Email đồng nghiệp phòng khác yêu cầu gửi báo cáo trong ngày · Mục tiêu: xin lùi sang thứ Năm · Đề xuất: gửi bản tóm tắt trước",
        "output": "2 bản trả lời dưới 150 từ, nêu rõ lý do, đề xuất gửi bản tóm tắt trước, không xin lỗi quá mức."
      },
      "added": "2026-11-11T22:40",
      "rank": 62
    },
    {
      "id": "cv02",
      "category": "office",
      "title": "Sắp xếp việc ưu tiên trong tuần",
      "target_audiences": [
        "moi-nhan-su",
        "quan-ly"
      ],
      "goals": [
        "ke-hoach"
      ],
      "difficulty": "de",
      "time": "Khoảng 5 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Phân loại danh sách việc theo mức khẩn cấp và quan trọng, có lịch làm cụ thể.",
      "use_cases": [
        "Đầu tuần có quá nhiều việc",
        "Cần báo quản lý thứ tự ưu tiên"
      ],
      "prompt": "Bạn là trợ lý quản lý thời gian. Đây là danh sách việc của tôi tuần này: [dán danh sách, kèm hạn nếu có]. Thời gian làm việc thực tế mỗi ngày khoảng [số giờ]; các cuộc họp cố định: [lịch họp]. Hãy: (1) xếp việc vào ma trận Khẩn cấp và Quan trọng, (2) đề xuất lịch làm từ thứ Hai đến thứ Sáu theo khung giờ, (3) chỉ ra việc nên ủy quyền, dời hoặc hỏi lại quản lý. Không tự đặt hạn cho việc chưa có hạn; ghi \"cần xác nhận hạn\".",
      "required_inputs": [
        "Danh sách việc và hạn",
        "Số giờ làm việc thực tế, lịch họp cố định"
      ],
      "verification": [
        "Kiểm tra lại hạn chót với người giao việc.",
        "Điều chỉnh lịch theo năng lượng làm việc của bạn.",
        "Báo quản lý những việc đề xuất dời."
      ],
      "tags": [
        "ưu tiên",
        "quản lý thời gian",
        "to-do",
        "eisenhower",
        "lịch làm việc"
      ],
      "example": {
        "input": "12 việc, 5 việc có hạn · 6 giờ làm việc thực tế/ngày · Họp giao ban sáng thứ Hai",
        "output": "Ma trận 4 ô, lịch theo khung giờ 5 ngày, danh sách 3 việc nên ủy quyền hoặc dời; việc chưa có hạn ghi “cần xác nhận hạn”."
      },
      "added": "2026-11-11T22:40",
      "rank": 63
    },
    {
      "id": "cv03",
      "category": "office",
      "title": "Chuẩn bị nội dung buổi họp",
      "target_audiences": [
        "quan-ly",
        "moi-nhan-su",
        "van-hanh"
      ],
      "goals": [
        "ke-hoach"
      ],
      "difficulty": "de",
      "time": "Khoảng 5 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Có chương trình họp có mục tiêu, thời lượng và người phụ trách từng phần.",
      "use_cases": [
        "Gửi agenda trước cuộc họp",
        "Họp ra quyết định cần chuẩn bị kỹ"
      ],
      "prompt": "Bạn là thư ký cuộc họp chuyên nghiệp. Cuộc họp: [chủ đề], thời lượng [số phút], người tham dự [vai trò, số người], mục tiêu cuối cùng [quyết định hoặc kết quả cần có]. Hãy soạn chương trình họp: mục tiêu một câu, danh sách mục thảo luận có thời lượng và người dẫn dắt (để trống tên), tài liệu cần đọc trước, câu hỏi cần trả lời cuối buổi. Tổng thời lượng không vượt [số phút] và chừa 5 phút chốt việc. Kèm email gửi chương trình họp dưới 100 từ.",
      "required_inputs": [
        "Chủ đề, mục tiêu cuộc họp",
        "Thời lượng, người tham dự"
      ],
      "verification": [
        "Tổng thời gian các mục khớp thời lượng họp.",
        "Người dẫn dắt từng mục đã đồng ý.",
        "Tài liệu đọc trước được gửi kèm."
      ],
      "tags": [
        "họp",
        "agenda",
        "chương trình họp",
        "meeting",
        "chuẩn bị"
      ],
      "example": {
        "input": "Họp chốt kế hoạch tất niên · 45 phút · 8 người · Cần chốt ngày, địa điểm, ngân sách",
        "output": "Chương trình 5–6 mục có thời lượng, tổng 45 phút có 5 phút chốt việc, 3 câu hỏi cần trả lời và email gửi kèm."
      },
      "added": "2026-11-11T22:40",
      "rank": 64
    },
    {
      "id": "cv04",
      "category": "office",
      "title": "Viết hướng dẫn quy trình từng bước",
      "target_audiences": [
        "van-hanh",
        "nhan-su",
        "moi-nhan-su"
      ],
      "goals": [
        "viet"
      ],
      "difficulty": "trung-binh",
      "time": "10–15 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Chuyển cách làm trong đầu thành tài liệu hướng dẫn người khác làm theo được.",
      "use_cases": [
        "Bàn giao công việc khi nghỉ phép, chuyển vị trí",
        "Chuẩn hóa thao tác lặp lại trong nhóm"
      ],
      "prompt": "Bạn là chuyên viên viết tài liệu quy trình. Đây là mô tả cách tôi làm [tên công việc]: [dán mô tả hoặc ghi chú]. Người đọc: [người mới hoặc đồng nghiệp]. Hãy viết hướng dẫn gồm: mục đích, khi nào dùng, chuẩn bị gì, các bước đánh số (mỗi bước bắt đầu bằng động từ, kèm kết quả mong đợi), lỗi thường gặp và cách xử lý, người liên hệ khi vướng (để trong [ngoặc vuông]). Chỗ nào mô tả của tôi chưa rõ, liệt kê thành câu hỏi ở cuối thay vì tự đoán.",
      "required_inputs": [
        "Mô tả cách làm hiện tại",
        "Người đọc tài liệu"
      ],
      "verification": [
        "Nhờ một người chưa từng làm đọc và làm thử.",
        "Cập nhật ảnh chụp màn hình nếu có.",
        "Không đưa mật khẩu, thông tin đăng nhập vào tài liệu."
      ],
      "tags": [
        "quy trình",
        "hướng dẫn",
        "SOP",
        "bàn giao",
        "tài liệu"
      ],
      "example": {
        "input": "Mô tả cách làm đề nghị thanh toán chi phí sự kiện · Người đọc: nhân viên mới",
        "output": "Hướng dẫn 8–10 bước có kết quả mong đợi, mục lỗi thường gặp, đầu mối liên hệ trong [ngoặc vuông] và 2 câu hỏi cần làm rõ."
      },
      "added": "2026-11-11T22:40",
      "rank": 65
    },
    {
      "id": "cv05",
      "category": "office",
      "title": "Viết lại tin nhắn cho rõ ràng",
      "target_audiences": [
        "moi-nhan-su"
      ],
      "goals": [
        "viet",
        "danh-gia"
      ],
      "difficulty": "de",
      "time": "Khoảng 2 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Sửa nhanh tin nhắn công việc cho ngắn, rõ, đúng giọng.",
      "use_cases": [
        "Nhắn quản lý, đồng nghiệp phòng khác",
        "Nhắc việc mà không gây khó chịu"
      ],
      "prompt": "Hãy viết lại tin nhắn sau cho rõ ràng và lịch sự hơn, gửi cho [người nhận] qua [kênh: Zalo, Teams, email]: [dán tin nhắn]. Yêu cầu: nêu việc cần làm và hạn ngay ở câu đầu, tối đa [số câu] câu, giọng [thân thiện hoặc trang trọng]. Giữ nguyên mọi thông tin, không thêm chi tiết mới. Đưa 2 phiên bản để tôi chọn.",
      "required_inputs": [
        "Tin nhắn gốc",
        "Người nhận, kênh, giọng mong muốn"
      ],
      "verification": [
        "Thông tin, hạn chót giữ nguyên.",
        "Đọc lại xem có thể bị hiểu là ra lệnh không."
      ],
      "tags": [
        "tin nhắn",
        "nhắc việc",
        "chat",
        "giao tiếp",
        "viết lại"
      ],
      "example": {
        "input": "Tin nhắn: “a ơi gửi e cái file hôm trước nha gấp” · Người nhận: trưởng phòng khác · Teams · Trang trọng",
        "output": "2 phiên bản 2–3 câu nêu rõ tên file và thời hạn cần nhận, giọng lịch sự."
      },
      "added": "2026-11-11T22:40",
      "rank": 66
    },
    {
      "id": "cv06",
      "category": "office",
      "title": "Tóm tắt chuỗi email dài",
      "target_audiences": [
        "quan-ly",
        "moi-nhan-su"
      ],
      "goals": [
        "phan-tich"
      ],
      "difficulty": "de",
      "time": "Khoảng 3 phút",
      "compatible_tools": [
        "Copilot",
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "purpose": "Nắm nhanh một chuỗi email nhiều người trả lời: đã chốt gì, ai cần làm gì.",
      "use_cases": [
        "Quay lại sau kỳ nghỉ, nhiều email tồn",
        "Được thêm vào giữa một chuỗi trao đổi"
      ],
      "prompt": "Bạn là trợ lý điều hành. Đây là chuỗi email về [chủ đề]: [dán chuỗi email, đã bỏ thông tin nhạy cảm]. Hãy tóm tắt: (1) bối cảnh trong 2 câu, (2) các điểm đã thống nhất, (3) các điểm còn tranh luận và quan điểm của từng bên, (4) bảng việc cần làm: Việc | Người phụ trách | Hạn. Chỉ dựa vào nội dung email; việc chưa rõ người phụ trách ghi \"chưa giao\".",
      "required_inputs": [
        "Chuỗi email (đã ẩn thông tin nhạy cảm)"
      ],
      "verification": [
        "Đối chiếu các điểm “đã thống nhất” với email gốc.",
        "Xác nhận lại việc được giao cho bạn."
      ],
      "tags": [
        "tóm tắt email",
        "email thread",
        "việc cần làm",
        "action items"
      ],
      "example": {
        "input": "Chuỗi 18 email giữa 5 người về chọn nhà cung cấp in ấn",
        "output": "Bối cảnh 2 câu, 3 điểm đã thống nhất, 2 điểm còn tranh luận kèm quan điểm, bảng 4 việc cần làm có cột người phụ trách."
      },
      "added": "2026-11-11T22:40",
      "rank": 67
    },
    {
      "id": "cv07",
      "category": "office",
      "title": "Mẫu tự đánh giá công việc",
      "target_audiences": [
        "moi-nhan-su",
        "nhan-su"
      ],
      "goals": [
        "viet",
        "danh-gia"
      ],
      "difficulty": "trung-binh",
      "time": "10–15 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Copilot"
      ],
      "purpose": "Viết bản tự đánh giá cuối kỳ có dẫn chứng, cân bằng thành tích và điểm cần phát triển.",
      "use_cases": [
        "Đánh giá hiệu quả công việc giữa năm, cuối năm",
        "Chuẩn bị buổi trao đổi 1-1 với quản lý"
      ],
      "prompt": "Bạn là người hướng dẫn viết tự đánh giá công việc. Đây là ghi chú công việc kỳ [kỳ đánh giá] của tôi: [dán ghi chú, kết quả đã được xác nhận]. Mục tiêu đầu kỳ: [mục tiêu]. Hãy viết bản tự đánh giá gồm: 3–5 kết quả nổi bật theo cấu trúc Tình huống – Việc tôi làm – Kết quả; 2 điểm cần phát triển kèm hành động cụ thể; mục tiêu kỳ tới. Giọng khách quan, không phóng đại. Chỉ dùng con số có trong ghi chú; chỗ thiếu số liệu ghi \"cần bổ sung số liệu\".",
      "required_inputs": [
        "Ghi chú kết quả công việc đã được xác nhận",
        "Mục tiêu đầu kỳ"
      ],
      "verification": [
        "Mọi con số khớp dữ liệu thật.",
        "Bản cuối là lời của bạn: đọc và chỉnh lại theo giọng mình.",
        "Không đưa thông tin mật của dự án vào công cụ AI."
      ],
      "tags": [
        "tự đánh giá",
        "đánh giá hiệu quả",
        "performance review",
        "KPI",
        "1-1"
      ],
      "example": {
        "input": "Ghi chú 6 tháng: tổ chức 3 sự kiện, viết 20 bài đăng, đào tạo 2 người mới · Mục tiêu: tăng tương tác kênh nội bộ",
        "output": "3–4 kết quả theo cấu trúc Tình huống – Việc làm – Kết quả, 2 điểm cần phát triển, mục tiêu kỳ tới; chỗ thiếu số liệu được đánh dấu."
      },
      "added": "2026-11-11T22:40",
      "rank": 68
    },
    {
      "id": "cv08",
      "category": "office",
      "title": "Biên bản bàn giao công việc",
      "target_audiences": [
        "moi-nhan-su",
        "van-hanh",
        "quan-ly"
      ],
      "goals": [
        "viet",
        "ke-hoach"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Có biên bản bàn giao đầy đủ việc đang làm, tài liệu, đầu mối và rủi ro.",
      "use_cases": [
        "Nghỉ phép dài, nghỉ sinh",
        "Chuyển vị trí, chuyển dự án"
      ],
      "prompt": "Bạn là trưởng nhóm cẩn thận. Tôi sắp bàn giao công việc cho [người nhận bàn giao] trong [thời gian]. Danh sách việc đang làm: [dán danh sách và trạng thái]. Hãy soạn biên bản bàn giao dạng bảng: Việc | Trạng thái | Bước tiếp theo | Hạn | Tài liệu, đường dẫn | Đầu mối liên quan. Thêm mục: việc định kỳ cần duy trì, rủi ro cần chú ý, cách liên hệ tôi khi khẩn cấp (để trống). Không đưa mật khẩu hay thông tin đăng nhập vào biên bản.",
      "required_inputs": [
        "Danh sách việc và trạng thái",
        "Người nhận bàn giao, thời gian"
      ],
      "verification": [
        "Hai bên cùng đọc và xác nhận từng dòng.",
        "Kiểm tra quyền truy cập tài liệu của người nhận.",
        "Quản lý trực tiếp ký xác nhận."
      ],
      "tags": [
        "bàn giao",
        "handover",
        "nghỉ phép",
        "biên bản",
        "chuyển giao"
      ],
      "example": {
        "input": "Bàn giao 2 tuần nghỉ phép · 7 việc đang làm, 3 việc định kỳ hằng tuần",
        "output": "Bảng 7 dòng có bước tiếp theo và hạn, mục việc định kỳ, 3 rủi ro cần chú ý, ô liên hệ khẩn cấp để trống."
      },
      "added": "2026-11-11T22:40",
      "rank": 69
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
      "id": "nc01",
      "category": "research",
      "title": "So sánh các phương án ra quyết định",
      "target_audiences": [
        "quan-ly",
        "van-hanh",
        "du-lieu"
      ],
      "goals": [
        "phan-tich"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Đặt các phương án cạnh nhau theo cùng tiêu chí để ra quyết định có căn cứ.",
      "use_cases": [
        "Chọn nhà cung cấp, công cụ, địa điểm",
        "Trình bày đề xuất cho quản lý"
      ],
      "prompt": "Bạn là chuyên viên phân tích. Tôi cần chọn giữa các phương án: [liệt kê phương án và thông tin đã có về từng phương án]. Mục tiêu: [mục tiêu]. Tiêu chí quan trọng: [tiêu chí, kèm trọng số nếu có]. Hãy lập bảng so sánh theo tiêu chí, chấm điểm 1–5 có giải thích, tính điểm tổng theo trọng số, nêu rủi ro chính của từng phương án và đề xuất 1 phương án kèm điều kiện để đề xuất thay đổi. Chỉ dùng thông tin tôi cung cấp; chỗ thiếu ghi \"cần thu thập\".",
      "required_inputs": [
        "Danh sách phương án và thông tin từng phương án",
        "Mục tiêu, tiêu chí, trọng số"
      ],
      "verification": [
        "Kiểm tra lại thông tin đầu vào của từng phương án.",
        "Thử đổi trọng số xem kết luận có thay đổi không.",
        "Người có thẩm quyền ra quyết định cuối cùng."
      ],
      "tags": [
        "so sánh",
        "ra quyết định",
        "phương án",
        "ma trận",
        "lựa chọn"
      ],
      "example": {
        "input": "3 địa điểm tổ chức tất niên với sức chứa, khoảng cách, mức giá tương đối · Tiêu chí: chi phí 40%, đi lại 30%, không gian 30%",
        "output": "Bảng 3 phương án × 3 tiêu chí có điểm và giải thích, điểm tổng theo trọng số, rủi ro từng phương án, 1 đề xuất kèm điều kiện."
      },
      "added": "2026-11-11T22:40",
      "rank": 70
    },
    {
      "id": "nc02",
      "category": "research",
      "title": "Phân tích SWOT",
      "target_audiences": [
        "quan-ly",
        "van-hanh",
        "kinh-doanh"
      ],
      "goals": [
        "phan-tich",
        "ke-hoach"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Nhìn tổng thể điểm mạnh, yếu, cơ hội, thách thức và rút ra hướng hành động.",
      "use_cases": [
        "Đánh giá một chương trình, sáng kiến",
        "Chuẩn bị kế hoạch năm"
      ],
      "prompt": "Bạn là chuyên gia chiến lược. Đối tượng phân tích: [chương trình, sản phẩm, đơn vị]. Thông tin đã có: [dán dữ liệu, nhận xét, kết quả]. Hãy lập ma trận SWOT, mỗi ô 3–5 ý cụ thể, mỗi ý ghi căn cứ từ thông tin đã cho. Sau đó đề xuất 4 nhóm hành động: dùng điểm mạnh để nắm cơ hội, khắc phục điểm yếu, phòng thách thức, giảm rủi ro kép. Đánh dấu ý nào là suy luận, ý nào có căn cứ trực tiếp.",
      "required_inputs": [
        "Đối tượng phân tích",
        "Dữ liệu, nhận xét đã có"
      ],
      "verification": [
        "Kiểm tra từng căn cứ với dữ liệu gốc.",
        "Thảo luận với nhóm để bổ sung góc nhìn.",
        "Ý suy luận cần thêm dữ liệu trước khi dùng."
      ],
      "tags": [
        "SWOT",
        "chiến lược",
        "phân tích",
        "điểm mạnh",
        "cơ hội"
      ],
      "example": {
        "input": "Chương trình đại sứ văn hóa năm đầu: 60 thành viên, kết quả khảo sát, ý kiến từ chi nhánh",
        "output": "Ma trận 4 ô, mỗi ô 3–5 ý có căn cứ, 4 nhóm hành động, các ý suy luận được đánh dấu."
      },
      "added": "2026-11-11T22:40",
      "rank": 71
    },
    {
      "id": "nc03",
      "category": "research",
      "title": "Hỏi đáp trên tài liệu dài",
      "target_audiences": [
        "moi-nhan-su",
        "du-lieu",
        "quan-ly"
      ],
      "goals": [
        "phan-tich"
      ],
      "difficulty": "de",
      "time": "Khoảng 5 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "NotebookLM"
      ],
      "purpose": "Đặt câu hỏi cho tài liệu và nhận câu trả lời có trích dẫn vị trí.",
      "use_cases": [
        "Tra cứu nhanh quy chế, hướng dẫn dài",
        "Kiểm tra một điều khoản trước khi trả lời người khác"
      ],
      "prompt": "Bạn là trợ lý tra cứu tài liệu. Chỉ dựa vào tài liệu đính kèm [tên tài liệu], hãy trả lời các câu hỏi sau: [danh sách câu hỏi]. Với mỗi câu: trả lời ngắn gọn, trích nguyên văn đoạn liên quan và ghi vị trí (mục, trang). Nếu tài liệu không có câu trả lời, ghi \"Tài liệu không đề cập\" và không suy đoán. Cuối cùng liệt kê các điểm trong tài liệu có thể gây hiểu nhầm.",
      "required_inputs": [
        "Tài liệu được phép dùng với công cụ AI",
        "Danh sách câu hỏi"
      ],
      "verification": [
        "Mở đúng vị trí được trích để kiểm tra.",
        "Văn bản có hiệu lực là bản mới nhất.",
        "Câu trả lời liên quan quy định cần bộ phận phụ trách xác nhận."
      ],
      "tags": [
        "hỏi đáp",
        "tra cứu",
        "trích dẫn",
        "tài liệu",
        "quy chế",
        "NotebookLM"
      ],
      "example": {
        "input": "Tài liệu: sổ tay nhân viên 60 trang · 5 câu hỏi về nghỉ phép và công tác",
        "output": "5 câu trả lời ngắn kèm trích nguyên văn và vị trí; câu không có trong tài liệu ghi “Tài liệu không đề cập”."
      },
      "added": "2026-11-11T22:40",
      "rank": 72
    },
    {
      "id": "nc04",
      "category": "research",
      "title": "Tổng hợp ý kiến phản hồi theo chủ đề",
      "target_audiences": [
        "du-lieu",
        "nhan-su",
        "van-hoa"
      ],
      "goals": [
        "phan-tich"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "NotebookLM"
      ],
      "purpose": "Gom hàng chục ý kiến rời rạc thành nhóm chủ đề có số lượng và trích dẫn tiêu biểu.",
      "use_cases": [
        "Câu hỏi mở trong khảo sát",
        "Ý kiến góp ý sau sự kiện, đào tạo"
      ],
      "prompt": "Bạn là chuyên viên phân tích định tính. Dưới đây là [số lượng] ý kiến phản hồi về [chủ đề], đã ẩn danh: [dán ý kiến]. Hãy: (1) nhóm thành 4–7 chủ đề, mỗi chủ đề có tên, mô tả 1 câu, số ý kiến thuộc chủ đề và 2 trích dẫn tiêu biểu nguyên văn; (2) phân loại sắc thái tích cực, trung tính, tiêu cực; (3) nêu 3 đề xuất cải thiện rút ra. Đếm chính xác theo dữ liệu; một ý kiến có thể thuộc nhiều chủ đề, ghi rõ cách đếm.",
      "required_inputs": [
        "Danh sách ý kiến đã ẩn danh",
        "Chủ đề khảo sát"
      ],
      "verification": [
        "Đếm lại số ý kiến của 1–2 chủ đề để kiểm tra.",
        "Trích dẫn đúng nguyên văn.",
        "Không suy ra danh tính người góp ý."
      ],
      "tags": [
        "phản hồi",
        "khảo sát",
        "định tính",
        "nhóm chủ đề",
        "ý kiến",
        "feedback"
      ],
      "example": {
        "input": "85 ý kiến trả lời câu “Bạn muốn cải thiện gì ở các buổi đào tạo?”",
        "output": "5–6 chủ đề có số ý kiến và 2 trích dẫn nguyên văn mỗi chủ đề, tỷ lệ sắc thái, 3 đề xuất; có ghi chú cách đếm."
      },
      "added": "2026-11-11T22:40",
      "rank": 73
    },
    {
      "id": "nc05",
      "category": "research",
      "title": "Lập câu hỏi phỏng vấn người dùng",
      "target_audiences": [
        "thiet-ke",
        "kinh-doanh",
        "du-lieu"
      ],
      "goals": [
        "phan-tich",
        "ke-hoach"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Soạn bộ câu hỏi phỏng vấn mở, không dẫn dắt, để hiểu nhu cầu thật.",
      "use_cases": [
        "Tìm hiểu nhu cầu trước khi làm sản phẩm, chương trình",
        "Phỏng vấn nhân viên về trải nghiệm nội bộ"
      ],
      "prompt": "Bạn là nhà nghiên cứu người dùng. Mục tiêu nghiên cứu: [điều cần tìm hiểu]. Người được phỏng vấn: [đối tượng]. Thời lượng: [số phút]. Hãy soạn kịch bản phỏng vấn gồm: lời mở đầu xin phép và cam kết ẩn danh, 3 câu khởi động, 8–10 câu hỏi chính dạng mở, mỗi câu kèm 1–2 câu hỏi đào sâu, câu kết thúc. Tránh câu hỏi dẫn dắt hoặc hỏi ý kiến về giải pháp giả định; ưu tiên hỏi về trải nghiệm cụ thể đã xảy ra.",
      "required_inputs": [
        "Mục tiêu nghiên cứu",
        "Đối tượng và thời lượng phỏng vấn"
      ],
      "verification": [
        "Phỏng vấn thử với 1 người để chỉnh câu hỏi.",
        "Xin đồng ý trước khi ghi âm.",
        "Lưu ghi chú theo quy định bảo mật."
      ],
      "tags": [
        "phỏng vấn",
        "nghiên cứu người dùng",
        "user interview",
        "câu hỏi mở",
        "nhu cầu"
      ],
      "example": {
        "input": "Mục tiêu: hiểu vì sao nhân viên ít dùng cổng thông tin nội bộ · Đối tượng: nhân viên chi nhánh · 30 phút",
        "output": "Kịch bản có lời mở đầu, 3 câu khởi động, 9 câu hỏi chính dạng mở kèm câu đào sâu, không câu nào gợi ý sẵn câu trả lời."
      },
      "added": "2026-11-11T22:40",
      "rank": 74
    },
    {
      "id": "nc06",
      "category": "research",
      "title": "Phân tích nguyên nhân gốc rễ",
      "target_audiences": [
        "van-hanh",
        "quan-ly"
      ],
      "goals": [
        "phan-tich",
        "danh-gia"
      ],
      "difficulty": "nang-cao",
      "time": "10–15 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Tìm nguyên nhân thật của một vấn đề lặp lại thay vì xử lý triệu chứng.",
      "use_cases": [
        "Lỗi, sự cố lặp lại trong quy trình",
        "Sau một sự kiện có vấn đề cần rút kinh nghiệm"
      ],
      "prompt": "Bạn là chuyên gia cải tiến quy trình. Vấn đề: [mô tả vấn đề, tần suất, ảnh hưởng]. Thông tin đã biết: [dữ kiện, mốc thời gian, các bước liên quan]. Hãy phân tích bằng 2 cách: (1) 5 lần hỏi \"Tại sao\", (2) sơ đồ xương cá theo 5 nhóm Con người, Quy trình, Công cụ, Thông tin, Môi trường. Sau đó nêu 2–3 nguyên nhân gốc có khả năng nhất, dữ liệu cần thu thập để xác nhận, và giải pháp ngắn hạn, dài hạn. Không quy lỗi cho cá nhân; tập trung vào hệ thống.",
      "required_inputs": [
        "Mô tả vấn đề, tần suất, ảnh hưởng",
        "Các dữ kiện đã biết"
      ],
      "verification": [
        "Xác nhận nguyên nhân bằng dữ liệu trước khi hành động.",
        "Thảo luận với người trực tiếp làm quy trình.",
        "Theo dõi xem vấn đề có giảm sau khi sửa."
      ],
      "tags": [
        "nguyên nhân gốc",
        "5 why",
        "xương cá",
        "root cause",
        "cải tiến"
      ],
      "example": {
        "input": "Vấn đề: đăng ký sự kiện nội bộ thường thiếu 20–30% người dự so với số đăng ký · Đã biết: nhắc lịch 1 lần, form dài",
        "output": "Chuỗi 5 câu Tại sao, sơ đồ 5 nhóm nguyên nhân, 2–3 nguyên nhân gốc, dữ liệu cần thu thập và giải pháp ngắn hạn, dài hạn."
      },
      "added": "2026-11-11T22:40",
      "rank": 75
    },
    {
      "id": "nc07",
      "category": "research",
      "title": "Tổng quan nhanh một chủ đề mới",
      "target_audiences": [
        "moi-nhan-su",
        "quan-ly"
      ],
      "goals": [
        "phan-tich",
        "dao-tao"
      ],
      "difficulty": "de",
      "time": "Khoảng 5 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Hiểu nhanh một chủ đề lạ đủ để tham gia thảo luận và biết cần hỏi gì tiếp.",
      "use_cases": [
        "Chuẩn bị trước cuộc họp về lĩnh vực chưa quen",
        "Định hướng trước khi đọc tài liệu chuyên sâu"
      ],
      "prompt": "Bạn là người hướng dẫn kiên nhẫn. Tôi là [vai trò], chưa biết về [chủ đề]. Hãy giải thích trong khoảng 400 từ: khái niệm cốt lõi bằng ví dụ đời thường, 5 thuật ngữ cần biết, ứng dụng liên quan đến công việc [mô tả công việc], các hiểu lầm phổ biến, 5 câu hỏi tôi nên hỏi chuyên gia. Ghi rõ phần nào là kiến thức phổ biến, phần nào có thể đã thay đổi gần đây và cần kiểm tra nguồn cập nhật.",
      "required_inputs": [
        "Chủ đề cần tìm hiểu",
        "Vai trò, công việc của bạn"
      ],
      "verification": [
        "Đối chiếu khái niệm với nguồn chính thức.",
        "Thông tin có tính thời sự cần kiểm tra nguồn mới.",
        "Hỏi lại chuyên gia những điểm còn mơ hồ."
      ],
      "tags": [
        "tìm hiểu",
        "tổng quan",
        "giải thích",
        "khái niệm",
        "học nhanh"
      ],
      "example": {
        "input": "Vai trò: chuyên viên truyền thông · Chủ đề: dữ liệu mở và quyền riêng tư · Công việc: viết bài nội bộ",
        "output": "Bài khoảng 400 từ: khái niệm qua ví dụ, 5 thuật ngữ, ứng dụng cho việc viết bài, hiểu lầm phổ biến, 5 câu hỏi; phần cần kiểm tra được đánh dấu."
      },
      "added": "2026-11-11T22:40",
      "rank": 76
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
      "id": "dl01",
      "category": "data",
      "title": "Viết công thức Excel từ mô tả",
      "target_audiences": [
        "du-lieu",
        "moi-nhan-su",
        "van-hanh"
      ],
      "goals": [
        "phan-tich"
      ],
      "difficulty": "de",
      "time": "Khoảng 3 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Có công thức Excel hoặc Google Sheets đúng ý mà không cần nhớ cú pháp.",
      "use_cases": [
        "Tính tổng, đếm có điều kiện",
        "Tra cứu dữ liệu giữa hai bảng"
      ],
      "prompt": "Bạn là chuyên gia Excel. Bảng của tôi có các cột: [tên cột và ý nghĩa, ví dụ A: Họ tên, B: Phòng ban, C: Ngày đăng ký]. Dữ liệu bắt đầu từ dòng [số dòng]. Tôi muốn: [mô tả kết quả cần tính]. Phần mềm: [Excel hoặc Google Sheets]. Hãy đưa công thức, giải thích từng phần bằng lời thường, một ví dụ với 3 dòng dữ liệu giả định, và lỗi hay gặp khi dùng công thức này. Nếu có 2 cách, nêu cách đơn giản hơn trước.",
      "required_inputs": [
        "Tên các cột và ý nghĩa",
        "Kết quả cần tính",
        "Phần mềm đang dùng"
      ],
      "verification": [
        "Thử công thức trên vài dòng tính tay được.",
        "Kiểm tra vùng tham chiếu có khóa ($) đúng chưa.",
        "Không dán dữ liệu thật có thông tin cá nhân vào AI."
      ],
      "tags": [
        "Excel",
        "Google Sheets",
        "công thức",
        "COUNTIFS",
        "XLOOKUP",
        "bảng tính"
      ],
      "example": {
        "input": "Cột A: Họ tên, B: Phòng ban, C: Trạng thái tham dự · Muốn đếm số người “Đã tham dự” theo từng phòng ban · Excel",
        "output": "Công thức COUNTIFS kèm giải thích từng phần, ví dụ 3 dòng dữ liệu giả định và 2 lỗi thường gặp."
      },
      "added": "2026-11-11T22:40",
      "rank": 77
    },
    {
      "id": "dl02",
      "category": "data",
      "title": "Đọc và nhận xét biểu đồ",
      "target_audiences": [
        "du-lieu",
        "quan-ly"
      ],
      "goals": [
        "phan-tich"
      ],
      "difficulty": "de",
      "time": "Khoảng 5 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Rút ra nhận xét chính từ biểu đồ, kèm câu hỏi cần kiểm tra thêm.",
      "use_cases": [
        "Chuẩn bị lời bình cho slide báo cáo",
        "Đọc nhanh dashboard trước cuộc họp"
      ],
      "prompt": "Bạn là chuyên viên phân tích dữ liệu. Tôi gửi kèm biểu đồ [tên biểu đồ] thể hiện [nội dung, đơn vị, kỳ dữ liệu]. Hãy: (1) mô tả xu hướng chính trong 2 câu, (2) nêu 3 điểm đáng chú ý kèm con số đọc được từ biểu đồ, (3) chỉ ra điều biểu đồ chưa nói được, (4) đề xuất 3 câu hỏi cần kiểm tra thêm. Phân biệt rõ điều quan sát được và điều suy luận; không đưa nguyên nhân như sự thật.",
      "required_inputs": [
        "Ảnh biểu đồ",
        "Nội dung, đơn vị, kỳ dữ liệu"
      ],
      "verification": [
        "Đối chiếu con số AI đọc với dữ liệu gốc.",
        "Không kết luận nguyên nhân khi chưa có dữ liệu.",
        "Kiểm tra trục bắt đầu từ 0 hay không."
      ],
      "tags": [
        "biểu đồ",
        "chart",
        "nhận xét",
        "dashboard",
        "xu hướng"
      ],
      "example": {
        "input": "Biểu đồ cột số người tham gia đào tạo theo tháng, 12 tháng gần nhất",
        "output": "2 câu xu hướng, 3 điểm đáng chú ý có số đọc từ biểu đồ, điều biểu đồ chưa nói, 3 câu hỏi kiểm tra; suy luận được đánh dấu."
      },
      "added": "2026-11-11T22:40",
      "rank": 78
    },
    {
      "id": "dl03",
      "category": "data",
      "title": "Làm sạch và chuẩn hóa dữ liệu",
      "target_audiences": [
        "du-lieu",
        "van-hanh"
      ],
      "goals": [
        "phan-tich"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Phát hiện lỗi dữ liệu và có các bước chuẩn hóa trước khi phân tích.",
      "use_cases": [
        "Dữ liệu đăng ký nhập tay, nhiều định dạng",
        "Gộp dữ liệu từ nhiều file"
      ],
      "prompt": "Bạn là chuyên viên xử lý dữ liệu. Đây là mẫu 20 dòng dữ liệu đã ẩn danh: [dán dữ liệu]. Các cột: [mô tả cột]. Hãy: (1) liệt kê các loại lỗi phát hiện được (trùng, thiếu, sai định dạng ngày, viết hoa không thống nhất, khoảng trắng thừa…) kèm ví dụ dòng, (2) đề xuất quy tắc chuẩn hóa cho từng cột, (3) các bước làm trong [Excel hoặc Google Sheets] kèm công thức. Không tự sửa giá trị khi không chắc đúng; đánh dấu \"cần kiểm tra\".",
      "required_inputs": [
        "Mẫu dữ liệu đã ẩn danh",
        "Mô tả các cột",
        "Công cụ đang dùng"
      ],
      "verification": [
        "Lưu bản gốc trước khi làm sạch.",
        "Kiểm tra số dòng trước và sau xử lý.",
        "Không dán dữ liệu cá nhân thật vào AI."
      ],
      "tags": [
        "làm sạch dữ liệu",
        "chuẩn hóa",
        "trùng lặp",
        "data cleaning",
        "Excel"
      ],
      "example": {
        "input": "20 dòng mẫu danh sách đăng ký: ngày ghi 3 kiểu, tên phòng ban viết khác nhau, 2 dòng trùng",
        "output": "Danh sách 5–6 loại lỗi kèm dòng ví dụ, quy tắc chuẩn hóa từng cột, các bước làm trong Excel kèm công thức."
      },
      "added": "2026-11-11T22:40",
      "rank": 79
    },
    {
      "id": "dl04",
      "category": "data",
      "title": "Đề xuất chỉ số đo lường (KPI)",
      "target_audiences": [
        "quan-ly",
        "du-lieu",
        "van-hoa"
      ],
      "goals": [
        "phan-tich",
        "ke-hoach"
      ],
      "difficulty": "nang-cao",
      "time": "10–15 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Chọn bộ chỉ số đo được, gắn với mục tiêu, có cách thu thập rõ ràng.",
      "use_cases": [
        "Đo hiệu quả chương trình văn hóa, đào tạo",
        "Xây dashboard theo dõi dự án"
      ],
      "prompt": "Bạn là chuyên gia đo lường hiệu quả. Chương trình: [tên chương trình], mục tiêu: [mục tiêu]. Dữ liệu có thể thu thập: [nguồn dữ liệu sẵn có]. Hãy đề xuất 6–8 chỉ số chia 3 nhóm: đầu vào, hoạt động, kết quả. Mỗi chỉ số gồm: tên, định nghĩa, công thức tính, nguồn dữ liệu, tần suất đo, người cập nhật (để trống). Không đặt giá trị mục tiêu cụ thể; ghi \"cần xác định từ dữ liệu nền\". Cảnh báo chỉ số nào dễ bị làm đẹp số liệu.",
      "required_inputs": [
        "Chương trình và mục tiêu",
        "Nguồn dữ liệu sẵn có"
      ],
      "verification": [
        "Mỗi chỉ số thu thập được với nguồn lực hiện có.",
        "Thống nhất định nghĩa với các bên liên quan.",
        "Mục tiêu đặt dựa trên dữ liệu nền thật."
      ],
      "tags": [
        "KPI",
        "chỉ số",
        "đo lường",
        "hiệu quả",
        "OKR",
        "metrics"
      ],
      "example": {
        "input": "Chương trình đại sứ văn hóa · Mục tiêu: lan tỏa giá trị cốt lõi · Dữ liệu: danh sách tham gia, khảo sát, số bài đăng",
        "output": "7 chỉ số chia 3 nhóm, mỗi chỉ số có định nghĩa, công thức, nguồn, tần suất; không có giá trị mục tiêu; 2 cảnh báo về chỉ số dễ làm đẹp."
      },
      "added": "2026-11-11T22:40",
      "rank": 80
    },
    {
      "id": "dl05",
      "category": "data",
      "title": "Gợi ý biểu đồ phù hợp dữ liệu",
      "target_audiences": [
        "du-lieu",
        "truyen-thong",
        "quan-ly"
      ],
      "goals": [
        "phan-tich",
        "hinh-anh"
      ],
      "difficulty": "de",
      "time": "Khoảng 5 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Chọn đúng loại biểu đồ cho thông điệp muốn nói và cách trình bày dễ đọc.",
      "use_cases": [
        "Làm slide báo cáo có số liệu",
        "Thiết kế dashboard đơn giản"
      ],
      "prompt": "Bạn là chuyên gia trực quan hóa dữ liệu. Dữ liệu của tôi: [mô tả các cột, số dòng, kỳ dữ liệu]. Thông điệp muốn người xem nắm: [thông điệp]. Người xem: [đối tượng], xem trên [slide, báo cáo in, màn hình điện thoại]. Hãy đề xuất 2 loại biểu đồ phù hợp nhất, giải thích vì sao, loại biểu đồ nên tránh, cách đặt tiêu đề dạng kết luận, màu sắc, nhãn số liệu. Kèm các bước tạo biểu đồ trong [Excel, Google Sheets, Canva].",
      "required_inputs": [
        "Mô tả dữ liệu",
        "Thông điệp và nơi trình bày"
      ],
      "verification": [
        "Biểu đồ không bóp méo tỷ lệ.",
        "Tiêu đề khớp với dữ liệu thực.",
        "Thử xem trên đúng thiết bị trình chiếu."
      ],
      "tags": [
        "biểu đồ",
        "trực quan hóa",
        "data visualization",
        "chart",
        "slide"
      ],
      "example": {
        "input": "Số người tham gia 4 hoạt động văn hóa qua 3 quý · Thông điệp: hội thao tăng mạnh nhất · Slide cho lãnh đạo · Excel",
        "output": "2 loại biểu đồ đề xuất kèm lý do, 1 loại nên tránh, tiêu đề mẫu dạng kết luận, gợi ý màu và các bước làm trong Excel."
      },
      "added": "2026-11-11T22:40",
      "rank": 81
    },
    {
      "id": "dl06",
      "category": "data",
      "title": "Phân tích kết quả khảo sát định lượng",
      "target_audiences": [
        "du-lieu",
        "nhan-su",
        "van-hoa"
      ],
      "goals": [
        "phan-tich"
      ],
      "difficulty": "trung-binh",
      "time": "10–15 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Rút ra phát hiện chính từ bảng tổng hợp khảo sát, kèm giới hạn của dữ liệu.",
      "use_cases": [
        "Báo cáo kết quả khảo sát hài lòng",
        "So sánh kết quả giữa các nhóm"
      ],
      "prompt": "Bạn là chuyên viên phân tích khảo sát. Đây là bảng tổng hợp kết quả khảo sát [tên khảo sát] với [số người trả lời] người trả lời trên [tổng số được mời]: [dán bảng tổng hợp, không có dữ liệu cá nhân]. Hãy: (1) nêu 5 phát hiện chính kèm con số, (2) so sánh giữa các nhóm [nhóm cần so sánh] nếu có, (3) chỉ ra giới hạn dữ liệu (tỷ lệ phản hồi, cỡ mẫu nhỏ), (4) đề xuất 3 hành động. Tính toán phải trình bày cách tính; không suy ra quan hệ nhân quả.",
      "required_inputs": [
        "Bảng tổng hợp kết quả (không có dữ liệu cá nhân)",
        "Số người trả lời và số được mời"
      ],
      "verification": [
        "Tính lại 1–2 tỷ lệ để kiểm tra.",
        "Nhóm có ít người trả lời cần thận trọng khi kết luận.",
        "Không suy ra danh tính người trả lời từ nhóm nhỏ."
      ],
      "tags": [
        "khảo sát",
        "phân tích",
        "tỷ lệ",
        "hài lòng",
        "survey"
      ],
      "example": {
        "input": "Bảng tổng hợp khảo sát sau workshop: 96/120 người trả lời, 6 câu thang 1–5, chia theo khối",
        "output": "5 phát hiện có con số và cách tính, so sánh giữa các khối, giới hạn dữ liệu, 3 hành động đề xuất."
      },
      "added": "2026-11-11T22:40",
      "rank": 82
    },
    {
      "id": "dl07",
      "category": "data",
      "title": "Báo cáo tuần, tháng từ số liệu",
      "target_audiences": [
        "quan-ly",
        "du-lieu",
        "van-hanh"
      ],
      "goals": [
        "viet",
        "phan-tich"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Chuyển bảng số liệu thành báo cáo ngắn có nhận định, so sánh kỳ trước và việc cần làm.",
      "use_cases": [
        "Báo cáo định kỳ cho quản lý",
        "Tổng hợp số liệu hoạt động của nhóm"
      ],
      "prompt": "Bạn là chuyên viên báo cáo. Đây là số liệu [kỳ báo cáo] và kỳ trước của [đơn vị, hoạt động]: [dán bảng số liệu]. Người đọc: [người nhận]. Hãy viết báo cáo tối đa 250 từ gồm: 3 điểm chính đầu tiên, bảng so sánh kỳ này và kỳ trước có cột chênh lệch, giải thích các thay đổi lớn (nếu không rõ nguyên nhân ghi \"cần làm rõ\"), việc cần làm kỳ tới. Tính chênh lệch chính xác, ghi rõ đơn vị.",
      "required_inputs": [
        "Số liệu kỳ này và kỳ trước",
        "Người đọc báo cáo"
      ],
      "verification": [
        "Kiểm tra lại các phép tính chênh lệch.",
        "Nguyên nhân thay đổi được người phụ trách xác nhận.",
        "Số liệu nội bộ chỉ dùng trên công cụ được phép."
      ],
      "tags": [
        "báo cáo tuần",
        "báo cáo tháng",
        "số liệu",
        "so sánh kỳ",
        "tổng hợp"
      ],
      "example": {
        "input": "Số bài đăng, lượt tương tác, số người tham gia hoạt động tháng 10 và tháng 9 · Người đọc: trưởng phòng",
        "output": "Báo cáo dưới 250 từ: 3 điểm chính, bảng so sánh có chênh lệch và đơn vị, giải thích thay đổi lớn, việc cần làm tháng sau."
      },
      "added": "2026-11-11T22:40",
      "rank": 83
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
      "id": "dt01",
      "category": "learning",
      "title": "Mô tả công việc (JD)",
      "target_audiences": [
        "nhan-su",
        "quan-ly"
      ],
      "goals": [
        "viet"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Soạn bản mô tả công việc rõ trách nhiệm, yêu cầu, tránh ngôn từ phân biệt.",
      "use_cases": [
        "Tuyển dụng vị trí mới",
        "Cập nhật mô tả công việc hiện có"
      ],
      "prompt": "Bạn là chuyên viên tuyển dụng. Hãy soạn mô tả công việc cho vị trí [tên vị trí] thuộc [phòng ban]. Thông tin: báo cáo cho [chức danh quản lý], nhiệm vụ chính [liệt kê], yêu cầu bắt buộc [kinh nghiệm, kỹ năng], yêu cầu ưu tiên [nếu có], hình thức làm việc [toàn thời gian, địa điểm]. Cấu trúc: giới thiệu ngắn vị trí, trách nhiệm chính (5–7 gạch đầu dòng bắt đầu bằng động từ), yêu cầu bắt buộc, yêu cầu ưu tiên, điều ứng viên nhận được ([quyền lợi đã được duyệt]). Không dùng ngôn từ phân biệt tuổi, giới tính, ngoại hình; không thêm mức lương hay quyền lợi chưa được cung cấp.",
      "required_inputs": [
        "Thông tin vị trí, nhiệm vụ, yêu cầu",
        "Quyền lợi đã được duyệt"
      ],
      "verification": [
        "Bộ phận nhân sự và quản lý trực tiếp duyệt.",
        "Yêu cầu bắt buộc thật sự cần cho công việc.",
        "Không có ngôn từ phân biệt đối xử."
      ],
      "tags": [
        "JD",
        "mô tả công việc",
        "tuyển dụng",
        "job description",
        "vị trí"
      ],
      "example": {
        "input": "Vị trí: chuyên viên truyền thông nội bộ · Báo cáo cho trưởng phòng · 6 nhiệm vụ · Yêu cầu: 2 năm kinh nghiệm viết",
        "output": "JD gồm giới thiệu 2 câu, 6 trách nhiệm bắt đầu bằng động từ, yêu cầu bắt buộc và ưu tiên tách riêng, quyền lợi chỉ gồm mục đã cho."
      },
      "added": "2026-11-11T22:40",
      "rank": 84
    },
    {
      "id": "dt02",
      "category": "learning",
      "title": "Bộ câu hỏi phỏng vấn theo năng lực",
      "target_audiences": [
        "nhan-su",
        "quan-ly"
      ],
      "goals": [
        "dao-tao",
        "danh-gia"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Có câu hỏi hành vi theo năng lực và tiêu chí chấm để phỏng vấn công bằng.",
      "use_cases": [
        "Phỏng vấn tuyển dụng",
        "Đánh giá ứng viên nội bộ"
      ],
      "prompt": "Bạn là chuyên gia tuyển dụng. Vị trí: [tên vị trí]. Năng lực cần đánh giá: [3–5 năng lực]. Hãy soạn cho mỗi năng lực 2 câu hỏi hành vi dạng \"Hãy kể về một lần…\", kèm câu hỏi đào sâu theo cấu trúc Tình huống – Nhiệm vụ – Hành động – Kết quả, và thang chấm 1–4 có mô tả câu trả lời ở mức thấp và mức cao. Không hỏi về đời tư, tình trạng hôn nhân, kế hoạch sinh con, tôn giáo.",
      "required_inputs": [
        "Vị trí tuyển dụng",
        "Năng lực cần đánh giá"
      ],
      "verification": [
        "Người phỏng vấn thống nhất cách chấm trước.",
        "Câu hỏi tuân thủ quy định tuyển dụng của đơn vị.",
        "Ghi chép phỏng vấn lưu đúng quy định bảo mật."
      ],
      "tags": [
        "phỏng vấn",
        "câu hỏi",
        "năng lực",
        "STAR",
        "tuyển dụng"
      ],
      "example": {
        "input": "Vị trí: trưởng nhóm sự kiện · Năng lực: lập kế hoạch, xử lý tình huống, làm việc nhóm",
        "output": "6 câu hỏi hành vi, mỗi câu có câu hỏi đào sâu theo STAR và thang chấm 1–4 mô tả mức thấp, mức cao."
      },
      "added": "2026-11-11T22:40",
      "rank": 85
    },
    {
      "id": "dt03",
      "category": "learning",
      "title": "Thư chào đón nhân viên mới",
      "target_audiences": [
        "nhan-su",
        "quan-ly",
        "van-hoa"
      ],
      "goals": [
        "viet"
      ],
      "difficulty": "de",
      "time": "Khoảng 5 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Gửi lời chào đón ấm áp kèm thông tin ngày đầu đi làm rõ ràng.",
      "use_cases": [
        "Email chào đón trước ngày đầu tiên",
        "Tin nhắn giới thiệu thành viên mới với nhóm"
      ],
      "prompt": "Bạn là trưởng nhóm thân thiện. Hãy viết email chào đón [tên nhân viên mới] vào vị trí [vị trí] tại [phòng ban], bắt đầu ngày [ngày]. Thông tin ngày đầu: [giờ, địa điểm, người đón, giấy tờ cần mang]. Cấu trúc: lời chào, vài câu về nhóm và công việc sắp tới, khối thông tin ngày đầu dạng gạch đầu dòng, người liên hệ khi cần. Tối đa 180 từ, giọng ấm áp. Kèm một tin nhắn 2–3 câu giới thiệu người mới với nhóm.",
      "required_inputs": [
        "Tên, vị trí, ngày bắt đầu",
        "Thông tin ngày đầu đi làm"
      ],
      "verification": [
        "Giờ, địa điểm, người đón chính xác.",
        "Không tiết lộ thông tin cá nhân của người mới khi chưa được đồng ý."
      ],
      "tags": [
        "onboarding",
        "chào đón",
        "nhân viên mới",
        "email",
        "hội nhập"
      ],
      "example": {
        "input": "Nhân viên mới: chuyên viên dữ liệu · Bắt đầu thứ Hai · 8h30 tại tầng 5, người đón: trưởng nhóm",
        "output": "Email dưới 180 từ có khối thông tin ngày đầu 4 dòng, kèm tin nhắn 2–3 câu giới thiệu với nhóm."
      },
      "added": "2026-11-11T22:40",
      "rank": 86
    },
    {
      "id": "dt04",
      "category": "learning",
      "title": "Góp ý cho nhân viên theo mô hình SBI",
      "target_audiences": [
        "quan-ly",
        "nhan-su"
      ],
      "goals": [
        "viet",
        "danh-gia"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 5 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Copilot"
      ],
      "purpose": "Chuẩn bị lời góp ý cụ thể, tập trung hành vi, giữ được quan hệ.",
      "use_cases": [
        "Chuẩn bị buổi 1-1 góp ý",
        "Ghi nhận và khen ngợi đúng cách"
      ],
      "prompt": "Bạn là huấn luyện viên quản lý. Tôi cần góp ý cho một thành viên trong nhóm về [tình huống, mô tả khách quan, không nêu tên]. Mục tiêu: [điều muốn thay đổi hoặc ghi nhận]. Hãy soạn lời góp ý theo mô hình Tình huống – Hành vi – Tác động, kèm câu hỏi mở để nghe người đó chia sẻ và đề xuất bước tiếp theo cùng thống nhất. Đưa 2 phiên bản: góp ý cải thiện và ghi nhận điểm tốt nếu có. Tránh từ ngữ phán xét tính cách như \"luôn luôn\", \"không bao giờ\".",
      "required_inputs": [
        "Mô tả tình huống khách quan (không nêu tên)",
        "Mục tiêu của buổi góp ý"
      ],
      "verification": [
        "Lời góp ý dựa trên quan sát thật, không suy diễn.",
        "Nói trực tiếp, riêng tư; không gửi qua nhóm chat.",
        "Không đưa thông tin nhân sự định danh vào công cụ AI."
      ],
      "tags": [
        "góp ý",
        "feedback",
        "SBI",
        "1-1",
        "quản lý nhân sự",
        "coaching"
      ],
      "example": {
        "input": "Tình huống: hai lần gần đây báo cáo tuần nộp trễ 1 ngày khiến nhóm phải chờ tổng hợp · Mục tiêu: nộp đúng hạn",
        "output": "Lời góp ý 3 phần Tình huống – Hành vi – Tác động, 2 câu hỏi mở, bước tiếp theo; không có từ “luôn luôn”, “không bao giờ”."
      },
      "added": "2026-11-11T22:40",
      "rank": 87
    },
    {
      "id": "dt05",
      "category": "learning",
      "title": "Bài tập tình huống cho buổi đào tạo",
      "target_audiences": [
        "nhan-su",
        "quan-ly"
      ],
      "goals": [
        "dao-tao"
      ],
      "difficulty": "trung-binh",
      "time": "10–15 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Tạo tình huống thực tế để học viên thảo luận và vận dụng kiến thức.",
      "use_cases": [
        "Đào tạo kỹ năng mềm, quy trình",
        "Hoạt động nhóm trong workshop"
      ],
      "prompt": "Bạn là giảng viên thiết kế bài tập. Chủ đề đào tạo: [chủ đề]. Học viên: [đối tượng, kinh nghiệm]. Kiến thức cần vận dụng: [các ý chính]. Hãy soạn [số] tình huống, mỗi tình huống gồm: bối cảnh 4–6 câu gần với công việc thật (nhân vật dùng tên giả), câu hỏi thảo luận, gợi ý đáp án cho giảng viên, lỗi học viên hay mắc. Mức độ tăng dần. Không dùng tên người, đơn vị hoặc sự việc có thật.",
      "required_inputs": [
        "Chủ đề và kiến thức cần vận dụng",
        "Học viên, số tình huống"
      ],
      "verification": [
        "Tình huống không giống sự việc có thật để tránh hiểu lầm.",
        "Giảng viên thử giải trước.",
        "Gợi ý đáp án khớp quy định hiện hành."
      ],
      "tags": [
        "tình huống",
        "case study",
        "bài tập",
        "đào tạo",
        "thảo luận nhóm"
      ],
      "example": {
        "input": "Chủ đề: xử lý khiếu nại khách hàng · Học viên: giao dịch viên mới · 3 tình huống",
        "output": "3 tình huống tăng dần độ khó, mỗi tình huống có bối cảnh, câu hỏi thảo luận, gợi ý đáp án và lỗi thường gặp."
      },
      "added": "2026-11-11T22:40",
      "rank": 88
    },
    {
      "id": "dt06",
      "category": "learning",
      "title": "Kế hoạch phát triển cá nhân (IDP)",
      "target_audiences": [
        "moi-nhan-su",
        "quan-ly",
        "nhan-su"
      ],
      "goals": [
        "ke-hoach",
        "dao-tao"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Biến mục tiêu nghề nghiệp thành kế hoạch học tập 3–6 tháng có hành động cụ thể.",
      "use_cases": [
        "Trao đổi phát triển nghề nghiệp với quản lý",
        "Tự lập lộ trình học kỹ năng mới"
      ],
      "prompt": "Bạn là cố vấn phát triển nghề nghiệp. Vị trí hiện tại: [vị trí]. Mục tiêu trong [thời gian]: [mục tiêu]. Điểm mạnh: [điểm mạnh]. Kỹ năng cần phát triển: [kỹ năng]. Thời gian có thể dành: [số giờ mỗi tuần]. Hãy lập kế hoạch theo mô hình 70-20-10 (học qua công việc, học từ người khác, học chính thức), dạng bảng: Kỹ năng | Hoạt động | Thuộc nhóm | Thời hạn | Dấu hiệu hoàn thành | Hỗ trợ cần có. Hoạt động phải làm được trong thời gian đã nêu.",
      "required_inputs": [
        "Vị trí, mục tiêu, thời gian",
        "Điểm mạnh, kỹ năng cần phát triển"
      ],
      "verification": [
        "Thống nhất kế hoạch với quản lý trực tiếp.",
        "Khóa học đề xuất có trong danh mục đào tạo của đơn vị.",
        "Xem lại tiến độ mỗi tháng."
      ],
      "tags": [
        "IDP",
        "phát triển cá nhân",
        "lộ trình học",
        "70-20-10",
        "nghề nghiệp"
      ],
      "example": {
        "input": "Chuyên viên truyền thông muốn lên trưởng nhóm trong 6 tháng · Cần phát triển: quản lý dự án, giao việc · 3 giờ/tuần",
        "output": "Bảng 8–10 hoạt động chia 3 nhóm 70-20-10, có thời hạn, dấu hiệu hoàn thành và hỗ trợ cần có."
      },
      "added": "2026-11-11T22:40",
      "rank": 89
    },
    {
      "id": "dt07",
      "category": "learning",
      "title": "Bài giảng vi mô 5 phút",
      "target_audiences": [
        "nhan-su",
        "moi-nhan-su"
      ],
      "goals": [
        "dao-tao",
        "viet"
      ],
      "difficulty": "de",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot",
        "NotebookLM"
      ],
      "purpose": "Biến một chủ đề thành bài học ngắn đọc hoặc nghe trong 5 phút, kèm câu hỏi kiểm tra.",
      "use_cases": [
        "Chuỗi bài học gửi email hằng tuần",
        "Kiến thức nhanh trước giờ làm việc"
      ],
      "prompt": "Bạn là chuyên gia thiết kế bài học vi mô. Hãy soạn bài học 5 phút về [chủ đề] cho [đối tượng], dựa trên tài liệu [tài liệu nguồn nếu có]. Cấu trúc: tiêu đề hấp dẫn, 1 câu \"Sau bài này bạn sẽ…\", 3 ý chính mỗi ý có ví dụ gần với công việc, 1 việc áp dụng ngay hôm nay, 3 câu hỏi trắc nghiệm kiểm tra kèm đáp án. Tổng không quá 400 từ. Chỉ dùng kiến thức có trong tài liệu nguồn nếu được cung cấp.",
      "required_inputs": [
        "Chủ đề và đối tượng",
        "Tài liệu nguồn nếu có"
      ],
      "verification": [
        "Nội dung khớp tài liệu nguồn và quy định hiện hành.",
        "Đáp án trắc nghiệm chỉ có một phương án đúng.",
        "Đọc thử để canh thời gian 5 phút."
      ],
      "tags": [
        "microlearning",
        "bài học ngắn",
        "đào tạo",
        "5 phút",
        "kiến thức"
      ],
      "example": {
        "input": "Chủ đề: nhận diện email lừa đảo · Đối tượng: mọi nhân viên · Nguồn: hướng dẫn an toàn thông tin nội bộ",
        "output": "Bài dưới 400 từ có mục tiêu, 3 ý chính có ví dụ, 1 việc áp dụng ngay và 3 câu trắc nghiệm có đáp án."
      },
      "added": "2026-11-11T22:40",
      "rank": 90
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
      "id": "kd01",
      "category": "sales",
      "title": "Kịch bản gọi điện chăm sóc khách hàng",
      "target_audiences": [
        "kinh-doanh"
      ],
      "goals": [
        "viet",
        "dao-tao"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Có kịch bản gọi điện tự nhiên, có nhánh xử lý theo phản hồi của khách.",
      "use_cases": [
        "Gọi chăm sóc định kỳ, nhắc lịch",
        "Giới thiệu dịch vụ đã công bố"
      ],
      "prompt": "Bạn là chuyên gia chăm sóc khách hàng. Mục đích cuộc gọi: [mục đích]. Nhóm khách hàng: [mô tả chung, không có thông tin cá nhân]. Thông tin dịch vụ đã công bố: [dán thông tin chính thức]. Hãy viết kịch bản gồm: lời chào và xác nhận thời điểm thuận tiện, lý do gọi, 3 câu hỏi tìm hiểu nhu cầu, phần giới thiệu ngắn, xử lý 4 phản hồi thường gặp (bận, không quan tâm, hỏi phí, đã dùng dịch vụ khác), kết thúc cuộc gọi. Câu ngắn, tự nhiên khi nói. Không đưa thông tin phí, lãi suất, ưu đãi ngoài tài liệu đã cho.",
      "required_inputs": [
        "Mục đích cuộc gọi, nhóm khách hàng",
        "Thông tin dịch vụ chính thức"
      ],
      "verification": [
        "Bộ phận sản phẩm, tuân thủ duyệt kịch bản.",
        "Mọi thông tin về phí, ưu đãi khớp tài liệu chính thức.",
        "Tập nói thử để câu chữ tự nhiên."
      ],
      "tags": [
        "kịch bản gọi điện",
        "telesales",
        "chăm sóc khách hàng",
        "cuộc gọi",
        "xử lý từ chối"
      ],
      "example": {
        "input": "Mục đích: nhắc khách cập nhật ứng dụng phiên bản mới · Nhóm: khách dùng ứng dụng trên 1 năm · Thông tin: thông báo chính thức",
        "output": "Kịch bản 6 phần, có 4 nhánh xử lý phản hồi, câu ngắn dễ nói; không có thông tin nào ngoài thông báo chính thức."
      },
      "added": "2026-11-11T22:40",
      "rank": 91
    },
    {
      "id": "kd02",
      "category": "sales",
      "title": "Email giới thiệu sản phẩm cho khách hàng doanh nghiệp",
      "target_audiences": [
        "kinh-doanh",
        "truyen-thong"
      ],
      "goals": [
        "viet"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Viết email giới thiệu ngắn, tập trung vào nhu cầu khách hàng, có lời mời hành động rõ.",
      "use_cases": [
        "Tiếp cận khách hàng doanh nghiệp mới",
        "Giới thiệu giải pháp sau buổi gặp"
      ],
      "prompt": "Bạn là chuyên viên quan hệ khách hàng doanh nghiệp. Khách hàng: [ngành nghề, quy mô, vấn đề họ đang gặp]. Sản phẩm hoặc giải pháp: [thông tin chính thức đã công bố]. Mục tiêu email: [hẹn gặp, gửi tài liệu, gọi tư vấn]. Hãy viết email dưới 150 từ: tiêu đề cá nhân hóa, câu mở nói về vấn đề của khách, 2–3 lợi ích phù hợp nhất, lời mời hành động cụ thể. Viết 2 phiên bản tiêu đề. Không đưa số liệu, cam kết hiệu quả hay so sánh với đối thủ khi chưa có căn cứ.",
      "required_inputs": [
        "Thông tin khách hàng (không có dữ liệu mật)",
        "Thông tin sản phẩm chính thức",
        "Mục tiêu email"
      ],
      "verification": [
        "Lợi ích và điều kiện khớp tài liệu sản phẩm.",
        "Tuân thủ quy định gửi email tiếp thị.",
        "Quản lý duyệt với khách hàng quan trọng."
      ],
      "tags": [
        "email bán hàng",
        "B2B",
        "giới thiệu sản phẩm",
        "khách hàng doanh nghiệp",
        "outreach"
      ],
      "example": {
        "input": "Khách: công ty phân phối 200 nhân viên, muốn trả lương nhanh · Giải pháp: dịch vụ chi lương đã công bố · Mục tiêu: hẹn gặp",
        "output": "Email dưới 150 từ, câu mở nói về nhu cầu trả lương, 3 lợi ích từ tài liệu, lời mời hẹn gặp; 2 tiêu đề gợi ý."
      },
      "added": "2026-11-11T22:40",
      "rank": 92
    },
    {
      "id": "kd03",
      "category": "sales",
      "title": "Xử lý từ chối của khách hàng",
      "target_audiences": [
        "kinh-doanh"
      ],
      "goals": [
        "dao-tao",
        "phan-tich"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Chuẩn bị cách trả lời các lời từ chối thường gặp, lắng nghe trước khi thuyết phục.",
      "use_cases": [
        "Luyện tập trước buổi gặp khách",
        "Xây bộ câu trả lời chuẩn cho nhóm"
      ],
      "prompt": "Bạn là huấn luyện viên bán hàng. Sản phẩm: [thông tin đã công bố]. Khách hàng mục tiêu: [mô tả]. Các lời từ chối thường gặp: [liệt kê, ví dụ \"phí cao\", \"đang dùng bên khác\"]. Với mỗi lời từ chối, hãy đưa: câu thể hiện đã hiểu, 1–2 câu hỏi để hiểu lý do thật, cách trả lời dựa trên lợi ích phù hợp, khi nào nên dừng và hẹn lại. Trình bày dạng bảng. Không gây áp lực, không nói xấu đối thủ, không hứa ngoài chính sách.",
      "required_inputs": [
        "Thông tin sản phẩm chính thức",
        "Danh sách lời từ chối thường gặp"
      ],
      "verification": [
        "Câu trả lời khớp chính sách hiện hành.",
        "Nhóm cùng luyện đóng vai trước khi dùng.",
        "Tôn trọng quyết định của khách."
      ],
      "tags": [
        "xử lý từ chối",
        "objection handling",
        "bán hàng",
        "thuyết phục",
        "kỹ năng"
      ],
      "example": {
        "input": "Sản phẩm: gói tài khoản doanh nghiệp đã công bố · 5 lời từ chối thường gặp",
        "output": "Bảng 5 dòng, mỗi lời từ chối có câu đồng cảm, câu hỏi tìm lý do, cách trả lời và thời điểm nên dừng."
      },
      "added": "2026-11-11T22:40",
      "rank": 93
    },
    {
      "id": "kd04",
      "category": "sales",
      "title": "Trả lời đánh giá, bình luận của khách hàng",
      "target_audiences": [
        "kinh-doanh",
        "truyen-thong"
      ],
      "goals": [
        "viet"
      ],
      "difficulty": "de",
      "time": "Khoảng 5 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Phản hồi đánh giá công khai một cách chuyên nghiệp, kể cả đánh giá tiêu cực.",
      "use_cases": [
        "Trả lời đánh giá trên ứng dụng, trang mạng xã hội",
        "Phản hồi bình luận phàn nàn công khai"
      ],
      "prompt": "Bạn là chuyên viên chăm sóc khách hàng trên kênh công khai. Đây là đánh giá của khách (đã ẩn tên): [dán đánh giá]. Hướng xử lý đã được xác nhận: [hướng xử lý hoặc \"chưa có\"]. Hãy viết phản hồi công khai dưới 80 từ: cảm ơn, ghi nhận cụ thể điều khách nói, nêu bước tiếp theo, mời khách liên hệ qua [kênh riêng] để hỗ trợ. Không hỏi hay nhắc thông tin cá nhân, số tài khoản trên kênh công khai; không tranh cãi; không hứa ngoài hướng xử lý đã xác nhận.",
      "required_inputs": [
        "Nội dung đánh giá (đã ẩn tên)",
        "Hướng xử lý đã xác nhận",
        "Kênh liên hệ riêng"
      ],
      "verification": [
        "Không có thông tin cá nhân của khách trong phản hồi.",
        "Người phụ trách kênh duyệt với đánh giá nhạy cảm.",
        "Theo dõi để xử lý thật, không chỉ trả lời."
      ],
      "tags": [
        "đánh giá",
        "review",
        "bình luận",
        "phàn nàn",
        "mạng xã hội",
        "chăm sóc khách hàng"
      ],
      "example": {
        "input": "Đánh giá 2 sao: ứng dụng báo lỗi khi chuyển khoản buổi tối · Hướng xử lý: đã chuyển bộ phận kỹ thuật · Kênh riêng: tổng đài",
        "output": "Phản hồi dưới 80 từ: cảm ơn, ghi nhận lỗi buổi tối, nêu đã chuyển bộ phận kỹ thuật, mời liên hệ tổng đài; không hỏi số tài khoản."
      },
      "added": "2026-11-11T22:40",
      "rank": 94
    },
    {
      "id": "kd05",
      "category": "sales",
      "title": "Chân dung khách hàng mục tiêu",
      "target_audiences": [
        "kinh-doanh",
        "truyen-thong",
        "thiet-ke"
      ],
      "goals": [
        "phan-tich"
      ],
      "difficulty": "trung-binh",
      "time": "10–15 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Xây chân dung khách hàng từ dữ liệu, phân biệt rõ dữ kiện và giả định.",
      "use_cases": [
        "Chuẩn bị chiến dịch, sản phẩm mới",
        "Thống nhất hiểu biết về khách hàng trong nhóm"
      ],
      "prompt": "Bạn là chuyên gia nghiên cứu khách hàng. Dữ liệu tôi có về nhóm khách hàng [tên nhóm]: [dán dữ liệu tổng hợp, kết quả khảo sát, ghi chú phỏng vấn đã ẩn danh]. Hãy xây 2–3 chân dung khách hàng, mỗi chân dung gồm: tên gọi đại diện, đặc điểm chung, mục tiêu, khó khăn, kênh tiếp cận, điều họ cần nghe từ chúng ta, câu nói đại diện. Đánh dấu rõ từng ý là [Dữ kiện] hay [Giả định]. Không dùng thông tin của bất kỳ khách hàng cụ thể nào.",
      "required_inputs": [
        "Dữ liệu tổng hợp, khảo sát đã ẩn danh",
        "Nhóm khách hàng cần phân tích"
      ],
      "verification": [
        "Kiểm chứng các ý [Giả định] bằng dữ liệu hoặc phỏng vấn thêm.",
        "Không dựa chân dung vào định kiến.",
        "Cập nhật chân dung khi có dữ liệu mới."
      ],
      "tags": [
        "persona",
        "chân dung khách hàng",
        "khách hàng mục tiêu",
        "phân khúc",
        "insight"
      ],
      "example": {
        "input": "Dữ liệu tổng hợp nhóm khách hàng hộ kinh doanh nhỏ: kết quả khảo sát 300 người, 10 ghi chú phỏng vấn",
        "output": "2–3 chân dung có đủ 7 mục, từng ý đánh dấu [Dữ kiện] hoặc [Giả định]."
      },
      "added": "2026-11-11T22:40",
      "rank": 95
    },
    {
      "id": "kd06",
      "category": "sales",
      "title": "Tóm tắt cuộc gặp khách hàng",
      "target_audiences": [
        "kinh-doanh",
        "quan-ly"
      ],
      "goals": [
        "phan-tich",
        "viet"
      ],
      "difficulty": "de",
      "time": "Khoảng 5 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Ghi lại nhanh nội dung buổi gặp, cam kết hai bên và việc cần theo dõi.",
      "use_cases": [
        "Sau cuộc gặp, cuộc gọi với khách hàng",
        "Cập nhật thông tin cho đồng nghiệp tiếp quản"
      ],
      "prompt": "Bạn là trợ lý kinh doanh. Đây là ghi chú cuộc gặp với khách hàng [mã hoặc tên viết tắt, không dùng thông tin định danh nhạy cảm]: [dán ghi chú]. Hãy tóm tắt: mục đích buổi gặp, nhu cầu khách nêu ra, câu hỏi khách còn chờ trả lời, cam kết của mỗi bên, bảng việc cần làm: Việc | Người phụ trách | Hạn. Kèm email cảm ơn và xác nhận nội dung gửi khách dưới 120 từ. Chỉ dùng thông tin trong ghi chú.",
      "required_inputs": [
        "Ghi chú cuộc gặp (không có dữ liệu nhạy cảm)"
      ],
      "verification": [
        "Cam kết ghi đúng như đã trao đổi.",
        "Không lưu thông tin khách hàng trên công cụ không được phép.",
        "Cập nhật vào hệ thống quản lý khách hàng của đơn vị."
      ],
      "tags": [
        "ghi chú cuộc gặp",
        "meeting notes",
        "khách hàng",
        "follow-up",
        "email cảm ơn"
      ],
      "example": {
        "input": "Ghi chú buổi gặp khách doanh nghiệp KH-07 về nhu cầu thu hộ: 8 ý gạch đầu dòng",
        "output": "Tóm tắt 4 mục, bảng 3–4 việc cần làm, email xác nhận dưới 120 từ chỉ dùng thông tin trong ghi chú."
      },
      "added": "2026-11-11T22:40",
      "rank": 96
    },
    {
      "id": "kd07",
      "category": "sales",
      "title": "Bộ câu trả lời chuẩn cho tổng đài, chat",
      "target_audiences": [
        "kinh-doanh"
      ],
      "goals": [
        "viet",
        "dao-tao"
      ],
      "difficulty": "trung-binh",
      "time": "10–15 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "NotebookLM"
      ],
      "purpose": "Chuẩn hóa câu trả lời cho các câu hỏi lặp lại, nhất quán giữa các nhân viên.",
      "use_cases": [
        "Xây thư viện câu trả lời mẫu cho chat",
        "Đào tạo nhân viên tổng đài mới"
      ],
      "prompt": "Bạn là trưởng nhóm chăm sóc khách hàng. Dựa trên tài liệu chính thức [tên tài liệu], hãy soạn câu trả lời mẫu cho các câu hỏi sau: [danh sách câu hỏi thường gặp]. Mỗi câu gồm: phiên bản chat (dưới 60 chữ), phiên bản nói qua điện thoại, thông tin cần hỏi lại khách nếu chưa đủ, trường hợp phải chuyển cho bộ phận khác. Giọng thân thiện, xưng hô [cách xưng hô]. Câu hỏi nào tài liệu không trả lời được ghi \"Cần bộ phận phụ trách xác nhận\".",
      "required_inputs": [
        "Tài liệu chính thức về sản phẩm, quy trình",
        "Danh sách câu hỏi thường gặp",
        "Quy định xưng hô"
      ],
      "verification": [
        "Bộ phận sản phẩm, tuân thủ duyệt từng câu.",
        "Cập nhật khi chính sách thay đổi.",
        "Không hướng dẫn khách cung cấp mã OTP, mật khẩu."
      ],
      "tags": [
        "câu trả lời mẫu",
        "tổng đài",
        "chatbot",
        "FAQ",
        "chăm sóc khách hàng"
      ],
      "example": {
        "input": "Tài liệu: hướng dẫn khôi phục mật khẩu ứng dụng · 6 câu hỏi thường gặp · Xưng hô: “anh/chị” – “em”",
        "output": "6 mục, mỗi mục có bản chat dưới 60 chữ, bản nói, thông tin cần hỏi lại và khi nào chuyển bộ phận khác."
      },
      "added": "2026-11-11T22:40",
      "rank": 97
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
      "id": "da01",
      "category": "pm",
      "title": "Lập kế hoạch dự án và các mốc",
      "target_audiences": [
        "van-hanh",
        "quan-ly",
        "van-hoa"
      ],
      "goals": [
        "ke-hoach"
      ],
      "difficulty": "trung-binh",
      "time": "10–15 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Chia dự án thành giai đoạn, việc chính và mốc kiểm soát rõ ràng.",
      "use_cases": [
        "Khởi động dự án, sự kiện lớn",
        "Trình bày kế hoạch cho lãnh đạo"
      ],
      "prompt": "Bạn là quản lý dự án có kinh nghiệm. Dự án: [tên, mục tiêu]. Thời gian: từ [ngày bắt đầu] đến [ngày kết thúc]. Nguồn lực: [nhân sự, vai trò]. Ràng buộc: [ngân sách, mốc cố định]. Hãy lập kế hoạch gồm: các giai đoạn, việc chính trong mỗi giai đoạn, mốc kiểm soát (milestone) có tiêu chí hoàn thành, việc phụ thuộc lẫn nhau. Trình bày bảng: Giai đoạn | Việc | Bắt đầu | Kết thúc | Phụ thuộc | Người phụ trách (để trống). Chừa thời gian dự phòng khoảng 10–15%.",
      "required_inputs": [
        "Mục tiêu, thời gian dự án",
        "Nguồn lực và ràng buộc"
      ],
      "verification": [
        "Kiểm tra lịch nghỉ lễ, sự kiện trùng.",
        "Người phụ trách xác nhận thời gian ước tính.",
        "Lãnh đạo duyệt mốc và nguồn lực."
      ],
      "tags": [
        "kế hoạch dự án",
        "milestone",
        "timeline",
        "gantt",
        "giai đoạn"
      ],
      "example": {
        "input": "Dự án: ra mắt cổng thông tin nội bộ mới · 3 tháng · 5 người · Mốc cố định: ra mắt trước Tết",
        "output": "Bảng 4 giai đoạn, 15–20 việc có ngày và phụ thuộc, 4 mốc kiểm soát có tiêu chí, có thời gian dự phòng."
      },
      "added": "2026-11-11T22:40",
      "rank": 98
    },
    {
      "id": "da02",
      "category": "pm",
      "title": "Biên bản họp và việc cần làm",
      "target_audiences": [
        "moi-nhan-su",
        "van-hanh",
        "quan-ly"
      ],
      "goals": [
        "viet",
        "phan-tich"
      ],
      "difficulty": "de",
      "time": "Khoảng 5 phút",
      "compatible_tools": [
        "Copilot",
        "Claude",
        "ChatGPT",
        "Gemini"
      ],
      "purpose": "Chuyển ghi chú hoặc bản ghi cuộc họp thành biên bản gọn, có người và hạn cho từng việc.",
      "use_cases": [
        "Sau họp dự án, họp giao ban",
        "Gửi biên bản cho người vắng mặt"
      ],
      "prompt": "Bạn là thư ký dự án. Đây là ghi chú cuộc họp [tên cuộc họp] ngày [ngày]: [dán ghi chú hoặc bản ghi]. Hãy soạn biên bản gồm: người tham dự, mục tiêu cuộc họp, các quyết định đã chốt, vấn đề còn mở, bảng việc cần làm: Việc | Người phụ trách | Hạn | Ghi chú. Chỉ ghi quyết định khi ghi chú thể hiện rõ đã chốt; việc chưa có người hoặc hạn ghi \"cần xác nhận\". Tối đa 1 trang.",
      "required_inputs": [
        "Ghi chú hoặc bản ghi cuộc họp"
      ],
      "verification": [
        "Gửi người chủ trì xác nhận trước khi phát hành.",
        "Kiểm tra tên người và hạn với từng người phụ trách."
      ],
      "tags": [
        "biên bản họp",
        "minutes",
        "action items",
        "việc cần làm",
        "họp dự án"
      ],
      "example": {
        "input": "Ghi chú họp tiến độ dự án sự kiện cuối năm, 7 người, 40 phút",
        "output": "Biên bản 1 trang: 3 quyết định đã chốt, 2 vấn đề còn mở, bảng 6 việc; việc thiếu hạn ghi “cần xác nhận”."
      },
      "added": "2026-11-11T22:40",
      "rank": 99
    },
    {
      "id": "da03",
      "category": "pm",
      "title": "Ma trận phân công RACI",
      "target_audiences": [
        "van-hanh",
        "quan-ly"
      ],
      "goals": [
        "ke-hoach"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Làm rõ ai thực hiện, ai chịu trách nhiệm, ai cần được hỏi ý kiến và thông báo.",
      "use_cases": [
        "Dự án nhiều phòng ban tham gia",
        "Tránh chồng chéo, bỏ sót việc"
      ],
      "prompt": "Bạn là chuyên gia quản trị dự án. Dự án: [tên dự án]. Các vai trò tham gia: [danh sách vai trò, không cần tên người]. Các việc chính: [danh sách việc]. Hãy lập ma trận RACI dạng bảng (Việc × Vai trò) với R = thực hiện, A = chịu trách nhiệm cuối cùng, C = được hỏi ý kiến, I = được thông báo. Mỗi việc chỉ có đúng một A. Sau bảng, chỉ ra việc có nguy cơ quá tải hoặc thiếu người thực hiện và câu hỏi cần thống nhất.",
      "required_inputs": [
        "Danh sách vai trò",
        "Danh sách việc chính"
      ],
      "verification": [
        "Mỗi việc chỉ có một A.",
        "Các bên liên quan xác nhận vai trò của mình.",
        "Cập nhật khi thay đổi nhân sự."
      ],
      "tags": [
        "RACI",
        "phân công",
        "trách nhiệm",
        "vai trò",
        "dự án"
      ],
      "example": {
        "input": "Dự án ngày hội gia đình · Vai trò: trưởng ban, truyền thông, hậu cần, tài chính, đại sứ văn hóa · 10 việc chính",
        "output": "Ma trận 10 việc × 5 vai trò, mỗi việc đúng một A; ghi chú 2 vai trò có nguy cơ quá tải và 2 câu hỏi cần thống nhất."
      },
      "added": "2026-11-11T22:40",
      "rank": 100
    },
    {
      "id": "da04",
      "category": "pm",
      "title": "Đánh giá sau dự án (bài học kinh nghiệm)",
      "target_audiences": [
        "van-hanh",
        "quan-ly",
        "van-hoa"
      ],
      "goals": [
        "danh-gia",
        "phan-tich"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Tổng kết điều làm tốt, chưa tốt và bài học áp dụng cho lần sau.",
      "use_cases": [
        "Kết thúc dự án, sự kiện",
        "Họp rút kinh nghiệm với nhóm"
      ],
      "prompt": "Bạn là người điều phối buổi rút kinh nghiệm. Dự án: [tên dự án], mục tiêu ban đầu: [mục tiêu], kết quả đạt được: [kết quả đã xác nhận]. Ý kiến của nhóm: [dán ý kiến đã ẩn danh]. Hãy tổng hợp theo 4 mục: điều làm tốt cần giữ, điều chưa tốt, nguyên nhân chính, bài học và hành động cụ thể cho dự án sau (kèm người đề xuất phụ trách để trống). Giọng xây dựng, không quy lỗi cá nhân. Kèm 5 câu hỏi để điều phối buổi họp rút kinh nghiệm.",
      "required_inputs": [
        "Mục tiêu và kết quả dự án",
        "Ý kiến của nhóm (đã ẩn danh)"
      ],
      "verification": [
        "Kết quả, số liệu được xác nhận.",
        "Nhóm cùng đọc và bổ sung.",
        "Lưu bài học vào nơi cả nhóm truy cập được."
      ],
      "tags": [
        "rút kinh nghiệm",
        "retrospective",
        "bài học",
        "tổng kết dự án",
        "post-mortem"
      ],
      "example": {
        "input": "Dự án hội thao 400 người · Mục tiêu: 80% đơn vị tham gia · 20 ý kiến của ban tổ chức",
        "output": "4 mục tổng kết, 3–5 hành động cụ thể cho lần sau và 5 câu hỏi điều phối buổi họp."
      },
      "added": "2026-11-11T22:40",
      "rank": 101
    },
    {
      "id": "da05",
      "category": "pm",
      "title": "Chia nhỏ công việc (WBS)",
      "target_audiences": [
        "van-hanh",
        "quan-ly"
      ],
      "goals": [
        "ke-hoach"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Chia một mục tiêu lớn thành các gói việc nhỏ ước lượng được thời gian.",
      "use_cases": [
        "Lập kế hoạch chi tiết sau khi có mục tiêu",
        "Giao việc cho nhóm mới"
      ],
      "prompt": "Bạn là quản lý dự án. Mục tiêu đầu ra: [kết quả cuối cùng cần có]. Phạm vi: [bao gồm] và không bao gồm: [ngoài phạm vi]. Hãy chia thành cấu trúc phân rã công việc 3 cấp, mỗi gói việc cấp cuối có thể hoàn thành trong 1–5 ngày công. Trình bày dạng danh sách đánh số (1, 1.1, 1.1.1) kèm ước lượng ngày công và đầu ra của mỗi gói. Đánh dấu gói việc có rủi ro hoặc phụ thuộc bên ngoài. Ước lượng chỉ để tham khảo, ghi rõ giả định.",
      "required_inputs": [
        "Mục tiêu đầu ra",
        "Phạm vi bao gồm và không bao gồm"
      ],
      "verification": [
        "Người làm trực tiếp xác nhận ước lượng.",
        "Không bỏ sót việc kiểm thử, duyệt, bàn giao.",
        "Đối chiếu với phạm vi đã thống nhất."
      ],
      "tags": [
        "WBS",
        "chia nhỏ công việc",
        "phân rã",
        "ước lượng",
        "gói việc"
      ],
      "example": {
        "input": "Đầu ra: bộ tài liệu hướng dẫn dùng AI cho nhân viên · Bao gồm: viết, thiết kế, duyệt · Không gồm: dịch tiếng Anh",
        "output": "Danh sách 3 cấp với 15–20 gói việc cuối, mỗi gói có ngày công và đầu ra, gói rủi ro được đánh dấu, có ghi giả định."
      },
      "added": "2026-11-11T22:40",
      "rank": 102
    },
    {
      "id": "da06",
      "category": "pm",
      "title": "Kế hoạch truyền thông dự án cho các bên liên quan",
      "target_audiences": [
        "van-hanh",
        "quan-ly",
        "truyen-thong"
      ],
      "goals": [
        "ke-hoach"
      ],
      "difficulty": "trung-binh",
      "time": "Khoảng 10 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Xác định ai cần biết gì, khi nào, qua kênh nào trong suốt dự án.",
      "use_cases": [
        "Dự án có nhiều phòng ban, lãnh đạo theo dõi",
        "Thay đổi ảnh hưởng nhiều người"
      ],
      "prompt": "Bạn là quản lý dự án giỏi giao tiếp. Dự án: [tên, mục tiêu, thời gian]. Các bên liên quan: [danh sách nhóm, mức độ ảnh hưởng và quan tâm]. Hãy lập kế hoạch truyền thông dạng bảng: Bên liên quan | Họ cần biết gì | Tần suất | Kênh | Người gửi (để trống) | Hình thức phản hồi. Phân loại các bên theo ma trận Ảnh hưởng – Quan tâm và đề xuất cách tiếp cận cho từng nhóm. Thêm mẫu cập nhật tiến độ ngắn dùng chung.",
      "required_inputs": [
        "Thông tin dự án",
        "Các bên liên quan và mức độ ảnh hưởng"
      ],
      "verification": [
        "Lịch truyền thông khả thi với nguồn lực.",
        "Thông tin nhạy cảm chỉ gửi đúng người.",
        "Điều chỉnh khi có phản hồi."
      ],
      "tags": [
        "truyền thông dự án",
        "bên liên quan",
        "stakeholder",
        "kế hoạch giao tiếp"
      ],
      "example": {
        "input": "Dự án chuyển sang quy trình phê duyệt điện tử · 3 tháng · 6 nhóm liên quan",
        "output": "Bảng 6 dòng, ma trận Ảnh hưởng – Quan tâm có cách tiếp cận từng nhóm, mẫu cập nhật tiến độ 5 dòng."
      },
      "added": "2026-11-11T22:40",
      "rank": 103
    },
    {
      "id": "da07",
      "category": "pm",
      "title": "Kiểm tra tiến độ và đề xuất xử lý chậm trễ",
      "target_audiences": [
        "van-hanh",
        "quan-ly"
      ],
      "goals": [
        "phan-tich",
        "ke-hoach"
      ],
      "difficulty": "nang-cao",
      "time": "10–15 phút",
      "compatible_tools": [
        "Claude",
        "ChatGPT",
        "Gemini",
        "Copilot"
      ],
      "purpose": "Nhìn ra việc đang trễ, ảnh hưởng đến mốc chính và các phương án gỡ.",
      "use_cases": [
        "Dự án có dấu hiệu trễ hạn",
        "Chuẩn bị báo cáo xin điều chỉnh"
      ],
      "prompt": "Bạn là quản lý dự án. Đây là bảng tiến độ hiện tại: [dán bảng việc, hạn, % hoàn thành, phụ thuộc]. Hôm nay là [ngày]. Mốc quan trọng: [mốc và hạn]. Hãy: (1) liệt kê việc đang trễ hoặc có nguy cơ trễ, (2) chỉ ra ảnh hưởng dây chuyền đến các mốc, (3) đề xuất 3 phương án xử lý (tăng nguồn lực, làm song song, giảm phạm vi…) kèm ưu nhược điểm, (4) nội dung cần báo lãnh đạo trong 5 dòng. Không tự thay đổi hạn của các mốc cố định.",
      "required_inputs": [
        "Bảng tiến độ hiện tại",
        "Ngày hiện tại và các mốc quan trọng"
      ],
      "verification": [
        "Xác nhận % hoàn thành với người thực hiện.",
        "Phương án giảm phạm vi cần người có thẩm quyền đồng ý.",
        "Cập nhật kế hoạch sau khi chọn phương án."
      ],
      "tags": [
        "tiến độ",
        "trễ hạn",
        "rủi ro",
        "điều chỉnh kế hoạch",
        "báo cáo dự án"
      ],
      "example": {
        "input": "Bảng 14 việc dự án sự kiện, 3 việc trễ, mốc tổng duyệt sau 10 ngày",
        "output": "Danh sách việc trễ và có nguy cơ, ảnh hưởng đến mốc tổng duyệt, 3 phương án có ưu nhược điểm và 5 dòng báo lãnh đạo."
      },
      "added": "2026-11-11T22:40",
      "rank": 104
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
