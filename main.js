const TEACHER_CONFIG = {
    name: "Nguyễn Ngô Ban",
    phoneZalo: "0849022888",
    email: "689ban@gmail.com",
    facebook: "https://www.facebook.com/bannguyen.cb",
    location: "Cao Bằng"
};

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link, .nav-cta");

    if (hamburger && navbar) {
        hamburger.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navbar.classList.remove("active");
            });
        });
    }

    const filterBtns = document.querySelectorAll("#resource-filters .filter-btn");
    const resourceItems = document.querySelectorAll("#resources-list .resource-item");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const selectedFilter = btn.getAttribute("data-filter");

            resourceItems.forEach(item => {
                const category = item.getAttribute("data-category");
                if (selectedFilter === "all" || selectedFilter === category) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    const infoModal = document.getElementById("info-modal");
    const infoModalTitle = document.getElementById("info-modal-title");
    const infoModalBody = document.getElementById("info-modal-body");
    const infoModalClose = document.getElementById("info-modal-close");
    const infoModalOk = document.getElementById("info-modal-ok");
    const infoModalOverlay = document.getElementById("info-modal-overlay");
    const modalEnrollBtn = document.getElementById("modal-enroll-btn");

    const courseData = {
        basic: {
            title: "Chi Tiết Khóa Căn Bản – Bù Đắp Kiến Thức",
            html: `
                <p><strong>Mục tiêu khóa học:</strong> Giúp học sinh nắm vững toàn bộ kiến thức nền tảng trong sách giáo khoa, xóa bỏ tâm lý sợ học và xây dựng thói quen tự giác.</p>
                <br>
                <p><strong>Nội dung trọng tâm:</strong></p>
                <ul style="list-style: disc; padding-left: 20px; margin-top: 8px;">
                    <li>Hệ thống hóa lý thuyết từng chương bằng sơ đồ tư duy ngắn gọn.</li>
                    <li>Rèn kỹ năng trình bày bài tập cơ bản chuẩn xác, không mất điểm bước trung gian.</li>
                    <li>Kiểm tra đánh giá ngắn 15 phút đầu giờ để củng cố kiến thức buổi trước.</li>
                </ul>
            `
        },
        advanced: {
            title: "Chi Tiết Khóa Nâng Cao – Tư Duy Logic",
            html: `
                <p><strong>Mục tiêu khóa học:</strong> Phát triển khả năng suy luận sắc bén, giải quyết các câu hỏi phân loại điểm 9, 10 và bồi dưỡng học sinh khá giỏi.</p>
                <br>
                <p><strong>Nội dung trọng tâm:</strong></p>
                <ul style="list-style: disc; padding-left: 20px; margin-top: 8px;">
                    <li>Phân tích chuyên sâu các dạng bài tập vận dụng và vận dụng cao.</li>
                    <li>Rèn luyện nhiều cách giải cho một bài toán để mở rộng tư duy.</li>
                    <li>Bồi dưỡng kỹ năng tự nghiên cứu tài liệu nâng cao.</li>
                </ul>
            `
        },
        exam: {
            title: "Chi Tiết Khóa Luyện Thi Chuyển Cấp & Định Kỳ",
            html: `
                <p><strong>Mục tiêu khóa học:</strong> Tổng ôn toàn diện kiến thức, rèn bản lĩnh phòng thi và tối ưu hóa điểm số thực chiến.</p>
                <br>
                <p><strong>Nội dung trọng tâm:</strong></p>
                <ul style="list-style: disc; padding-left: 20px; margin-top: 8px;">
                    <li>Luyện đề chuẩn cấu trúc, bấm giờ nghiêm túc như thi thật.</li>
                    <li>Phân tích chi tiết các lỗi sai thường gặp của từng học sinh.</li>
                    <li>Hướng dẫn chiến thuật phân bổ thời gian làm bài hiệu quả.</li>
                </ul>
            `
        }
    };

    const docData = {
        doc1: {
            title: "Tài liệu 01: Sổ tay công thức và phương pháp ghi nhớ nhanh",
            html: `
                <p>Tài liệu bao gồm 25 trang tóm tắt toàn bộ công thức cốt lõi và các mẹo ghi nhớ nhanh dành cho học sinh.</p>
                <p style="margin-top: 12px;"><strong>Hướng dẫn nhận file đầy đủ:</strong> Quý phụ huynh và các em học sinh có thể nhắn tin trực tiếp qua Zalo <strong>0849022888</strong> (Thầy Nguyễn Ngô Ban) hoặc đăng ký ở biểu mẫu bên dưới để nhận link tải bản PDF chất lượng cao hoàn toàn miễn phí.</p>
            `
        },
        doc2: {
            title: "Tài liệu 02: Bộ 50 câu hỏi ôn tập trọng tâm học kỳ",
            html: `
                <p>Bộ đề gồm 50 câu hỏi trắc nghiệm và tự luận có lời giải chi tiết từng bước, giúp học sinh tự đánh giá năng lực trước kỳ thi.</p>
                <p style="margin-top: 12px;"><strong>Hướng dẫn nhận file đầy đủ:</strong> Nhắn Zalo tới số <strong>0849022888</strong> với cú pháp <em>"Xin tài liệu 02"</em> để thầy gửi file trực tiếp.</p>
            `
        },
        doc3: {
            title: "Tài liệu 03: Hướng dẫn tự học hiệu quả tại nhà",
            html: `
                <p>Cẩm nang thiết lập mục tiêu học tập, phương pháp chia nhỏ thời gian Pomodoro và bài tập thực hành rèn sự tập trung.</p>
                <p style="margin-top: 12px;"><strong>Hướng dẫn nhận file đầy đủ:</strong> Kết nối Zalo <strong>0849022888</strong> hoặc gửi email về <strong>689ban@gmail.com</strong> để nhận trọn bộ học liệu.</p>
            `
        }
    };

    function openInfoModal(title, contentHtml) {
        infoModalTitle.textContent = title;
        infoModalBody.innerHTML = contentHtml;
        infoModal.classList.add("open");
    }

    function closeInfoModal() {
        infoModal.classList.remove("open");
    }

    document.querySelectorAll(".course-detail-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const key = btn.getAttribute("data-course");
            if (courseData[key]) {
                openInfoModal(courseData[key].title, courseData[key].html);
            }
        });
    });

    document.querySelectorAll(".download-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const key = btn.getAttribute("data-doc");
            if (docData[key]) {
                openInfoModal(docData[key].title, docData[key].html);
            }
        });
    });

    [infoModalClose, infoModalOk, infoModalOverlay, modalEnrollBtn].forEach(el => {
        if (el) el.addEventListener("click", closeInfoModal);
    });

    const videoCards = document.querySelectorAll(".video-card");
    const videoModal = document.getElementById("video-modal");
    const videoIframe = document.getElementById("video-iframe");
    const videoModalTitle = document.getElementById("video-modal-title");
    const videoModalClose = document.getElementById("video-modal-close");
    const videoModalOverlay = document.getElementById("video-modal-overlay");

    videoCards.forEach(card => {
        card.addEventListener("click", () => {
            const videoId = card.getAttribute("data-video-id");
            const videoTitle = card.getAttribute("data-video-title");
            videoModalTitle.textContent = videoTitle;
            videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            videoModal.classList.add("open");
        });
    });

    function closeVideoModal() {
        videoModal.classList.remove("open");
        videoIframe.src = "";
    }

    if (videoModalClose) videoModalClose.addEventListener("click", closeVideoModal);
    if (videoModalOverlay) videoModalOverlay.addEventListener("click", closeVideoModal);

    const enrollmentForm = document.getElementById("enrollment-form");
    const formMessage = document.getElementById("form-message");
    const sendZaloBtn = document.getElementById("send-zalo-btn");
    const sendEmailBtn = document.getElementById("send-email-btn");

    function getFormData() {
        const parentName = document.getElementById("parentName").value.trim();
        const studentName = document.getElementById("studentName").value.trim();
        const studentGrade = document.getElementById("studentGrade").value.trim();
        const phoneZalo = document.getElementById("phoneZalo").value.trim();
        const preferredShift = document.getElementById("preferredShift").value;
        const learningGoal = document.getElementById("learningGoal").value.trim();

        return { parentName, studentName, studentGrade, phoneZalo, preferredShift, learningGoal };
    }

    function validateForm(data) {
        if (!data.parentName || !data.studentName || !data.studentGrade || !data.phoneZalo) {
            formMessage.className = "form-message error";
            formMessage.textContent = "Vui lòng điền đầy đủ Họ tên Phụ huynh, Họ tên Học sinh, Khối lớp và Số điện thoại liên hệ.";
            return false;
        }
        return true;
    }

    function buildRegistrationMessage(data) {
        return [
            `ĐĂNG KÝ HỌC VIÊN MỚI - LỚP THẦY NGUYỄN NGÔ BAN`,
            `- Họ tên phụ huynh: ${data.parentName}`,
            `- Họ tên học sinh: ${data.studentName} (${data.studentGrade})`,
            `- SĐT / Zalo liên hệ: ${data.phoneZalo}`,
            `- Ca học quan tâm: ${data.preferredShift}`,
            `- Mục tiêu học tập: ${data.learningGoal || "Trao đổi thêm khi tư vấn"}`
        ].join("\n");
    }

    function openMailClient(data) {
        const subject = encodeURIComponent(`Đăng ký học viên: ${data.studentName} - Lớp ${data.studentGrade}`);
        const body = encodeURIComponent(buildRegistrationMessage(data));
        window.location.href = `mailto:${TEACHER_CONFIG.email}?subject=${subject}&body=${body}`;
    }

    function openZaloConnect(data) {
        const text = buildRegistrationMessage(data);
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).catch(() => {});
        }
        formMessage.className = "form-message success";
        formMessage.textContent = "Đã sao chép nội dung đăng ký! Đang mở Zalo của thầy Nguyễn Ngô Ban (0849022888), quý phụ huynh chỉ cần Dán (Paste) và gửi tin nhắn.";
        setTimeout(() => {
            window.open(`https://zalo.me/${TEACHER_CONFIG.phoneZalo}`, "_blank");
        }, 900);
    }

    if (enrollmentForm) {
        enrollmentForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const data = getFormData();
            if (!validateForm(data)) return;
            openMailClient(data);
        });
    }

    if (sendZaloBtn) {
        sendZaloBtn.addEventListener("click", () => {
            const data = getFormData();
            if (!validateForm(data)) return;
            openZaloConnect(data);
        });
    }

    if (sendEmailBtn) {
        sendEmailBtn.addEventListener("click", () => {
            const data = getFormData();
            if (!validateForm(data)) return;
            openMailClient(data);
        });
    }
});