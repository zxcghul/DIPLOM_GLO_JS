
const accardion = () => {
    const title = document.querySelectorAll('.accordeon .title'),
        content = document.querySelectorAll('.accordeon .element-content'),
        elements = document.querySelectorAll('.accordeon .element');



    for (let index = 0; index < content.length; index++) {
        content[index].classList.add('element-content__inactive');
        content[0].classList.remove('element-content__inactive');
    }

    elements.forEach((elem, index) => {
        
        elem.addEventListener( 'click', (e) => {
            let mass = document.querySelectorAll('.accordeon .active')
            elem.classList.toggle('active');
            content[index].classList.toggle('element-content__inactive');
            if (elem.classList.contains('active')) {
                mass.forEach((el) => {
                    el.classList.remove('active');
                    el.querySelector('.element-content').classList.add('element-content__inactive')
                })
            }
        })
        
    });


        
}

export default accardion