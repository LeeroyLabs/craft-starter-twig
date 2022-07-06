import './roll-text.scss';
import gsap from 'gsap';

const template = document.createElement('template');
template.innerHTML = /* html */ `
    <slot></slot>
`;

class RollText extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        console.log('roll-text constructor');
    }

    connectedCallback() {
        console.log('roll-text connectedCallback');
        this.element1 = this.querySelector('div > div:first-child');
        this.element2 = this.querySelector('div > div:last-child');

        gsap.set(this.element2, {
            opacity: 0,
            y: '50%',
            rotateX: -90,
        });

        this.enterRef = this.enter.bind(this);
        this.leaveRef = this.leave.bind(this);
        this.addEventListener('mouseenter', this.enterRef);
        this.addEventListener('mouseleave', this.leaveRef);
    }

    disconnectedCallback() {
        this.removeEventListener('mouseenter', this.enterRef);
        this.removeEventListener('mouseleave', this.leaveRef);
    }

    enter() {
        gsap.to(this.element1, {
            opacity: 0,
            y: '-50%',
            rotateX: 90,
            ease: 'power2.inOut',
        });
        gsap.to(this.element2, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            ease: 'power2.inOut',
        });
    }

    leave() {
        gsap.to(this.element1, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            ease: 'power2.inOut',
        });
        gsap.to(this.element2, {
            opacity: 0,
            y: '50%',
            rotateX: -90,
            ease: 'power2.inOut',
        });
    }
}

window.customElements.define('roll-text', RollText);
