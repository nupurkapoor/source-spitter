## Source Spitter

#### Technology Stack
* Nodejs
* Express
* jQuery
* HTML
* CSS

#### Requirement
* Create a simple web app, hosted at a URL we can visit
* Users can enter a URL of a page to fetch
* The web app fetches the HTML of the page and displays the source to the user
* A summary of the document is displayed, listing which tags are present in the HTML and how many of each tag
* Clicking on the name of each tag in the summary will highlight the tags in the source code view
* Provide all source code via github.

#### Dependencies
* "node": "0.12.5" or higher
* "npm": "2.11.2" or higher
#### Project Setup
* Clone the repository in your local environment
* The modules folder has not been committed to git. Run `npm install` from root directory `source-spitter`
* To run the project locally: `DEBUG=source-spitter:* npm start`. Unless specifically told, the webpage should be accessible at //localhost:3000/

#### Project Structure and Definitions
The application is built on Node's Express framework, with Javascript, and jQuery in assistance. A very simple site to access source code and related information for a user submitted url. To maintain the requiremnet specifications the fetched documnet is not man-handled at all. It is displayed as-is, in real life applications, I would have first cleaned nad re formated the recieved data.

The structure is that of a standard Express build:

* bin/ - port definitions, and app configurations
* public/ – contains all static files like style sheets, javascript, and external librraies
* routes/ – defines app's routes and their logic
* views/ – provides templates which are rendered and served by the respective routes
* app.js – initializes the app and glues everything together
* package.json – remembers all packages that the app depends on and their versions, speeds startup procedure


#### UI Inspiration
The layout is pretty basic, the only specific detail is that the colors on page are inspired by Slack's official logo.





