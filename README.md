# UX Developer Challenge - Social media dashboard with theme switcher

# Documentation

## Tools

- For this challenge I decided to start the project with vite[https://vitejs.dev/] a fast tool to build frontend apps
- I  used StyledComponents[https://styled-components.com/] for the styling

## Responsive Approach

I tried to use the least amount of media queries as I could to improve the legibility and clarity of the code. That's why for the two main sections (top and bottom cards containers) I used the power of grids that automatically jumps to the next row when the card does not fit anymore.
For the general measurement I have utilized REM values and added a media query to modify the root value of the font-size to change the proportions of the design

## Accecibility

All the project is navegable with the keyboard pressing tab, a visual effect is applied on focus and you can also activate the cards pressing enter to open the popup. This way we are making sure that the app is screen reader friendly and functional without the need for a mouse.


## The challenge

The client has requested you to build out this Social Media Dashboard and get it looking as close to the design as possible, keeping in mind simplicity and ease-of-use.

Deliver the complete experience using React with Typescript, any CSS-in-JS library (Emotion, Styled Components, etc) or tools you see fit and any other tools you like to help you complete the task.

The Dashbord should display correctly in Desktop, Tablet and Mobile; you'll only receive a desktop mockup. On mobile, the user should to be able to view as much information on the screen as posible, without losing the design's coherence.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size

- See hover states for all interactive elements on the page

- Toggle color theme to their preference

- View more information about a specific social media account through a modal. For the chart, the team has agreed on using the following library: https://recharts.org/en-US/examples/SimpleLineChart

On delivery, please provide clear explanations about your decision-making process for the responsive approach; document code as much as possible as well.

## Where to find everything

Your task is to build out the project to the designs inside the `/design` folder.

The designs are in JPG static format. This will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`.

You will find all the required assets in the `/images` folder. The assets are already optimized.

There is also a `style-guide.md` file, which contains the information you'll need, such as color palette and fonts.

## Some tips

1. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead your CSS and components to make them reusable.

2. You can deliver everything else you consider necessary to support your solution.

3. Pay special attention to the details.

4. We expect to see how you plan out the app structure and styles as a UX Dev. This means that, although it still matters, javascript "logic" is not our main focus here. So, for the purposes of this excersise you can just hard code the data provided on `content.txt` into your components.


## Deliverables

- Complete project files working on Chrome, Safari, Firefox and Edge and project's documentation. Deliver it through a Github repository.

**Have fun building!**