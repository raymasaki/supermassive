# supermassive

Supermassive is your internet black hole. A place to discover what randomness awaits you in gif, text, image and video form.

###Technologies Used
	- Node/ Express
	- Tumblr API
	- Flikr API
	- Giphy API
	- Dailymotion API
	- EJS - A templating front end module.
	- Mongoose - MongoDB object modeling for Node.js.
	- Morgan - Node to write log line as request instead of response.
	- FS - Extension to original Node.js FS library.
	- Passport - Authentication middleware for Node.js.
	- bcrypt-nodejs - Library to hash passwords.
	- Method-override - Creates an override to req.method property with new value.
	- cookie-parser - Parse cookie header and popular req.cookies.
	- connect-flash - Connects special area for storing messages.

### Approach
	- Started with brainstorming.
	- Created wireframes.
	- Built universal parts of backend.
	- Searched for and tested APIs to see what were both attainable and true to the original vision of the project.
	- Divided labor between focusing on database reading and writing, front end, implementing the API’s properly, creating favorites and trending features.
	- Made individual features in test apps before adding them into the main production app.
	- Pulled together different branches of work to create a working prototype.
	- Integrated front end and polished design.
	- Put site through QA to make sure it is feature rich and bug free.

### Project Features

- Search, Trending, Random
  - Search query: limit to one word
  - Trending: based on a db of incremented search queries
- Autoplay and Stop Autoplay
- Favorite/Share an image
  - Show favorites
  - Delete favorites
- CRUD
  - Login
  - Sign up
  - Log out
  - Delete Account
  - Update Account
  - Show Profile
	- Save Favorites
	- Show User's Favorites
	- Add Searches to Trending list
	- Show top Trending Searches
- API's:
  - Giphy (5 sec)
  - Dailymotion (10 sec)
  - Flickr (5 sec)
  - Tumblr (5 sec)

- **Guest**
  - As a GUEST: I want to LOG IN
  - As a GUEST: I want to CREATE an account
  - As a GUEST: I want to make a SEARCH
  - As a GUEST: I want to VIEW random posts
  - As a GUEST: I want to VIEW trending searches
  - As a GUEST: I want to AUTOPLAY
  - As a GUEST: I want to choose what type of post to VIEW
	- As a GUEST: I want to VIEW a random type of post
  - As a GUEST: I want to VIEW a Giphy post
  - As a GUEST: I want to VIEW a Dailymotion post
  - As a GUEST: I want to VIEW a Flickr post
  - As a GUEST: I want to VIEW a Tumblr post

- **Member**
  - As a MEMBER: I want to LOG OUT
  - As a MEMBER: I want to DELETE my account
  - As a MEMBER: I want to VIEW my profile
  - As a MEMBER: I want to EDIT my profile
  - As a MEMBER: I want to make a SEARCH
  - As a MEMBER: I want to VIEW random posts
  - As a MEMBER: I want to VIEW trending searches
  - As a MEMBER: I want to FAVORITE a post
  - As a MEMBER: I want to VIEW my FAVORITES
	- As a MEMBER: I want to only have a limited number of FAVORITES
  - As a MEMBER: I want to AUTOPLAY
  - As a MEMBER: I want to choose what type of post to VIEW
	- As a MEMBER: I want to VIEW a random type of post
  - As a MEMBER: I want to VIEW a Giphy post
  - As a MEMBER: I want to VIEW a Dailymotion post
  - As a MEMBER: I want to VIEW a Flickr post
  - As a MEMBER: I want to VIEW a Tumblr post

### Wireframes

![Home](http://i.imgur.com/48k2f5W.png "Super Massive Home")
![Search](http://i.imgur.com/b9GDFMa.png "Super Massive Search")
![Loading](http://i.imgur.com/X8WwdLs.png "Super Massive Loading")
![Post](http://i.imgur.com/poNGBV5.png "Super Massive Post")
![Trending](http://i.imgur.com/2cCJPx6.png "Super Massive Trending")
![Log In](http://i.imgur.com/FGnperp.png "Super Massive Log In")
![Sign Up](http://i.imgur.com/IClYYMY.png "Super Massive Sign Up")
![Profile](http://i.imgur.com/ABK4prY.png "Super Massive Profile")

### Unresolved Problems/Cut Features
	- Did not get to implement command for turning on random API after choosing a type of post
	- Did not get to implement commands for choosing type of post for random search
	- Did not get to allow members to delete their favorites
	- Did not get to allow members to have a profile image

### Major Hurdles
	- Successfully implementing APIs: we tried Youtube, Vimeo, Twitter, Imgur, Vine and Instagram before getting the current APIs to work
	- Implementing Trending feature: we had difficulty incrementing the counting value for documents on a repeated search, we discovered findOneAndUpdate which solved this problem
	- Implementing Favorites feature: we had difficulty assigning a favorite to a specific User, we created a route that brought the current user id to app.js, which let us assign that value to the Favorite documents and get them from the database based on that id value
