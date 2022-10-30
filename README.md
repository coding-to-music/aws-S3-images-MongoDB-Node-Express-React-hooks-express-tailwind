Can't save a user. Don't waste time on this. A platform to find roommates by listing your space or finding one available. 🚀 Built with React/Express/MongoDB/Tailwind.

# Roomie

(project created for learning)

https://dev.to/theuserll/second-full-stack-app-roomie-find-a-room-to-rent-built-with-react-tailwindcss-express-mongodb-heroku-s3-4d2h

https://roomiew.herokuapp.com/listing/5ed30e7234c5050017aba606

https://roomate-s3-mongodb.herokuapp.com/

https://github.com/lucasmrl/roomie

https://github.com/coding-to-music/aws-S3-images-MongoDB-Node-Express-React-hooks-express-tailwind

A platform to find roommates by listing your space or finding one available.

Built with **React/Express/MongoDB/Tailwind**. 🚀

## Tasks

- display build details in the app
- test login
- test S3 upload
- test MongoDB writing
- load sample data
- test maps
- get some live data such as weather
- Embed MongoDB Charts

## local development - server backend

```java
# I needed to change the package.json node version to ">=12.13.0"

npm run install

npm run dev

http://localhost:8000/

```

## local development - client frontend

```java
cd client

npm run start

http://localhost:3000/
```

To build the client:

```java
npm run heroku-postbuild

http://localhost:3000/
```

## change Node versions with NVM

```java
# get latest version of Node

nvm install node

# use a specific version of Node

nvm use stable
Now using node v17.6.0 (npm v8.5.1)

nvm use v14.18.1
Now using node v14.18.1 (npm v8.1.0)

nvm use v16.14.0
Now using node v16.14.0 (npm v8.3.1)

# list available versions of node

nvm ls-remote

nvm ls-remote | tail

```

List available versions of node:

```java
nvm ls
       v14.18.1
       v16.14.0
->      v17.6.0
         system
default -> 14.18.1 (-> v14.18.1)
iojs -> N/A (default)
unstable -> N/A (default)
node -> stable (-> v17.6.0) (default)
stable -> 17.6 (-> v17.6.0) (default)
lts/* -> lts/gallium (-> v16.14.0)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.24.1 (-> N/A)
lts/erbium -> v12.22.10 (-> N/A)
lts/fermium -> v14.19.0 (-> N/A)
lts/gallium -> v16.14.0
```

## Heroku deployment of the backend

Use the heroku CLI to create a new app, give it a name:

```java
heroku create roomate-s3-mongodb
```

- Then go to the Heroku dashboard and connect to the GitHub repo
- Click to allow automatic deployment
- Then do another push and the changes will be picked up by Heroku
- That is for the server (backend)

## Need to set the Heroku environment variables:

Initially they are empty

```java
heroku config
=== roomate-s3-mongodb Config Vars
```

```java
heroku config:set DB_CONNECTION="mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
Setting DB_CONNECTION and restarting ⬢ roomate-s3-mongodb... done, v5
DB_CONNECTION: mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

heroku config:set AWS_BUCKET_NAME="my-site-images-test"
Setting AWS_BUCKET_NAME and restarting ⬢ roomate-s3-mongodb... done, v6
AWS_BUCKET_NAME: my-site-images-test
```

## Monitor the progress of the deployment:

```java
heroku logs --tail
```

Use heroku ps to determine the number of dynos that are executing. The list indicates the process type in the left column, and the command corresponding to that process type in the right column:

```java
heroku ps

Free dyno hours quota remaining this month: 548h 30m (99%)
Free dyno usage for this app: 0h 0m (0%)
For more information on dyno sleeping and how to upgrade, see:
https://devcenter.heroku.com/articles/dyno-sleeping

=== web (Free): npm start (1)
web.1: crashed 2022/03/09 05:08:47 +0000 (~ 1m ago)
```

## create a local build

```java
npm run heroku:postbuild
```

## Features

My second full-stack project. 😬

[View demo](http://roomiew.herokuapp.com/)

![Image of Roomie](https://github.com/lucasmrl/roomie/blob/master/ezgif.com-resize.gif?raw=true)

## Built With

- FE: React (Hooks, Context API, Router) + TailwindCSS
- BE: Node.js (Express.js) + MongoDB
- Hosted on Heroku / Images in AWS S3

## Versioning

v.1.0.0

## Authors

- **Lucas Lima** - [lucasmrl](https://github.com/lucasmrl)

L.L.
Posted on Jun 1, 2020 • Updated on Jun 3, 2020

# Second full-stack app: Roomie - Find a room to rent! Built with: React + TailwindCSS + Express + MongoDB + Heroku /

- S3
- react
- node
- javascript
- showdev

Hey, devs!

I've been studying for a few months now and after one month and 25 deploys, this is my second full-stack project: Roomie - a website to find rooms to rent or to list your place. 😅

I created this for the sake of learning only and since my first full-stack project was a simple CRUD app, it was a blast having this experience!

demo: https://roomiew.herokuapp.com/
repo: https://github.com/lucasmrl/roomie

Built with:

- FE: React (Hooks, Context API, Router) + TailwindCSS
- BE: Node.js (Express.js) + MongoDB

Hosted on Heroku / Images in AWS S3

What I tried to learn:

- Authentication (Sign up, Log in, Log out, Reset password)
- API Filtering, Sorting, Pagination (Even though it is not implemented in the FE)
- Send e-mails from back-end
- Upload pictures to S3
- Security
- TailwindCSS (first time using it)
- Agile methodology (tried to organize my user stories, sprints, daily stand-up meeting, ...)

Definitely it is far from perfect, but it helped me a least to get my hands dirty. I appreciate any feedback!
