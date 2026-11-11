# Ý AI? – Prompt Library

Thư viện prompt thực hành dùng chung cho nhiều vị trí công việc, khởi đầu từ workshop **“Ý AI? – Từ ý tưởng đến sản phẩm”**.

- Giao diện nhiều trang (điều hướng bằng `#/…`, chạy được trên GitHub Pages):
  - `#/` Trang chủ · `#/thu-vien` Thư viện (`#/thu-vien/<danh-mục>`, `#/thu-vien/vung/<p1–p5>`) · `#/prompt/<id>` Chi tiết prompt
  - `#/hoc-viet-prompt` Học viết prompt · `#/ui-design-audit` (`/quy-trinh`, `/bao-cao`, `/checklist`, `/vi-du`) · `#/prompt-builder` · `#/tai-nguyen`
  - Link cũ (`#prompt-ux1`, `#ui-design-audit`, `#danh-muc-…`) tự chuyển sang đường dẫn mới.
- Prompt Foundation: 5 thành phần Vai trò, Bối cảnh, Nhiệm vụ, Định dạng, Ràng buộc.
- 104 prompt theo 10 danh mục (UI Design Audit 12, các danh mục khác 10–11): Content & Communication, Design & Creative, Event & Culture, Office Productivity, Research & Analysis, Data & Reporting, Learning & HR, Sales & Customer Service, Project Management, UI Design Audit.
- Tìm kiếm và lọc kết hợp theo danh mục, đối tượng, mục tiêu công việc, công cụ AI, mức độ.
- Module UI Design Audit: 12 prompt theo 6 nhóm (A–F), lọc theo nhóm audit và vai trò, tùy chỉnh prompt theo bối cảnh, quy trình 6 bước, mẫu báo cáo, checklist. Mở thẳng bằng `#ui-design-audit`.
- Prompt Builder, Phòng khám prompt, AI Checklist.

## Bổ sung prompt

Toàn bộ dữ liệu nằm trong `prompts-data.js` (phần chú thích đầu file mô tả từng trường). Chép một khối trong mảng `prompts`, đổi `id` (không trùng), chọn `category`, `target_audiences`, `goals`, `difficulty`, sửa nội dung rồi commit. Trang tự hiển thị prompt mới, không cần build lại.

Prompt mẫu không chứa dữ liệu khách hàng hay thông tin nội bộ. Nội dung tài chính, pháp lý, nhân sự cần người có thẩm quyền kiểm tra trước khi sử dụng.
