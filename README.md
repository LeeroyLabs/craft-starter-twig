# Craft Starter Twig

Twig starter with optional Vue components, Web components and page transitions

## BACK END

If it hasn't already been done:

-   change the name of the site and the mailhog in `.lando.yml`
-   change the `devServer.proxy['*'].target` in `webpack.config.js`

Start Lando.

```
lando start
```

### Instructions to setup Craft CMS

Create the .env with the right DB username and password (use `lando info` command).

Setup Craft or install the database

```
# If you're setting up the project for the first time
lando php craft setup

# If craft has already been set up by someone else, just install the db
lando db-import <your_db_file>
```

### First steps

Go to the admin panel and install/activate the plugins ( Settings > Plugins ).

If you're using ether/seo plugin be sure to add in the plugin settings the **SEO Meta Template** `_seo/meta.twig`

Go to Settings

-   Add your sites (if multiple languages)
-   Add a homepage section :
    -   Name: **Home**
    -   Section Type: **Single**
    -   Site Settings: Check the Homepage column and template should be `home/_entry`

## FRONT END

Everything is setup so that the code is prettified and linted as you develop, and before every commit.  
Be sure to install the recommended extensions by clicking Install on the prompt window, or open the Command Palette (`Cmd/CTRL + Shift + P`) and search for **Extensions > Show Recommended Extensions**.

**EditorConfig** and **Prettier** are there to apply formatting rules (missing semicolon, extra spaces, etc.)  
**ESLint** and **Stylelint** checks for code quality (unused variables, unreachable code, etc.)

### Get started

```
yarn install
yarn serve
```

URL du front: https://SITE.lndo.site:8080/  
URL du back: https://SITE.lndo.site/admin

### VueJS 3

Vue is completely optional, but you can add some components dynamically.

Add your .vue component in the `frontend\scripts\vue-components` folder, named in Pascal case, eg. `HelloWorld.vue`  
You can then use that component in your twig template by using the tag of the componenent in kebab case, eg. `<hello-world>`, wrapped with `<div class="vue-component-wrapper"></div>`

Passing data from Craft (in Twig) to your Vue components is possible via the props, JSON encoded.
