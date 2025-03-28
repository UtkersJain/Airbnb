### 🏡 Airbnb Clone

A backend application for an Airbnb-style property listing platform, built with **Node.js, Express, MongoDB, and Mongoose**.  

## 🚀 Features  
### 🛠 Project Setup & Database Integration  
✔ **Project Structure** – Organized and modular backend setup  
✔ **MongoDB Connection** – Integrated using Mongoose  
✔ **Listing Model** – Defined schema for property listings  

### 📌 CRUD Operations for Listings  
🔹 **Index Route** – Fetch and display all listings  
🔹 **Show Route** – View a single listing's details  
🔹 **New & Create Route** – Add new property listings  
🔹 **Edit & Update Route** – Modify existing listings  
🔹 **Delete Route** – Remove listings when necessary  

## 🏗 Tech Stack  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB, Mongoose  
- **Other Tools**: dotenv, nodemon  

## 🛆 Installation  
1. Clone the repository:  
   ```sh
   git clone https://github.com/UtkersJain/Airbnb.git
   cd Airbnb
   ```
2. Install dependencies:  
   ```sh
   npm install
   ```
3. Set up the environment variables:  
   - Create a `.env` file and add:  
     ```env
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     ```
4. Start the development server:  
   ```sh
   npm run dev
   ```

## 💌 API Endpoints  
| Method | Route            | Description                |
|--------|------------------|----------------------------|
| GET    | `/listings`      | Get all listings           |
| GET    | `/listings/:id`  | Get a specific listing     |
| POST   | `/listings`      | Create a new listing       |
| PUT    | `/listings/:id`  | Update an existing listing |
| DELETE | `/listings/:id`  | Delete a listing           |

 

