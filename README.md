# Server-side Rendering

## Getting started

* After cloning this repo, install dependencies with `npm install`
* To debug the server: `npm run debug`
* To start the server: `npm start`
* To run the tests: `npm test`

## Notes

These are the noteworthy parts of the code you should be sure you feel comfortable with.

### Handlebars configuration

The `express-handlebars` module is configured in `server.js`.

```js
// Middleware
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main'
  }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
```

This defines the file extension of our Handlebars templates (`extname: 'hbs'`) and the name of our `defaultLayout` (`main.hbs`).

_more notes forthcoming ..._

## Further reading

For more information, check out these links:

* http://handlebarsjs.com
* https://github.com/ericf/express-handlebars
