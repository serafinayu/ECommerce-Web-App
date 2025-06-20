<h1 align="center"> 
  E-Commerce Web App
  <br>
</h1>

<br>

<p align="center">
  <a href="https://froever-frontend-kappa.vercel.app/"><img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3RkcWI0cnFrYTc3MWwyZHpqNXNzOGV4c3Q3eDF0cXNodzc0OWk0dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2TxUQf2SpqgJ28EkVm/giphy.gif"></a>
</p>

<p align="center">A full-stack e-commerce web application with a custom admin dashboard, featuring product management, secure checkout, and responsive design built with React, Node.js, Express, and MongoDB.</p>

<br>

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

<br>

<h2>Table of Contents</h2>
<ul>
  <li><a href="#key-features">Key Features</a></li>
  <li><a href="#project-structure">Project Structure</a></li>
  <li><a href="#dependencies">Dependencies</a></li>
  <li><a href="#installation-instructions">Installation Instructions</a></li>
  <li><a href="#credits">Credits</li>
</ul>

<br>

<h2>Key Features</h2>

<ul>
  <li>Full-featured e-commerce experience with product browsing, search, and filtering</li>
  <li>User authentication with protected routes using JSON Web Tokens (JWT)</li>
  <li>Secure checkout with Stripe integration for real-time payment processing</li>
  <li>Cloud image upload and storage via Cloudinary</li>
  <li>Admin dashboard for managing products, orders, and users</li>
  <li>Fast and responsive UI built with React, Vite, and Tailwind CSS</li>
  <li>RESTful API powered by Express and MongoDB</li>
</ul>

<br>

<h2>Project Structure</h2>

```
ECommerce-Web-App/
├── frontend/       → Customer-facing web app
├── backend/        → REST API server
├── admin/          → Admin panel interface
```

<br>

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

<br>

<h2>Installation Instructions</h2>

<details open>
  <summary>Prerequisites</summary>
  <br>
  Ensure you have the following installed or created for the web app to work!
  <br>
  <br>
  <ul>
    <li>Node.js (v18+)</li>
    <li>npm</li>
    <li>MongoDB Account</li>
    <li>Stripe Account (with API keys)</li>
    <li>Cloudinary Account (for image uploads)</li> 
  </ul>
  <br>
</details>

<details open>
  <summary>Install Dependencies</summary>
  <br>
  <p>Use <code>npm i</code> in each of these folders: <code>/frontend</code>, <code>/backend</code>, <code>/admin</code></p>
  <br>
</details>

<details open>
  <summary>Set Environment Variables</summary>
  <br>
  <li>Create a .env file and set the environment variables for each of these folders: <code>/frontend</code>, <code>/backend</code>, <code>/admin</code> </li>
  
  <br>
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
<br>
</details>

<details open>
  <summary>Run the Web App</summary>
  <br>
  <li>Run <code>npm run dev</code> in both the <code>/frontend</code> and <code>/admin</code> directories</li>
  <li>Run <code>npm run server</code> in the <code>/backend</code> directory</li>
<br>
<br>
</details>

<h2>Credits</h2>
This project is based on GreatStack's [E-Commerce MERN app](https://youtu.be/7E6um7NGmeE?si=R1G81SyC0ZcBYluW) tutorial
