import facebook from "./img/facebook.png";
import linkedin from "./img/linkedin.png"
import github from "./img/github.png"
import instagram from "./img/instagram.png"
import spotify from "./img/spotify.png"
import email from "./img/gmail.png"
import mealmatch from "./img/mealmatch-home.png"
import planit from "./img/planit.png";
import rottonTom from "./img/rotton-tomatos.png";
import hangry from "./img/hangry.png";
import waitlist from "./img/waitlist.png";

export default {
    social: [
        {
            name: "facebook",
            url: "https://www.facebook.com/mdycus",
            img: facebook
        },
        {
            name: "instagram",
            url: "https://instagram.com/heyfriendo?r=nametag",
            img: instagram
        },
        {
            name: "linkedin",
            url: "https://www.linkedin.com/in/marcusdycus/",
            img: linkedin
        },
        {
            name: "spotify",
            url: "https://open.spotify.com/user/126162054?si=Bf5zgMY2TnaZmiUvLXAq5A",
            img: spotify
        },
        {
            name: "github",
            url: "https://github.com/marcdycus",
            img: github
        },
    ], 

    projects: [
        {
            id: 1,
            name: "MealMatch",
            service: "Full Stack Web App with React",
            url: "https://hidden-falls-38208.herokuapp.com/",
            img: mealmatch,
            gif: "https://giphy.com/embed/JtHTG3G0FCORRp6Oni"
        },
        {
            id: 2,
            name: "PlanIt",
            service: "Full Stack Web App",
            url: "https://blooming-shore-48030.herokuapp.com/",
            img: planit,
            gif: "https://giphy.com/embed/gHt6RO9AiAhN2GWBKS"
        },
        {
            id: 3,
            name: "R.T. Scraper",
            service: "Full Stack Web App",
            url: "https://guarded-eyrie-32562.herokuapp.com/",
            img: rottonTom,
            gif: "https://giphy.com/embed/JUer5y5v9gZyGmQEJK",
        },
        {
            id: 4,
            name: "Hangry",
            service: "Interactive Web App using Google Maps API",
            url: "https://marcdycus.github.io/Balletime/",
            img: hangry,
            gif: "https://giphy.com/embed/L4Cddrw2qEBszvQ1Sh"
        },
        {
            id: 5,
            name: "Waitlist",
            service: "Full Stack Web App",
            url: "https://banana-crumble-14760.herokuapp.com/",
            img: waitlist,
            gif: "https://giphy.com/embed/XI1FlHtRKVKKXp4NOA"
        },
    ],

    email: {
        name: "email me",
        url: "marcus.dycus@gmail.com",
        img: email
    },

    aboutText: "Fueled by endless amounts of curiosity and eagerness to create, I'm easily inspired to follow through with ideas. I have over 10 years of experience in both customer service and fine art, therefore verbal communication of difficult concepts comes easily for me. With that, I've learned to flow through projects quickly and efficiently. I'm a multi-disciplinary maker with extraordinary interests in UI/UX, full stack web development, and game design. I'm also a photographer, musician, traveler, entrepreneur, and freelancer.",
    
    // techStack: {}
}