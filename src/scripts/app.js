import { createApp } from 'vue';
import barba from '@barba/core';
import { capitalize, camelize } from './utils';
import './web-components/lottie-transition/lottie-transition';
import './web-components/roll-text/roll-text';

class App {
    init() {
        // Add loaded to body and delete spinner
        document.body.classList.add('loaded');

        this.initVueComponents();

        this.initPageTransitions();
    }

    initVueComponents() {
        // Automatically register all Vue components located within the /vue-components folder.
        const requireComponent = require.context(
            // The relative path of the components folder
            './vue-components',
            // Whether or not to look in subfolders
            true,
            // The regular expression used to match base component filenames
            /[A-Z]\w+\.(vue|js)$/
        );

        // Wrap your Vue components with a div with a vue-component-wrapper class
        document.querySelectorAll('.vue-component-wrapper').forEach((vueWrapper) => {
            const app = createApp({});

            requireComponent.keys().forEach((fileName) => {
                // Get component config
                const componentConfig = requireComponent(fileName);

                // Get PascalCase name of component
                const componentName = capitalize(
                    camelize(
                        // Gets the file name regardless of folder depth
                        fileName
                            .split('/')
                            .pop()
                            .replace(/\.\w+$/, '')
                    )
                );

                // Register component globally
                app.component(
                    componentName,
                    // Look for the component options on `.default`, which will
                    // exist if the component was exported with `export default`,
                    // otherwise fall back to module's root.
                    componentConfig.default || componentConfig
                );
            });

            app.mount(vueWrapper);
        });
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
