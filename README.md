# 🚀 React Portfolio Website  

A personal portfolio website built using **React.js** and **Vite**, showcasing projects, skills, and a contact form that stores messages in **MongoDB** and sends email notifications.  

## 📌 Features  

✅ **About Me Section** – Brief introduction and skills summary.  
✅ **Projects Section** – Display portfolio projects with images and descriptions.  
✅ **Contact Form** – Visitors can send messages, which are stored in **MongoDB** and emailed to you.  
✅ **Responsive Design** – Fully responsive and mobile-friendly.  
✅ **Optimized Performance** – Built using Vite for faster loading.  

---

## 🛠️ Tech Stack  

### **Frontend:**  
- React.js (Vite)  
- HTML, CSS  
- JavaScript  
- Bootstrap (or custom styling)  

### **Backend:**  
- Node.js (Express.js)  
- MongoDB (Mongoose)  
- Nodemailer (for email notifications)  
- CORS and dotenv for security  

### **Deployment:**  
- **Frontend:** GitHub Pages / Vercel  
- **Backend:** Render  

---

## 🎯 Setup Instructions  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/sanafathima-00/Portfolio.git
cd Portfolio
```

### 2️⃣ Install Frontend Dependencies  
```sh
npm install
```

### 3️⃣ Install Backend Dependencies  
```sh
cd backend
npm install
```

### 4️⃣ Set Up Environment Variables  
Create a `.env` file inside the **backend** folder and add:  
```env
MONGO_URI=your_mongodb_connection_string
EMAIL_HOST=smtp.your-email.com
EMAIL_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
```

### 5️⃣ Run Backend Server  
```sh
cd backend
node server.cjs
```
**Expected Output:**  
```
✅ MongoDB Connected Successfully
🚀 Server is running on port 5000
```

### 6️⃣ Run Frontend  
```sh
npm run dev
```
The site should now be running locally at `http://localhost:5173/`.  

---

## 🚀 Deployment  

### **Frontend Deployment (Vercel)**  
1. Push code to GitHub.  
2. Connect the GitHub repo to **Vercel**.  
3. Deploy!  

### **Backend Deployment (Render)**  
1. Push backend code to a separate GitHub repo (if needed).  
2. Deploy using **Render** and get the backend URL (e.g., `https://portfolio-backend-pseb.onrender.com/`).  
3. Update the API URL in `Contact.jsx`:  
   ```js
   const response = await fetch("https://portfolio-backend-pseb.onrender.com/contact", {
   ```

---

## 📝 Project Structure  

```
📁 portfolio  
│── 📁 src  
│   ├── 📁 assets/ (Images and static files)  
│   ├── 📁 pages/ (Home.jsx, Projects.jsx, Contact.jsx)  
│   ├── 📁 styles/ (CSS files)  
│   ├── App.jsx  
│   ├── main.jsx  
│── 📁 public  
│── 📁 backend  
│   ├── 📁 models/ (Contact Schema)  
│   ├── server.cjs  
│── 📄 .gitignore  
│── 📄 package.json  
│── 📄 README.md  
```
