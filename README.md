# **Time Guessing Game**

**A web-based game where users guess the time of a selected location.**

---

## **Project Overview**

The **Time Guessing Game** allows users to:

- **Guess the time** of a chosen location.
- Select a **location from a dropdown menu**.
- View their **last 3 guesses** displayed on the game board.

The project contains three parts:

1. **Server**: Backend logic using Python (Flask).
2. **Client**: Frontend interface using React.
3. **DB**: MySQL database for storing locations, users, and guesses.

---

## **Project Structure**

```
TimeGuessingGame/
│
├── client/             # React Frontend
│   ├── src/            # Source Code
│   │   ├── assets/
│   │   ├── components/ # Reusable Components
│   │   ├── pages/      # Main Page
│   │   ├── services/   # API Services
│   │   ├── styles/     # CSS Files
│   │   ├── App.js      # Main React App
│   │   ├── index.js    # Entry Point
│   │   ├── App.css     # Global Styles
│   ├── public/         # Static Files
│   ├── build/          # Production Build
│   ├── package.json    # React Dependencies
│
├── server/             # Python Backend
│   ├── utils/          # Utility Scripts
│   │   ├── time_utils.py
│   ├── app.py          # Main Server File
│   ├── db-schema.pdf   # Database Schema
│
├── .gitignore          # Ignored Files
├── README.md           # Documentation
└── .env               # Environment Variables
```

---

## **Setup Instructions**

### **Clone the Repository**

```bash
git clone https://github.com/...
```

### **Install Dependencies**

**For the Client:**

```bash
cd client
npm install
```

**For the Server:**

```bash
cd server
pip install -r requirements.txt
```

---

### **Create MySQL DB Tables**

1. Open `db-schema.pdf` and review the database schema.
2. Create the tables in your MySQL database using the schema.
3. Insert some test users into the `user` table.

### **Create .env File**

Create a `.env` file in the **root of the project** and add the following parameters:

```env
# db config
MYSQL_HOST=your_mysql_host
MYSQL_USER=your_mysql_user
MYSQL_PASSWORD=your_mysql_password
MYSQL_DB=your_mysql_database
```

Replace each placeholder with your actual MySQL credentials.

---

### **Build the Client**

```bash
cd client
npm run build
```

This will create a `build` folder with static files for the server.

---

### **Run the Server**

```bash
cd server
python app.py
```

- The server will run on **http://127.0.0.1:5000**

---

## **Features**

1. **Server serves static files** from the client build.
2. **Time Guessing Mechanism** with location selection.
3. **Game Board** displays the **last 3 guesses**.
4. **Dynamic Location Selection** via dropdown.
5. **Quick Setup** for both server and client.

---

## **To-Do List**

- **Refactor server structure** for better organization.
- Improve error handling and validation.
- Enhance UI/UX design.
- Implement login/signup logic with cookies and sessions.

---

## **How it Works**

1. **User selects a location** from the dropdown.
2. **User guesses the time** using a time picker.
3. **Guess is submitted** to the backend.
4. **Server processes the guess** and updates the database.
5. **Last 3 guesses are displayed** on the game board.

---

## **Contact**

- **Author:** Avi Kaufman
- **Email:** avrikaufman@gmail.com
- **GitHub:** (https://github.com/avri-kaufman)

---
