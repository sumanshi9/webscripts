var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 8000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
    constructor(el) {
        this.el = el
        this.chars = '!<>-_\\/[]{}—=+*^?#________'
        this.update = this.update.bind(this)
    }
    setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
        }
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }
    update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
complete++
output += to
        } else if (this.frame >= start) {
if (!char || Math.random() < 0.28) {
char = this.randomChar()
this.queue[i].char = char
}
output += `<span class="dud">${char}</span>`
        } else {
output += from
        }
        }
        this.el.innerHTML = output
        if (complete === this.queue.length) {
        this.resolve()
        } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
    }
    
    // ——————————————————————————————————————————————————
    // Example
    // ——————————————————————————————————————————————————
    
    const phrases = [
    'Webscripts',
    'Transforming ideas into reality,',
    'one line at a time'
    // 'just as I did',
    // 'that there\'s a difference',
    // 'between knowing the path',
    // 'and walking the path'
    ]
    
    const el = document.querySelector('.text')
    const fx = new TextScramble(el)
    
    let counter = 0
    const next = () => {
    fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 1000)
    })
    counter = (counter + 1) % phrases.length
    }
    
    next()





//FAQ 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}

document.getElementById('animate-bottom').addEventListener('wheel', function(event) {
if (event.deltaY > 0) {
    event.target.scrollBy({
    top: window.innerHeight,
    left: 0,
    behavior: 'smooth'});
} else {
    event.target.scrollBy({
    top: -window.innerHeight,
    left: 0,
    behavior: 'smooth'});
    }
});


function toggleMenu() {
    var menuRight = document.getElementById("Topnav").getElementsByClassName("topnav-right")[0];
    menuRight.classList.toggle("active");
}