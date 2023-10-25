interface Size {
    sm: string
    md: string
    lg: string
}

const size: Size = {
    sm: '600px', // for mobile screen
    md: '900px', // for tablets
    lg: '1440px', // for desktop
}

export const device = {
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`
}
