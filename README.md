# Server Side Falcor/React demo

This is a small demo app that demonstrates using Falcor on the server with server-side React rendering.

This repo accompanies a [blog post I wrote](http://mattgreer.org/articles/server-side-react-and-falcor/).

## Warning to Windows Users

The scripts in package.json assume a Unix shell. You will need to tweak them to whatever Windows shell you are using.

## To run

You will need a recent version of Node, I've been using 5.3.0.

`npm install`  
`npm start`

The app will then be at `http://localhost:8000`

## What the App does

It does a server side rendering of a React component that first gets populated with Falcor data. This all takes place in `src/server/main.js` and `src/falcor/getFalcorDataForComponents.js`. The rest of the app is pretty much by the book React/Redux/React-Router.
