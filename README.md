# react-relay-skeleton
Skeleton app for prototyping with react + relay + react-router-relay. The development environment uses webpack + webpack-dev-server + babel. To use follow next steps.

## install dependencies 
```sh
npm install
```

## configure graphql api endpoint
The repo is pre configured for `http://localhost:5000/graphql`, in order to change the endpoint, edit the following files:
- `scripts/updateSchema.js` -
script responsible for fetching the schema from the graphql endpoint and saving it in `data/schema.json` to be used by `babelRelayPlugin.js`
- `src/index.js` -
configure the `Relay.DefaultNetworkLayer` to the graphql endpoint

## start development server
```sh
npm start
```
and navigate to [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/)

## update schema
If you need to manually update the schema run
```sh
npm run updateSchema
```
