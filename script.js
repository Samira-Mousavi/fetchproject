async function fetchdata() {
  const url = "https://random.dog/woof.json";
  const response = await fetch(url);
  const data = await response.json();
  const imageRandom = document.getElementById('imageRandom');
  imageRandom.src=data.url;
  // imageRandom.setAttribute('alt','samira')
  const fileSize = document.getElementById('fileSize');
  fileSize.innerHTML = data.fileSizeBytes;
  console.log(data);
};



