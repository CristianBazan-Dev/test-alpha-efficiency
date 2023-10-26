    const hamburger = document.querySelector('.hamburger')

    const respMenu = document.querySelector('.resp-menu')

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle("active")
        respMenu.classList.toggle("active")
    })