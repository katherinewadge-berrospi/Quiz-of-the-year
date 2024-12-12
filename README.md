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
The Quiz Of The Year is suitable for anyone wanting to test their general knowledge of events that occurred in 2024. It raises awareness of all types of news, including sporting events, politics, and celebrity happenings.

### Client side:
This site is easy to use with clear sections, which include a header that changes once the quiz is completed, a quiz area that hosts the questions and answer buttons, a score area that tallies correct and incorrect answers, and finally a pop-up play-again question that either restarts the quiz or displays a thank-you-for-playing message.

This layout is aligned centrally and is accessible on all devices. The fun colour scheme, with background circles, is lively and engaging, complemented by a clear font in a dark purple shade to subtly match the overall design. The buttons displaying the answers are pastel-coloured for readability and change in appearance when hovered over. These changes include a red border, underlined white text, and the cursor turning into a pointer.

## Features

### Header
There are two versions of the header on the live site. The main header is displayed throughout the quiz, spanning 100% of the screen width. The font and logos decrease in size as the screen size gets smaller.

![MainHeaderDesktop](assets/images/header-desktop.jpg)
![MainHeaderMobile](assets/images/header-mobile.jpg)

The second header is displayed once the "No" button is clicked to end the quiz. It spans 100% of the screen width, and the font decreases in size on smaller devices.

![EndMessageDesktop](assets/images/thanks-header-desktop.jpg)
![EndMessageMobile](assets/images/thanks-header-mobile.jpg)

Both headers are clearly visible on all devices and complement the colour scheme. The background colour is a light purple with transparency, allowing the main backdrop circles to show through. The dark purple font ties the design together.

### Logos
The logos are related to the quiz and serve as visual anchors, flanking the main header "Quiz Of The Year!".

- The first logo is a vibrant cartoon image of a human head filled with abstract shapes and colours, symbolizing creativity and uniqueness.
- The second logo displays "2024" at a slant, adding a fun and dynamic element that emphasizes the quiz's focus on the year 2024.

![HeadCartoon](assets/images/thinking-brain.jpg)
![2024](assets/images/year-logo.jpg)

### Quiz Area
The quiz area is light-coloured for good contrast with the dark purple font. It is outlined with a dark purple border. The font size is legible on all screen sizes, and the interactivity of the answer buttons is clearly signaled by hover effects.

![QuizArea](assets/images/quiz-area.jpg)

### Score Area
The score area updates dynamically after each question, giving users instant feedback on their progress. The scores are bold and colour-coded for clarity: green for correct answers and red for incorrect ones.

![ScoreArea](assets/images/score-area.jpg)

### Play Again?
The play-again question box is hidden during the quiz and only appears at the end. It follows the same styling as other sections. Unlike the answer buttons, the "Yes" and "No" buttons are plain in colour but turn blue when hovered over.

![PlayAgain?](assets/images/play-again.jpg)

### Footer
The footer is simple and fixed to the bottom of the screen. Its dark purple background is semi-transparent, allowing the background circles to show through. It also features a clickable link to the Sporcle website, where users can find more quizzes.

![Footer](assets/images/footer.jpg)


## Testing

### Validator Testing
The code in all 3 files (index.html, style.css, and script.js) was constantly checked for any bugs throughout the project before adding more features. Various styles were trialled, such as having the title as a top div and not in the header, and when hovering over the answer buttons, the buttons wold increase in size which was later changed to stay consistent in size and instead changing the cursor, the border, and the font colour. There were errors in the html or css checks, but JSHint advised to use "use strict" within all the functions in JavaScript and said I had missed one semicolon.

After all the debugging, the deployed site passed all the checks using The W3C Markup Validator, W3C CSS Validator Services, and JSHint.

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


## Deployment
The site was deployed via GitHub using the 'Pages' section in the repository's 'Settings' tab, and under the 'Source' dropdown, the main branch was selected. The deployed site's URL is provided at the top of 'Pages', which was copied into the browser to double check the functionality. The site was tested on Chrome, MS Edge and Firefox, all of which displayed the content correctly.

## Future
Potential visual changes:
1. The layout and spacing could be improved on the desktop layout, although a little difficult when using a laptop to write the website.
2. Only used basic fonts, although this does mean it is more compatible on different devices.
3. When the correct/ incorrect answer is clicked it could also change colour to green/ red, respectively, as well as keeping tally at the bottom.
4. The finish screen looks a little plain, could add animation/ gifs/ large image to say thank you instead.

Potential code improvements:
1. The <onlick> is outdated and hard to maintain, use more addEventListener for cleaner code.
2. Could find a way to merge the 2 functions (loadQuations and load Answers) into 1 large function for more efficiency.
3. Could also add a timer to countdown how long users have to complete the quiz, to make things more interesting.
4. Small sound effects could also be added.


## Credits

### Testing:
https://validator.w3.org/

https://jigsaw.w3.org/css-validator/

https://jshint.com/

Google Dev Tools - Lighthouse

### Tutorials and advice
https://www.w3schools.com/

https://blog.logrocket.com/advanced-effects-with-css-background-blend-modes-4b750198522a/

https://www.britannica.com/topic/2024-Year-in-Review

https://stackoverflow.com/questions/8107000/jshint-com-requires-use-strict-what-does-this-mean

https://developer.mozilla.org/en-US/docs/Web/Events

https://ui.dev/amiresponsive

https://github.com/Code-Institute-Solutions/readme-template?tab=readme-ov-file

Thank you to my Mentor Spencer Barriball for his support and guidance.