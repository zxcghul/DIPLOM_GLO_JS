const slowScrollLink = () => {
    const link = document.querySelectorAll('.top-menu a');
    link.forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            const ref = e.target.getAttribute('href').substring(1),
                topPos = document.getElementById(ref).offsetTop;
            window.scrollTo({
                top: topPos,
                behavior: 'smooth'
            })
        })
    });
}

const scrollStart = () => {
    const link = document.querySelector('.up');
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}

export { slowScrollLink, scrollStart }