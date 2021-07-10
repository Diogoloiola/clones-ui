let terminal = {
    data: document.querySelectorAll('.btn-terminal'),
    container: document.querySelector('#myterminal'),
    btnOpen: document.querySelector('#terminal'),
    minimize() {
        console.log('ola mundo 1')
    },
    close() {
        this.container.classList.remove('d-block')
    },
    maximize() {
        console.log('ola mundo 3')
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