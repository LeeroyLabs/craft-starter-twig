import { createApp } from 'vue';

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function camelize(str) {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, '');
}

class App {
    init() {
        // Add loaded to body and delete spinner
        document.body.classList.add('loaded');

        this.initVueComponents();
    }

    initVueComponents() {
        // Automatically register all Vue components located within the /components folder.
        const requireComponent = require.context(
            // The relative path of the components folder
            './components',
            // Whether or not to look in subfolders
            true,
            // The regular expression used to match base component filenames
            /[A-Z]\w+\.(vue|js)$/
        );

        requireComponent.keys().forEach(fileName => {
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

            const app = createApp({});

            // Register component globally
            app.component(
                componentName,
                // Look for the component options on `.default`, which will
                // exist if the component was exported with `export default`,
                // otherwise fall back to module's root.
                componentConfig.default || componentConfig
            );

            app.mount('#app');
        });
    }
}

export default new App();
