export enum SocialMediaType {
    youtube = 'youtube',
    instagram = 'instagram',
    twitter = 'twitter',
    facebook = 'facebook'
}

const breakpoints = {
    mobile: '640px',
    tablet: '1024px',
    desktop: '1440px'
}

export const devices = {
    mobile: `(min-width: ${breakpoints.mobile})`,
    tablet: `(min-width: ${breakpoints.tablet})`,
    desktop: `(min-width: ${breakpoints.desktop})`,
}
