export let terminal = {
    data: document.querySelectorAll('.btn-terminal'),
    container: document.querySelector('#myterminal'),
    btnOpen: document.querySelector('#terminal'),
    minimize() {
        this.container.classList.remove('d-block')
    },
    close() {
        this.container.classList.remove('d-block')
    },
    maximize() {
       this.container.classList.toggle('full-terminal')
    },
    open(){
        this.container.classList.add('d-block')
    },
    load(){
      this.data[0].onclick = this.minimize.bind(this)
      this.data[1].onclick = this.maximize.bind(this)
      this.data[2].onclick = this.close.bind(this)
      this.btnOpen.onclick = this.open.bind(this)
    }
}
terminal.load()