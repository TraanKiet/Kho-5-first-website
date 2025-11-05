document.addEventListener("DOMContentLoaded", function () {
  const contentArea = document.getElementById("content-area");
  // Lấy tất cả các mục từ thanh ngang và thanh dọc
  const allItems = document.querySelectorAll(".nav-item, .sidebar-item");
  allItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault(); // Ngăn chặn hành động chuyển trang mặc định của thẻ <a>
      // Lấy nội dung sẽ hiển thị từ thuộc tính data-content
      const newContent = this.getAttribute("data-content");
      // Cập nhật nội dung cho khu vực chính
      contentArea.innerHTML = `
                      <h2>${newContent}</h2>
                      <p>Bạn đã click vào mục: **${newContent}**. Đây là nội dung chi tiết cho mục này.</p>
                      <p>Nội dung này có thể được tải từ server thông qua AJAX/Fetch để có nội dung động.</p>
                  `;
      // Nếu bạn muốn cuộn lên đầu trang sau khi click
      window.scrollTo(0, 0);
    });
  });
});
