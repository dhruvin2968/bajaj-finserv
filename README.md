# Full Stack API Challenge

This project is a solution to the **Full Stack challenge** from a question paper provided by VIT. It comprises a **Node.js backend REST API** and a corresponding **React-based frontend API tester**. The entire solution is deployed on **Vercel** for public access.

---

## 🌐 Live Demos


You can explore the live, hosted versions of both the frontend and backend applications:

| Component            | URL                                                                       |
|---------------------|---------------------------------------------------------------------------|
| Frontend API Tester  | [https://bajaj-finserv-bfhl-api-tester.vercel.app/](https://bajaj-finserv-bfhl-api-tester.vercel.app/) |
| Backend API Endpoint | [https://bajaj-finserv-backend-psi.vercel.app/bfhl](https://bajaj-finserv-backend-psi.vercel.app/bfhl) |

---
## Screenshots
<img width="1578" height="965" alt="image" src="https://github.com/user-attachments/assets/cb26b55d-1871-452a-801f-3a3daffa2946" />
<img width="742" height="307" alt="image" src="https://github.com/user-attachments/assets/fd8d7df4-d17e-476c-a684-08447a9f69da" />




## ✨ Key Features

The backend API is designed to process an array of mixed data types via a POST request and return a structured JSON response:

- **Data Categorization:** Sorts input items into four distinct arrays: even numbers, odd numbers, alphabets, and special characters.
- **Alphabetical Concatenation:** Concatenates all alphabetical characters in reverse order with alternating capitalization to form a unique string.
- **Numerical Summation:** Calculates the sum of all numerical values in the input array.
- **Robust Handling:** Validates the input to ensure it is a valid array and gracefully handles errors.
- **Correct Response Format:** Returns a JSON object with all required fields, including a `user_id` in the specified format (`full_name_ddmmyyyy`).

---

## 🛠️ Tech Stack

**Backend:**
- Node.js: Server-side JavaScript runtime.
- Express.js: Web framework for creating the REST API.
- CORS: Middleware for enabling Cross-Origin Resource Sharing.
- Vercel: Hosting platform for deploying the serverless API.

**Frontend:**
- React: JavaScript library for building the user interface.
- Axios: HTTP client for making API requests.
- Vercel: Hosting platform for the single-page application.

---

## 📝 API Usage

The hosted API is accessible via a **POST request** to the `/bfhl` endpoint.

**Request:**

POST https://bajaj-finserv-backend-psi.vercel.app/bfhl
Content-Type: application/json
