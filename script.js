//header toggle
let MenuBtn = document.getElementById('MenuBtn');

MenuBtn.addEventListener('click', function(e){
  document.querySelector('body').classList.toggle('mobile-nav-active');
  this.classList.toggle('fa-xmark');
})


let typed = new Typed('.auto-input',{
  strings: ['Software Engineer..!','Web Developer..!','Frontend Developer..!','Freelancer..!',],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true
})


