# Node Starter With ES6

# For local environment

```
npm install
npm run dev or npm start
```

### the server is running on port 9091

Includes API Server utilities:

* [morgan](https://www.npmjs.com/package/morgan)
  * HTTP request logger middleware for node.js
* [helmet](https://www.npmjs.com/package/helmet)
  * Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
* [dotenv](https://www.npmjs.com/package/dotenv)
  * Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`

Development utilities:

* [nodemon](https://www.npmjs.com/package/nodemon)
  * nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [eslint](https://www.npmjs.com/package/eslint)
  * ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code

# Short description of api routes

/signin/admin ---- for signing in admin  
/signin/ ---- for signing in user  
/signup/ ---- for signing up user  
/event/add ---- for adding new event  
/event/:id ---- for getting single event by id  
/event/edit/:id ---- for updating event attributes  
/event/get ---- for getting all events  
/event/delete/:id---- for deleting event
