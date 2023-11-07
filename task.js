function toggleMenu() {
    const list = document.querySelector('.dropdown__list');
    list.classList.toggle('dropdown__list_active');
}

const value = document.querySelector('.dropdown__value');
value.addEventListener('click', toggleMenu)

const links = Array.from(document.querySelectorAll('.dropdown__link'));
for (const link of links) {    
    link.onclick = () => {
        toggleMenu()
        value.textContent = link.textContent
        
        // и запрет перехода по ссылке, без него страница будет обновляться
        return false 
    }
}
