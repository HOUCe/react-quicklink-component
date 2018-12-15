<p align="center">
  <img src="https://i.imgur.com/NVRZLHv.png" width="640" alt="quicklink">
  <br>
  <a href="https://www.npmjs.org/package/quicklink"><img src="https://img.shields.io/npm/v/quicklink.svg?style=flat" alt="npm"></a>
  <a href="https://unpkg.com/quicklink"><img src="https://img.badgesize.io/https://unpkg.com/quicklink/dist/quicklink.js?compression=gzip" alt="gzip size"></a>
  <a href="https://www.npmjs.com/package/quicklink"><img src="https://img.shields.io/npm/dt/quicklink.svg" alt="downloads" ></a>
  <a href="https://travis-ci.org/GoogleChromeLabs/quicklink"><img src="https://travis-ci.org/GoogleChromeLabs/quicklink.svg?branch=master" alt="travis"></a>
</p>

# react-quicklink-component 
> React component prefetching in-viewport links during idle time

Inspired by GoogleChromeLabs [quicklink](https://github.com/GoogleChromeLabs/quicklink/blob/master/README.md), implemented with React component

## How it works

`<Quicklink>` component attempts to make navigations to subsequent pages load faster. It:

* **Detects links within the viewport** (using [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API))
* **Waits until the browser is idle** (using [requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback))
* **Checks if the user isn't on a slow connection** (using `navigator.connection.effectiveType`) or has data-saver enabled (using `navigator.connection.saveData`)
* **Prefetches URLs to the links** (using [`<link rel=prefetch>`](https://www.w3.org/TR/resource-hints/#prefetch) or XHR). Provides some control over the request priority (can switch to `fetch()` if supported).

we connect [quicklink](https://github.com/GoogleChromeLabs/quicklink/blob/master/README.md) source code by `React ref` and design `<Quicklink>` component by `render prop` pattern.

## Installation

For use with [node](http://nodejs.org) and [npm](https://npmjs.com):

```sh
npm install --save react-quicklink-component
```

## Usage

Once initialized, `Quicklink` will automatically prefetch children component's URLs for links that are in-viewport during idle time.

Quickstart:

``` javascript
<Quicklink quicklink={options}>
  <Comp1 />
  ...
  <CompN />
</Quicklink>
```

As for Quicklink's options prop, absolutely the same with [quicklink](https://github.com/GoogleChromeLabs/quicklink/blob/master/README.md)

## License

Licensed under the Apache-2.0 license.
