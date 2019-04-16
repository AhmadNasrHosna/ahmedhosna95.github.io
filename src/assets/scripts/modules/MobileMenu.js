class MobileMenu {
  constructor() {
    this.headerDrawer = document.querySelector('.jsHeaderDrawer');
    this.headerDrawerTrigger = document.querySelector('.jsHeaderDrawerTrigger');
    this.events();
  }

  events() {
    let drawerIsOpen = false;

    function handleHeaderDrawer(e) {
      let drawerTrigger = e.target.closest('.jsHeaderDrawerTrigger');
      let drawer = e.target.closest('.jsHeaderDrawer');

      showDrawer(drawerTrigger) // Show 
      hideDrawer(!drawer && !drawerTrigger) // Hide
    }

    function hideDrawerOnEsc(e) {      
      if (e.keyCode == '27' && drawerIsOpen) {
        document.body.classList.remove('header-drawer-is-visible');
      }
    }

    function showDrawer(target) {
      if (target) {
        document.body.classList.add('header-drawer-is-visible');
        drawerIsOpen = true;
      }
    }

    function hideDrawer(target) {
      if (target) {
        document.body.classList.remove('header-drawer-is-visible');
        drawerIsOpen = false;
      }
    }

    document.addEventListener('click', handleHeaderDrawer);
    document.addEventListener('keydown', hideDrawerOnEsc);

  }
}

export default MobileMenu;