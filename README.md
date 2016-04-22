# react-native-web-starter
Minimal starter kit for building webapps with react-native-web.

Based on alicoding's excellent [react-webpack-babel starter](https://github.com/alicoding/react-webpack-babel).

This is a simple [React Native Web](https://github.com/necolas/react-native-web), [Webpack](http://webpack.github.io/) and [Babel](https://babeljs.io/) application with nothing else in it.

### What's in the box?

Just a simple [index.web.js](./index.web.js), [webpack.config.js](./webpack.config.js) and [index.html](./public/index.html) file.

### Getting Started

Install project deps:

```
> $ npm i
```

Install webpack and the development server (if you haven't already):

```
> $ npm i webpack-dev-server webpack -g
```

### Running

To run using the webpack-dev-server (w/ hot reloading): 

```
> $ npm run dev
```

Open `http://localhost:8080/` in your web browser.

Other devices on your network can connect to `http://192.168.something.something:8080`.

### Building

To build for production, run:

```
> $ npm run build
```

### Deploying

To deploy to gh-pages: 

```
> $ npm run gh-pages
```

(remember to `npm run build` first)


# Pitching in
* I'm pretty sure we're missing some babel plugins that ship with react-native by default. PR to add them!
* My goal with this starter kit is to make it extremely easy to spin up a project that uses react-native-web. I'm not really looking to sacrifice on that simplicity in order to build an isomorphic (ios + web + android) starter kit, but if you see ways to make isomorphism easier, do PR.
