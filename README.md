# Les Savy Fav Restaurant
A simple but elegant and responsive website for a restaurant client. Food and atmosphere are showcased in images in slideshow and interactive gallery.
Site deployment can be found [here](https://lsfbistro.netlify.app/)

![Gif of scrolling on website](https://raw.githubusercontent.com/KevDonovan/kevdonovan.github.io/main/images/restaurantGif.gif)

# How it's made
Made using HTML, CSS, and Javascript. The layout was made using flexbox for a more responsive site with some logos and icons imported from Font-Awesome. The functionality 
in the slideshow and gallery were coded in Javascript. The slideshow was created using a setInterval function which calls a scrollTo function to the next slide. The
interval is reset if the user clicks the "next" or "previous" buttons. A scrollTo function is also called when the windo resizes so that the slideshow will always snap
to the full image even when the viewport changes size.
The gallery at the bottom of the page uses a modal which is activated when the user clicks on a thumbnail. The "active" class is added to the modal making it visible
to the user.

# Optimization
I realized that the best way to code the slide show is to make one function for scrolling to an image. This function is called in both the autoscroll and "next" or "previous"
functions. The interval is reset whenever the autoscroll is called, so that the clearInterval method only needs to be called in one place. This was needed as new 
intervals were being added whenever the user clicked the arrows. Using flexbox and classes in the body below the slideshow allows for new content to be added easily.
I still need to add a menu page as well as a form for reservations.

# What I learned
I learned a great deal about formatting images in CSS as well as working with modals. Learning how to style modals in CSS and add functionality in JS is suprisingly easy and
will be useful for future projects. Coding the slideshow taugh me a great deal about intervals, the event loop, and how to add events listeners when the viewport changes
size.
