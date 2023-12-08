// Menu data structure
const menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];




const mainEl = document.querySelector("main")
const topMenuEl = document.querySelector("#top-menu")


mainEl.style.backgroundColor = "var(--main-bg)"
mainEl.innerHTML = "<h1>DOM Manipulation</h1>"
mainEl.classList.add("flex-ctr")


topMenuEl.style.height = "100%;"
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
topMenuEl.classList.add("flex-around")

menuLinks.forEach(link => {
  let aEl = document.createElement("a")
  aEl.href = link.href 
  aEl.textContent = link.text
  topMenuEl.appendChild(aEl)
})
