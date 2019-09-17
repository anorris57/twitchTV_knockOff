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
