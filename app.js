class App{
    constructor(){
        this.btn = document.querySelector('button');
        this.paragraph = document.querySelector('#text');
        this.init()
    }

    init(){
        this.btn.addEventListener('click', this.makeJokes.bind(this));
    }

    makeJokes(){
        const jokeApi = fetch('https://api.chucknorris.io/jokes/random')
            .then(res => res.json())
            .then(data => this.paragraph.innerText = data.value)

    }
}

const runApp = new App()