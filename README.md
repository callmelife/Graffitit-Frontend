README for CallMeLife's Graffiti Gallery! Made by Matthew Sommers

Front End Repo URL: https://github.com/callmelife/Graffitit-Frontend
Back End Repo URL: https://github.com/callmelife/Graffitit-Backend
Link to the Live Application: https://callmelife.github.io/Graffitit-Frontend/

Explanation of the app:
This application is intended to be an art gallery. Users can sign up and sign in to view all the images and their relevant info that has been uploaded to the gallery's backend. As in a real art gallery, users can view the pictures uploaded by other users, but they cannot comment on or delete another users' image. Users are able to upload images to the gallery by following the simple instructions listed.

How it works:
Once users are properly signed in, their able to enter a valid url into the URL field, 'POST' it, and save that URL to the database. Upon clicking the 'GET' images button, the image will be disaplyed in the frame below the user-facing response box. Users are then free to 'PATCH' (i.e. comment on) and 'DELETE' the pictures that they've uploaded. But, users are not able to 'DELETE' or 'PATCH' images that belong to other users. Users can see all the images on the backend, not just their own. I'd say that the most complex process going on is to check if the URL entered is URL checker for POST.

Approach:
Once I settled on what the app was going to be and what I wanted it to do, I created a basic html and css layout so that I could visualize the project in a simple manner. After that, I got the authorization process out of the way because that workflow seemed the most logical. After auth was out of the way, I decided to build my backend for my app. I attempted to get this out of the way as soon as possible because I was less familar with it, so I figured the less I touch it / have to test it after its complete, the better. After the backend was ready I went ahead and worked through 'wiring up' the front end with all the proper JS / jQuery processes I needed. After everything looked good, I ran through the ui for both battles and auth and made the ui more specific.

Unsolved problems:
- I'd like to use Handlebars in the future. I'm aware that some of the code I've written could be done more elegently in handlebars but I discovered this method and just didnt get around to refactoring it before it was due.
- I'd also like comments to update in 'real-time' (i.e. not have to scroll through the images again in order to see the new comment on that image).

User story:
As a user, I want to be able to:
-Sign up
-Sign In
-Sign Out
-Change password
-Upload images
-Comment on images I uploaded
-Delete images I uploaded
-Scroll through all images in the gallery

Wire frame (Original version, idea changed since its inception):
http://i.imgur.com/q5PWU6r.jpg
