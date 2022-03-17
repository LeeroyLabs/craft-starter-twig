
# Craft Starter Twig

Twig starter with optional Vue components

## BACK END
If hasn't alreadyn been done, change the name of the site and the mailhog in `.lando.yml`

If is hasn't alreadyn been done, also change the `devServer.proxy['*'].target` in `webpack.config.js`

Start Lando.

```
lando start
lando composer install # install craft dependencies
```

Set up .env with the right DB username and password

Then generate a security key

```
lando php craft setup/security-key
```
Go to http://SITE.lndo.site/admin/install
and install the db with Craft


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

# Geomate

If you need to update geo databases you can put the .mmdb files in /storage/geomate (don't commit those as they are heavy)
