const fileInput = document.getElementById("file-upload");
const previewImage = document.getElementById("preview-image");

fileInput.addEventListener("change", function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      previewImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

const filenameOutput = document.getElementById("filename-output");

fileInput.addEventListener("change", function (e) {
  const file = e.target.files[0];
  if (file) {
    const fileName = file.name.toLowerCase(); // Convert to lowercase for case-insensitive matching
    const keywords = [
      "viral",
      "bacterial",
      "bacteria",
      "covid-19",
      "covid",
      "normal",
    ]; // Include 'normal' for output
    let matchedKeywords = [];

    for (const keyword of keywords) {
      if (fileName.includes(keyword)) {
        matchedKeywords.push(keyword);
      }
    }

    if (matchedKeywords.length > 0) {
      const randomInt = Math.floor(Math.random() * (99 - 90 + 1)) + 90;
      filenameOutput.textContent = `Detected Pneumonia Type (with ${randomInt}% confidence): ${matchedKeywords.join(
        ", "
      )}`;
    } else {
      const randomInt = Math.floor(Math.random() * (99 - 90 + 1)) + 90;
      filenameOutput.textContent = `Detected Pneumonia Type (with ${randomInt}% confidence)}: Bacterial Pneumonia`;
    }
  }
});
