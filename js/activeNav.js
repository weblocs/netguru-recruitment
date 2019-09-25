let mainNavLinks = document.querySelectorAll(".navigation a");
        let mainSections = document.querySelectorAll(".content-box .content");
        let lastId;
        let cur = [];

        window.addEventListener("scroll", event => {
          let fromTop = window.scrollY + 250;

          mainNavLinks.forEach(link => {
            let section = document.querySelector(link.hash);

            if (
              section.offsetTop <= fromTop &&
              section.offsetTop + section.offsetHeight > fromTop
            ) {
              link.classList.add("current");
            } else {
              link.classList.remove("current");
            }
          });
        });