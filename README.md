# Foodie

## Project Description

Foodie is a full stack web app that allows users to search for the best dishes and restaurants.

When a user searches for a food of interest (eg. pizza, burger, etc..), a list of results (restaurants or dishes depending on the search type) ranked from the best to the worst will be returned back to the user. 

Clicking on one of the results from the list will route to the restaurant details page where users are shown the restaurant contact info, a list view of top dishes and the ability to rate dishes.

Users can make submissions of new or missing restaurants and dishes through the use of our forms. New submissions are marked as pending and are not accessible until they are approved by the admin.

### Home Page
---

!["Screenshot of Home page"](https://raw.githubusercontent.com/kooner362/Final-Project/master/docs/homepage.png)

### Search Results
---

!["Screenshot of Search Results"](https://raw.githubusercontent.com/kooner362/Final-Project/master/docs/search_results.png)

### Restaurant Details
---

!["Screenshot of Restaurant Details"](https://raw.githubusercontent.com/kooner362/Final-Project/master/docs/restaurant_details.png)

### Add Rating
---

!["Screenshot of Add Ratings"](https://raw.githubusercontent.com/kooner362/Final-Project/master/docs/add_rating.png)

### My Ratings
---

!["Screenshot of My Ratings"](https://raw.githubusercontent.com/kooner362/Final-Project/master/docs/my_ratings.png)

### New Restaurant Submission
---

!["Screenshot of New Restaurant Submission"](https://raw.githubusercontent.com/kooner362/Final-Project/master/docs/new_restaurant_submission.png)

### New Dishes Submission
---

!["Screenshot of New Dishes Submission"](https://raw.githubusercontent.com/kooner362/Final-Project/master/docs/new_dishes_submission.png)

### Admin: Approve Dishes
---

!["Screenshot of Approve Dishes"](https://raw.githubusercontent.com/kooner362/Final-Project/master/docs/approve_dishes.png)

## Getting Started

1. Clone this repository: `git clone https://github.com/kooner362/Final-Project.git`
2. Change directory to backend server directory: `cd Final-Project/final_project_backend`
2. Install dependencies: `npm i`
3. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
4. Run migrations `npx sequelize db:migrate`
5. Seed database: `psql -h localhost -d finaldb -U USER -f sql/seed.sql` Replace USER with a db superuser
6. Run server `npm start`
7. Open new terminal and navigate to `cd Final-Project/frontend`
8. Install dependencies: `npm i`
9. Run React app: `npm start`
9. Visit `http://localhost:3000`

## Tech Stack

- Node.js
- Express
- Postgres
- Sequelize
- React
- Redux
