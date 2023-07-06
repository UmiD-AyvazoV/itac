const scrollUp = () => {
    this.scrollY >= 200 ? up.classList.add('show') : up.classList.remove('show');
};

window.addEventListener('scroll', scrollUp);