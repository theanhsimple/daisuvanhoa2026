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
      "name": "UX & Product Design",
      "vi": "Trải nghiệm và thiết kế sản phẩm",
      "petal": "p5",
      "desc": "Đánh giá giao diện website, ứng dụng theo quy trình UI Design Audit.",
      "process": {
        "title": "Quy trình UI Design Audit 6 bước",
        "intro": "Dùng AI để đánh giá giao diện có căn cứ, không chỉ nhận xét cảm tính. Làm lần lượt 6 bước; prompt trong danh mục này hỗ trợ bước 2 đến bước 5.",
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
            "example": "Sản phẩm: trang đăng ký sự kiện. Người dùng: nhân viên. Hành động chính: bấm Đăng ký."
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
            "example": "Nút Đăng ký cùng màu, cùng cỡ với nút Chia sẻ nên không nổi bật."
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
            "example": "Phải cuộn xuống mới thấy thời gian, địa điểm; người dùng dễ bỏ sót."
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
            "example": "Không thấy nút Đăng ký ở màn hình đầu: mức High."
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
            "example": "Vị trí: cuối trang · Vấn đề: nút hành động chìm · Đề xuất: đưa nút lên vùng đầu, dùng một màu nhấn · Ưu tiên: High."
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
            "example": "So ảnh trước và sau: nút Đăng ký thấy ngay; màu nút đúng Design System; không phát sinh lỗi mới."
          }
        ]
      }
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
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
      "added": "2026-11-11",
      "source": "UI Design Audit · Prompt 01",
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
      "added": "2026-11-11",
      "source": "UI Design Audit · Prompt 02",
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
      "added": "2026-11-11",
      "source": "UI Design Audit · Prompt 03",
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
      "added": "2026-11-11",
      "source": "UI Design Audit · Prompt 04",
      "rank": 31
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
  ]
};
