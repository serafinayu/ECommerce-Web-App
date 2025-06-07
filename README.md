# E Commerce Website

This project was created by using Great Stack's Full Stack E-Commerce Website tutorial on Youtube.

I will be logging any useful notes throughout the tutorial here.

## Day 1: [End Timestamp 33:50]

### Setting up the environment

- `npm create vite@latest` - use node package manager to pull the latest version of the official Vite project starter to generate boilerplate files based on the provided project settings (React + JS)
- `npm install reacter-router-dom react-toastify` - install these dependencies in the frontend folder created from the previous command.
- `react-router-dom` - allows for multiple routes
- `react-toastify` - allows for toast notifications
- `npm run dev` - run the website locally in development mode
- Add the `ES7 React/Redux/GraphQL/React-Native snippets` extension to VS Code and use `rafce` shortcut to create a basic React component template into ./App.jsx
  <br>
  <br>
  Follow the [Getting started with Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)
- `npm install tailwindcss @tailwindcss/vite` Install Tailwind CSS
- Add the following `tailwind/vite` plugin to the Vite configuration (vite.config.js)

<pre>
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
</pre>

- Add the `@import "tailwindcss";` to the index.css file to import Tailwind

### Set up File Structure

Add the following folders to the /src folder

- `pages` - stores all the different pages (home, cart, collection, contact, home, login, orders, place order, and product)
- `components` - resusable components that will be reused throughout the project
- `context` - manage the logic of the project

### Create the Navigation Bar

- Set up the routing in App.jsx by using `<Route>` tags and importing all the pages
- Create a Navbar component in the /components and import it in App.jsx

## Day 2: [End Timestamp 50:30]

### Continue Building the Nav Bar

- <NavLink> - selecting on the Navlink element sets it as active
- Beginning to use <Link> and useState
- Issue! Cannot get the active hr tag under the selected nav page to display as black. Keeps showing as a light gray.
  - Observation: Tailwind border-none not applying and is being overridden by the default hr style despite other Tailwind styles working
  - Temporary Solution: set border-style to none in the css file

## Day 3: [End Timestamp 55:59]

### Complete Nav Bar

- Issue Resolved! Short day but spent a LOT of time trying to figure out why some styles weren't applying. The active hr tag appearing as light gray instead of black is due to Chrome's settings that set the default a tag's styling as precedence. Appears to work on Edge.
- Adjusted borders for small screen nav bar to my preferences

## Day 4: [End Timestamp 1:45:33]

### Add New Components: Hero, Latest Collection, Best Sellers, Our Policy, Newletter Box, Product Item, Title, and Footer

- Learned new React concepts: createContext, useContext, context provider
  - React API for creating a context object allowing components to receive data from the nearest context provider (ancestor with context)
- Left off still working on the Footer

## Day 5: [End Timestamp 2:51:24]

### Complete Footer, Collections Page, and Search Bar

- Learned new React concepts: useLocation, useParams
  - Params gets data from link (product id)
- Practiced ternary and spread operators and used helpful JS functions such as splice, slice, map, filter, and sort
- Left off working on the product page

## Day 6: [End Timestamp 4:00:15]

### Work on Product Page, Cart, and add new logic to Shop Context

- Learned `structuredClone` vs spread operator
  - `structuredClone` - makes a deep copy of an object/array. Used for objects/arrays that are more complex and have nested arrays/objects
  - spread operator - makes a shallow copy of an object/array. Good for flat objects/arrays with no nesting
- Added new library `react-toastify` and added toast notification prompting user to select product size when adding item to cart

## Day 7-12: [End Timestamp 5:11:13]

### Completed front end development section. Checkout, Place Order, Login/Sign Up, About, Contact Page finished.

- Learned `useNavigate` React hook

## Day 8: [End Timestamp 5:33:40]

### Start Back End

- Create backend directory
- cd to the backend dir. and then `npm init` inside of it
- Proceed with the default values it prompts during setup
- Remove test script from package.json
- Install the following dependencies:
  - `npm i cors dotenv express jsonwebtoken mongoose multer nodemon razorpay stripe validator cloudinary bcrypt`
  - cors - allows frontend to access backend
  - dotenv - allows you to use involvement variables
  - express - used to create api
  - jsonwebtoken - enables user authentication
  - mongoose - manage database connectivity
  - multer - store images on cloudinary storage
  - nodemon - restart backend when any changes are made to the code
  - razorpay & stripe - used to intergrate payment rasorpay & stripe
  - validator - checks data coming from user is valid
  - cloudinary - cloud based media management service that assists with image/video storing
  - bcrypt - encrypt user password and store in database
- Add the following directories within /backend/:
  - middleware/ - files that bridge the OS with the database/application
  - config/ - configuration files and settings that connect app to external services
  - models/ - store Mongoose models that define data schemas for MongoDB
  - controllers/ - files that contain logic for handling requests. These functions are linked to route endpoints
  - routes/ - defines Express routes and connects them to the appropriate controller functions
- Define a custom command `server`
  - Add the `server` script to package.json: `"server": "nodemon server.js"
  - nodemon will watche the files for any changes and trigger the server to restart
  - `npm run start` will trigger the start script
  - `npm run server` will start the server script, what we will use locally
- Add `"type": "module" to the package.json
  - Tells Node.js that we're using ES Modules instead of older CommonJS module system
  - Biggest difference btwn CommonJS and ES Modules is the import and export syntax
  - ES --- Import: `import express from 'express'` || Export: `export default someFunc`
  - CommonJS --- Import: `const express = require('express')` || `Export: module.exports = someFunc`
- Create .env file to store important variables that should not be public

## Day 9: [End Timestamp 5:52:11]

### Write config files, set env. variables, set up models

- Added config files for Cloudinary and MongoDB
- Added user and product schema models using Mongoose
- Added MONGODB_URI, CLOUDINARY_API_KEY, CLOUDINARY_SECRET_KEY, and CLOUDINARY_NAME varibles to .env files
- Created new cluster in MongoDB and registered for Cloudinary to obtain API key

## Day 10: [End Timestamp 7:24:32]

### Create APIs for user authentication and product information

- Created API endpoints for users and products
  - User authentication routes: registration, login , and admin login 
  - Product info routes: add item, retrieve single item info, remove item, list items
- Used JWT (json web token) to securely transmit and authenticate admin login info
- Added `multer` middleware file for handling image uploads for each item
- Since images can't be stored in the database, we store the URL for their location on the Cloudinary API

# Day 11: [End Timestamp 8:28:33]

### Begin creating admin panel

- Create new `admin` project directory at the project's root 
- Initialize it with `npm create vite@latest .`, `npm install`, and `npm install axios react-router-dom react-toastify`
- Set server ports for admin to 5173 and frontend to 5174
- Create folder structure for admin panel: /admin/src/assets, /admin/src/components, /admin/src/pages
- Added Tailwind CSS Intellisense extension to help autocomplete Tailwind classes
- Create Login component that authenticates admin using the backend API route.
  - Authentication token is stored in local storage allowing admin permissions to persist after page reload
- Left off working on Add Items page. List and Order pages have not been worked on yet

# Day 12: [End Timestamp 9:12:14]

### Complete Add page start List page

- Admin can now add new products by uploading up to 4 images and filling out the product information such as name, description, price, category, subcategory, and available sizes
- Started working on List page to display all items