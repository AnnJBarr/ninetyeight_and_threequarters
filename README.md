

# Todo Application - Frontend

This is the front end of a Todo Application, built throughout the [Tech Returners](https://techreturners.com) Your Journey Into Tech course. It integrates with a backend, available [here](https://github.com/AnnJBarr/ninetyeight_and_threequarters).

The hosted version of the application is available here: [https://AnnJBarr.github.io/ninetyeight_and_threequarters/](https://AnnJBarr.github.io/ninetyeight_and_threequarters/).

The application is called Ninety Eight & 3/4 Percent after a Dr Seuss quote. To be successful, challenges need to be broken up into steps we can take one after another, like the tasks on our to do list.

*On and on you will hike* 
*and I know you'll hike far* 
*and face up to your problems* 
*whatever they are.*

*You'll get mixed up, of course,*
*as you already know.*
*You'll get mixed up* 
*with many strange birds as you go.* 
*So be sure when you step.*
*Step with care and great tact* 
*and remember that Life's a Great Balancing Act.*
*Just never forget to be dexterous and deft.*
*And never mix up your right foot with your left.*

*And will you succeed?* 
*Yes! You will, indeed!* 
*(98 and 3 / 4 percent guaranteed.)*
Oh the places you’ll go - Dr Seuss

The application has been designed to 
- show the total number of tasks awaiting completion, list of tasks to complete sorted oldest - newest with due date in words, a list of completed tasks sorted newest completed - oldest completed with done date in words. Overdue tasks show due date in red and completed tasks show details with strikethrough (READ)
- allow for the creation of new tasks whilst selecting a due by date. A task can not be added without text and max 160 characters available. Date selected cannot be before today. (CREATE)
- allow for tasks to be marked as completed and the completed Date added to the data object (UPDATE)
- allow for tasks to be deleted from either to do or completed tasks (DELETE)


The application makes use of [React Infinite Calendar](https://www.npmjs.com/package/react-infinite-calendar), [Font Awesone](https://www.npmjs.com/package/font-awesome) and [Moment](https://www.npmjs.com/package/moment).


### Technology Used

This project uses the following technology:

- ReactJS
- JavaScript (ES2015+)
- CSS
- Webpack
- Axios
- ESLint

It has been designed and built with mobile-first reponsive principles in mind.

Photos of application running on a mobile.
(https://github.com/AnnJBarr/ninetyeight_and_threequarters/blob/master/public/portraittop.png)
(https://github.com/AnnJBarr/ninetyeight_and_threequarters/blob/master/public/portaitmid.png)
(https://github.com/AnnJBarr/ninetyeight_and_threequarters/blob/master/public/portaitbottom.png)
(https://github.com/AnnJBarr/ninetyeight_and_threequarters/blob/master/public/landscapetop.png)
(https://github.com/AnnJBarr/ninetyeight_and_threequarters/blob/master/public/landscapemid1.png)
(https://github.com/AnnJBarr/ninetyeight_and_threequarters/blob/master/public/landscapemid2.png)
(https://github.com/AnnJBarr/ninetyeight_and_threequarters/blob/master/public/landscapemid3.png)
(https://github.com/AnnJBarr/ninetyeight_and_threequarters/blob/master/public/landscapebottom.png)

### Running the application locally

[Node.js](https://nodejs.org/en/) must be installed if not already.

Clone the application and install dependencies:

    npm install

To start the application:

    npm start

The application will then be accessible at:

[http://localhost:3000](http://localhost:3000)