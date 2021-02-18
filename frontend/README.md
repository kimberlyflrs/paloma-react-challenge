# Demo Streaming README

# Run the app
In order to run the app, cd into the frontend folder and run the following command to be served in a static server:
  `npm install -g serve`
  `serve -s build`

Another alternative would be to run `npm start` from the same location.


# Technical and Architectural Choices
I made my decisions by first figuring out what elements needed to be created on a page (header, footer, card, etc) and also figuring out any variables that needed to be tracked. I then asked whether the variables were only going to be used in one location or across multiple files. This is when I decided to store my information in one place which would be the context API.

React Router: The react router was chosen because it is well known for allowing a user to move to one component to another with ease. This allowed me to go from the home page to the series and movies pages.

Context API: I decided to use the context api to keep track of the data that was being passed around in the app (when information was loading, feed collection, when errors occured, etc). I was going to do a useState at first to look at the information but that did not allow me to update states right away since I would've been working with queues. The context api made it easier for me to know when my api was done fetching and make the appropriate updates to my html. 

Loading and showing errors on home page: I decided to put the error and loading messages on the home screen. I believe the sequence of event would be the user clicks on series/movie, we wait for feedback if we can connect to the next page (wait if information available), then show any message if applicable, else we moove to the according page. Loading the information on the series and movie page was not the right decision because the design shows that we're waiting for all the information before moving on, on the home page.  

Bootstrap: I decided to use react-bootstrap for a framework as I ffind it personally easier to create a grid with it. I also used some of their components such as the navbar for a quick responsive navigation.


# Improvements on submission
One improvement I would have made would be to create one file that would serve as a template for the series and movie pages. Both of my current files (movie.js and series.js) share 
the same code. By having the same exact code in two different places, it causes more space to be used in an app and becomes redundant. By minimizing the code, we create a more efficient
app. 
I would also, go back and see if there were any javaascript lines I can simplify.
I would add a bunch of notes or at least an overview at the top of each file explaining what each file does. This is for other users who get my code in the future can understand 
what is happening.

# Allocated more time
If I was allocated more time I would clean up my CSS file. It is a bit messy and I believe just adding notes about what section of the css file corresponds to the JS would 
be nice. I would also run tests on the code. I didn't run any with the exception of seeing if I was calling the API correctly and creating console.logs to check the information. I would have also tested for the use case that I could not connect to the API. There is a small bug in the code where this case isn't always met so running a few tests would help me get to the bottom of it. Another thing I would have done is load the api information if the user visits the series or movie page.

I would also have read more information on how deployment works and specific React testing functions.


## Other Notes
Overall, the coding challenge was fun. I did like how it tested your knowledge on APIs and how to present information. It was a bit difficult figuring out the exact colors and margins being used in the design. 

I do have a portfolio website at https://kimberly-flores.com/ and you can check out my personal and class projects there. 

Thank you again for presenting this challenge!
