const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})
let hoverElements = Array.from(document.getElementsByClassName("hover_element"));

hoverElements.forEach(link => {
    link.addEventListener('mouseover', ()=>{
        cursor.classList.add('grow');
    })
    link.addEventListener('mouseleave', ()=>{
        cursor.classList.remove('grow');
    })
})
