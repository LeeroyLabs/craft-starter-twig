import lottie from 'lottie-web';

const template = document.createElement('template');
template.innerHTML = /* html */`
    <style>
        svg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }
    </style>
    <div id="lottie-container"></div>
`;

class LottieTransition extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.animation = lottie.loadAnimation({
            container: this.shadowRoot.getElementById('lottie-container'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            //path: require('./lottie-transition.json'),
            // if "path" doesn't work, use animationData:
            animationData: require('./lottie-transition.json'),
        });

        this.nextRef = null;
        this.totalFrames = 0;
        this.animation.addEventListener('DOMLoaded', () => {
            let svg = this.animation.wrapper.querySelector('svg');
            svg.setAttribute('preserveAspectRatio', 'none meet');
            this.totalFrames = this.animation.totalFrames;
            window.lottie = this.animation;
        });
    }
    
    out(next, evt) {
        this.animation.removeEventListener('complete', this.nextRef);
        this.animation.playSegments([0, this.totalFrames / 2], true);
        this.nextRef = next;
        this.animation.addEventListener('complete', this.nextRef);
    }
    
    in(next, evt) {
        this.animation.removeEventListener('complete', this.nextRef);
        this.animation.playSegments([this.totalFrames / 2, this.totalFrames], true);
        this.nextRef = next;
        this.animation.addEventListener('complete', this.nextRef);
    }
}

window.customElements.define('lottie-transition', LottieTransition);