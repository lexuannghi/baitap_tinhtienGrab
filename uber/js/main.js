// hằng số về loại xe để tiện việc sử dụng và sửa đổi giống như đặt class
const UBER_CAR = "uberCar";
const UBER_SUV = "uberSUV";
const UBER_BLACK = "uberBlack";

//gọi sự kiện onclick cho nút tính tiền
document.querySelector(".tinhTien").onclick = function () {
  //lấy dữ liệu từ người dùng nhập
  //ở đây có thể dùng queryselector gọi tới các thẻ có một số thuộc tính bằng 1 giá trị mà ta muốn lấy vd: lấy input khi người dùng click chọn có thuộc tính name= selector
  //với các input có type là radio có thể sử dụng checked trong câu queryselector để xác định người dùng chọn thẻ input nào để tính tiền

  var loaiXe = document.querySelector("input[name='selector']:checked").value;
  var soKm = document.getElementById("txtKm").value * 1;
  var soThoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  console.log(soKm);
  console.log(soThoiGianCho);

  //số tiền của km đầu tiên từ 1 dến 19km, số tiền từ 19km trở lên
  var tienKmDauTien = giaTienKmDauTien(loaiXe);
  var tienKmTu1Den19 = giaTienKmTu1Den19(loaiXe);
  var tienKmTu19TroLen = giaTienKmTu19TroLen(loaiXe);

  //switch hàm giúp kiểm tra và lấy ra số tiền dựa trên người dùng chọn loại xe
  function giaTienKmDauTien(loaiXe) {
    switch (loaiXe) {
      case "UBER_CAR":
        return 8000;
      case "UBER_SUV":
        return 9000;
      case "UBER_BLACK":
        return 10000;
    }
  }
  function giaTienKmTu1Den19(loaiXe) {
    switch (loaiXe) {
      case "UBER_CAR":
        return 7500;
      case "UBER_SUV":
        return 8500;
      case "UBER_BLACK":
        return 9500;
    }
  }
  function giaTienKmTu19TroLen(loaiXe) {
    switch (loaiXe) {
      case "UBER_CAR":
        return 7000;
      case "UBER_SUV":
        return 8000;
      case "UBER_BLACK":
        return 9000;
    }
  }

  console.log(tienKmDauTien);
  console.log(tienKmTu1Den19);
  console.log(tienKmTu19TroLen);

  //trường hợp 1: người dùng đi 1km
  //trường hợp 2: người dùng đi từ 1 đến 19km
  //trường hợp 3: người dùng đi từ 19km trở lên
  var tong = 0;
  if (soKm > 0 && soKm <= 19) {
    tong = tienKmDauTien + (soKm - 1) * tienKmTu1Den19;
  } else {
    tong = tienKmDauTien + 18 * tienKmTu1Den19 + (soKm - 19) * tienKmTu19TroLen;
  }
  console.log(tong);
  //dom tới dev có id divThanhTien để cho hiện lên giao diện
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = `${tong.toLocaleString("it-IT", {
    currency: "VND",
    style: "currency",
  })}`;
};
