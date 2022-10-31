const faqTag = document.querySelectorAll('.faq');

// Hide other elements and change icon.
const hideTag = () =>{
    faqTag.forEach(item =>{
        item.classList.remove('open')
        item.children[1].innerHTML = '&#43;'
    })
}

// Toggle targeted element to show with froEach Loop.
faqTag.forEach(item =>{  
    item.addEventListener('click', e =>{
        if (e.target.className == 'btn') {
            hideTag()
            e.target.parentElement.classList.toggle('open');
            e.target.innerHTML = '&#8722;';
        }
    }) 
})