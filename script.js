document.addEventListener("DOMContentLoaded", function () {
  const contentArea = document.getElementById("content-area");
  const allItems = document.querySelectorAll(".sidebar-item, .nav-item");
  // Định nghĩa nội dung cho từng mục
  const pages = {
    "Trang Chủ": `
      <h1>Trang chủ</h1>
      <p>Xin chào! Đây là trang chủ của ứng dụng quản lý tài chính.</p>
    `,
    "Giới Thiệu": `
      <h1>Giới thiệu</h1>
      <p>Ứng dụng quản lý tài chính giúp bạn theo dõi thu chi và lập kế hoạch tài chính cá nhân. 
      Để có thể tự tin hơn trong việc chi tiêu hằng ngày , trang web này sẽ hỗ trợ bạn trong việc quản lý tài chính
       cá nhân một cách hiệu quả cùng với nguồn thu rõ ràng , minh bạch , dễ sử dụng. Trang Web do sinh viên 
       Trần Tuấn Kiệt - Mssv : 241A...43 thực hiện với mong muốn mang lại một trang web dễ sử dụng , dễ hiểu , dễ tiếp cận với mọi người.</p>
    `,
    "Mục 1": `
      <h1>Tổng quan tài chính</h1>
      <div class="dashboard-grid">
        <div class="card income"><h3>Tổng Thu</h3><p></p></div>
        <div class="card expense"><h3>Tổng Chi</h3><p></p></div>
      </div>
      <div class="recent-list">
        <h3>Giao dịch gần đây</h3>
        <ul>
          <li>Ăn sáng:</li>
          <li>Lương:</li>
        </ul>
      </div>
    `,
    "Mục 2": `
      <h1>Khoản thu chi</h1>
      <form id="finance-form">
        <input type="text" placeholder="Tên khoản chi (vd : Mua cơm)">
        <input type="number" placeholder="Số tiền">
        <select>
          <option>Ăn uống</option>
          <option>Di chuyển</option>
          <option>Học tập</option>
          <option>Giải trí</option>
          <option>Giao dịch khác</option>
        </select>
        <button type="submit">Thêm giao dịch</button>
      </form>
    `,
    "Mục 3": `
      <h1>Thống kê</h1>
      <p>Biểu đồ </p>
      `,
    // Bạn có thể thêm Mục 3, 4, 5 tương tự...
  };

  allItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const contentKey = this.getAttribute("data-content");

      // Kiểm tra nếu có nội dung trong object 'pages' thì hiển thị, không thì hiện thông báo đang phát triển
      contentArea.innerHTML =
        pages[contentKey] ||
        `<h1>${contentKey}</h1><p>Nội dung đang được cập nhật...</p>`;

      window.scrollTo(0, 0);
    });
  });
});
