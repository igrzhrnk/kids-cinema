'use strict';
function searchCartoons() {
    let searchField = document.querySelector('#search-cartoons');
    let itemsBlock = document.querySelector('.cartoon-view-section__cartoon-items');
    const items = itemsBlock.querySelectorAll('iframe');
    for(let i = 0; i < items.length; i++) {
        const item = items[i].title;
        if(item.toLowerCase().indexOf(searchField.value.toLowerCase()) > -1) {
            items[i].style.display = '';
        } else {
            items[i].style.display = 'none';
        }
    }
}