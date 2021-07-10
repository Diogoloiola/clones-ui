let clock = {
    content: document.querySelector('.hours'),
    load(){
        setInterval(this.create.bind(this), 1000)
    },
    create(){
        let date = new Date()
        let minutes = this.formatDate(date.getMinutes())
        let hours = this.formatDate(date.getHours())
        const finalHour = `${hours}:${minutes}`

        this.content.innerHTML = finalHour
        
    },
    formatDate(value){
        if(value < 10){
            return '0' + value
        }
        return value
    }
}
clock.load()