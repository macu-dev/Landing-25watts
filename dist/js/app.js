const header = document.querySelector('.header');

window.addEventListener('scroll', changeColorNav);


function changeColorNav () {
  console.log(window.scrollY);
  if(window.scrollY >= 53){
    header.style.backgroundColor = '#232526';
    header.style.borderBottom = 'none';
  }else{
    header.style.backgroundColor = 'transparent';
    header.style.borderBottom = '1px solid #E0752F';
  }
}