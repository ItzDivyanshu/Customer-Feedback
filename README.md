# Customer Feedback Platform

This is a customer feedback platform,  The platform allows users to:

* **Log in:** Using Google OAuth 2.0 for secure authentication.
* **Submit Feedback:** Provide feedback categorized into Product Features, Product Pricing, and Product Usability, including a rating and comments.
* **View Feedback:**  Access a dashboard displaying aggregated feedback data.

The backend integrates with Frill.co ([https://frill.co/](https://frill.co/)) for centralized feedback management via webhooks.



## Getting Started

**Prerequisites:**

* Node.js and npm (or yarn) installed.
* MongoDB instance running.
* A Frill.co account and webhook URL configured.  You'll need to create a webhook in Frill.co and set `FRILL_WEBHOOK_URL` and `FRILL_WEBHOOK_SECRET` environment variables accordingly.
* Google Cloud Platform project with OAuth 2.0 credentials configured. Set `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` environment variables.  `SESSION_SECRET` is also required.
* A `.env` file in the `backend` directory containing the necessary environment variables.


**Backend Setup:**

1. Navigate to the `backend` directory: `cd backend`
2. Install dependencies: `npm install`
3. Set up environment variables in a `.env` file:

4. Start the server: `npm run dev`

**Frontend Setup:**

1. Navigate to the `frontend` directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

The frontend will run on a separate port (default is 5173).


## Technologies Used

**Backend:**

* Node.js
* Express.js
* Mongoose
* Passport.js
* MongoDB
* Axios

**Frontend:**

* React
* React Router
* Tailwind CSS
* Axios



