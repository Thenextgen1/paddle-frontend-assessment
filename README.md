# Peddle Frontend Assessment

* Task 1 - Design Test
* Task 2 - REST Api Proficiency

## Installation

Clone or download the repository as a zip folder
To run, on your command line run

```JavaScript
npm start
```

## Usage

* Task 1 - To view any of the pages:
Navigate to the /comingsoon, /blog, /about routes respectively.

```JavaScript
localhost:3000/desiredpage
```

* Task 2 - To view the github task:
Navigate to the /github route as well.

## Dependencies Used

The following dependencies were required and used for the assessment:

* Millify - Converted long numbers to readable strings obtained when calling the REST api in the /github route
* Moment - Exracted and Parsed the current date each repository was created in the /github route, relative to the date set in the REST api.
* React-Icons - Obtained specific icons from a collection of libraries.
* React-Infinite-Scroll-Component - Used to implement infinite scroll in the /github route.

## What can be improved about this application

* For the blog page, a custom api which returns JSON data or should be created to host the contents of the blog.
* The coming soon component could use a real time animated counter.
* For UI best practices a light and darkmode version of each page should be created with a custom button or switch to change each mode.
