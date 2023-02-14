import barba from '@barba/core';
import './web-components/lottie-transition/lottie-transition';
import './web-components/roll-text/roll-text';

class App {
    init() {
        // Add loaded to body and delete spinner
        document.body.classList.add('loaded');

        this.initPageTransitions();
    }

    initPageTransitions() {
        const transition = document.querySelector('lottie-transition');

        const app = this;
        barba.init({
            timeout: process.env.NODE_ENV == 'development' ? 10000 : null,
            views: [
                {
                    namespace: 'home',
                    beforeEnter() {
                        console.warn('this is homepage');
                    },
                },
                {
                    namespace: 'about',
                    beforeEnter() {
                        console.warn('this is about');
                    },
                },
            ],
            transitions: [
                {
                    name: 'default-transition',
                    leave(data) {
                        const done = this.async();
                        transition.out(() => {
                            done();
                        }, data);
                    },
                    enter(data) {
                        const done = this.async();
                        done();
                        transition.in(() => {}, data);
                        app.initVueComponents();
                    },
                },
            ],
        });
    }
}

export default new App();
