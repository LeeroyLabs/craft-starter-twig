# Craft Starter Twig

Twig starter running on Vite with optional Web Components and page transitions with Barba.js

## Local machine prerequisites:

1. [Docker](https://www.docker.com/)
2. [DDEV](https://ddev.readthedocs.io/)
3. [Composer](https://getcomposer.org/)

## Makefile

A Makefile has been included to provide a unified CLI for common development commands.

-   `make install` - Runs a complete one-time process to set the project up and install Craft.
-   `make boot` - Starts the DDEV project, ensuring that SSH keys have been added, and npm & Composer have been installed.
-   `make up` - Runs the Craft commands to clear cache and load the yaml configuration files. It's done also when running one of the `make dev` commands
-   `make dev` - Runs a one-time build of all front-end assets, then starts Vite's server for HMR.
-   `make build` - Builds all front-end assets.
-   `make composer xxx` - Run Composer commands inside the container, e.g. `make composer install`
-   `make craft xxx` - Run Craft commands inside the container, e.g. `make craft project-config/touch`
-   `make yarn xxx` - Run yarn commands inside the container, e.g. `make yarn install`

# Create a new project with this starter

Copy this project, except all gitignored folders and files.  
Check the _.ddev/config.yaml_ file and change the `name` (`php_version` or `database` if needed).

Then to install a clean version of Craft, run:

```shell
make install
```

Then follow the prompts.

This command will:

1. Copy your local SSH keys into the container
2. Start your DDEV project
3. Install Composer
4. Install yarn
5. Do a one-time build of Vite
6. Generate `APP_ID` and save to your `.env` file
7. Generate `SECURITY_KEY` and save to your `.env` file
8. Installing Craft for the first time, allowing you to set the admin's account credentials
9. Install all Craft plugins

Once the process is complete, type `ddev launch` to open the project in your default browser. 🚀

# Developing on existing project

```shell
make dev
```

This command will:

1. Copy your local SSH keys into the container
2. Start your DDEV project
3. Install Composer
4. Install yarn
5. Do a one-time build of Vite
6. Spin up the Vite dev server

Open up a browser to your project domain to verify that Vite is connected. Begin crafting beautiful things. ❤️

Import a database with:

```shell
ddev import-db --src=dumpfile.sql.gz
```

You can also use DDEV's included phpMyAdmin for database imports — just be aware it's much slower.

# DDEV

[Using the 'ddev' command](https://ddev.readthedocs.io/en/stable/users/basics/cli-usage/)

# Front-end

Everything is setup so that the code is prettified and linted as you develop, and before every commit.  
Be sure to install the recommended extensions by clicking Install on the prompt window, or open the Command Palette (`Cmd/CTRL + Shift + P`) and search for **Extensions > Show Recommended Extensions**.

**EditorConfig** and **Prettier** are there to apply formatting rules (missing semicolon, extra spaces, etc.)  
**ESLint** and **Stylelint** checks for code quality (unused variables, unreachable code, etc.)

## Extras

If you need interactivity, think of Web Components, or the Sprig plugin
