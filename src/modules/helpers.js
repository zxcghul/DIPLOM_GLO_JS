function animate({timing, draw, duration}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      let progress = timing(timeFraction);
  
      draw(progress);
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }

const animateOpen = (count, item) => {
    item.style.display = 'block';
    if (document.body.clientWidth > 768) {
        item.style.opacity = count;
    } else {
        item.style.opacity = 1;
    }
}

const animateClose = (count, item) => {
    if (document.body.clientWidth > 768) {
        item.style.opacity = (1 - count);
    } else {
        item.style.opacity = 0;
    }
    if (item.style.opacity == 0) {
        item.style.display = 'none'; 
    }

}

const animateJump = (count, item) => {
    if (count < 0.9 && count > 0) {
        item.style.top = (count * (-200)) + "px";
    } else {
        item.style.top = 0 + 'px';
    }
    
}



export { animate, animateOpen, animateClose, animateJump}