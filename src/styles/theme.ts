

// ## Colors

// ### Primary

// - Lime Green: hsl(163, 72%, 41%)
// - Bright Red: hsl(356, 69%, 56%)

// - Facebook: hsl(195, 100%, 50%)
// - Twitter: hsl(203, 89%, 53%)
// - Instagram: linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)
// - YouTube: hsl(348, 97%, 39%)

const generalColors = {
    limeGreen: 'hsl(163, 72%, 41%)',
    brightRed: 'hsl(356, 69%, 56%)',
    facebook: 'hsl(195, 100%, 50%)',
    twitter: 'hsl(203, 89%, 53%)',
    instagram: 'linear-gradient(to right, #fdc468, #df4996)',
    youtube: 'hsl(348, 97%, 39%)',
    toggleGradient: 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))'
}

const themeLight = {
    ...generalColors,
    backgroundColor: 'hsl(0, 0%, 100%)',
    activeColor: 'hsl(235, 29%, 91%)',
    backgroundPatternColor: 'hsl(225, 100%, 98%)',
    cardBackgroundColor: 'hsl(227, 47%, 96%)',
    textColor: 'hsl(228, 12%, 44%)',
    darkTextColor: 'hsl(230, 17%, 14%)',
    chartColor: 'hsl(243, 51%, 70%)',
    toggle: 'hsl(230, 22%, 74%)',
    countModal: 'hsl(228, 12%, 44%)'
}

const themeDark = {
    ...generalColors,
    backgroundColor: 'hsl(230, 17%, 14%)',
    activeColor: 'hsl(228, 26%, 27%)',
    backgroundPatternColor: 'hsl(232, 19%, 15%)',
    cardBackgroundColor: 'hsl(228, 28%, 20%)',
    textColor: 'hsl(228, 34%, 66%)',
    darkTextColor: 'hsl(0, 0%, 100%)',
    chartColor: 'hsl(243, 51%, 70%)',
    toggle: generalColors.toggleGradient,
    countModal: 'hsl(0, 0%, 100%)'
}

export { themeLight, themeDark }