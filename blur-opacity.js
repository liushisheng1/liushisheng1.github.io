window.addEventListener('scroll', handleScroll);
function handleScroll() {
  const viewportHeight = window.innerHeight;
  var blurImage = document.querySelector('.obvious1a');
  var blurImage2 = document.querySelector('.lss');
  var blurThing = document.querySelector('.section1')
  var scrollDistance = blurImage.getBoundingClientRect().top;
  var vhdistance = scrollDistance/viewportHeight*100
  if (vhdistance <=100 && vhdistance>-300) { 
    blurThing.style.filter = `blur(${7}px)`;
  }
  else{ 
    blurThing.style.filter = `blur(${0}px)`;
  }
  if(vhdistance<=45)
  {
    blurImage2.style.opacity = 1;
  }
  else
  {
    blurImage2.style.opacity = 0;
  }
  }
window.addEventListener('scroll', handleScroll2);
function handleScroll2() {
  const viewportHeight = window.innerHeight;
  var blurImage = document.querySelector('.obvious4');
  var blurThing = document.querySelector('.fade-in1')
  var scrollDistance = blurImage.getBoundingClientRect().top;
  var vhdistance = scrollDistance/viewportHeight*100
  
  if (vhdistance <18 ) { 
    blurThing.style.opacity = 1;
  }
  else{
    blurThing.style.opacity = 0;
  }
  }
  window.addEventListener('scroll', handleScroll3);
  function handleScroll3() {
  const viewportHeight = window.innerHeight;
  var blurImage = document.querySelector('.section4f2');
  var blurThing = document.querySelector('.section4f0');
  var scrollDistance = blurImage.getBoundingClientRect().top;
  var vhdistance = scrollDistance/viewportHeight*100;
  if (vhdistance <80) { 
    blurThing.style.opacity = 1;
  }
  if(vhdistance<30){
    blurThing.style.opacity = 0;
  }
  }
  window.addEventListener('scroll', handleScroll4);
  function handleScroll4() {
    const viewportHeight = window.innerHeight;
    var blurImage = document.querySelector('.section2T1a');
    var blurThing = document.querySelector('.en1');
    var blurThing2 = document.querySelector('.en2');
    var scrollDistance = blurImage.getBoundingClientRect().top;
    var vhdistance = -scrollDistance/viewportHeight*100;
    if (vhdistance <10) { 
      blurThing.style.opacity = 0;
      blurThing2.style.opacity = 0;
    }
    if (vhdistance >=10 && vhdistance <=100) { 
      blurThing2.style.opacity = 1;
    }
    if (vhdistance >100) { 
      blurThing2.style.opacity = 0;
      blurThing.style.opacity = 1;
    }

    }
  window.addEventListener('scroll', handleScroll5);
  function handleScroll5() {
  const viewportHeight = window.innerHeight;
  var blurImage = document.querySelector('.section5e1a');
  var blurImage2 = document.querySelector('.section5e1b');
  var blurImage3 = document.querySelector('.section5e1c');
  var blurImage4 = document.querySelector('.section5e1d');
  var blurImage5 = document.querySelector('.section5e1e');
  var blurThing = document.querySelector('.section5e1a')
  var blurThing2 = document.querySelector('.section5e1b')
  var blurThing3 = document.querySelector('.section5e1c')
  var blurThing4 = document.querySelector('.section5e1d')
  var blurThing5 = document.querySelector('.section5e1e');
  var scrollDistance = blurImage.getBoundingClientRect().top;
  var scrollDistance2 = blurImage2.getBoundingClientRect().top;
  var scrollDistance3 = blurImage3.getBoundingClientRect().top;
  var scrollDistance4 = blurImage4.getBoundingClientRect().top;
  var scrollDistance5 = blurImage5.getBoundingClientRect().top;
  var vhdistance = scrollDistance/viewportHeight*100;
  var vhdistance2 = scrollDistance2/viewportHeight*100;
  var vhdistance3 = scrollDistance3/viewportHeight*100;
  var vhdistance4 = scrollDistance4/viewportHeight*100;
  var vhdistance5 = scrollDistance5/viewportHeight*100;
  
  if(vhdistance==0)
  {
    blurThing.style.opacity=1;
  }
  if(vhdistance>0&&vhdistance<100)
  {
    blurThing.style.opacity=0;
  }
  if(vhdistance2==0)
  {
    blurThing2.style.opacity=1;
  }
  if(vhdistance2>0&&vhdistance<100)
  {
    blurThing2.style.opacity=0;
  }
  if(vhdistance3==0)
  {
    blurThing3.style.opacity=1;
  }
  if(vhdistance3>0&&vhdistance<100)
  {
    blurThing3.style.opacity=0;
  }
  if(vhdistance4==0)
  {
    blurThing4.style.opacity=1;
  }
  if(vhdistance4>0&&vhdistance<100)
  {
    blurThing4.style.opacity=0;
    
  }
  if(vhdistance5==0)
  {
    blurThing5.style.opacity=1;
  }
  if(vhdistance5>0&&vhdistance<100)
  {
    blurThing5.style.opacity=0;
  }
  }
  window.addEventListener('scroll', handleScroll15);
  function handleScroll15() {
  const viewportHeight = window.innerHeight;
  var blurImage = document.querySelector('.section5b1');
  var blurThing = document.querySelector('.section5b1')
  var blurImage2 = document.querySelector('.section5b2');
  var blurThing2 = document.querySelector('.section5b2')
  var scrollDistance = blurImage.getBoundingClientRect().top;
  var scrollDistance2 = blurImage2.getBoundingClientRect().top;
  var vhdistance = scrollDistance/viewportHeight*100;
  var vhdistance2 = scrollDistance2/viewportHeight*100;

  if (vhdistance <=40 ) { 
    blurThing.style.opacity = 1;
  }
 if(vhdistance2<=60)
 {
  blurThing2.style.opacity = 1;
 }
  }
  window.addEventListener('scroll', handleScroll29);
  function handleScroll29() {
  const viewportHeight = window.innerHeight;
  var blurImage = document.querySelector('.section2d');
  var blurThing = document.querySelector('.section2d2c')
  var scrollDistance = -blurImage.getBoundingClientRect().top;
  var vhdistance = scrollDistance/viewportHeight*100;
  if(vhdistance>50)
  {
    blurThing.style.opacity = 1;
  }
  if(vhdistance<=50)
  {
    blurThing.style.opacity = 0;
  }
  }
  window.addEventListener('scroll', handleScroll6);
  function handleScroll6() {
  const viewportHeight = window.innerHeight;
  var blurImage = document.querySelector('.section5c2a');
  var blurThing = document.querySelector('.section5c2a')
  var blurImage2 = document.querySelector('.section5c2b');
  var blurThing2 = document.querySelector('.section5c2b')
  var blurImage3 = document.querySelector('.section5c2c');
  var blurThing3 = document.querySelector('.section5c2c')
  var scrollDistance = blurImage.getBoundingClientRect().top;
  var scrollDistance2 = blurImage2.getBoundingClientRect().top;
  var scrollDistance3 = blurImage3.getBoundingClientRect().top;
  var vhdistance = scrollDistance/viewportHeight*100;
  var vhdistance2 = scrollDistance2/viewportHeight*100;
  var vhdistance3 = scrollDistance3/viewportHeight*100;
  
  if (vhdistance <=22.5) { 
    blurThing.style.opacity = 1;
  }
  else{
    blurThing.style.opacity = 0;
  }
 if(vhdistance2<=22.5)
 {
  blurThing.style.opacity = 0;
  blurThing2.style.opacity = 1;
 }
 else{
  blurThing2.style.opacity = 0;
}
 if(vhdistance3<=22.5)
 {
  blurThing2.style.opacity = 0;
  blurThing3.style.opacity = 1;
 }
 else{
  blurThing3.style.opacity = 0;
}
  }
  window.addEventListener('scroll', handleScroll7);
  function handleScroll7() {
  const viewportHeight = window.innerHeight;
  var blurImage = document.querySelector('.section5e');
  var blurThing = document.querySelector('.section5e1a')
  var blurThing2 = document.querySelector('.section5e1b')
  var blurThing3 = document.querySelector('.section5e1c')
  var blurThing4 = document.querySelector('.section5e1d')
  var blurThing5 = document.querySelector('.section5e1e');
  var blurThing6 = document.querySelector('.section5e1f');
  var blurThing7 = document.querySelector('.section5e1g');
  var scrollDistance = -blurImage.getBoundingClientRect().top;
  var vhdistance = scrollDistance/viewportHeight*100;
  
  if(vhdistance>0&&vhdistance<=60)
  {
    blurThing.style.opacity=1;
    blurThing6.style.opacity=0;
    blurThing7.style.opacity=0;
  }
  if(vhdistance>60&&vhdistance<=120)
  {
    blurThing.style.opacity=0;
    blurThing2.style.opacity=1;
    blurThing6.style.opacity=0;
    blurThing7.style.opacity=0;
  } if(vhdistance>120&&vhdistance<=180)
  {
    blurThing.style.opacity=0;
    blurThing2.style.opacity=0;
    blurThing3.style.opacity=1;
    blurThing6.style.opacity=0;
    blurThing7.style.opacity=0;
  } if(vhdistance>180&&vhdistance<=240)
  {
    blurThing.style.opacity=0;
    blurThing2.style.opacity=0;
    blurThing3.style.opacity=0;
    blurThing4.style.opacity=1;
    blurThing6.style.opacity=0;
    blurThing7.style.opacity=0;
  } if(vhdistance>240&&vhdistance<=300)
  {
    blurThing.style.opacity=0;
    blurThing2.style.opacity=0;
    blurThing3.style.opacity=0;
    blurThing4.style.opacity=0;
    blurThing5.style.opacity=1;
    blurThing6.style.opacity=0;
    blurThing7.style.opacity=0;
  }
  if(vhdistance>320)
  {
    blurThing6.style.opacity=1;
    blurThing7.style.opacity=0;
  }
  if(vhdistance>350)
  {
    blurThing7.style.opacity=1;
  }
  }
  window.addEventListener('scroll', handleScroll9);
  function handleScroll9() {
    const viewportHeight = window.innerHeight;
    var blurImage = document.querySelector('.section2f');
    var blurThing = document.querySelector('.section2fa');
    var blurThing2 = document.querySelector('.section2fb');
    var blurThing3 = document.querySelector('.section2fc');
    var blurThing4 = document.querySelector('.section2fd');
    var blurThing5 = document.querySelector('.section2fe');
    var scrollDistance = blurImage.getBoundingClientRect().top;
    var vhdistance = -scrollDistance/viewportHeight*100;
    if (vhdistance >=0) { 
      blurThing.style.opacity = 1;
    }
    else{
      blurThing.style.opacity = 0;
    }
    if (vhdistance >=150) { 
      blurThing2.style.opacity = 1;
    }
    else{
      blurThing2.style.opacity = 0;
    }
    if (vhdistance >=300) { 
      blurThing3.style.opacity = 1;
    }
    else{
      blurThing3.style.opacity = 0;
    }
    if (vhdistance >=450) { 
      blurThing4.style.opacity = 1;
    }
    else{
      blurThing4.style.opacity = 0;
    }
    if (vhdistance >=600) { 
      blurThing5.style.opacity = 1;
    }
    else{
      blurThing5.style.opacity = 0;
    }
    }
  window.addEventListener('scroll', handleScroll10);
  function handleScroll10() {
    const viewportHeight = window.innerHeight;
    var blurImage = document.querySelector('.section3b');
    var blurThing = document.querySelector('.section3b1c');
    var blurThing2 = document.querySelector('.section3b1d');
    var blurThing3 = document.querySelector('.section3b1e');
    var blurThing4 = document.querySelector('.section3b1f');
    var blurThing5 = document.querySelector('.section3b1g');
    var scrollDistance = blurImage.getBoundingClientRect().top;
    var vhdistance = -scrollDistance/viewportHeight*100;
    if (vhdistance <0 ) { 
      blurThing.style.opacity = 0;
      blurThing2.style.opacity = 0;
      blurThing3.style.opacity = 0;
      blurThing4.style.opacity = 0;
      blurThing5.style.opacity = 0;
    }
    if (vhdistance >=0 &&vhdistance <60) { 
      blurThing.style.opacity = 1;
      blurThing2.style.opacity = 0;
      blurThing3.style.opacity = 0;
      blurThing4.style.opacity = 0;
      blurThing5.style.opacity = 0;
    }
    if (vhdistance >=60 &&vhdistance <120) { 
      blurThing2.style.opacity = 1;
      blurThing.style.opacity = 0;
      blurThing3.style.opacity = 0;
      blurThing4.style.opacity = 0;
      blurThing5.style.opacity = 0;
    }
    if (vhdistance >=120 &&vhdistance <180) { 
      blurThing3.style.opacity = 1;
      blurThing2.style.opacity = 0;
      blurThing.style.opacity = 0;
      blurThing4.style.opacity = 0;
      blurThing5.style.opacity = 0;
    }
   
    if (vhdistance >=180 &&vhdistance <240) { 
      blurThing4.style.opacity = 1;
      blurThing3.style.opacity = 0;
      blurThing.style.opacity = 0;
      blurThing2.style.opacity = 0;
      blurThing5.style.opacity = 0;
    }
    if(vhdistance>=240 && vhdistance <280)
    {
      blurThing5.style.opacity = 1;
      blurThing.style.opacity = 0;
      blurThing2.style.opacity = 0;
      blurThing3.style.opacity = 0;
      blurThing4.style.opacity = 0;
    }
    if(vhdistance>=280)
    {
      blurThing5.style.opacity = 0;
    }
    }
    window.addEventListener('scroll', handleScroll11);
  function handleScroll11() {
    const viewportHeight = window.innerHeight;
    var blurImage = document.querySelector('.section3d');
    var blurThing = document.querySelector('.section3da2');
    var blurThing2 = document.querySelector('.section3da3');
    var blurThing3 = document.querySelector('.section3da4');
    var scrollDistance = blurImage.getBoundingClientRect().top;
    var vhdistance = -scrollDistance/viewportHeight*100;
    if(vhdistance<300)
    {
      blurThing.style.left=0;
      blurThing2.style.left =0;
      blurThing3.style.left =0;
    }
    if (vhdistance >=300 &&vhdistance <400) { 
      vhdistance=vhdistance-300;
      blurThing.style.left = `${(vhdistance*1.1)}vw`
      blurThing2.style.left =0;
      blurThing3.style.left =0;
    }
    if (vhdistance >=430 &&vhdistance <530) { 
      vhdistance=vhdistance-430;
      blurThing2.style.left = `${(vhdistance*1.1)}vw`;
      blurThing3.style.left =0;
    }
   
    if (vhdistance >=530 &&vhdistance <630) { 
      vhdistance=vhdistance-530;
      blurThing3.style.left = `${(vhdistance*1.1)}vw`
    }
    }
  window.addEventListener('scroll', handleScroll12);
  function handleScroll12() {
  const viewportHeight = window.innerHeight;
  var blurImage = document.querySelector('.section4cc');
  var blurThing = document.querySelector('.work1');
  var blurThing2 = document.querySelector('.work2');
  var scrollDistance = -blurImage.getBoundingClientRect().top;
  var vhdistance = scrollDistance/viewportHeight*100;
  if(vhdistance>20)
  {
    blurThing.style.opacity = 1;
  }
  if(vhdistance<=20)
  {
    blurThing.style.opacity = 0;
  }
  }
  window.addEventListener('scroll', handleScroll13);
  function handleScroll13() {
    const viewportHeight = window.innerHeight;
    var blurImage = document.querySelector('.section4d');
    var blurThing = document.querySelector('.fade-in15');
    var blurThing2 = document.querySelector('.fade-in16');
    var blurThing3 = document.querySelector('.fade-in17');
    var blurThing4 = document.querySelector('.fade-in18');
    var scrollDistance = blurImage.getBoundingClientRect().top;
    var vhdistance = -scrollDistance/viewportHeight*100;
    
    if (vhdistance <=180) { 
      blurThing.style.opacity = 1;
      blurThing2.style.opacity = 0;
      blurThing3.style.opacity = 0;
      blurThing4.style.opacity = 0;
    }
    if (vhdistance >180 &&vhdistance <280) { 
      blurThing2.style.opacity = 1;
      blurThing.style.opacity = 1;
      blurThing3.style.opacity = 0;
      blurThing4.style.opacity = 0;
    }
    if (vhdistance >=280 &&vhdistance <390) { 
      blurThing3.style.opacity = 1;
      blurThing2.style.opacity = 1;
      blurThing.style.opacity = 1;
      blurThing4.style.opacity = 0;
    }
   
    if (vhdistance >=390) { 
      blurThing4.style.opacity = 1;
      blurThing3.style.opacity = 1;
      blurThing.style.opacity = 1;
      blurThing2.style.opacity = 1;
    }
    }
  window.addEventListener('scroll', handleScroll14);
  function handleScroll14() {
  const viewportHeight = window.innerHeight;
  var blurImage = document.querySelector('.section0T0');
  var blurThing = document.querySelector('.fade-in10');
  var blurThing2 = document.querySelector('.fade-in11');
  var scrollDistance = -blurImage.getBoundingClientRect().top;
  var vhdistance = scrollDistance/viewportHeight*100;
  if(vhdistance>0 &&vhdistance<=50)
  {
    blurThing.style.opacity = 1;
  }
  if(vhdistance>50)
  {
    blurThing2.style.opacity = 1;
  }
  if(vhdistance<=0)
  {
    blurThing.style.opacity = 0;
    blurThing2.style.opacity = 0;
  }
  }
  window.addEventListener('scroll', handleScroll17);
  function handleScroll17() {
  const viewportHeight = window.innerHeight;
  var blurImage = document.querySelector('.section5b2');
  var blurThing = document.querySelector('.map1');
  var blurThing2 = document.querySelector('.map2');
  var blurThing3 = document.querySelector('.map3');
  var blurThing4 = document.querySelector('.map4');
  var blurThing5 = document.querySelector('.map5');
  var scrollDistance = -blurImage.getBoundingClientRect().top;
  var vhdistance = scrollDistance/viewportHeight*100;
  if( vhdistance<=150)
  {
    blurThing2.style.opacity =0;
  }
  if(vhdistance>150&&vhdistance<=280)
  {
    vhdistance=vhdistance-150;
    blurThing.style.opacity = 1-`${(vhdistance*0.04)}`;
    blurThing2.style.opacity =`${(vhdistance*0.04)}`;
    blurThing3.style.opacity =0;
    blurThing4.style.opacity = 0;
    blurThing5.style.opacity = 0;
  }
  if(vhdistance>280&&vhdistance<=410)
  {
    vhdistance=vhdistance-280;
    blurThing.style.opacity = 0;
    blurThing2.style.opacity = 1-`${(vhdistance*0.04)}`;
    blurThing3.style.opacity =`${(vhdistance*0.04)}`
    blurThing4.style.opacity = 0;
    blurThing5.style.opacity = 0;
  }
  if(vhdistance>410&&vhdistance<=540) 
  {
    vhdistance=vhdistance-410;
    blurThing.style.opacity = 0;
    blurThing2.style.opacity = 0;
    blurThing3.style.opacity = 1-`${(vhdistance*0.04)}`;
    blurThing4.style.opacity =`${(vhdistance*0.04)}`;
    blurThing5.style.opacity = 0;
  }
  if(vhdistance>540&&vhdistance<=670)
  {
    vhdistance=vhdistance-540;
    blurThing.style.opacity = 0;
    blurThing2.style.opacity = 0;
    blurThing3.style.opacity =0;
    blurThing4.style.opacity =1- `${(vhdistance*0.04)}`;
    blurThing5.style.opacity =`${(vhdistance*0.04)}`
  }
  if(vhdistance>670&&vhdistance<=800)
  {
    blurThing.style.opacity = 0;
    blurThing2.style.opacity = 0;
    blurThing3.style.opacity =0;
    blurThing4.style.opacity =0;
    blurThing5.style.opacity = 1;
  }
  if(vhdistance>800)
  {
    blurThing.style.opacity = 0;
    blurThing2.style.opacity = 0;
    blurThing3.style.opacity =0;
    blurThing4.style.opacity =0;
    blurThing5.style.opacity = 0;
  }
  }
  window.addEventListener('scroll', handleScroll18);
  function handleScroll18() {
  const viewportHeight = window.innerHeight;
  var blurImage = document.querySelector('.section3e');
  var blurThing = document.querySelector('.ticket');
  var blurThing3 = document.querySelector('.ticket3');
  var blurThing4 = document.querySelector('.ticket4');
  var blurThing5 = document.querySelector('.florish-key');
  var scrollDistance = -blurImage.getBoundingClientRect().top;
  var vhdistance = scrollDistance/viewportHeight*100;
  if (vhdistance <0) { 
    blurThing.style.opacity = 1;
    blurThing3.style.opacity = 0;
    blurThing4.style.opacity = 0;
  }
  if(vhdistance >=0 &&vhdistance<30)
  {
    blurThing.style.opacity = 0;
    blurThing3.style.opacity = 1;
    blurThing4.style.opacity = 1;
  }
  if(vhdistance>30)
  {
    vhdistance=vhdistance-30;
    blurThing4.style.left = `${(vhdistance)+50}vw`
    blurThing3.style.left = `${50-(vhdistance)}vw`
    blurThing.style.opacity = 0;
  }
  if(vhdistance<30)
  {
    blurThing5.style.opacity = 0;
  }
  if(vhdistance>30)
  {
    blurThing5.style.opacity = 1
  }
  }
  window.addEventListener('scroll', handleScroll19);
  function handleScroll19() {
    const viewportHeight = window.innerHeight;
    var blurImage = document.querySelector('.section4h');
    var blurThing2 = document.querySelector('.s2');
    var blurThing3 = document.querySelector('.s3');
    var scrollDistance = blurImage.getBoundingClientRect().top;
    var vhdistance = -scrollDistance/viewportHeight*100;
    if (vhdistance <-10) { 
      blurThing2.style.opacity = 0;
      blurThing3.style.opacity = 0;
    }
    if (vhdistance >=10&&vhdistance <110) { 
      blurThing2.style.opacity = 1;
      blurThing3.style.opacity = 0;
    }
    if (vhdistance >=110&&vhdistance <200) { 
      blurThing3.style.opacity = 1;
      blurThing2.style.opacity = 0;
    }
    if(vhdistance>=200)
    {
      blurThing3.style.opacity = 1;
      blurThing2.style.opacity = 0;
    }
    }
    window.addEventListener('scroll', handleScroll21);
    function handleScroll21() {
    const viewportHeight = window.innerHeight;
    var blurImage = document.querySelector('.section5c');
    var blurThing2 = document.querySelector('.section5c3');
    var scrollDistance = -blurImage.getBoundingClientRect().top;
    var vhdistance = scrollDistance/viewportHeight*100;
    if(vhdistance>150)
    {
      vhdistance=vhdistance-150;
      blurThing2.style.left = `${(vhdistance*1.1)}vw`
    }
    }
    window.addEventListener('scroll', handleScroll22);
    function handleScroll22() {
    const viewportHeight = window.innerHeight;
    var blurImage = document.querySelector('.fengmian');
    var blurThing = document.querySelector('.fengmian1');
    var scrollDistance = -blurImage.getBoundingClientRect().top;
    var vhdistance = scrollDistance/viewportHeight*100;
    if(vhdistance<=80)
    {
     blurThing.style.opacity = 0;
    }
    if(vhdistance>80)
    {
     blurThing.style.opacity = 1;
    }
    }
    window.addEventListener('scroll', handleScroll23);
  function handleScroll23() {
  const viewportHeight = window.innerHeight;
  var blurImage = document.querySelector('.transe');
  var blurThing = document.querySelector('.section5d1');
  var scrollDistance = -blurImage.getBoundingClientRect().top;
  var vhdistance = scrollDistance/viewportHeight*100;
  if(vhdistance>10)
  {
    blurThing.style.opacity = 0;
  }
  if(vhdistance<=10)
  {
    blurThing.style.opacity = 1;
  }
  }
  window.addEventListener('scroll', handleScroll36);
  function handleScroll36() {
  const viewportHeight = window.innerHeight;
  var blurImage = document.querySelector('.section5c');
  var blurThing = document.querySelector('.section5c1');
  var scrollDistance = -blurImage.getBoundingClientRect().top;
  var vhdistance = scrollDistance/viewportHeight*100;
  console.log(vhdistance);
  if(vhdistance<=-40)
  {
    blurThing.style.filter = `blur(${0}px)`;
  }
  if(vhdistance>-40&&vhdistance<100)
  {
    blurThing.style.filter = `blur(${7}px)`;
  }
  if(vhdistance>=100)
  {
    blurThing.style.filter = `blur(${0}px)`;
  }
  }
