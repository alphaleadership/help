function extractDomain() {
    const linkInput = document.getElementById('link');
    const url = new URL(linkInput.value);
    const domain = url.hostname;
  
    console.log(domain);
  }
  