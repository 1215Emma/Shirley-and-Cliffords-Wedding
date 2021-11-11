# Wedding website for my friend's Shirley & Clifford 

### Features of this project 
- Dynamic Data that an admin user can modify through the websites admin panel.
- Gallery that is on a timer with the ability to scroll and click different images to be displayed.
- Fully functional RSVP form that an admin can view and edit themselves. 
- Admin panel that can be used to edit the contents of the website and have them update immediately. 

<br />

### Languages and Tools used: 

<img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />
<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
<img align="left" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
<img align="left" alt="Node.js" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
<img align="left" alt="Express" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png" />
<img align="left" alt="Firebase" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png" />
<img align="left" alt="framer-Motion" width="26px" src="https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/framer-motion.jpg" />
<img align="left" alt="Formik" width="26px" src="https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/formik.png"/>
<br />
<br />

## Features 

### Homepage 
- Contains Dynamic content with smooth scrolling via navigation
<br />

![Homepage](https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/homepage-view.gif)

<br />

### Admin Panel
- Responsive navigation bar 
- Admin panel with editable dynamic content 
<br />

![Admin Panel](https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/admin-panel.gif)

<br />

### Gallery
- Gallery image changes every 10 seconds 
- scrollable vertical gallery navigation 
<br />

![Gallery](https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/gallery.gif)


## After project thoughts 

### Things learned/improved on in this project
- Sizing/responsiveness for different browsers and mobile
- Dynamic content editing
- UI/UX design decisions/implementations 
- Dynamic resizing using inner-width due to mobile browsers having the height include what is behind the toolbar as well and in case a user resizes the browser. 

### Things I struggled with
This project went through 4 iterations with UI/UX and I had trouble deciding what was the right choice. Displaying the content correctly was also an issue from pervious versions of this project due to readability. 

<br />

### First Iteration 
This was using the images as a full background in each section and having the homepage be scrollable with snapping. 
<br />
The trouble I had with this was that readability with the content was very difficult due to images being all different colors. 
<br />
![iteration 1](https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/iteration_1.png)
<br />
I also incorporated a music player as well to be used as a gallery since music is a big part of their lives. 
<br />
This player was able to drag and swipe to the next image, show the progress of the image gallery, and have functionality with the controls. 
<br /> 
At the bottom, you could pull up the full gallery and view images similiar to a phones native gallery application.
<br />
![Music Player](https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/music-player.png)

<br />
<br />

### Second Iteration
I tried a new approach to fix the readbility of content issue by using an easier to read background and have it animated using html canvas. The pattern in the background was made using rectangular points and was falling with keyframes and changing colors on each section. I experimented with different layouts but ultimately decided that it didn't look good enough for a wedding website. 
<br />
![iteration 2](https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/iteration_2.png)

<br />
<br />

### Third Iteration
This is where I tried the approach of getting rid of the gallery and music player and using the images as a fullscreen gallery on load that would start zoomed in on a 1.5 scale and slowly zoom out to 1.0 scale over 20 seconds. 
<br />
I had a button to change the image but I strugged a lot with mobile sizing due to learning that mobile browsers count 100vh as the space behind the toolbar as well so the content would be cut off. I had to learn how to size every component using inner.width and make everything responsive in case the user changes the width of their browser. 
<br />
![iteration 3](https://phanes.feralhosting.com/hkscfreak/Shirley-and-Clifford-Wedding/iteration_3.jpg)