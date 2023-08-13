let items;
try {
  items.forEach((item) => console.log(item));
} catch (error) {
  console.log("Hata yönetimi düzgün çalışıyor");
  console.log(error);
}

let info = "kodluyoruz";
console.log(info);

s = Number(1234);
let convertedString = `${s}`;
try {
  let splitedList = s.split("");
  let reverseSplitedList = splitedList.reverse();
  let joinArray = reverseSplitedList.join("");
  console.log(joinArray);
} catch (error) {
  let splitedList = convertedString.split("");
  let reverseSplitedList = splitedList.reverse();
  let joinArray = reverseSplitedList.join("");
  console.log(joinArray);
}
