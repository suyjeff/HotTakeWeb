const tabs = document.querySelectorAll('.tab-bar-item');
const tabsPages = document.querySelectorAll('.tab-page');
tabs.forEach(clickedTab => {
    clickedTab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active')
            // tabsPages.classList.remove('active-tab')
        });

        clickedTab.classList.add('active');
        // tabsPages.classList.add('active-tab');

    })
})