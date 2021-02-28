let divQr = document.getElementById("qrcode");
var strong = document.querySelector("header  p strong");

let count = 0;

strong.innerHTML = count;

function newQRCode() {
  let url = document.getElementById("url").value;
  if (!url) {
    alert("Coloque um Link");
    return;
  }

  divQr.innerHTML = "";
  let colorBG = document.getElementById("bgColor").value;
  let colorCode = document.getElementById("codeColor").value;

  new QRCode(divQr, {
    text: url,
    width: 400,
    height: 400,
    colorLight: colorBG,
    colorDark: colorCode,
  });

  increment();

  setTimeout(() => {
    saveQRCode();
  }, 800);
}

function saveQRCode() {
  let btn = document.getElementById("download");
  let img = divQr.querySelector("img").src;
  btn.href = img;

  btn.classList.remove('disable');
}

function increment() {
  count++;
  strong.innerHTML = count;
}

