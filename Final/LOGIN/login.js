const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra đăng nhập
    const user = users.find(u => 
        u.username === username && u.password === password
    );

    if (user) {
        alert("Đăng nhập thành công!");
        
        // lưu trạng thái login
        localStorage.setItem("currentUser", JSON.stringify(user));

        // chuyển trang (bạn đổi thành trang chính của bạn)
        window.location.href = "../index.html";
    } else {
        alert("Sai tài khoản hoặc mật khẩu!");
    }
});