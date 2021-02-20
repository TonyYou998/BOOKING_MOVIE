const initialState = {
  danhSachCuoc: [
    { ma: "ga", hinhAnh: "./img/baucua/ga.png", diemCuoc: 0 },
    { ma: "cua", hinhAnh: "./img/baucua/cua.png", diemCuoc: 0 },
    { ma: "ca", hinhAnh: "./img/baucua/ca.png", diemCuoc: 0 },
    { ma: "bau", hinhAnh: "./img/baucua/bau.png", diemCuoc: 0 },
    { ma: "nai", hinhAnh: "./img/baucua/nai.png", diemCuoc: 0 },
    { ma: "tom", hinhAnh: "./img/baucua/tom.png", diemCuoc: 0 },
  ],
  tongDiem: 100,
  mangXucXac: [
    { ma: "ga", hinhAnh: "./img/baucua/bau.png" },
    { ma: "cua", hinhAnh: "./img/baucua/cua.png" },
    { ma: "ca", hinhAnh: "./img/baucua/ca.png" },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 1:

    default:
      return state;
  }
};
