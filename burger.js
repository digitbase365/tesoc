// Morphing Burger Icon{}
let menuh = document.getElementById('menuh')
let burger = document.getElementById('burger')
let nav = document.getElementById('nav')
let navlink = document.querySelectorAll('nav ul li a')

menuh.addEventListener('click', ()=>{
    menuh.classList.toggle('swish')
    burger.classList.toggle('swish')
    nav.classList.toggle('swish')
})

navlink.forEach((item) => {
    item.addEventListener('click', ()=>{
        menuh.classList.toggle('swish')
        burger.classList.toggle('swish')
        nav.classList.toggle('swish')

    });
})

// Click outside to close
document.onclick = function(e){
  e.stopPropagation()

  if(e.target.id !== 'nav' && e.target.id !== 'menuh'){
    menuh.classList.remove('swish')
    nav.classList.remove('swish')
  }
}

// End of Morphing Burger Icon{}