let panelText = document.querySelectorAll('.logo>div, li>div');
let menuItems = document.querySelectorAll('.menu1 li, .menu2 li');
let actionIcons = document.querySelectorAll('.actions li');

console.log(panelText);

window.addEventListener("resize", manageSidebar);
window.addEventListener("load", manageSidebar);



menuItems.forEach(m => {
    m.addEventListener('mouseover', spinzone);
    m.addEventListener('mouseleave', () => m.children[0].style.animation = 'none');
});

function manageSidebar() {
    let width = document.body.clientWidth;

    if(width < 1200) {
        panelText.forEach(p => {
            p.style.display = 'none';            
        });
        menuItems.forEach(m => m.style.justifyContent= 'center');
        actionIcons.forEach(a => {
            a.style.fontSize = '16px';
            a.style.flex = '0 1 60px';
        });


    } else {
        panelText.forEach(p => {
                p.style.display = 'inline';
        });
        menuItems.forEach(m => m.style.justifyContent= 'flex-start');
        actionIcons.forEach(a => {
            a.style.fontSize = '24px';
            a.style.flex = '0 1 100px';
        });
    }
}

function spinzone() {
    let cList = this.children;
    cList[0].style.animation = 'spin 1s';
}