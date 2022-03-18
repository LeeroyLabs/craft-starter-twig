
# Craft Starter Twig

Twig starter with optional Vue components

## BACK END
If it hasn't already been done:
- change the name of the site and the mailhog in `.lando.yml`
- change the `devServer.proxy['*'].target` in `webpack.config.js`

Start Lando.

```
lando start
lando composer install # install craft dependencies
```

Create the .env with the right DB username and password (use `lando info` command), and the right SITE name.

Then generate a security key

```
lando php craft setup/security-key
```
Install the database 
```
lando php craft setup
```


## FRONT END
Install pnpm globally if you don't already have it.
https://pnpm.io/

Then do

```
pnpm install
pnpm serve
```

URL du front: https://SITE.lndo.site:8080/  
URL du back: https://SITE.lndo.site/admin


### VueJS 3
Vue is completely optional, but you can add some components dynamically.

Add your .vue component in the `frontend\assets\scripts\components` folder, named in Pascal case, eg. `HelloWorld.vue`  
You can then use that component in your twig template by using the tag of the componenent in kebab case, eg. `<hello-world>`

Passing data from Craft (in Twig) to your Vue components is possible via the props.