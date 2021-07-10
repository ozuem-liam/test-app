const container = document.querySelector('.rating'),
items = container.querySelectorAll('.rating-item');

container.onclick = e => {
    const elClass = e.target.classList;
    if(!elClass.contains('active')) {
        items.forEach(
            item => item.classList.remove('active')
        );
        elClass.add('active');
    }
}