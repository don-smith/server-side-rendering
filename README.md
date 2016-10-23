# Server-side Rendering

Clone this repo
Install `express`, `express-handlebars` as dependencies
Install `tape`, and `tap-spec` as dev dependencies
Apply the `express-handlebars` middleware using

  // Middleware
  app.engine('hbs', hbs({
      ext: hbs,
      defaultLayout: 'main'
    }))
  app.set('view engine', 'hbs')
  app.set('views', path.join(__dirname, 'views'))





For more information:

https://github.com/ericf/express-handlebars
http://handlebarsjs.com
