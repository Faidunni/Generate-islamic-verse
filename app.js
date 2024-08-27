const text = [
  `Surah Al-Baqarah (2:286): "Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned."`,
  `Surah Ar-Rahman (55:13): "So which of the favors of your Lord would you deny?"`,
  `Surah Al-Asr (103:1-3): "By time, Indeed, mankind is in loss, Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience."`,
  `Surah At-Tawbah (9:51): "Say, 'Never will we be struck except by what Allah has decreed for us; He is our protector.' And upon Allah let the believers rely."`,
  `Surah Al-Ankabut (29:69): "And those who strive for Us – We will surely guide them to Our ways. And indeed, Allah is with the doers of good."`,
  `Surah Ash-Sharh (94:6-7): "Indeed, with hardship comes ease. So when you have finished [your duties], then stand up [for worship]."`,
  `Surah Al-Anfal (8:10): "And Allah made it not but good tidings and so that your hearts would be assured thereby. And victory is not except from Allah. Indeed, Allah is Exalted in Might and Wise."`,
  `Surah Al-Baqarah (2:186): "And when My servants ask you concerning Me – indeed I am near. I respond to the invocation of the supplicant when he calls upon Me."`,
];

const form = document.querySelector(".form-lorem");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);

  if (isNaN(value) || value <= 0 || value > 10) {
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p class="result">${item}</p>`;
      })
      .join("");
    result.innerHTML = tempText;
  }
});
