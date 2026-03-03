I built this app to help me keep track of all the jobs I'm applying for in one place. I wanted something that looked clean and worked fast on my phone.
Features:
Dashboard: Shows my total applications and how many interviews or offers I have.
Live Tracker: A table where I can add new jobs and change their status (Applied, Interview, etc.).
Resources: A list of links and guides I use for interview prep.
Glass UI: I used a "Glassmorphism" style with blur effects to make it look modern.

Tech I Used
React for the frontend.
Node.js and Express for my server.
MongoDB Atlas to store all the application data.
Lucide-React for all the icons.

 Things I learned
How to handle responsive tables so they don't break on mobile screens.
Why security is important—I had to learn how to use environment variables to keep my database password safe.
CRUD Logic: I built the full cycle—Creating jobs, Reading the list, Updating statuses, and Deleting old entries.
Data Schemas: Used Mongoose to ensure every application has a required company name and status before saving.
Security: Learned the hard way to use .env files for my MongoDB URI after an accidental leak.
Connection Handling: Managed CORS and Port 5000 setup so the frontend can actually talk to the database.
Debugging: Handled 500 errors by checking server logs and fixing broken database queries.
