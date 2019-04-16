class RevealEffect {
  constructor() {
    this.introBg = document.querySelector('.intro-hero__background picture');
    this.targetsElements = Array.from(document.querySelectorAll('.reveal-on-scroll'));
    this.events();
  }

  events() {
    const that = this;
    let currentScrollY = 0;

    function handleHeaderReveal() {
      currentScrollY = pageYOffset;

      that.targetsElements.forEach(element => {
        const targetElement = that.getCoords(element).top + (that.getCoords(element).height / 2) ;

        if (currentScrollY + document.documentElement.clientHeight > targetElement) {
          element.classList.add('reveal-is-hidden')
        }
      });
    }

    window.addEventListener('load', () => {
      that.introBg.classList.add('reveal-is-hidden');
    });

    window.addEventListener('scroll', handleHeaderReveal); // debounce is ungly?
  }

  getCoords(elem) {
    const box = elem.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      bottom: box.bottom + pageYOffset,
      height: (box.bottom + pageYOffset) - (box.top + pageYOffset)
    }
  }

}

export default RevealEffect;