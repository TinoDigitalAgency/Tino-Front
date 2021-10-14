let html = document.documentElement;
let body = document.body;
const scrollUpdaters = document.querySelectorAll('.scroll-update');

var scroller = {
    target: document.querySelector("#scroll-container"),
    ease: 0.1, // <= scroll speed
    endY: 0,
    y: 0,
    resizeRequest: 1,
    scrollRequest: 0,
};

var requestId = null;

if(scroller.target) {
    TweenLite.set(scroller.target, {
        rotation: 0,
        force3D: true
    });
}

window.addEventListener("load", onLoad);
window.addEventListener('resize', destroyScroller)

scrollUpdaters.forEach(scrollUpdater => {
    if(scroller.target) {
        scrollUpdater.addEventListener("click", () => {
            setTimeout(function () {
                body.style.height = scroller.target.clientHeight + "px"
            }, 500)
        })
    }
})



function onLoad() {
    if(window.innerWidth > 1024 && scroller.target) {
        updateScroller();
        window.focus();
        window.addEventListener("resize", onResize);
        document.addEventListener("scroll", onScroll, {passive: true});
    }
}

function destroyScroller() {
    if(window.outerWidth < 1025) {
        body.style.height = 'auto';
    }
}

function updateScroller() {
    var resized = scroller.resizeRequest > 0;
    if (resized) {
        var height = scroller.target.clientHeight;
        body.style.height = height + "px";
        scroller.resizeRequest = 0;
    }
    var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

    scroller.endY = scrollY;
    scroller.y += (scrollY - scroller.y) * scroller.ease;
    if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
        scroller.y = scrollY;
        scroller.scrollRequest = 0;
    }

    TweenLite.set(scroller.target, {
        y: -scroller.y
    });

    requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

const goToSecondScreen = () => {
    if(scroller.target) {
        if(window.outerWidth < 1025) {
            window.scrollBy({
                top: window.outerHeight,
                behavior: 'smooth'
            });
        } else {
            scroller.scrollRequest = 1;
            scroller.y = window.innerHeight;
            html.scrollTop = window.innerHeight;
            TweenLite.to(scroller.target, {
                y: -scroller.y
            });
            requestId = null
        }
    } else {
        window.scrollBy({
            top: window.outerHeight,
            behavior: 'smooth'
        });
    }
}

if (document.getElementById('scroll-down')) {
    document.getElementById('scroll-down').addEventListener('click', goToSecondScreen)
}

function onScroll() {
    scroller.scrollRequest++;
    if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
    }
}

function onResize() {
    scroller.resizeRequest++;
    if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
    }
}
