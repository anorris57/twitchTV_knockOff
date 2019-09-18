# twitchTV_knockOff
Twitch TV knock from Udemy course: Modern React with Redux by Stephen Grider

Goal of this app is to learn 
* Use React Router to be able to navigate around to separate pages 
* Allow a user to login/logout by using Goggle OAuth
* How to handle forms in Redux
* To master CRUD (Create, Read, Update, Destroy) operations in React/Redux
* how to do good error handling

Hightlight:
* Very clear discussion of the Browserouter/Path. Explain how Path has a contain method that compares the string listed in the path. So Route path="/" and Route path = "/pagetwo" would be evaluted true for Route path = "/pagetwo" because extractedPath  contains the string "/" and "/pagetwo". Also explained the word exact means exact={true} and changes behavior of Route extractedPath === path.

* Use Link tags for navigating to different pages in app. Link tags prevents the browser from fetching a new index.html file (which is the default behavior of a tags). Link tags allow React Router to hid/components on the html page at the new URL without changing the html page. This is where the term SPA (Single Page App) comes from because only one html page is shown.
