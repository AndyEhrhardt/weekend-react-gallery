# Project Name

Photo Gallery App

## Description

This app uses an sql data base to store information on photos and display them on the page. The database stores the photo's path, description and number of likes. To display each photo on the page the app passes props into two components. First, the App.jsx uses a get request to obtain the information for each photo. This information is then passed via props into the GalleryList component. Then, within the GalleryList component, a map function is used to pass each individual photo's information into a GalleryItem component. Within the GalleryItem component there's code for displaying and adding like. There's also a delete button and some conditional rendering to display the photos description when the photo itself is clicked. In addition to displaying the images there's also a form component that allows the user to add the file name and description for a new photo to be added to the page. Styling for the page is done using Material UI.

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
