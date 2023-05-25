# HabitTracker

The Habit Tracker is a web application designed to help users create, update, delete, and track their habits on a daily basis.
It provides a user-specific experience, allowing each user to manage their own habits and mark them as done or not done.

## Tech Stack:
- Node.js: A JavaScript runtime environment that allows running JavaScript on the server-side.
- Express.js: A web application framework for Node.js, used for handling server-side logic and creating RESTful APIs.
- MongoDB: A NoSQL database used for storing and retrieving product inventory data.

## Installation

To run this application on your local machine, please follow these steps:

Clone this repository using the following command:
```
$ git clone https://github.com/Riteshk229/Habbit-Tracker.git
```
Install the required dependencies using the following command:
```
$ npm install 
```
Start the application using the following command:
```
$ npm start 
```
Open the application in your web browser by visiting the following URL:
```
$ http://localhost:7000 
```

## Usage
Once you have the application up and running, you can start using it by following these steps:
* Sing-up/Sign-in into your account.
* Click on the "Add New Habhits" to create a new habit.
* Enter the name of the habit you want to track.
* Click on the "Save" button to save the habit.
* To mark a habit as complete/incomplete for the day, simply click on the corresponding icon.
* To delete a habit, click on the "Delete" icon next to it.
* To see today's habits, click on "Daily view" button.
* To edit a habit, click on the "Edit" icon next to it.

## Folder Structure
```
Habit Tracker
    |
    |                  |--->css
    |--->assets------->|--->img
    |                  |---> js|-->home.js
    |
    |                  |--->flashMiddleware.js
    |--->config------->|--->mongoose.js
    |                  |--->passport-local-stargety.js
    |
    |                  |-->habbitController.js
    |--->controllers-->|-->homeController.js
    |                  |-->userController.js
    |
    |--->models------->|-->habbit.js
    |                  |-->user.js
    |
    |              
    |                  |-->habbit.js
    |--->routes------->|-->index.js
    |                  |-->user.js
    |
    |              
    |                  |--->_footer.ejs
    |                  |--->_header.ejs
    |                  |--->addHabbits.ejs
    |                  |--->daily_view.ejs
    |                  |--->editHabbit.ejs
    |--->views-------->|--->home.ejs
    |                  |--->layout.ejs
    |                  |--->User_sign_in.ejs
    |                  |--->User_sign_up.ejs
    |                  |--->weekly_view.ejs
    |
    |-->.gitignore
    |--> index.js
    |--> package-lock.json
    |-->package.json
    
 ````
