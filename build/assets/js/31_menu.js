const menuWrapper = document.getElementsByClassName('side-menu-wrapper')[0];
const hoverElements    = document.getElementsByClassName('side-menu-item');
const menuImageHandler = (e) => {
    const menuWrapperLeftOffset = menuWrapper.offsetLeft;
    const hoveredItem           = e.target;
    const hoveredItemImage      = hoveredItem.childNodes[3];
    if(hoveredItem.classList.contains('side-menu-item')) {
        const hoveredItemImageOffsetLeft = e.clientX - menuWrapperLeftOffset - 70;
        if(hoveredItemImageOffsetLeft > 0) {
            hoveredItemImage.style.left = hoveredItemImageOffsetLeft + 'px'
        }
    }
}
const menuToggle = (e) => {
    if(e.target.classList.contains('menu-link__has-child')) {
        e.preventDefault();
    }
    const menuBg = document.querySelector('#menu-bg');
    const targetElement = e.target;
    const subMenu = e.target.attributes[2].value;
    !menuBg.classList.contains('active') && menuBg.classList.add('active');
    animateSubmenu(subMenu);
    if(!menuWrapper.classList.contains('active') && !targetElement.classList.contains('active')) {
        changeSubmenu(subMenu);
        targetElement.classList.add('active');
        menuWrapper.style.display = 'block';
        document.querySelectorAll('.menu-link').forEach((item) => {
            item.classList.add('muted');
        })
        setTimeout(() => {
            menuWrapper.classList.add('active');
        }, 100)
    } else if(menuWrapper.classList.contains('active') && targetElement.classList.contains('active')) {
        closeSubmenu()
    }
    if(menuWrapper.classList.contains('active') && !targetElement.classList.contains('active')) {
        document.querySelectorAll('.menu-link').forEach((item) => {
            item.classList.remove('active');
            item.classList.add('muted');
        })
        targetElement.classList.add('active');
        changeSubmenu(subMenu);
    }
}
const closeSubmenu = () => {
    const menuBg = document.querySelector('#menu-bg');
    document.querySelectorAll('.menu-link').forEach((item) => {
        item.classList.remove('active');
        item.classList.remove('muted');
    })
    menuWrapper.classList.remove('active');
    menuBg.classList.remove('active')
    setTimeout(() => {
        menuWrapper.style.display = 'none';
    }, 430)
}
const changeSubmenu = (menuID) => {
    const submenu = document.getElementById(menuID);

    if(!submenu.classList.contains('active')) {
        document.querySelectorAll('.side-menu-list').forEach(menuItem => {
            if (menuItem.id !== menuID) {
                menuItem.style.display = 'none'
                menuItem.classList.remove('active');
            }
        });
    }

    submenu.style.display = 'block';
    submenu.classList.add('active');

}

const animateSubmenu = (submenuID) => {
    const menuItems = document.getElementById(submenuID).querySelectorAll('.side-menu-item');
    gsap.fromTo(menuItems,
        {
            x: 100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            stagger: function(index, target, list) {
                // your custom logic here. Return the delay from the start (not between each)
                return index * 0.1;
            }
        });
    console.log(menuItems);
}

document.querySelector('#menu-bg').addEventListener('click', closeSubmenu)
document.querySelectorAll('.menu-link').forEach(item => {
    item.addEventListener('click', menuToggle)
})
document.addEventListener('mousemove', menuImageHandler)