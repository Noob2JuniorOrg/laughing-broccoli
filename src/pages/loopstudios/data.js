import facebookIcon from '/src/pages/loopstudios/images/icon-facebook.svg';
import twitterIcon from '/src/pages/loopstudios/images/icon-twitter.svg';
import pinterestIcon from '/src/pages/loopstudios/images/icon-pinterest.svg';
import instagramIcon from '/src/pages/loopstudios/images/icon-instagram.svg';

export const navLinks = [
    { title: "About" },
    { title: "Careers" },
    { title: "Events" },
    { title: "Products" },
    { title: "Support" }
]

export const desktopCards = [
    { gradientClass: "desktop-gradient-earth", title: "Deep Earth", overlay: "earth-overlay", key: "earth" },
    { gradientClass: "desktop-gradient-arcade", title: "Night Arcade", overlay: "arcade-overlay", key: "arcade" },
    { gradientClass: "desktop-gradient-soccer", title: "Soccer Team VR", overlay: "soccer-overlay", key: "soccer" },
    { gradientClass: "desktop-gradient-grid", title: "The Grid", overlay: "grid-overlay", key: "grid" },
    { gradientClass: "desktop-gradient-above", title: "From Above", overlay: "above-overlay", key: "above" },
    { gradientClass: "desktop-gradient-borealis", title: "Pocket Borealis", overlay: "borealis-overlay", key: "borealis" },
    { gradientClass: "desktop-gradient-curiosity", title: "The Curiosity", overlay: "curiosity-overlay", key: "curiosity" },
    { gradientClass: "desktop-gradient-fisheye", title: "Make it Fisheye", overlay: "fisheye-overlay", key: "fisheye" },
]

export const mobileCards = [
    { gradientClass: "mobile-gradient-earth", title: "Deep Earth", key: "earth" },
    { gradientClass: "mobile-gradient-arcade", title: "Night Arcade", key: "arcade" },
    { gradientClass: "mobile-gradient-soccer", title: "Soccer Team VR", key: "soccer" },
    { gradientClass: "mobile-gradient-grid", title: "The Grid", key: "grid" },
    { gradientClass: "mobile-gradient-above", title: "From Above", key: "above" },
    { gradientClass: "mobile-gradient-borealis", title: "Pocket Borealis", key: "borealis" },
    { gradientClass: "mobile-gradient-curiosity", title: "The Curiosity", key: "curiosity" },
    { gradientClass: "mobile-gradient-fisheye", title: "Make it Fisheye", key: "fisheye" },
]

export const icons = [
    { id: "0", key: 'facebook', alt: "facebook-icon", src: facebookIcon },
    { id: "1", key: 'twitter', alt: "twitter-icon", src: twitterIcon },
    { id: "2", key: 'pinterest', alt: "pinterest-icon", src: pinterestIcon },
    { id: "3", key: 'instagram', alt: "instagram-icon", src: instagramIcon }
];

export const menuLinks = [
    { href: "#", target: "About", id: '1' },
    { href: "#", target: "Careers", id: '2' },
    { href: "#", target: "Events", id: '3' },
    { href: "#", target: "Products", id: '4' },
    { href: "#", target: "Support", id: '5' },
]