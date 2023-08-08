let username = "furkan";
const DOMAIN = "kodluyoruz.org";

let email = username + "@" + DOMAIN;
console.log("Merhaba,", username, "sitemize hoşgeldin. Mail adresin:", email);

let info = `
Merhaba ${username} sitemize hoşgeldin. Mail adresin: ${email}
mail adresinin uzunlugu ${email.length}
borcunuz: ${(2 + 3) * 5}₺
gunun saat bilgisi: ${new Date().getHours()}
`;
console.log(info);

const kitap = { ad: "Fırtına", yazar: "Shakespeare", tarih: 1610 };
console.log(kitap);

const bookTable = `
<table border>
<tbody>
<tr>
<td>Kitap</td>
<td>${kitap.ad}</td>
</tr>
<tr>
<td>Yazar</td>
<td>${kitap.yazar}</td>
</tr>
<tr>
<td>Tarih</td>
<td>${kitap.tarih}</td>
</tr>
</tbody>
</table>`;

document.body.innerHTML = bookTable;
