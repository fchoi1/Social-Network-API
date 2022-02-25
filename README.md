# Social-Network-API

## Description

This is a simple application to use Mongoose with node js to connect to mongo database and access REST apis. This is an application to utilize a social api command with to create, edit and delete users and friends as well as add thoughts and reactions.
Techonologies: MVC structure, nodejs, express, MongoDB, Mongoose.

## Link to Application

[Tech Blog  
<img src="./images/tech_blog_app.png" width="600"> ](https://fabio-tech-blog.herokuapp.com/)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contribute](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation

This is for local install if you want to deploy the appliaction yourself

1. clone repo on github
2. Install any required dependancies

```
    npm install
```

3. Enter your SQL database crendentials in .env file (see .env.Example)

```
    DB_HOST=<database hostname>
    DB_NAME=tech_blog_db
    DB_USER=<database user>
    DB_PASS=<database password>
```

4. Login to SQL on command line

```
    mysql -u <user> -p
```

5. Create database by running the schema

```
    sourec db/schema.sql
    quit
```

6. (Optional) Seed values for db

```
    npm run seeds
```

6. Start the application on nodeJS

```
    npm start
```

## Usage

1. Once the application is started go to application website (default: https://localhost:3001)
2. Homepage, ability to see all posts,
   <img src="./images/step2.png" width="600">  
3. Login page with option to create a new user   
   <img src="./images/step3a.png" width="300">
   <img src="./images/step3b.png" width="300">
4. Dashboard available after login.
   <img src="./images/step4.png" width="600">
5. Create new a post
   <img src="./images/step5.png" width="600">  
6. Dashboard displays all posts created by user with ability to edit post
   <img src="./images/step6.png" width="600">  
7. User can edit post content and title or delete post. Additionally user can also add comments to post here.
   <img src="./images/step7a.png" width="600">
   <img src="./images/step7b.png" width="600">
8. Clicking on Post title redirects to post details and comments
   <img src="./images/step8.png" width="600">  

## Credits

N/A

## License

This application is under the MIT License  
For more information please view here: [MIT Description](https://choosealicense.com/licenses/mit/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributions

Feel free to clone and improve on this application!

## Tests

[Demo Video](https://watch.screencastify.com/v/4vRBbrvRmK1lbjJbBTMd)

## Questions

See more about my Github here: [Fchoi1](https://www.github.com/Fchoi1)  
Any burning questions you want to ask me?  
Reach out to me! [fwchoi@uwaterloo.ca](mailto:fwchoi@uwaterloo.ca)
