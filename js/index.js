const searchPlace = document.querySelector('.place-dropdown'),
    searchDate = document.querySelector('.calendar-dropdown'),
    appartmentsDropdown = document.querySelector('.appartments-dropdown'),
    dropdownMenu = document.querySelector('.site-navigation');

toggleOpen = (domNode) => {
    domNode.classList.toggle('displayOn')
};

toggleOpenDate = (domNode) => {
    domNode.classList.toggle('displayNone')
};

toggleOpenMenu = (domNode) => {
    domNode.classList.toggle('site-navigationON')
};