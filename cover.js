window.addEventListener('scroll', handleScroll24);
  function handleScroll24() {
  const viewportHeight = window.innerHeight;
  var blurImage = document.querySelector('.section3a');
  var blurThing = document.querySelector('.section3a3');
  var blurThing2 = document.querySelector('.section3a4');
  var blurThing3 = document.querySelector('.section3a5');
  var blurThing4 = document.querySelector('.section3a6');
  var scrollDistance = -blurImage.getBoundingClientRect().top;
  var vhdistance = scrollDistance/viewportHeight*100;
  if(vhdistance<=-30)
  {
    blurThing.style.opacity = 0;
    blurThing2.style.opacity = 0;
    blurThing3.style.opacity = 0;
    blurThing4.style.opacity = 0;
  }
  if(vhdistance>-30&&vhdistance<=10)
  {
  
    blurThing.style.opacity = 1;
    blurThing2.style.opacity = 1;
    blurThing3.style.opacity = 0;
    blurThing4.style.opacity = 0;
  }
  if(vhdistance>10&&vhdistance<=120)
  {
    vhdistance=vhdistance-10;
    blurThing.style.right = `${(vhdistance*1.2)}vw`;
    blurThing2.style.left = `${(vhdistance*1.2)}vw`;
    blurThing3.style.opacity = 1;
    blurThing4.style.opacity = 0;
  }
  if(vhdistance>=120&&vhdistance<=150)
  {
    vhdistance=vhdistance-120;
    blurThing3.style.left = `${40-(vhdistance*1.2)}vw`;
  }
  if(vhdistance>150&&vhdistance<200)
  {
    blurThing3.style.opacity = 1;
    blurThing4.style.opacity = 1;
  }
  if(vhdistance>=200)
  {
    blurThing4.style.opacity = 0;
    
    blurThing3.style.opacity = 0;
  }
  }
  window.addEventListener('scroll', handleScroll30);
  function handleScroll30() {
  const viewportHeight = window.innerHeight;
  var blurImage = document.querySelector('.section4a');
  var blurThing = document.querySelector('.section4a3');
  var blurThing2 = document.querySelector('.section4a4');
  var blurThing3 = document.querySelector('.section4a5');
  var blurThing4 = document.querySelector('.section4a6');
  var scrollDistance = -blurImage.getBoundingClientRect().top;
  var vhdistance = scrollDistance/viewportHeight*100;
  console.log(vhdistance);
  if(vhdistance<-30)
  {
    blurThing.style.opacity = 0;
    blurThing2.style.opacity = 0;
    blurThing4.style.opacity = 0;
    blurThing3.style.opacity = 0;
  }
  if(vhdistance>-30&&vhdistance<=10)
  {
    blurThing.style.opacity = 0;
    blurThing2.style.opacity = 1;
    blurThing4.style.opacity = 1;
    blurThing3.style.opacity = 0;
  }
  if(vhdistance>10&&vhdistance<=50)
  {
    blurThing.style.opacity = 0;
    blurThing3.style.opacity = 1;
  }
  if(vhdistance>50&&vhdistance<=100)
  {
    blurThing.style.opacity = 0;
    vhdistance=vhdistance-50;
    blurThing2.style.left = `${(vhdistance*1.2)}vw`;
    blurThing4.style.left = `${-(vhdistance*1.2)}vw`;
  }
  if(vhdistance>100&&vhdistance<=180)
  {
    blurThing.style.opacity = 1;
  }
  if(vhdistance>180)
  {
    blurThing.style.opacity = 0;
    blurThing2.style.opacity = 0;
    blurThing3.style.opacity = 0;
    blurThing4.style.opacity = 0;
  }
  }
  window.addEventListener('scroll', handleScroll31);
  function handleScroll31() {
  const viewportHeight = window.innerHeight;
  var blurImage = document.querySelector('.section5a');
  var blurThing = document.querySelector('.section5a3');
  var blurThing2 = document.querySelector('.section5a4');
  var blurThing3 = document.querySelector('.section5a5');
  var blurThing4 = document.querySelector('.section5a6');
  var blurThing5 = document.querySelector('.section5a7');
  var scrollDistance = -blurImage.getBoundingClientRect().top;
  var vhdistance = scrollDistance/viewportHeight*100;
  
  if(vhdistance<-30)
  {
    blurThing.style.opacity = 0;
    blurThing2.style.opacity = 0;
    blurThing4.style.opacity = 0;
    blurThing3.style.opacity = 0;
    blurThing5.style.opacity = 0;
  }
  if(vhdistance>-30&&vhdistance<=10)
  {
    blurThing.style.opacity = 1;
    blurThing2.style.opacity = 1;
    blurThing4.style.opacity = 0;
    blurThing5.style.opacity = 0;
    blurThing3.style.opacity = 0;
  }
  if(vhdistance>10&&vhdistance<=43)
  {
    vhdistance=vhdistance-10;
    blurThing.style.left = `${-(vhdistance*1.2)}vw`;
    blurThing2.style.right = `${-(vhdistance*2.4)}vw`;
    blurThing4.style.opacity = `${(vhdistance*0.04)}`
    blurThing4.style.top = `${-(vhdistance*0.6)}vh`;
    blurThing5.style.opacity = 1;
    blurThing3.style.opacity = 0;
  }
  if(vhdistance>43&&vhdistance<=150)
  {
    vhdistance=vhdistance-43;
    blurThing5.style.right = `${(vhdistance*1.2)-40}vw`;
    blurThing3.style.opacity = 0;
  }
  if(vhdistance>65&&vhdistance<=150)
  {
    blurThing3.style.opacity = 1;
  }
  if(vhdistance>150)
  {
    blurThing.style.opacity = 0;
    blurThing2.style.opacity = 0;
    blurThing3.style.opacity = 0;
    blurThing4.style.opacity = 0;
    blurThing5.style.opacity = 0;
  }
  }