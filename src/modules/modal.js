import { animate, animateOpen, animateClose } from "./helpers" 

const modal = () => {
    const modal = document.querySelector('.modal-callback'),
          modalOverlay = document.querySelector('.modal-overlay'),
          buttons = document.querySelectorAll('.fancyboxModal');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            animate({
                duration: 300,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                    animateOpen(progress, modal);
                    animateOpen(progress, modalOverlay);
                }
              });
        })
    });

    document.addEventListener('click', (e) => {  
        if (e.target.closest('.modal-close') ||e.target.classList.contains('modal-overlay')) {
            animate({
                duration: 300,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                      animateClose(progress, modal);    
                      animateClose(progress, modalOverlay);   
                }
              });
        }
    })
}


export default modal