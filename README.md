# Quiznology

> Quiznology is an open source platform for developers around the world to challenge themselves.

# Config

Quiznology uses an api, https://github.com/Quiznology/api.quiznology.com, which run by default in *dev* mode at port
__3001__.
``` bash
# config/config.js
dev: {
  baseUrl: 'http://localhost:8080',
  apiUrl: 'http://localhost:3001',
}

```

Github config can be updated if you want to test it out.

``` bash
# config/provider.config.js
github: {
  client_id: '',
  callback_uri: '',
},
...
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
