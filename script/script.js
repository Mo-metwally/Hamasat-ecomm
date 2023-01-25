const bar = document.getElementById('bars');
const close = document.getElementById('close');
const nav = document.getElementById('nav-bar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}


if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
};



// nav-links-border

// const tabItems = document.querySelectorAll('.hover-home');
// const tabContentItems = document.querySelectorAll('.tab-content-item');
// //select tab content item
// function selectItem(e) {
//     removeBorder();
//     removeShow();
//     //add borber to current tab
//     this.classList.add('hover');
//     //Grab content item form BOM
//     const tabContentItem = document.querySelector(`#${this.id}-content`);
//     //add show class
//     tabContentItem.classList.add('show');
// }

// function removeBorder() {
//     tabItems.forEach(item => item.classList.remove('hover'));
// }


