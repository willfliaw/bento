// Configurations

const CONFIG = {
    // Basics

    // General
    name: "William",
    imageBackground: false,
    openInNewTab: false,
    twelveHourFormat: true,

    // Greetings
    greetingMorning: "Good morning!",
    greetingAfternoon: "Good afternoon,",
    greetingEvening: "Good evening,",
    greetingNight: "Go to Sleep!",

    // Layout
    bentoLayout: "bento", // 'bento', 'lists', 'buttons'

    // Weather
    weatherKey: "a33fa29ffb634f479bd5a549ca534301", // Write here your API Key
    weatherIcons: "OneDark", // 'Onedark', 'Nord', 'Dark', 'White'
    weatherUnit: "C", // 'F', 'C'
    language: "en", // More languages in https://openweathermap.org/current#multi

    trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
    defaultLatitude: "-23.5796404",
    defaultLongitude: "-46.6550645",

    // Autochange
    autoChangeTheme: true,

    // Autochange by OS
    changeThemeByOS: true,

    // Autochange by hour options (24hrs format, string must be in: hh:mm)
    changeThemeByHour: false,
    hourDarkThemeActive: "18:30",
    hourDarkThemeInactive: "07:00",

    // Buttons

    firstButtonsContainer: [
        {
            id: "1",
            name: "Google Calendar",
            icon: "calendar",
            link: "https://calendar.google.com/calendar/u/1/r",
        },
        {
            id: "2",
            name: "Google Drive",
            icon: "hard-drive",
            link: "https://drive.google.com/drive/u/1/my-drive",
        },
        {
            id: "6",
            name: "SynapseS",
            icon: "croissant",
            link: "https://synapses.telecom-paris.fr/",
        },
        {
            id: "4",
            name: "Sistemas USP",
            icon: "book",
            link: "https://uspdigital.usp.br/wsusuario/",
        },
        {
            id: "5",
            name: "GitHub",
            icon: "github",
            link: "https://github.com/",
        },
        {
            id: "3",
            name: "e-Disciplinas",
            icon: "graduation-cap",
            link: "https://edisciplinas.usp.br/acessar/",
        },
    ],

    secondButtonsContainer: [
        {
            id: "1",
            name: "Music",
            icon: "headphones",
            link: "https://open.spotify.com",
        },
        {
            id: "2",
            name: "twitter",
            icon: "twitter",
            link: "https://twitter.com/",
        },
        {
            id: "3",
            name: "bot",
            icon: "bot",
            link: "https://discord.com/app",
        },
        {
            id: "4",
            name: "Amazon",
            icon: "shopping-bag",
            link: "https://amazon.com/",
        },
        {
            id: "5",
            name: "Hashnode",
            icon: "pen-tool",
            link: "https://hashnode.com/",
        },
        {
            id: "6",
            name: "Figma",
            icon: "figma",
            link: "https://figma.com/",
        },
    ],

    // Lists

    // First Links Container
    firstlistsContainer: [
        {
            icon: "coffee",
            id: "1",
            links: [
                {
                    name: "LinkedIn",
                    link: "https://www.linkedin.com",
                },
                {
                    name: "Google Translate",
                    link: "https://translate.google.com/",
                },
                {
                    name: "Keybr",
                    link: "https://www.keybr.com/",
                },
                {
                    name: "Music Theory",
                    link: "https://www.musictheory.net/",
                },
            ],
        },
        {
            icon: "star",
            id: "2",
            links: [
                {
                    name: "YouTube",
                    link: "https://www.youtube.com/",
                },
                {
                    name: "Reddit",
                    link: "https://www.reddit.com/",
                },
            ],
        },
    ],

    // Second Links Container
    secondListsContainer: [
        {
            icon: "binary",
            id: "1",
            links: [
                {
                    name: "Spotify",
                    link: "https://www.spotify.com",
                },
                {
                    name: "Reddit",
                    link: "https://www.reddit.com",
                },
                {
                    name: "Hashnode",
                    link: "https://www.hashnode.com",
                },
                {
                    name: "Pocket",
                    link: "https://www.pocket.com",
                },
            ],
        },
        {
            icon: "github",
            id: "2",
            links: [
                {
                    name: "Front",
                    link: "https://www.reddit.com/r/Frontend/",
                },
                {
                    name: "Rust",
                    link: "https://www.reddit.com/r/rust/",
                },
                {
                    name: "Go",
                    link: "https://www.reddit.com/r/golang/",
                },
                {
                    name: "Repos",
                    link: "https://github.com/migueravila",
                },
            ],
        },
    ],
};
