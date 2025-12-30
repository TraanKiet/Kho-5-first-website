document.addEventListener("DOMContentLoaded", function () {
  const contentArea = document.getElementById("content-area");
  const allItems = document.querySelectorAll(".sidebar-item");

  // Định nghĩa nội dung cho từng mục
  const pages = {
    "Mục 1": `
      <h1>Tổng quan tài chính</h1>
      <div class="dashboard-grid">
        <div class="card balance"><h3>Số dư</h3><p>10.000.000đ</p></div>
        <div class="card income"><h3>Tổng Thu</h3><p>+5.000.000đ</p></div>
        <div class="card expense"><h3>Tổng Chi</h3><p>-2.000.000đ</p></div>
      </div>
      <div class="recent-list">
        <h3>Giao dịch gần đây</h3>
        <ul>
          <li>Ăn sáng: -30.000đ</li>
          <li>Lương: +2.000.000đ</li>
        </ul>
      </div>
    `,
    "Mục 2": `
      <h1>Khoản thu chi</h1>
      <form id="finance-form">
        <input type="text" placeholder="Tên khoản chi (vd: Mua trà sữa)">
        <input type="number" placeholder="Số tiền">
        <select>
          <option>Ăn uống</option>
          <option>Di chuyển</option>
          <option>Học tập</option>
        </select>
        <button type="submit">Thêm giao dịch</button>
      </form>
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
