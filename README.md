# Server-side Rendering

* [Getting started](#getting-started)
* [User stories](#user-stories)
* [Helpful notes](#helpful-notes)
* [Further reading](#further-reading)


## Getting started

* After cloning this repo, install dependencies with `npm install`
* To debug the server: `npm run debug`
* To start the server: `npm start`
* To run the tests: `npm test`


## User stories

* As a user, I want to see a list of GitHub repositories for a user.
  - Create `github.json` with:

    ```sh
    curl https://api.github.com/users/[username]/repos | jq '.' > github.json
    ```

  - Create a `main.hbs` and `home.hbs` in the `views` folder.
  - Create a route for the home page (`/`) that shows a list of repos.
  - Create a `db.js` that returns a list of repositories as a JavaScript object.

* As a user, I want to see more details about a specific repository.
  - Create a `detail.hbs` in the `views` folder which includes HTML markup for the details.
  - Create a route that accepts a repo ID (`/details/:id`) that renders the details page.
  - Add a function to `db.js` that returns the data for a specific repo based on its ID.
  - Wrap the name repository names with an `a` element that links to the details page.

* As a user, I want to see more information about the author of the repository.
  - Create an `author.hbs` in the `views` folder which includes HTML markup for the details.
  - Create a route that accepts a repo ID (`/details/:id/author`) that renders the author page.
  - Add a function to `db.js` that returns the data for the author of a specific repo based on its ID.
  - Create a link in `details.hbs` to the authors page.


## Helpful notes

These are the noteworthy parts of the code you should be sure you feel comfortable with.

### Handlebars configuration

The `express-handlebars` module is configured in `server.js`.

```js
// Middleware
var hbs = require('express-handlebars')
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main'
  }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
```

This lets Express know about an engine called `hbs` with a file extension of `hbs` (`extname: 'hbs'`) and the name of our `defaultLayout` (`main.hbs`). We then define the engine as a _view engine_ and specify the name of the folder where the views are kept.


### Layouts

Layouts represent top-level templates (include the `<html>` element). To include the page-specific view into the layout, use `{{{body}}}` (3 curly brackets).


## Further reading

For more information, check out these links:

* http://handlebarsjs.com
* https://github.com/ericf/express-handlebars
