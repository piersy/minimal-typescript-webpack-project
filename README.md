# Minimal typescript webpack project

This project serves as an example of the minimal setup required to easily develop with typescript and webpack.

## Steps taken to build this project

I partially followed this tutorial [ here ](
https://webpack.js.org/guides/typescript/ ) but I slimmed it down and removed
stuff related to jsx.

1. Create empty dir
2. cd to dir and run `yarn add --dev typescript ts-loader webpack webpack-cli webpack-dev-server html-webpack-plugin`.
	* typescript is required to compile typescript and ts-loader provides the
	  typescript integragtion with webpack.
	* webpack is the core webpack module, of course required to do anything
	  with webpack, webpack-cli makes webpack accessible via a cli so is
	  required to call any command with webpack, webpack-dev-server provides
	  support for serving the site with webpack so that we can use hot reload.
	  html-webpack-plugin generates and index.html for us, so that the dist dir
	  contains only generated files.
3. Add tsconfig.json (reference
   [here](https://www.typescriptlang.org/tsconfig)) and webpack.config.js.
4. Add extra fields to package.json (name, version and scripts to build
   typescript and serve the site through webpack)

## Use

Run `yarn build` to build the project, `bundle.js` and `index.html` will be
constructed under dist.

Run `yarn serve` to serve the project through webpack with hot reloading
(nothing is written to the dist dir in this case).

