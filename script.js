document.getElementById('icon').addEventListener('click', () => {
    const cartPopup = document.getElementById('cart');
    
    cartPopup.style.display = cartPopup.style.display === 'none' || cartPopup.style.display === '' ? 'block' : 'none';
});