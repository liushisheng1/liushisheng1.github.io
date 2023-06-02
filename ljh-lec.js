window.addEventListener('scroll', fadeIn);
  function fadeIn() {
    var container = document.querySelector('.section0T2');
    var image1 = document.querySelector('.fade-in');
    const boxTop = container.offsetTop;
    if(boxTop<=300)
    {
      image1.style.opacity = 0;
    }
    else if(boxTop>300)
    {
      image1.style.opacity = 1;
    }
  }
window.addEventListener('scroll',fadeIn8);
function fadeIn8()
{
  var container1 = document.querySelector('.section4ba');
  var image1 = document.querySelector('.section4b1')
  var image2 = document.querySelector('.section4b2')
  var image3 = document.querySelector('.section4b3')
  var image4 = document.querySelector('.section4b4')
  const boxTop = container1.offsetTop;
  if(boxTop<100)
  {
  image1.style.opacity=0;
  image2.style.opacity=0;
  image3.style.opacity=0;
  image4.style.opacity=0;
  }
  if(boxTop>=100&&boxTop<350)
  {
  image1.style.opacity=1;
  image2.style.opacity=0;
  image3.style.opacity=0;
  image4.style.opacity=0;
  }
  if(boxTop>=350&&boxTop<600)
  {
  image1.style.opacity=1;
  image2.style.opacity=1;
  image3.style.opacity=0;
  image4.style.opacity=0;
  }
  if(boxTop>=600&&boxTop<850)
  {
  image1.style.opacity=1;
  image2.style.opacity=1;
  image3.style.opacity=1;
  image4.style.opacity=0;
  }
  if(boxTop>=850&&boxTop<1050)
  {
  image1.style.opacity=1;
  image2.style.opacity=1;
  image3.style.opacity=1;
  image4.style.opacity=1;
  }
  if(boxTop>1050)
  {
  image1.style.opacity=0;
  image2.style.opacity=0;
  image3.style.opacity=0;
  image4.style.opacity=0;
  }
}

