import React, { useEffect} from 'react';
import "./Header.css";

function Header() {

    

    // ——————————————————————————————————————————————————
    // TextScramble
    // ——————————————————————————————————————————————————
    class TextScramble {
      constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
      }
    
      setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => this.resolve = resolve);
        this.queue = [];
    
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || '';
          const to = newText[i] || '';
          const start = Math.floor(Math.random() * 40);
          const end = start + Math.floor(Math.random() * 40);
          this.queue.push({
            from,
            to,
            start,
            end
          });
        }
    
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
      }
    
      update() {
        let output = '';
        let complete = 0;
    
        for (let i = 0, n = this.queue.length; i < n; i++) {
          let {
            from,
            to,
            start,
            end,
            char
          } = this.queue[i];
    
          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar();
              this.queue[i].char = char;
            }
    
            output += `<span class="dud">${char}</span>`;
          } else {
            output += from;
          }
        }
    
        this.el.innerHTML = output;
    
        if (complete === this.queue.length) {
          this.resolve();
        } else {
          this.frameRequest = requestAnimationFrame(this.update);
          this.frame++;
        }
      }
    
      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }
    
    } 

    function addReveal(elem) {
        var p = document.getElementsByClassName(elem)[0];
        p.classList.remove("hidden");
        p.classList.add("reveal")
    }

    useEffect(() => {
        const phrases = ['websites', 'web applications', 'softwares'];
        const el = document.querySelector('.text');
        const fx = new TextScramble(el);
        let counter = 0;

        const next = () => {
        fx.setText(phrases[counter]).then(() => {
            setTimeout(next, 800);
        });
        counter = (counter + 1) % phrases.length;
        };
        next();
        setTimeout(function(){ addReveal('third-p') }, 700);
        setTimeout(function(){ addReveal('first-p') }, 1400);
        setTimeout(function(){ addReveal('fourth-p') }, 1400);
    })

    return (
        <div className="Header">
            <div className="Header__content">
                <div className="sidebar__circle"></div>
                <div className="first">
                    <p className="first-p hidden">{'Start />'}</p>
                </div>
                <div className="second">
                    <p className="second-p reveal">Hi, my name is <span>Parth Modi</span></p>
                </div>
                <div className="third">
                    <p className="third-p hidden">i <span className="mono">code</span> and <i>develop</i><span> </span><span className="text"></span></p>
                </div>
                <div className="fourth">
                    <p className="fourth-p hidden">Let me show you ...</p>
                </div>
                <div className="scroll__box">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 30"><path d="M9 30c-5 0-9-4.2-9-9.4V9.4C0 4.2 4 0 9 0s9 4.2 9 9.4v11.3C18 25.8 14 30 9 30zM16.2 9.4c0-4.2-3.2-7.5-7.2-7.5S1.8 5.3 1.8 9.4v11.3c0 4.1 3.2 7.5 7.2 7.5s7.2-3.4 7.2-7.5V9.4zM9.2 12.8c-0.5 0-0.9-0.4-0.9-0.9V7.1c0-0.5 0.4-0.9 0.9-0.9 0.5 0 0.9 0.4 0.9 0.9v4.7C10.1 12.3 9.7 12.8 9.2 12.8z" class="st0" fill="#988E9F"/></svg>
                    <p>SCROLL</p>
                </div>
                </div>
        </div>
    )
}

export default Header
