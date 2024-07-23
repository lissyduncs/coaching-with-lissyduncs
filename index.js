// index.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const topnav = document.getElementById('topnav');

    hamburger.addEventListener('click', () => {
        if (topnav.style.display === 'flex') {
            topnav.style.display = 'none';
        } else {
            topnav.style.display = 'flex';
        }
    });
});
