const qrText = document.getElementById("qrText");
const generateBtn = document.getElementById("generateBtn");
const qrCodeDiv = document.getElementById("qrCode");
const downloadBtn = document.getElementById("downloadBtn");

let qr;

generateBtn.addEventListener("click", () => {
    let text = qrText.value.trim();

    if (text === "") {
        alert("Enter a text or URL");
        return;
    }

    qrCodeDiv.innerHTML = "";

    qr = new QRCode(qrCodeDiv, {
        text: text,
        width: 200,
        height: 200
    });

    setTimeout(() => {
        downloadBtn.style.display = "inline-block";
    }, 500);
});

downloadBtn.addEventListener("click", () => {
    const img = grCodeDiv.querySelector("img");

    if (img) {
        const link = document.createElement("a");
        link.href = img.src;
        link.download = "qr-code.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});