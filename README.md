# Craft Starter Twig

Twig starter running on Vite with optional Web Components and page transitions with Barba.js

## Makefile

A Makefile has been included to provide a unified CLI for common development commands.

-   `make install` - Runs a complete one-time process to set the project up and install Craft.
-   `make up` - Starts the DDEV project, ensuring that SSH keys have been added, and npm & Composer have been installed.
-   `make dev` - Runs a one-time build of all front-end assets, then starts Vite's server for HMR.
-   `make build` - Builds all front-end assets.
-   `make composer xxx` - Run Composer commands inside the container, e.g. `make composer install`
-   `make craft xxx` - Run Craft commands inside the container, e.g. `make craft project-config/touch`
-   `make yarn xxx` - Run yarn commands inside the container, e.g. `make yarn install`
-   `make pull` - Pull remote db & assets (requires setting up [craft-scripts](https://github.com/nystudio107/craft-scripts/)

## Create a new project with this starter

```shell
make install
```

Then follow the prompts.

## New on the project ?

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

## Front-end

Everything is setup so that the code is prettified and linted as you develop, and before every commit.  
Be sure to install the recommended extensions by clicking Install on the prompt window, or open the Command Palette (`Cmd/CTRL + Shift + P`) and search for **Extensions > Show Recommended Extensions**.

**EditorConfig** and **Prettier** are there to apply formatting rules (missing semicolon, extra spaces, etc.)  
**ESLint** and **Stylelint** checks for code quality (unused variables, unreachable code, etc.)
