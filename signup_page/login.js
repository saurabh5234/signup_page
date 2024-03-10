document.addEventListener('DOMContentLoaded', () => {
  
    const navLinks = document.getElementById('company-links');
    const togglebtn = document.getElementById('nav-toggle');
    console.log('Button clicked!');
    togglebtn.addEventListener('click', ()=>{
      navLinks.classList.toggle('active');
    });
  })