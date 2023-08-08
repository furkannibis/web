let email = "erlik.furkan@gmail.com";
let firstName = "Furkan";
let lastName = "ibis";

// lenght
console.log(`email lenght: ${email.length}`);

// first char
console.log(`First char of firstName: ${firstName[0]}`);
console.log(`First char of firstName: ${firstName.charAt(0)}`);

// Buyuk kucuk harf
firstName = firstName.toUpperCase();
console.log(`Firstname: ${firstName}`);

firstName = firstName.toLocaleLowerCase();
console.log(`Firstname: ${firstName}`);

// locate
console.log(
  `@ karakterinin lokasyonu: ${email.search("@")} \n${email.charAt(
    12
  )}\nOlmayan bir şey: ${email.search("olmayan")}`
);

// range belirlemek
console.log(`0'dan 10'a kadar: ${email.slice(0, 10)}`);
console.log(`Domain'e kadar al: ${email.slice(0, email.search("@"))}`);
console.log(
  `Domain'den sonrasını al: ${email
    .slice(email.search("@") + 1, email.length)
    .slice(0, email.indexOf("."))}`
);

// replace
email = email.replace("gmail.com", "kodluyoruz.org");
console.log(email);

// İstediğim bilgi var mı?
console.log(`Email'in içersinde "@" var mı: ${email.includes("@")}`);
console.log(`Email'in içersinde "?" var mı: ${email.includes("?")}`);

// İstediğim şeyle başlayıp bitti mi?
console.log(
  `email "kodluyoruz.org" ile mi bitti: ${email.endsWith("kodluyoruz.org")}`
);

// İlk harf büyük yapma
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(
  1,
  firstName.length
)} ${lastName[0].toUpperCase()}${lastName.slice(1, lastName.length)}`;
console.log(fullName);
