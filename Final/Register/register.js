window.location.href = "/LOGIN/login.html";
const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.querySelector('input[name="username"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Lấy danh sách user đã lưu
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra trùng username
    const exist = users.find(user => user.username === username);
    if (exist) {
        alert("Tài khoản đã tồn tại!");
        return;
    }

    // Lưu user mới
    users.push({ username, phone, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");

    // Chuyển về login
    window.location.href = "../LOGIN/login.html";
});