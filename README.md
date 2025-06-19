<h1 align="center"> E-Commerce Web App</h1>

<p align="center">
  <img src="https://img.shields.io/badge/react-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/tailwindcss-4.1.8-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/express.js-5.1.0-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/mongodb-mongoose-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/jwt-authentication-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
  <img src="https://img.shields.io/badge/cloudinary-image%20hosting-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" />
  <img src="https://img.shields.io/badge/stripe-payments-635bff?style=for-the-badge&logo=stripe&logoColor=white" />
</p>


<h2>Table of Contents</h2>
<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#credits">Credits</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>

<h2>Key Features</h2>

<h2>Project Structure</h2>

```
ECommerce-Web-App/
├── frontend/       → Customer-facing web app
├── backend/        → REST API server
├── admin/          → Admin panel interface
```
<h2>Dependencies</h2>

<h4>Frontend and Admin Panel</h4>
<ul>
  <li>Core: <code>react</code>, <code>react-dom</code>, <code>react-router-dom</code></li>
  <li>Styling: <code>tailwindcss</code>, <code>@tailwindcss/vite</code></li>
  <li>HTTP & Feedback: <code>axios</code>, <code>react-toastify</code></li>
  <li>Dev: <code>vite</code>, <code>@vitejs/plugin-react</code>, ESLint + plugins</li>
</ul>

<h4>Backend</h4>
<ul>
  <li>API: <code>express</code>, <code>cors</code>, <code>dotenv</code>, <code>jsonwebtoken</code></li>
  <li>Auth & Security: <code>bcrypt</code>, <code>validator</code></li>
  <li>File Uploads: <code>multer</code>, <code>cloudinary</code></li>
  <li>Payments: <code>stripe</code></li>
  <li>Database: <code>mongoose</code></li>
  <li>Dev: <code>nodemon</code></li>
</ul>

## Installation and Deployment to Vercel Instructions

<h4>Prerequisites</h4>
<ul>
  <li>Node.js (v18+)</li>
  <li>npm</li>
  <li>MongoDB (local or Atlas)</li>
  <li>Stripe Account (with API keys)</li>
  <li>Cloudinary Account (for image uploads)</li> 
</ul>

<h4>Environment Variables</h4>
Set the following environment variables when deploying to Vercel

Frontend:

```
VITE_BACKEND_URL="your_backend_vercel_url"
```

Backend:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Admin:
```
VITE_BACKEND_URL="your_backend_vercel_url"
```

<h4>Install Dependencies</h4>
- Use npm install in each of the following directories: /frontend, /backend, /admin



### Credits
This project is based on GreatStack's E-Commerce MERN app tutorial
