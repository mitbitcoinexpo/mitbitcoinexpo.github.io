(function () {
  window.onload = function () {
    window.setTimeout(fadeout, 0);
  };
  function fadeout() {
    document.querySelector(".page-loader").style.opacity = "0";
    document.querySelector(".page-loader").style.display = "none";
  }
  window.onscroll = function () {
    var header_navbar = document.querySelector(".navbar-area");
    var sticky = header_navbar.offsetTop;
    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");
    } else {
      header_navbar.classList.remove("sticky");
    }
  };

  var pageLink = document.querySelectorAll(".page-scroll");
  pageLink.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .querySelector(elem.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth", offsetTop: 1 - 60 });
    });
  });

  //======= menu-link-active =======//
  const links = document.querySelectorAll("#nav .nav-item a");

  function setActiveLink() {
    links.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  }

  links.forEach((link) => {
    link.addEventListener("click", setActiveLink);
  });

  const currentPath = window.location.pathname;
  links.forEach((link) => {
    const href = "/" + link.getAttribute("href");
    if (href === currentPath) {
      link.classList.add("active");
    }
  });

  //===== mobile-menu-btn
  let navbarToggler = document.querySelector(".navbar-toggler");
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
  });

  /**
   * hero-silder
   */
  new Swiper(".hero-silder", {
    speed: 6000,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    slidesPerView: "auto",
    // navigation: {
    // 	nextEl: ".btn-next",
    // 	prevEl: ".btn-prev",
    // },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 6
      },

      576: {
        slidesPerView: 2,
        spaceBetween: 15
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 10
      },

      992: {
        slidesPerView: 4,
        spaceBetween: 15
      },

      1200: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });
})();
