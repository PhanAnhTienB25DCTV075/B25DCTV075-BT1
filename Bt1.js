var homNay = new Date();       
var gio = homNay.getHours();   

var buoi;

if (gio < 12) {
  buoi = "Chào buổi sáng";
} else if (gio < 18) {
  buoi = "Chào buổi chiều";
} else {
  buoi = "Chào buổi tối";
}

document.getElementById("loi-chao").innerText =
  buoi + ", chào mừng bạn đến với trang của em.";

var danhSachMau = [
  { ten: "Trắng ngà",  ma: "#FBF7F0" },
  { ten: "Xanh lá",    ma: "#E7EDE5" },
  { ten: "Xanh biển",  ma: "#E4EAF2" },
  { ten: "Hồng nhạt",  ma: "#F3E7E2" },
  { ten: "Vàng nhạt",  ma: "#F7EFD9" }
];

var viTri = 0;   

var nut = document.getElementById("nut-doi-mau");

nut.addEventListener("click", function () {

  viTri = viTri + 1;

  // hết danh sách thì quay lại màu đầu tiên
  if (viTri >= danhSachMau.length) {
    viTri = 0;
  }

  var mau = danhSachMau[viTri];

  document.body.style.backgroundColor = mau.ma;

  document.getElementById("ten-mau").innerText = "Nền hiện tại: " + mau.ten;
});