// Select elements
const userInput = document.querySelector('#inputText');
const generateBtn = document.querySelector('#generateBtn');
const qrImage = document.querySelector('#qrImage');
const form = document.querySelector('#myForm');
const copyBtn = document.querySelector('#copyBtn')

// API endpoint
const api = 'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=';

// Function to generate QR code
function generateQr(e) {
    e.preventDefault();

    // Validate user input
    if (userInput.value.trim() === '') {
        alert('Please enter some text');
        return;
    }

    // Generate QR code
    qrImage.src = api + userInput.value;

    // Clear input field
    // userInput.value = '';
}

// Function to copy QR code
// function copyQrCode() {
//     const qrCodeImage = qrImage;
//     const qrCodeDataURL = getQRCodeDataURL(qrCodeImage);
//     const textArea = document.createElement("textarea");
//     textArea.value = qrCodeDataURL;
//     document.body.appendChild(textArea);
//     textArea.select();
//     document.execCommand("copy");
//     document.body.removeChild(textArea);
//     alert("QR code copied to clipboard!");
// }

// Function to convert QR code image to data URL
// function getQRCodeDataURL(qrCodeImage) {
//     const canvas = document.createElement("canvas");
//     canvas.width = qrCodeImage.width;
//     canvas.height = qrCodeImage.height;
//     const ctx = canvas.getContext("2d");
//     ctx.drawImage(qrCodeImage, 0, 0);
//     return canvas.toDataURL();
// }

// Function to copy generated QR image
function copyQrImage() {
    const qrImageSrc = qrImage.src;
    const link = document.createElement('a');
    link.href = qrImageSrc;
    link.download = 'qr_code.png';
    link.target = '_blank';
    alert('QR code copied!');
    setTimeout(() => link.click(), 1000);
    
}



// Add event listener to copy button
copyBtn.addEventListener('click', copyQrImage);

// Add event listener to form
form.addEventListener('submit', generateQr);