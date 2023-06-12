


const menuToggle = () => {
    const aside = document.querySelector('.aside');
    const body = document.querySelector('.body');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.lni.lni-close');
    aside.classList.toggle('active');
    body.classList.toggle('active');
    menuIcon.classList.toggle('active');
    closeIcon.classList.toggle('active');
  }
  
  const menuIcon = document.querySelector('.menu-icon');
  menuIcon.addEventListener('click', menuToggle);
  const closeIcon = document.querySelector('.lni.lni-close');
  closeIcon.addEventListener('click', menuToggle);

