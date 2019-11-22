

# README for Oola-Nylons :


## Images and videos


Videos are compressed, and each video is given a "poster" attribute so that, if the video hasn't loaded for the user yet, they will just see the first still of the video instead. They should auto-play on most devices. Images are also compressed to make them as little weight as possible while preserving the quality.


## Lazy loading:


The first javascript files that are loaded are lazy.js and site.js, and from these files all other js files and images are loaded. The lazy.js file handles lazy image loading, and the site.js file loads the animation files once the other content (text, boxes) has been loaded.


## CSS files
are all separated by page number. Media queries for each page are in a corresponding file with the word -media in the title. The media queries are set to be very broad, i.e. for any screen between 320px (an iphone 4 in portrait mode) to 812px (an iphone X in landscape mode). The landscape orientation is not recommended, as I didn’t optimize the layout for any of the landscape sizes. nevertheless, they are included in the media queries. If you want to add further styles for landscape, you can select for landscape with the following queries :


```


//  ---------iPhone 4 ---------
@media only screen
  and (min-device-width: 360px)
  and (max-device-width: 640px)
  and (orientation: landscape) {
}


//  ---------SamSung 5 ---------


@media only screen
  and (min-device-width: 360px)
  and (max-device-width: 640px)
  and (orientation: landscape) {
}
/* ----------- iPhone 6, 7 and 8 ----------- */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {




}


/* ----------- iPhone 6+, 7+ and 8+ ----------- */


/* Portrait and Landscape */
@media only screen
  and (min-device-width: 414px)
  and (max-device-width: 736px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) {




}


/* ----------- iPhone X ----------- */


/* Portrait and Landscape */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) {




}


```
inside of the curly brackets, write the css that you want for each page. remember to select for each page individually, i.e. ```.pg-6 .pg__text``` instead of just ```.pg__text```.


## Javascript animations


Are run when the user scrolls to the point where that page is in view. On small devices, the javascript is triggered by the user clicking on the text box, since on small devices with variable DPR and screen height, it is harder to predict how far they will scroll until they get to the page view.


Each javascript animation is in a file with corresponding page number. Inside these files you will find the code that runs when the user is on a desktop (screen sidth is greater than 812px) and a different code that runs when the user is on a device (that uses clickers and targets to trigger the animations).


## Github repository


I will add you as a collaborator on GitHub, and if you would like, I can transfer ownership of the repository to you, and/or make it private.


## Netlify


Each time you make a change to the github page, and you confirm the change by merging your edits to master (ask me if you need help understanding how to do this), it will automatically trigger a new deploy on netlify. So any changes you make will update the page automatically. You can watch the logs in the "deploy" section, so that if anything fails, you can see the errors and try to figure out what happened.


## Domain configuration


If at any point you want to change the domain name or stop paying for it, your site will always be available on its original "test" url, through netlify. You can add or remove any custom domain you want from this base url.



