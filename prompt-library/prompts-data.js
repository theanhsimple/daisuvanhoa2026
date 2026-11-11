/* Ý AI? – Prompt Library · dữ liệu
 * Thêm prompt mới: chép một khối trong mảng `prompts`, đổi id (duy nhất), group, purpose và nội dung.
 * group: content | design | event | office | research
 * purpose: viet | y-tuong | ke-hoach | phan-tich | hinh-anh | danh-gia
 * Phần người dùng cần thay thế viết trong [ngoặc vuông]. Lời dặn cho AI dùng ngoặc kép, không dùng ngoặc vuông.
 * rank: thứ tự ban tổ chức gợi ý dùng trước (số nhỏ đứng trước). added: ngày thêm vào thư viện (YYYY-MM-DD).
 */
window.YAI_DATA = {
  groups: [
    { id: "content", name: "Content & Communication", vi: "Nội dung và truyền thông", desc: "Ứng dụng AI trong sáng tạo nội dung và truyền thông." },
    { id: "design", name: "Design & Creative", vi: "Thiết kế và sáng tạo", desc: "Ứng dụng AI trong thiết kế và sáng tạo hình ảnh, video." },
    { id: "event", name: "Event & Culture", vi: "Sự kiện và văn hóa", desc: "Ứng dụng AI trong tổ chức hoạt động văn hóa và sự kiện." },
    { id: "office", name: "Office Productivity", vi: "Hiệu quả công việc", desc: "Ứng dụng AI để tóm tắt, báo cáo, lập kế hoạch nhanh hơn." },
    { id: "research", name: "Research & Ideation", vi: "Nghiên cứu và ý tưởng", desc: "Ứng dụng AI trong nghiên cứu, phân tích và phát triển ý tưởng." }
  ],

  purposes: [
    { id: "viet", name: "Viết nội dung" },
    { id: "y-tuong", name: "Lên ý tưởng" },
    { id: "ke-hoach", name: "Lập kế hoạch" },
    { id: "phan-tich", name: "Phân tích, tổng hợp" },
    { id: "hinh-anh", name: "Hình ảnh, video" },
    { id: "danh-gia", name: "Đánh giá, cải thiện" }
  ],

  prompts: [
    /* ───────────── 1. CONTENT & COMMUNICATION ───────────── */
    {
      id: "c1", group: "content", purpose: "viet", rank: 1, added: "2026-11-11",
      title: "Bài đăng truyền thông nội bộ",
      goal: "Giới thiệu một hoạt động trên kênh nội bộ, đủ thông tin và có cảm xúc, không bịa chi tiết.",
      tools: ["Claude", "ChatGPT", "Gemini"], time: "5–10 phút",
      prompt: "Bạn là chuyên gia truyền thông nội bộ của một ngân hàng. [Đơn vị] sắp tổ chức [tên hoạt động] dành cho [đối tượng], thông điệp chính là [thông điệp]. Thông tin đã chốt: [thời gian, địa điểm, nội dung chính]. Hãy viết một bài đăng giới thiệu hoạt động trên [kênh nội bộ]. Trình bày gồm: tiêu đề tối đa 12 chữ, đoạn mở đầu 2 câu gợi cảm xúc, 3 điểm nổi bật dạng gạch đầu dòng, lời kêu gọi tham gia. Giọng văn [trẻ trung / trang trọng], tối đa 200 từ. Chỉ dùng thông tin đã cung cấp; chỗ nào thiếu thì ghi \"cần bổ sung\".",
      example: {
        input: "Đơn vị: một khối khoảng 300 người · Hoạt động: Ngày hội gia đình · Đối tượng: cán bộ nhân viên và người thân · Thông điệp: Nơi làm việc cũng là ngôi nhà thứ hai · Đã chốt: sáng thứ Bảy, khu vui chơi cho trẻ em, góc chụp ảnh gia đình · Kênh: nhóm chat toàn khối · Giọng: trẻ trung",
        output: "Một bài đăng khoảng 150–200 từ: tiêu đề ngắn, 2 câu mở đầu gợi hình ảnh gia đình, 3 gạch đầu dòng về khu vui chơi, góc chụp ảnh và lời mời người thân, kết bằng lời kêu gọi đăng ký. Địa điểm chưa có nên bài ghi \"cần bổ sung\" thay vì tự đặt."
      },
      checks: ["Thời gian, địa điểm khớp đúng thông tin đã chốt.", "Không có hoạt động hay quà tặng nào AI tự thêm.", "Đọc to một lượt: giọng văn có giống cách đơn vị vẫn nói không?"]
    },
    {
      id: "c2", group: "content", purpose: "viet", rank: 4, added: "2026-11-11",
      title: "Email thư mời tham dự",
      goal: "Soạn thư mời rõ ràng, lịch sự, người nhận đọc lướt vẫn nắm đủ thông tin.",
      tools: ["Claude", "ChatGPT", "Copilot"], time: "Khoảng 5 phút",
      prompt: "Bạn là thư ký sự kiện chu đáo. [Đơn vị] mời [đối tượng, số người] tham dự [hoạt động] vào [ngày, giờ] tại [địa điểm]. Người tham dự cần [trang phục hoặc chuẩn bị] và đăng ký trước [hạn đăng ký] qua [link hoặc đầu mối]. Hãy viết thư mời qua email. Trình bày: dòng tiêu đề email tối đa 10 chữ, lời chào, một đoạn nêu lý do mời, khối thông tin dạng \"Thời gian / Địa điểm / Trang phục / Đăng ký\", lời kết. Giọng ấm áp, lịch sự, tối đa 150 từ. Không thêm quà tặng, chương trình hay khách mời chưa được nêu.",
      example: {
        input: "Đơn vị: phòng Nhân sự · Đối tượng: 40 nhân viên mới trong quý · Hoạt động: buổi gặp mặt chào đón · Trang phục: thoải mái, lịch sự · Đăng ký qua: link biểu mẫu nội bộ",
        output: "Email có tiêu đề ngắn kiểu \"Mời bạn đến buổi chào đón thành viên mới\", một đoạn lý do mời 2–3 câu, khối thông tin 4 dòng dễ đọc lướt và lời kết thân thiện, tổng dưới 150 từ."
      },
      checks: ["Ngày, giờ, địa điểm và link đăng ký đúng từng ký tự.", "Tiêu đề email không gây hiểu nhầm là thư bắt buộc nếu không bắt buộc.", "Gửi thử cho chính mình để xem hiển thị trên điện thoại."]
    },
    {
      id: "c3", group: "content", purpose: "viet", rank: 5, added: "2026-11-11",
      title: "Kịch bản MC theo lịch trình",
      goal: "Có ngay lời dẫn cho từng phần của chương trình, kèm ghi chú sân khấu.",
      tools: ["Claude", "ChatGPT"], time: "10–15 phút",
      prompt: "Bạn là MC dẫn sự kiện nội bộ có kinh nghiệm. Sự kiện [tên hoạt động] kéo dài [số] phút, dành cho [đối tượng], không khí mong muốn là [vui tươi / trang trọng]. Lịch trình: [dán lịch trình theo giờ]. Hãy viết kịch bản MC theo từng mục của lịch trình. Trình bày dạng bảng 3 cột: Thời điểm | Lời dẫn | Ghi chú sân khấu (nhạc, ánh sáng, người lên sân khấu). Câu ngắn, dễ nói, mỗi lời dẫn tối đa 60 chữ; phần mở màn có một câu tương tác với khán giả. Không tự đặt tên, chức danh khách mời; chỗ chưa có thì ghi \"chờ xác nhận\".",
      example: {
        input: "Hoạt động: Lễ vinh danh cuối năm · 60 phút · Đối tượng: toàn khối · Không khí: trang trọng nhưng ấm áp · Lịch trình: 6 mục từ khai mạc đến chụp ảnh chung",
        output: "Bảng 6 dòng theo đúng thứ tự lịch trình. Mỗi lời dẫn 2–3 câu ngắn, có câu hỏi tương tác ở phần mở màn, cột ghi chú nêu nhạc nền và thời điểm mời người lên sân khấu. Tên khách mời để \"chờ xác nhận\"."
      },
      checks: ["Đọc thành tiếng và bấm giờ từng lời dẫn.", "Tên, chức danh đọc đúng, đã xác nhận với người được nhắc tên.", "Thứ tự khớp rundown cuối cùng của ban tổ chức."]
    },
    {
      id: "c4", group: "content", purpose: "y-tuong", rank: 9, added: "2026-11-11",
      title: "Slogan và thông điệp chiến dịch",
      goal: "Có nhiều hướng slogan để chọn, mỗi câu kèm lý do phù hợp.",
      tools: ["Claude", "ChatGPT", "Gemini"], time: "5–10 phút",
      prompt: "Bạn là copywriter giàu kinh nghiệm về văn hóa doanh nghiệp. Chiến dịch [tên chiến dịch] nhằm [mục tiêu], hướng tới [đối tượng], gắn với giá trị cốt lõi [giá trị]. Hãy đề xuất 8 slogan theo 4 hướng: cảm xúc, hành động, chơi chữ, ngắn gọn dễ nhớ, mỗi hướng 2 câu. Trình bày dạng bảng: Slogan | Hướng | Vì sao phù hợp (1 câu). Mỗi slogan tối đa 8 chữ, tiếng Việt có dấu, không dùng tiếng lóng, không trùng khẩu hiệu thương mại phổ biến mà bạn biết.",
      example: {
        input: "Chiến dịch: Tháng lan tỏa giá trị cốt lõi · Mục tiêu: mỗi nhân viên kể một câu chuyện thật về giá trị · Đối tượng: toàn hàng · Giá trị: một giá trị cốt lõi do đơn vị chọn",
        output: "Bảng 8 slogan chia đều 4 hướng; mỗi câu dưới 8 chữ, kèm một câu giải thích vì sao hợp với mục tiêu kể chuyện thật. Bạn chọn 2–3 câu để thử với đồng nghiệp."
      },
      checks: ["Tìm nhanh trên Google xem slogan có trùng khẩu hiệu đã có không.", "Đọc thử cho 2–3 đồng nghiệp: có ai hiểu sai ý không?", "Slogan có cần duyệt với bộ phận nhận diện thương hiệu không?"]
    },
    {
      id: "c5", group: "content", purpose: "viet", rank: 3, added: "2026-11-11",
      title: "Một nội dung, bốn định dạng",
      goal: "Chuyển một nội dung gốc thành tin nhắn, bài đăng, chữ poster và lời MC mà không viết lại từ đầu.",
      tools: ["Claude", "ChatGPT"], time: "Khoảng 5 phút",
      prompt: "Bạn là biên tập viên đa kênh. Dưới đây là nội dung gốc về [hoạt động]: [dán nội dung gốc]. Hãy chuyển thành 4 phiên bản: (1) tin nhắn nhóm chat tối đa 50 chữ, (2) bài đăng mạng nội bộ khoảng 150 chữ, (3) chữ cho poster gồm tiêu đề tối đa 6 chữ và 1 câu phụ, (4) lời MC thông báo đọc trong tối đa 40 giây. Trình bày mỗi phiên bản dưới một tiêu đề riêng. Giữ nguyên mọi thông tin thời gian, địa điểm, không thêm chi tiết mới.",
      example: {
        input: "Nội dung gốc: đoạn đề xuất 1 trang về hoạt động \"Một tháng một giá trị\" đã được duyệt",
        output: "4 khối nội dung có tiêu đề riêng; tin nhắn ngắn có lời kêu gọi, bài đăng có mở đầu và 3 ý chính, poster chỉ còn tiêu đề và câu phụ, lời MC viết theo văn nói."
      },
      checks: ["So 4 phiên bản với bản gốc: thời gian, địa điểm, tên gọi thống nhất.", "Chữ poster đủ ngắn để đọc từ xa.", "Lời MC đọc thử không vấp."]
    },

    /* ───────────── 2. DESIGN & CREATIVE ───────────── */
    {
      id: "d1", group: "design", purpose: "hinh-anh", rank: 2, added: "2026-11-11",
      title: "Câu lệnh tạo hình minh họa",
      goal: "Tạo hình đúng ý ngay từ vài lần đầu nhờ mô tả đủ chủ thể, phong cách, bố cục.",
      tools: ["Gemini", "ChatGPT", "Canva"], time: "5–15 phút",
      prompt: "Tạo một hình minh họa cho [poster / slide / bài đăng] về chủ đề [chủ đề]. Chủ thể chính: [mô tả chủ thể và hành động]. Bối cảnh: [không gian, thời điểm trong ngày]. Phong cách: [ảnh chụp chân thực / 3D / minh họa phẳng], ánh sáng [ấm / tự nhiên], bảng màu chủ đạo [2–3 màu]. Bố cục: chủ thể đặt [bên trái / chính giữa], chừa khoảng trống ở [vị trí] để đặt chữ. Tỉ lệ khung [16:9 / 1:1 / 9:16]. Không có chữ trong ảnh, không có logo, không có khuôn mặt người thật nhận diện được.",
      example: {
        input: "Dùng cho: poster · Chủ đề: ngày hội gia đình · Chủ thể: một gia đình nhỏ đang cùng xếp hình khối màu · Bối cảnh: sân cỏ buổi sáng · Phong cách: 3D mềm · Màu: cam, tím nhạt · Khoảng trống: phía trên · Tỉ lệ: 9:16",
        output: "Hình dọc 9:16, gia đình ở nửa dưới, nửa trên trống để đặt tiêu đề trong Canva. Nếu lần đầu chưa ưng, chỉ sửa một yếu tố mỗi lần (ví dụ: \"giữ nguyên, đổi ánh sáng thành buổi chiều\")."
      },
      checks: ["Soi kỹ tay, mắt, chữ trong ảnh: AI hay vẽ sai các chi tiết này.", "Hình không giống logo, nhân vật hay thương hiệu của bên khác.", "Đọc điều khoản sử dụng của công cụ trước khi dùng cho ấn phẩm chính thức."]
    },
    {
      id: "d2", group: "design", purpose: "y-tuong", rank: 7, added: "2026-11-11",
      title: "Concept và key visual sự kiện",
      goal: "Có 3 hướng nhận diện sự kiện để so sánh trước khi đặt thiết kế chi tiết.",
      tools: ["Claude", "ChatGPT", "Gemini"], time: "10–15 phút",
      prompt: "Bạn là giám đốc sáng tạo (creative director) chuyên sự kiện doanh nghiệp. Sự kiện [tên sự kiện] có thông điệp [thông điệp], dành cho [đối tượng], tổ chức tại [loại không gian]. Hãy đề xuất 3 hướng concept key visual khác nhau. Mỗi hướng gồm: tên concept, ý tưởng hình ảnh chính (2 câu), bảng màu 3–4 màu kèm mã HEX, kiểu chữ gợi ý, 3 ứng dụng (backdrop, thẻ đeo, bài đăng) và một câu lệnh tạo hình để thử trên công cụ AI. Trình bày dạng bảng so sánh. Concept phải thể hiện được [giá trị hoặc yếu tố con người], tránh hình ảnh sáo mòn như cái bắt tay hay bóng đèn.",
      example: {
        input: "Sự kiện: Year End Party · Thông điệp: Humanize the Future · Đối tượng: toàn thể cán bộ nhân viên · Không gian: hội trường lớn · Yếu tố cần thể hiện: công nghệ phục vụ con người",
        output: "Bảng 3 cột cho 3 concept khác hẳn nhau, mỗi concept có bảng màu với mã HEX, gợi ý kiểu chữ, 3 ứng dụng và một câu lệnh tạo hình để thử ngay."
      },
      checks: ["Đối chiếu màu, chữ với bộ nhận diện thương hiệu trước khi chốt.", "Màu đủ tương phản khi in backdrop và khi chiếu.", "Người duyệt chọn hướng; AI chỉ đề xuất."]
    },
    {
      id: "d3", group: "design", purpose: "hinh-anh", rank: 11, added: "2026-11-11",
      title: "Bố cục infographic từ nội dung có sẵn",
      goal: "Biến số liệu hoặc nội dung dài thành bố cục infographic để dựng trên Canva.",
      tools: ["Claude", "Canva"], time: "10–20 phút",
      prompt: "Bạn là nhà thiết kế thông tin (information designer). Tôi có nội dung sau về [chủ đề]: [dán nội dung hoặc số liệu đã kiểm chứng]. Hãy lên bố cục cho một infographic khổ [dọc A4 / 1080×1350]. Trình bày: tiêu đề tối đa 8 chữ; 4–6 khối nội dung theo thứ tự đọc, mỗi khối gồm tiêu đề phụ, một con số hoặc ý chính, gợi ý biểu tượng; nếu có số liệu thì gợi ý loại biểu đồ phù hợp. Chỉ dùng số liệu trong nội dung đã cho, giữ nguyên đơn vị đo, ghi nguồn ở chân infographic.",
      example: {
        input: "Chủ đề: kết quả một năm hoạt động văn hóa của đơn vị · Nội dung: bảng tổng hợp số hoạt động, số người tham gia đã được xác nhận",
        output: "Danh sách 5 khối theo thứ tự đọc từ trên xuống, mỗi khối có tiêu đề phụ, con số lấy đúng từ bảng, biểu tượng gợi ý; một khối dùng biểu đồ cột; dòng nguồn ở chân trang."
      },
      checks: ["Từng con số khớp với bảng gốc.", "Biểu đồ vẽ đúng tỉ lệ, không cắt trục gây hiểu sai.", "Có dòng ghi nguồn."]
    },
    {
      id: "d4", group: "design", purpose: "hinh-anh", rank: 10, added: "2026-11-11",
      title: "Kịch bản phân cảnh và câu lệnh tạo video",
      goal: "Có storyboard 5 cảnh và câu lệnh cho từng cảnh để tạo video ngắn.",
      tools: ["Claude", "Gemini", "CapCut"], time: "15–30 phút",
      prompt: "Bạn là đạo diễn video ngắn. Tôi cần video [số] giây cho [hoạt động], thông điệp [thông điệp], phát trên [màn hình sự kiện / điện thoại]. Hãy viết kịch bản phân cảnh (storyboard) 5 cảnh. Mỗi cảnh ghi: thời lượng, hình ảnh, chuyển động máy quay, chữ trên màn hình (tối đa 6 chữ), âm thanh. Sau đó viết riêng một câu lệnh tạo video cho từng cảnh bằng [tiếng Việt / tiếng Anh], mỗi câu dưới 60 từ, ghi rõ khung hình [16:9 / 9:16]. Cảnh do AI tạo không có chữ, không có người thật nhận diện được, không dùng nhạc có bản quyền.",
      example: {
        input: "Video 30 giây · Hoạt động: teaser tiệc cuối năm · Thông điệp: cùng nhìn lại một năm · Phát trên: màn hình sự kiện 16:9",
        output: "Bảng 5 cảnh có tổng thời lượng đúng 30 giây và 5 câu lệnh tạo cảnh riêng. Chữ trên màn hình thêm sau trong CapCut để không sai dấu."
      },
      checks: ["Cộng thời lượng các cảnh, khớp độ dài yêu cầu.", "Xem từng clip: không có chữ méo, khuôn mặt lạ giống người thật.", "Nhạc nền có giấy phép sử dụng."]
    },
    {
      id: "d5", group: "design", purpose: "danh-gia", rank: 12, added: "2026-11-11",
      title: "Góp ý thiết kế theo tiêu chí",
      goal: "Nhận góp ý cụ thể cho poster, slide, banner trước khi gửi duyệt.",
      tools: ["Claude", "ChatGPT", "Gemini"], time: "Khoảng 5 phút",
      prompt: "Bạn là trưởng nhóm thiết kế khó tính nhưng mang tính xây dựng. Tôi đính kèm [poster / slide / banner] cho [hoạt động], mục tiêu là [mục tiêu], người xem là [đối tượng], hiển thị trên [kênh và kích thước]. Hãy nhận xét theo 5 tiêu chí: thông điệp có đọc được trong 3 giây không, thứ bậc thị giác, màu sắc và độ tương phản, chữ (cỡ chữ, độ dài, lỗi chính tả), sự đồng bộ với nhận diện. Trình bày dạng bảng: Tiêu chí | Điểm 1–5 | Điểm cần sửa | Cách sửa cụ thể. Kết thúc bằng 3 việc nên sửa trước. Chỉ nhận xét những gì thấy trong ảnh, không đoán ý đồ thiết kế.",
      example: {
        input: "Đính kèm: poster dọc cho ngày hội thể thao · Mục tiêu: mời đăng ký đội · Người xem: nhân viên đi ngang màn hình sảnh",
        output: "Bảng 5 tiêu chí có điểm và cách sửa cụ thể (ví dụ: \"tăng cỡ ngày giờ, đưa lên trên ảnh\"), cuối cùng là 3 việc ưu tiên."
      },
      checks: ["Góp ý là gợi ý, người thiết kế và người duyệt quyết định.", "Tự kiểm tra lại lỗi chính tả AI có thể bỏ sót.", "Không tải lên thiết kế chứa thông tin nội bộ chưa công bố."]
    },

    /* ───────────── 3. EVENT & CULTURE ───────────── */
    {
      id: "e1", group: "event", purpose: "y-tuong", rank: 6, added: "2026-11-11",
      title: "Ý tưởng chương trình văn hóa",
      goal: "Có 3 ý tưởng chương trình khác nhau, so sánh được điểm mạnh và rủi ro.",
      tools: ["Claude", "ChatGPT", "Gemini"], time: "10 phút",
      prompt: "Bạn là chuyên gia tổ chức sự kiện văn hóa doanh nghiệp. [Đơn vị] muốn tổ chức [loại hoạt động] cho [đối tượng, số người] vào [thời điểm], ngân sách [mức ngân sách], mục tiêu là [mục tiêu]. Văn hóa đơn vị: [2–3 đặc điểm]. Hãy đề xuất 3 ý tưởng chương trình khác nhau. Mỗi ý tưởng gồm: tên, thông điệp, mô tả 2 câu, 3 hoạt động chính, điểm khác biệt, rủi ro chính. Trình bày dạng bảng so sánh. Ít nhất một ý tưởng làm được với ngân sách thấp; không đề xuất hoạt động cần người nổi tiếng hoặc nhà cung cấp cụ thể.",
      example: {
        input: "Loại hoạt động: chuỗi hoạt động đón Tết · 150 người · Ngân sách: vừa phải · Mục tiêu: gắn kết các phòng ít làm việc chung · Đặc điểm: trẻ, thích thử thách, làm việc nhiều ca",
        output: "Bảng 3 ý tưởng, mỗi ý có tên, thông điệp, 3 hoạt động; một ý tưởng gần như không tốn chi phí; cột rủi ro nêu rõ vấn đề lịch làm việc theo ca."
      },
      checks: ["Ý tưởng phù hợp lịch làm việc thật của đơn vị.", "Rủi ro AI nêu có đủ chưa, bổ sung từ kinh nghiệm của bạn.", "Chi phí cần tự ước tính lại với báo giá thật."]
    },
    {
      id: "e2", group: "event", purpose: "ke-hoach", rank: 8, added: "2026-11-11",
      title: "Kế hoạch tổ chức sự kiện",
      goal: "Có bảng đầu việc theo hạng mục, người phụ trách và mốc đếm ngược.",
      tools: ["Claude", "ChatGPT", "Copilot"], time: "10–15 phút",
      prompt: "Bạn là quản lý dự án sự kiện. Sự kiện [tên sự kiện] diễn ra vào [ngày], còn [số] tuần chuẩn bị, đội ngũ gồm [các vai trò trong nhóm], ngân sách [mức ngân sách]. Hãy lập kế hoạch tổ chức. Trình bày dạng bảng: Hạng mục | Việc cụ thể | Người phụ trách (theo vai trò) | Hạn hoàn thành (đếm ngược D-…) | Phụ thuộc vào việc nào. Nhóm theo 5 hạng mục: nội dung, hậu cần, truyền thông, nhân sự, ngân sách. Cuối bảng thêm 5 rủi ro lớn nhất và phương án dự phòng. Không tự đặt số tiền; dùng mốc D-… nếu chưa có ngày cụ thể.",
      example: {
        input: "Sự kiện: Hội thao nội bộ · 6 tuần chuẩn bị · Đội ngũ: trưởng ban, 2 người hậu cần, 1 người truyền thông, 1 người tài chính",
        output: "Bảng khoảng 20–25 đầu việc chia 5 hạng mục với mốc D-42 đến D+3, cột phụ thuộc giúp thấy việc nào phải xong trước; cuối bảng là 5 rủi ro như thời tiết, thiếu người đăng ký, kèm phương án dự phòng."
      },
      checks: ["Mốc thời gian khớp lịch nghỉ lễ và lịch công việc của đơn vị.", "Mỗi việc có đúng một người chịu trách nhiệm.", "Ngân sách điền từ số liệu thật, không lấy số AI gợi ý."]
    },
    {
      id: "e3", group: "event", purpose: "ke-hoach", rank: 13, added: "2026-11-11",
      title: "Rundown chi tiết theo phút",
      goal: "Có rundown đủ cột kỹ thuật, khớp đúng giờ bắt đầu và kết thúc.",
      tools: ["Claude", "ChatGPT"], time: "10 phút",
      prompt: "Bạn là đạo diễn chương trình. Sự kiện [tên sự kiện] bắt đầu lúc [giờ bắt đầu], kết thúc lúc [giờ kết thúc], gồm các phần: [liệt kê các phần chương trình]. Hãy lập rundown chi tiết theo phút. Trình bày dạng bảng: Giờ bắt đầu | Thời lượng | Nội dung | Người phụ trách | Âm thanh, ánh sáng, màn hình | Ghi chú. Chừa khoảng 5–10% thời gian dự phòng và đánh dấu các mốc dễ trễ giờ. Tổng thời lượng phải khớp đúng giờ bắt đầu và kết thúc.",
      example: {
        input: "Sự kiện: Lễ kỷ niệm thành lập đơn vị · 18:00–20:30 · Các phần: đón khách, khai mạc, video, phát biểu, vinh danh, văn nghệ, bốc thăm, bế mạc",
        output: "Bảng theo từng mốc giờ từ 18:00 đến 20:30, có cột kỹ thuật cho từng mục, vài phút dự phòng sau phần vinh danh và đánh dấu phần phát biểu là mốc dễ trễ."
      },
      checks: ["Tự cộng lại thời lượng: có khớp 18:00–20:30 không?", "Người phụ trách từng mục đã biết và đồng ý.", "Diễn tập theo rundown ít nhất một lần."]
    },
    {
      id: "e4", group: "event", purpose: "y-tuong", rank: 14, added: "2026-11-11",
      title: "Minigame lan tỏa giá trị cốt lõi",
      goal: "Thiết kế trò chơi ngắn, dễ hiểu luật, chốt được thông điệp văn hóa.",
      tools: ["Claude", "ChatGPT", "Gemini"], time: "10 phút",
      prompt: "Bạn là người thiết kế trò chơi trải nghiệm (game designer) cho hoạt động nội bộ. Tôi cần một minigame [số] phút cho [số người] người tại [không gian], giúp mọi người hiểu giá trị cốt lõi [giá trị]. Đạo cụ có sẵn: [đạo cụ]. Hãy thiết kế 3 phương án minigame. Mỗi phương án gồm: tên, mục tiêu, luật chơi theo từng bước, cách chia đội, cách tính điểm, câu chốt thông điệp sau trò chơi, đạo cụ cần chuẩn bị. Trình bày mỗi phương án thành một khối riêng. Luật chơi giải thích được trong 1 phút, an toàn, phù hợp mọi độ tuổi và không khiến ai lúng túng trước đám đông.",
      example: {
        input: "15 phút · 60 người · Không gian: phòng họp lớn, bàn tròn · Giá trị: một giá trị cốt lõi do đơn vị chọn · Đạo cụ: giấy note, bút, màn chiếu",
        output: "3 phương án khác nhau (đố vui theo đội, ghép câu chuyện, thử thách hành động), mỗi phương án có luật chơi 4–5 bước, cách tính điểm rõ và một câu chốt nối trò chơi với giá trị."
      },
      checks: ["Chơi thử với 3–4 đồng nghiệp trước buổi chính.", "Không có thử thách gây ngại hoặc mất an toàn.", "Câu chốt thông điệp đúng tinh thần giá trị cốt lõi."]
    },
    {
      id: "e5", group: "event", purpose: "ke-hoach", rank: 15, added: "2026-11-11",
      title: "Truyền thông trước, trong và sau sự kiện",
      goal: "Lên lịch truyền thông 3 giai đoạn trên đúng các kênh đơn vị đang có.",
      tools: ["Claude", "ChatGPT", "Copilot"], time: "10 phút",
      prompt: "Bạn là chuyên gia truyền thông sự kiện. Sự kiện [tên sự kiện] diễn ra vào [ngày], đối tượng là [đối tượng], các kênh có sẵn: [liệt kê kênh, ví dụ email, nhóm chat, màn hình sảnh, mạng nội bộ]. Hãy lập kế hoạch truyền thông 3 giai đoạn: trước sự kiện (khơi gợi, mời, nhắc), trong sự kiện (tương tác, cập nhật), sau sự kiện (cảm ơn, tổng kết, lan tỏa). Trình bày dạng bảng: Giai đoạn | Thời điểm (D-…, D, D+…) | Kênh | Nội dung chính | Định dạng | Người làm. Mỗi giai đoạn 2–4 đầu việc; chỉ dùng các kênh tôi đã liệt kê.",
      example: {
        input: "Sự kiện: Ngày hội sáng kiến · Đối tượng: nhân viên khối vận hành · Kênh: email, nhóm chat, màn hình sảnh",
        output: "Bảng khoảng 10 đầu việc từ D-14 đến D+7, mỗi dòng gắn đúng một kênh trong 3 kênh đã cho, có định dạng (poster, tin nhắn, video ngắn) và người làm."
      },
      checks: ["Lịch đăng không trùng các đợt truyền thông khác của đơn vị.", "Nội dung sau sự kiện có ảnh của người đã đồng ý.", "Mỗi đầu việc đã có người nhận."]
    },

    /* ───────────── 4. OFFICE PRODUCTIVITY ───────────── */
    {
      id: "o1", group: "office", purpose: "phan-tich", rank: 2, added: "2026-11-11",
      title: "Tóm tắt tài liệu có trích dẫn",
      goal: "Nắm nhanh tài liệu dài, mỗi ý đều mở lại được đúng chỗ trong bản gốc.",
      tools: ["NotebookLM", "Claude", "Copilot"], time: "Khoảng 5 phút",
      prompt: "Bạn là trợ lý phân tích tài liệu. Tôi đính kèm [tên tài liệu], cần đọc để [mục đích, ví dụ chuẩn bị họp với ai]. Hãy tóm tắt tài liệu. Trình bày: (1) 3 câu tóm tắt chính; (2) 5 điểm quan trọng nhất, mỗi điểm kèm số trang hoặc trích dẫn nguyên văn; (3) bảng các con số và mốc thời gian quan trọng; (4) 3 câu hỏi nên đặt ra khi đọc. Chỉ dựa vào tài liệu đính kèm; nội dung nào tài liệu không đề cập thì ghi \"không có trong tài liệu\".",
      example: {
        input: "Tài liệu: báo cáo tổng kết chương trình văn hóa năm (đã được phép chia sẻ) · Mục đích: chuẩn bị họp kế hoạch năm sau",
        output: "3 câu tóm tắt, 5 điểm chính có số trang, bảng mốc và con số trích từ báo cáo, 3 câu hỏi gợi mở cho cuộc họp."
      },
      checks: ["Mở 2–3 trích dẫn bất kỳ, kiểm tra câu trích có thật và đúng trang.", "Chỉ tải lên tài liệu được phép dùng với công cụ AI.", "Đọc lại phần kết luận của bản gốc, so với tóm tắt."]
    },
    {
      id: "o2", group: "office", purpose: "viet", rank: 16, added: "2026-11-11",
      title: "Báo cáo ngắn gửi lãnh đạo",
      goal: "Từ số liệu thô ra báo cáo 1 trang, nêu rõ việc cần lãnh đạo quyết.",
      tools: ["Claude", "ChatGPT", "Copilot"], time: "10 phút",
      prompt: "Bạn là chuyên viên báo cáo của [đơn vị]. Dưới đây là số liệu và ghi chú về [hoạt động hoặc giai đoạn]: [dán số liệu, ghi chú]. Người đọc là [lãnh đạo hoặc phòng ban], họ cần [quyết định cần đưa ra]. Hãy viết báo cáo ngắn gồm: kết quả chính (3 gạch đầu dòng có số liệu), so sánh với mục tiêu [mục tiêu], điều làm tốt, điều cần cải thiện, đề xuất và việc cần lãnh đạo quyết. Tối đa 1 trang, câu ngắn. Chỉ dùng số liệu đã cung cấp, không tự tính phần trăm khi thiếu số gốc; chỗ thiếu ghi \"cần bổ sung\".",
      example: {
        input: "Hoạt động: chuỗi workshop kỹ năng quý III · Số liệu: số buổi, số người đăng ký và tham dự thực tế, điểm khảo sát trung bình · Người đọc: giám đốc khối · Cần quyết: có mở rộng sang quý IV không",
        output: "Báo cáo 1 trang: 3 kết quả có số, so với mục tiêu đã nêu, 2 điểm làm tốt, 2 điểm cần cải thiện và một đề xuất rõ ràng kèm việc cần quyết."
      },
      checks: ["Từng con số khớp bảng gốc; tự tính lại phần trăm nếu có.", "Không đưa dữ liệu có họ tên lên công cụ AI công cộng.", "Đề xuất là của bạn, AI chỉ giúp diễn đạt."]
    },
    {
      id: "o3", group: "office", purpose: "ke-hoach", rank: 17, added: "2026-11-11",
      title: "Chuẩn bị nội dung cuộc họp",
      goal: "Có chương trình họp, tài liệu gửi trước và mẫu biên bản trong một lần.",
      tools: ["Claude", "Copilot", "ChatGPT"], time: "5–10 phút",
      prompt: "Bạn là thư ký cuộc họp chuyên nghiệp. Cuộc họp [tên hoặc mục đích] kéo dài [số] phút với [thành phần tham dự]. Kết quả cần đạt: [quyết định hoặc kết quả]. Thông tin nền: [dán thông tin]. Hãy chuẩn bị 4 phần: (1) chương trình họp có thời lượng từng mục và người trình bày; (2) tài liệu cần gửi trước; (3) các câu hỏi cần thống nhất; (4) mẫu biên bản để điền trong họp. Trình bày theo 4 tiêu đề trên. Tổng thời lượng các mục không vượt quá [số] phút.",
      example: {
        input: "Cuộc họp: chốt concept tiệc cuối năm · 45 phút · Thành phần: ban tổ chức 6 người · Kết quả: chọn 1 trong 3 concept",
        output: "Chương trình 5 mục cộng đúng 45 phút, danh sách 3 tài liệu gửi trước, 4 câu hỏi cần chốt và mẫu biên bản có ô quyết định, người phụ trách, hạn."
      },
      checks: ["Tổng thời lượng đúng bằng thời gian họp.", "Câu hỏi cần thống nhất bám đúng kết quả cần đạt.", "Gửi tài liệu trước ít nhất 1 ngày."]
    },
    {
      id: "o4", group: "office", purpose: "phan-tich", rank: 18, added: "2026-11-11",
      title: "Phân tích phản hồi khảo sát",
      goal: "Gom ý kiến mở thành chủ đề, có trích dẫn đại diện và đề xuất cải tiến.",
      tools: ["Claude", "ChatGPT", "Gemini"], time: "10–15 phút",
      prompt: "Bạn là chuyên viên phân tích trải nghiệm nhân viên. Dưới đây là [số] phản hồi khảo sát sau [hoạt động], đã được ẩn danh: [dán phản hồi]. Hãy phân tích: nhóm các ý kiến thành 4–6 chủ đề, mỗi chủ đề ghi số lượt nhắc tới và 1–2 trích dẫn nguyên văn đại diện; tách riêng điểm được khen và điểm cần cải thiện; đề xuất 3 cải tiến cho lần tổ chức sau. Trình bày bảng chủ đề trước, sau đó là danh sách đề xuất. Chỉ đếm từ dữ liệu đã cho, không suy diễn cảm xúc khi phản hồi không nói rõ.",
      example: {
        input: "80 phản hồi mở sau buổi workshop, đã xóa họ tên và mã nhân viên",
        output: "Bảng 5 chủ đề (ví dụ: thời lượng, nội dung thực hành, địa điểm) có số lượt nhắc và trích dẫn nguyên văn; 3 đề xuất gắn với chủ đề được nhắc nhiều nhất."
      },
      checks: ["Ẩn danh trước khi dán: bỏ họ tên, mã nhân viên, chi tiết nhận diện.", "Đếm thử lại một chủ đề để kiểm tra con số AI đưa ra.", "Trích dẫn đúng nguyên văn trong dữ liệu."]
    },
    {
      id: "o5", group: "office", purpose: "ke-hoach", rank: 19, added: "2026-11-11",
      title: "Ghi chú họp thành kế hoạch hành động",
      goal: "Từ ghi chú rời rạc ra bảng việc cần làm, quyết định đã chốt và vấn đề còn mở.",
      tools: ["Claude", "Copilot", "ChatGPT"], time: "Khoảng 5 phút",
      prompt: "Bạn là trợ lý điều phối dự án. Dưới đây là ghi chú cuộc họp [tên cuộc họp] ngày [ngày họp]: [dán ghi chú]. Hãy chuyển thành kế hoạch hành động. Trình bày dạng bảng: Việc cần làm (bắt đầu bằng động từ) | Người phụ trách | Hạn | Trạng thái | Ghi chú. Sau bảng, liệt kê riêng các quyết định đã chốt và các vấn đề còn mở. Chỉ ghi người phụ trách và hạn khi ghi chú có nêu; nếu không, ghi \"chưa giao\" hoặc \"chưa có hạn\".",
      example: {
        input: "Ghi chú tay 1 trang của buổi họp ban tổ chức ngày hội gia đình",
        output: "Bảng 8 việc bắt đầu bằng động từ, 3 việc ghi \"chưa giao\"; danh sách 4 quyết định đã chốt và 2 vấn đề còn mở để đưa vào buổi họp sau."
      },
      checks: ["Người được giao việc trong bảng đúng như đã thống nhất.", "Không có quyết định nào AI tự suy ra từ thảo luận.", "Gửi lại bảng cho cả nhóm xác nhận."]
    },

    /* ───────────── 5. RESEARCH & IDEATION ───────────── */
    {
      id: "r1", group: "research", purpose: "y-tuong", rank: 3, added: "2026-11-11",
      title: "Động não 15 ý tưởng theo 3 nhóm",
      goal: "Có nhiều ý tưởng nhanh, chia theo mức độ dễ làm và mức độ khác biệt.",
      tools: ["Claude", "ChatGPT", "Gemini"], time: "Khoảng 5 phút",
      prompt: "Bạn là người điều phối buổi động não (brainstorm facilitator). Vấn đề cần ý tưởng: [vấn đề], cho [đối tượng], trong giới hạn [ngân sách, thời gian, nguồn lực]. Hãy đưa ra 15 ý tưởng chia 3 nhóm: an toàn (làm được ngay), đột phá (khác biệt), tiết kiệm (gần như không tốn chi phí); mỗi ý tưởng 1 câu. Sau đó chọn 3 ý tưởng đáng thử nhất và giải thích theo 2 tiêu chí: tác động và độ khả thi. Trình bày dạng danh sách đánh số. Tránh các ý tưởng chung chung như teambuilding thông thường hay bốc thăm trúng thưởng.",
      example: {
        input: "Vấn đề: nhân viên mới ít tham gia hoạt động văn hóa · Đối tượng: nhân viên dưới 1 năm · Giới hạn: 2 tháng, ngân sách thấp",
        output: "15 ý tưởng đánh số theo 3 nhóm, sau đó 3 ý tưởng được chọn kèm lý do về tác động và độ khả thi."
      },
      checks: ["Ý tưởng hay cần được hỏi lại người trong cuộc (nhân viên mới).", "Loại các ý tưởng đơn vị đã thử mà không hiệu quả.", "Ghi lại lý do chọn để trình bày khi xin duyệt."]
    },
    {
      id: "r2", group: "research", purpose: "phan-tich", rank: 20, added: "2026-11-11",
      title: "Phân tích nguyên nhân gốc rễ",
      goal: "Tìm nguyên nhân thật của một vấn đề trước khi nghĩ giải pháp.",
      tools: ["Claude", "ChatGPT", "Gemini"], time: "10 phút",
      prompt: "Bạn là chuyên gia phân tích nguyên nhân gốc rễ. Vấn đề: [mô tả vấn đề]. Những gì đã biết: [dữ kiện, số liệu có nguồn]. Hãy phân tích bằng phương pháp 5 Whys (5 lần hỏi tại sao) và sơ đồ xương cá theo 4 nhóm: con người, quy trình, truyền thông, môi trường. Trình bày: chuỗi 5 câu hỏi tại sao; bảng nguyên nhân theo 4 nhóm; 3 nguyên nhân khả dĩ nhất và cách kiểm chứng từng nguyên nhân. Phân biệt rõ điều đã biết và điều chỉ là giả thuyết.",
      example: {
        input: "Vấn đề: số người đăng ký hoạt động văn hóa quý này thấp hơn quý trước · Đã biết: số đăng ký từng quý, lịch các hoạt động trùng với kỳ chốt số liệu",
        output: "Chuỗi 5 câu hỏi tại sao, bảng nguyên nhân 4 nhóm, 3 nguyên nhân khả dĩ (ví dụ trùng lịch cao điểm) kèm cách kiểm chứng như hỏi nhanh 10 người hoặc so lịch."
      },
      checks: ["Mỗi nguyên nhân được đánh dấu \"đã biết\" hay \"giả thuyết\".", "Kiểm chứng ít nhất một giả thuyết trước khi kết luận.", "Không đưa dữ liệu cá nhân vào phần dữ kiện."]
    },
    {
      id: "r3", group: "research", purpose: "phan-tich", rank: 21, added: "2026-11-11",
      title: "Chân dung đối tượng tham gia",
      goal: "Hiểu nhóm người mình muốn tiếp cận: họ cần gì, ngại gì, đọc tin ở đâu.",
      tools: ["Claude", "ChatGPT", "NotebookLM"], time: "10–15 phút",
      prompt: "Bạn là nhà nghiên cứu trải nghiệm người dùng (UX researcher). Tôi muốn hiểu [nhóm đối tượng] để thiết kế [hoạt động]. Dữ liệu tôi có: [kết quả khảo sát hoặc phỏng vấn đã ẩn danh]. Hãy xây dựng 2–3 chân dung đối tượng (persona). Mỗi persona gồm: tên gọi đại diện, đặc điểm công việc, mục tiêu, khó khăn, kênh thông tin hay dùng, điều khiến họ muốn tham gia, điều khiến họ ngại, một câu nói tiêu biểu. Trình bày mỗi persona thành một thẻ. Mỗi đặc điểm phải dựa trên dữ liệu đã cho; điểm nào là suy đoán thì ghi rõ \"giả định\".",
      example: {
        input: "Nhóm đối tượng: nhân viên làm việc tại chi nhánh xa hội sở · Hoạt động: chuỗi hoạt động văn hóa trực tuyến · Dữ liệu: 30 câu trả lời khảo sát đã ẩn danh",
        output: "3 thẻ persona với tên gọi đại diện, mục tiêu, khó khăn và câu nói tiêu biểu lấy từ dữ liệu; vài đặc điểm được đánh dấu \"giả định\" để bạn kiểm chứng thêm."
      },
      checks: ["Câu nói tiêu biểu có thật trong dữ liệu, không do AI viết.", "Phần \"giả định\" cần phỏng vấn thêm để xác nhận.", "Persona là đại diện nhóm, không mô tả một cá nhân cụ thể."]
    },
    {
      id: "r4", group: "research", purpose: "danh-gia", rank: 22, added: "2026-11-11",
      title: "Chấm điểm và chọn ý tưởng",
      goal: "So các ý tưởng theo cùng tiêu chí, nhìn từ nhiều góc để chọn có căn cứ.",
      tools: ["Claude", "ChatGPT", "Gemini"], time: "Khoảng 10 phút",
      prompt: "Bạn là hội đồng thẩm định ý tưởng gồm 3 góc nhìn: người tham gia, người tổ chức, lãnh đạo. Tôi có [số] ý tưởng cho [hoạt động]: [liệt kê ý tưởng]. Mục tiêu: [mục tiêu]; giới hạn: [ngân sách, thời gian]. Hãy chấm từng ý tưởng theo 4 tiêu chí thang 1–5: tác động, khả thi, chi phí, mức độ gắn với văn hóa đơn vị. Trình bày dạng ma trận, có cột tổng điểm và 1 câu nhận xét từ mỗi góc nhìn. Kết luận ý tưởng nên chọn, kèm điều kiện để thành công. Giải thích căn cứ cho từng điểm số, không chấm điểm cảm tính.",
      example: {
        input: "4 ý tưởng cho tháng lan tỏa giá trị cốt lõi · Mục tiêu: mỗi phòng có ít nhất một câu chuyện thật · Giới hạn: 1 tháng, ngân sách thấp",
        output: "Ma trận 4 ý tưởng × 4 tiêu chí có tổng điểm, mỗi điểm kèm một dòng căn cứ, 3 câu nhận xét theo 3 góc nhìn và kết luận kèm điều kiện thành công."
      },
      checks: ["Đổi trọng số tiêu chí xem kết luận có thay đổi không.", "Hỏi ý kiến người tham gia thật, không chỉ dựa vào góc nhìn AI đóng vai.", "Quyết định cuối cùng thuộc về người phụ trách."]
    },
    {
      id: "r5", group: "research", purpose: "danh-gia", rank: 5, added: "2026-11-11",
      title: "Phản biện, tìm lỗ hổng đề xuất",
      goal: "Để AI hỏi khó trước khi người duyệt hỏi, rồi củng cố đề xuất.",
      tools: ["Claude", "ChatGPT", "Gemini"], time: "Khoảng 5 phút",
      prompt: "Bạn là người phản biện độc lập (devil's advocate). Đây là đề xuất của tôi: [dán đề xuất]. Người duyệt là [đối tượng duyệt], họ quan tâm nhất tới [tiêu chí]. Hãy tìm lỗ hổng: 5 câu hỏi khó nhất người duyệt có thể hỏi, 3 giả định chưa được chứng minh, 3 rủi ro khi triển khai. Với mỗi điểm, gợi ý cách củng cố đề xuất. Trình bày dạng bảng: Điểm yếu | Vì sao đáng lo | Cách củng cố. Nói thẳng, cụ thể, không khen chung chung.",
      example: {
        input: "Đề xuất 2 trang cho ngày hội gia đình · Người duyệt: giám đốc khối · Quan tâm nhất: chi phí và tỉ lệ tham gia",
        output: "Bảng 11 dòng: 5 câu hỏi khó về chi phí, tỉ lệ tham gia, an toàn trẻ em; 3 giả định chưa có số liệu; 3 rủi ro triển khai, mỗi dòng có cách củng cố cụ thể."
      },
      checks: ["Chọn 2–3 điểm quan trọng nhất để sửa, không cần sửa hết.", "Cách củng cố cần số liệu thật, không lấy số AI gợi ý.", "Chuẩn bị sẵn câu trả lời cho 5 câu hỏi khó."]
    }
  ],

  clinic: [
    {
      id: "k1", tag: "Nội dung truyền thông", title: "Bài viết ra quá chung chung",
      before: "Viết bài về ngày hội gia đình.",
      problems: ["Không có vai trò: AI viết giọng trung tính, giống văn mẫu.", "Không có bối cảnh: ngày hội của đơn vị nào, cho ai, thông điệp gì?", "Không có định dạng và độ dài: nhận về một bài dài, nhiều đoạn sáo rỗng.", "Không có giới hạn: AI tự bịa ngày giờ, địa điểm, hoạt động cho đủ ý."],
      after: "Bạn là chuyên gia truyền thông nội bộ. [Đơn vị] tổ chức ngày hội gia đình cho cán bộ nhân viên và người thân, thông điệp \"[thông điệp]\". Thông tin đã chốt: [thời gian, địa điểm, 3 hoạt động chính]. Hãy viết bài đăng cho nhóm chat của đơn vị gồm tiêu đề tối đa 10 chữ, 2 câu mở đầu, 3 gạch đầu dòng hoạt động và lời mời đăng ký. Giọng ấm áp, tối đa 150 từ. Chỉ dùng thông tin đã cho; thiếu thì ghi \"cần bổ sung\".",
      why: ["Đủ 5 thành phần: vai trò, bối cảnh, nhiệm vụ, định dạng, ràng buộc.", "Thông tin thật được đưa vào trước, AI chỉ diễn đạt.", "Có lệnh ghi \"cần bổ sung\" nên dễ thấy chỗ còn thiếu, không bị bịa."]
    },
    {
      id: "k2", tag: "Tạo hình ảnh", title: "Hình tạo ra không đúng ý",
      before: "Vẽ poster ngày hội gia đình thật đẹp, có chữ \"Ngày hội gia đình\" và logo công ty.",
      problems: ["\"Thật đẹp\" không cho AI biết phong cách, màu sắc hay bố cục bạn muốn.", "Yêu cầu chữ tiếng Việt trong ảnh: công cụ tạo hình hay viết sai dấu, sai chữ.", "Yêu cầu vẽ logo: AI vẽ lại logo thường sai hình, và không nên tự chế logo thương hiệu.", "Không nói tỉ lệ khung và chỗ đặt chữ, nên khó dùng làm poster."],
      after: "Tạo hình minh họa cho poster dọc tỉ lệ 9:16 về ngày hội gia đình. Chủ thể: một gia đình nhỏ đang cùng xếp các khối màu trên sân cỏ buổi sáng. Phong cách 3D mềm, ánh sáng ấm, bảng màu cam và tím nhạt. Chủ thể đặt ở nửa dưới, chừa nửa trên trống để đặt chữ. Không có chữ, không có logo, không có khuôn mặt người thật nhận diện được.",
      why: ["Mô tả cụ thể chủ thể, bối cảnh, phong cách, màu, bố cục và tỉ lệ.", "Tách chữ và logo ra khỏi ảnh: thêm sau trong Canva bằng font và logo chuẩn.", "Muốn sửa thì sửa từng yếu tố một, ví dụ \"giữ nguyên, đổi ánh sáng thành buổi chiều\"."]
    },
    {
      id: "k3", tag: "Tổng hợp tài liệu", title: "Tổng hợp nhưng không kiểm chứng được",
      before: "Tóm tắt giúp tôi các hoạt động văn hóa nổi bật của công ty năm nay.",
      problems: ["AI không có tài liệu của bạn, nên trả lời từ trí nhớ chung hoặc bịa cho đủ ý.", "Không yêu cầu nguồn: không biết thông tin nào đúng, thông tin nào sai.", "Không nói dùng để làm gì, nên tóm tắt không đúng trọng tâm."],
      after: "(Dùng NotebookLM, tải lên các bản tin và báo cáo nội bộ đã được phép dùng.) Chỉ dựa vào các tài liệu đã tải lên, liệt kê 5 hoạt động văn hóa nổi bật năm [năm] để tôi đưa vào [bài tổng kết / slide báo cáo]. Mỗi hoạt động gồm: tên, thời điểm, kết quả chính, tên tài liệu và trích nguyên văn câu làm căn cứ. Thông tin nào tài liệu không có thì ghi \"không có trong tài liệu\", không tự bổ sung.",
      why: ["AI chỉ làm việc trên tài liệu bạn cung cấp, giảm khả năng bịa.", "Mỗi ý có trích dẫn nguyên văn, bạn mở file kiểm tra được ngay.", "Nói rõ mục đích sử dụng nên AI chọn đúng thông tin cần."]
    },
    {
      id: "k4", tag: "Dữ liệu nội bộ", title: "Dán nguyên dữ liệu có thông tin cá nhân",
      before: "Phân tích bảng khảo sát này giúp tôi: [dán nguyên bảng có họ tên, mã nhân viên, phòng ban].",
      problems: ["Đưa họ tên, mã nhân viên lên công cụ AI công cộng là rủi ro bảo mật.", "\"Phân tích\" quá rộng: AI không biết bạn cần đếm, nhóm chủ đề hay đề xuất.", "Không giới hạn suy diễn, AI có thể gán cảm xúc hoặc kết luận không có trong dữ liệu."],
      after: "(Trước khi dán: xóa cột họ tên, mã nhân viên, mọi chi tiết nhận diện.) Bạn là chuyên viên phân tích trải nghiệm nhân viên. Dưới đây là [số] phản hồi khảo sát sau [hoạt động], đã ẩn danh. Hãy nhóm thành 4–6 chủ đề, mỗi chủ đề ghi số lượt nhắc và 1 trích dẫn nguyên văn đại diện, rồi đề xuất 3 cải tiến. Trình bày dạng bảng. Chỉ đếm từ dữ liệu đã cho, không suy diễn cảm xúc khi phản hồi không nói rõ.",
      why: ["Ẩn danh trước khi dán, đúng nguyên tắc dữ liệu nội bộ.", "Nhiệm vụ cụ thể (nhóm chủ đề, đếm, trích dẫn, đề xuất) nên kết quả dùng được ngay.", "Có ràng buộc chống suy diễn, dễ kiểm tra lại."]
    }
  ]
};
