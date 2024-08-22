# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshots

![Version Web](./images/landing-page-web.png)
![Version Mobile](./images/landing-page-mobile.png)

### Links

- Solution URL: [Solution](https://nejih.github.io/landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JS Vanilla

### What I learned

With this project, I learned that I can add my own parameters / bindings in the css file, so it's easier to access during the wrting process.

```css
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,600&display=swap');

:root {
    --red: hsl(0, 93%, 68%);
    --red-light: hsl(0, 36%, 70%);
    --dark: hsl(0, 6%, 24%);
}
```
Even if I haven't used it in my code, I found a way to access a specific element without having to assign a class or an id : nth-of-type(n).

```css
.input-container img:nth-of-type(2) {
    box-sizing: border-box;
}
```


### Useful resources

- [Responsive Design Basics](https://www.youtube.com/watch?v=na-X_SM8vg0&t=680s) - This is a video, quit old but still very useful, that helped me to better understand how to create a responsive version of the landing page with the media query.

## Author

- Website - [NejiH](https://www.your-site.com)

## Acknowledgments

I'd like to thank Vi and Celine, professors at Ada Tech School, who helped me when I was stuck or to find ways to improve my code.