# howtographql-hackernews
Hackernews clone app using graphql.

Built while reproducing the following tutorials:
- [react + apollo-client](https://www.howtographql.com/react-apollo/0-introduction/)
- [node.js + graphql-yoga + prisma](https://www.howtographql.com/graphql-js/0-introduction/)


### deploying prisma backend
this app uses [prisma.io](https://www.prisma.io/docs/quickstart/) grapqhl mapped database service.
in order to deploy the database schema you should run:
```sh
$ cd backend
$ npm install
$ npm run prisma deploy 
```


### running local graphql server and react code
```sh
$ cd backend
$ npm start
```
this commanda will initialize [local](http://localhost:4000) graphql-yoga server on port 4000 and [playground](http://localhost:5000) on port 5000.


in another shell start the frontend code
```sh
$ cd frontend
$ npm install
$ npm start
```
