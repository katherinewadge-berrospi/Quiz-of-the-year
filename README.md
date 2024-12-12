# Quiz Of The Year
A website with a fun 10 question quiz.

![mock-up](assets/images/mock-up.jpg)

Project 2 for the Code Institute. Please visit the live site [here](https://katherinewadge-berrospi.github.io/Quiz-of-the-year/)

Contents:
1. [Introduction](#introduction)
2. [Features](#features)
3. [Testing](#testing)
4. [Deployment](#deployment)
5. [Future](#future)
6. [Credits](#credits) 

## Introduction

### Audience:
The Quiz Of The Year if suitable for anyone wanting to test out their general knowledge of events that occured in 2024. It raises awareness of all types of news from sporting events, politics, and celebrities.

### Client side:
This site is easy to use with clear sections which include a header that changes once the quiz if completed, the quiz area that hosts the questions and the answer buttons, a score area that tallies correct and incorrect answers, and finally a pop-up play again question to either restart quiz or displays a thank you for playing message. This layout is aligned centrally and is accessible on all devices. The fun colour scheme, with background circles, is fun and lively with a clear font that is also in the shade of dark purple to subtily compliment the overall colour scheme. The buttons that display the answers are also all coloured in pastel colours so that the text can still be easily read that changes when the mouse hovers. These changes include a red border with a white underlined text and the curser turns into a pointer.


## Features

### Header
There are two versions of the header on the live cite. The main header is displayed throughout the quiz, spanning 100% the width of the screen and the font and logos decrease in size as the device gets smaller.

![MainHeaderDesktop](assets/images/header-desktop.jpg)
![MainHeaderMobile](assets/images/header-mobile.jpg)

The second header is displayed once the "no" button is clicked to end the quiz. It spans 100% the width of the screen and the font decreases in size as the device gets smaller.
![EndMessageDesktop](assets/images/thanks-header-desktop.jpg)
![EndMessageMobile](assets/images/thanks-header-mobile.jpg)

Both headers are clearly visible on all devices and also compliment the colour scheme. The background colour is a light purple with transparancy so that the main backdrop of circles is still visible, and the dark purple font ties in with the whole page.

### Logos
The images chosen are related to the quiz and act as logos/stickers that sandwich the main header "Quiz Of The Year!". The first one is a vibrant cartoon image of a human head full of abstract shapes and different colours to show how the brain is unique. The second is an image of the year "2024" and is at a slant to make irts appearance fun and it shows that the quiz is about the year 2024 to the audience.

![HeadCartoon](assets/images/thinking-brain.jpg)
![2024](assets/images/year-logo.jpg)

### Footer
The footer was kept simple, and fixed to the bottom. the background colour was a dark purple that was made transparent so that the background circles could show through the footer. There is also an active link that takes you to the Spocle website, a public cite full of quizes, when you click on "find more quizes!".

![Footer](assets/images/footer.jpg)


## Testing

### Validator Testing
The code in all 3 files (index.html, style.css, and script.js) was constantly checked for any bugs throughout the project before adding more features. Various styles were trialled, such as having the title as a top div and not in the header, and when hovering over the answer buttons, the buttons wold increase in size which was later changed to stay consistent in size and instead changing the cursor, the border, and the font colour. There were errors in the html or css checks, but JSHint advised to use "use strict" within all the functions in JavaScript and said I had missed one semicolon.

After all the debugging, the deployed cite passed all the checks using The W3C Markup Validator, W3C CSS Validator Services, and JSHint.

<strong>HTML</strong> passed all the validator checks.
![HTMLvalidator](assets/images/html-validator.jpg)

<strong>CSS</strong> passed all the validator checks.
![CSSvalidator](assets/images/css-validator.jpg)

<strong>JavaScript</strong> passed all the validator checks.
![JShintValidator](assets/images/jshint-validator.jpg)

### Lighthouse Testing
In both the dektop and the mobile layout, the lighthouse results were identical and both showed top scores across the board.

For Desktop:
![LighthouseDesktop](assets/images/lighthouse-desktop.jpg)

For Mobile:
![LighthouseMobile](assets/images/lighthouse-mobile.jpg)