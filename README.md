## RollupJS + TypeScript + WebWorkers

Example that shows how to setup a project using RollupJS, TypeScript and rollup-plugin-web-wroker-loader

Can be used as boilerplate.


### Usage

    yarn install
    yarn start
Navigate to localhost:8090 on your favourite browser and open the developer console.

### What's Included

The project includes the following scripts:

    start
Builds an iife version of the projects and serves it at `localhost:8090` as well as the contents of the `www` folder.

    build
Builds a JSNext version of the project into `dist/next` and types declarations into `dist/types`

    watch
Build the JSNext version of the project and watches for changes to rebuild automatically, it does not create type
declaration files.

    lint
Uses eslint and tslint to lint the project.

    prepack
Default script automatically executed before packaging and publishing using `npm` or `yarn`. Builds the project.
