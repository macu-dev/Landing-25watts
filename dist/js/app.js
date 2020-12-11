const header = document.querySelector('.header');
const  accordion = document.querySelector('#accordion');

window.addEventListener('scroll', changeColorNav);
accordion.addEventListener('click', showCloseContent);


function changeColorNav () {
  if(window.scrollY >= 53){
    header.style.backgroundColor = '#232526';
    header.style.borderBottom = 'none';
  }else{
    header.style.backgroundColor = 'transparent';
    header.style.borderBottom = '1px solid #E0752F';
  }
}


//accordion 
function showCloseContent (e) {
  if(e.target.classList.contains('card-header__button') || e.target.classList.contains('button-img'))  {
    const arrow =  (e.target.nodeName === 'IMG' ? e.target.parentElement : e.target)
    const content = arrow.parentElement.parentElement.children[1];
  
    if(content.style.maxHeight) {
      content.style.maxHeight = null;
      arrow.style.transform = 'rotate(0deg)'
    }else{
      content.style.maxHeight = content.scrollHeight + "px";
      arrow.style.transform = 'rotate(180deg)'
    }

  }
}

