const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 20; //500px

function shadow(e) {
  // console.log(e.offsetX, e.offsetY);
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;

  let x = e.offsetX;
  let y = e.offsetY;

  // console.log(width, height);
  // console.log(e.target.offsetLeft);

  if(this !== e.target){
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7)
`;
}

hero.addEventListener('mousemove', shadow);
