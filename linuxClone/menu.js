let menu = {
    container: document.querySelector('#menu'),
    btn: document.querySelector('#menu-icon'),
    open(){
        this.container.classList.toggle('d-none')
    },
    load(){
        this.btn.onclick = this.open.bind(this)
    }
}
menu.load()