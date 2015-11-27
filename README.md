# supermassive

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
- API's:
  - Giphy (5 sec)
  - Youtube (limit time)
  - Instagram/Imgur (5 sec) based on hashtag?
  - Twitter (5 sec) bashed on hashtag?

- **Guest**
  - As a GUEST: I want to LOG IN
  - As a GUEST: I want to CREATE an account
  - As a GUEST: I want to VIEW a public profile
  - As a GUEST: I want to make a SEARCH
  - As a GUEST: I want to VIEW random posts
  - As a GUEST: I want to VIEW trending searches
  - As a GUEST: I want to SHARE a post to social media
  - As a GUEST: I want to AUTOPLAY
  - As a GUEST: I want to turn off AUTOPLAY
  - As a GUEST: I want to VIEW a Giphy post
  - As a GUEST: I want to VIEW a Youtube post
  - As a GUEST: I want to VIEW an image post
  - As a GUEST: I want to VIEW a tweet post
  
- **Member**
  - As a MEMBER: I want to LOG OUT
  - As a MEMBER: I want to DELETE my account
  - As a MEMBER: I want to VIEW my profile
  - As a MEMBER: I want to VIEW a public profile
  - As a MEMBER: I want to EDIT my profile
  - As a MEMBER: I want to make a SEARCH
  - As a MEMBER: I want to VIEW random posts
  - As a MEMBER: I want to VIEW trending searches
  - As a MEMBER: I want to FAVORITE a post
  - As a MEMBER: I want to DELETE a favorite
  - As a MEMBER: I want to VIEW my favorites
  - As a MEMBER: I want to SHARE a post to social media
  - As a MEMBER: I want to AUTOPLAY
  - As a MEMBER: I want to turn off AUTOPLAY
  - As a MEMBER: I want to VIEW a Giphy post
  - As a MEMBER: I want to VIEW a Youtube post
  - As a MEMBER: I want to VIEW an image post
  - As a MEMBER: I want to VIEW a tweet post

### Wireframes

![Home](http://i.imgur.com/48k2f5W.png "Super Massive Home")
![Search](http://i.imgur.com/b9GDFMa.png "Super Massive Search")
![Loading](http://i.imgur.com/X8WwdLs.png "Super Massive Loading")
![Post](http://i.imgur.com/poNGBV5.png "Super Massive Post")
![Trending](http://i.imgur.com/2cCJPx6.png "Super Massive Trending")
![Log In](http://i.imgur.com/FGnperp.png "Super Massive Log In")
![Sign Up](http://i.imgur.com/IClYYMY.png "Super Massive Sign Up")
![Profile](http://i.imgur.com/ABK4prY.png "Super Massive Profile")



that’s cool though, sounds like you’re pretty close to cracking it. I’m probably calling it a day soon. @alexkoveos you think frontend will be good for friday? I have the raw UX basically implemented, so it just needs styling.

​[3:53] 
@alexkoveos: you can probably also work on a sweet loading animation for this screen: https://camo.githubusercontent.com/92fcd7270731bdd4de573d9faa48a1e3183ce825/687474703a2f2f692e696d6775722e636f6d2f58385777644c732e706e67 (52KB)


​[3:54] 
I was imagining the rings spinning in opposing directions (i.e. outer most ring clockwise, next ring counter-clockwise, etc.)

​[3:54] 
if you could do that in css/svg I should be able to just plug it in

​[3:57] 
@alexkoveos: Also, can you look into conditional partials? So for example, if the user is logged-in they should see the logged-in version of the header, if they’re a guest they see the guest version of the header. There’s probably an easy way to do it with EJS.
https://slack-imgs.com/?url=https%3A%2F%2Fcamo.githubusercontent.com%2F92fcd7270731bdd4de573d9faa48a1e3183ce825%2F687474703a2f2f692e696d6775722e636f6d2f58385777644c732e706e67&width=1280&height=800

  <img id="loading-animation" src="http://i.imgur.com/Pv4RGaR.jpg" alt="">


trending white = http://i.imgur.com/JcGwxkN.png
trending yellow = http://i.imgur.com/HgmHc2d.png

profile white = http://i.imgur.com/HzPItVN.png
profile yellow = http://i.imgur.com/F8ni0ac.png


