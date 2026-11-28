const student = {
    name: "Asare Nana Kweku",
    indexNumber: "9465126",
    year: "lvl 100",
    status: "ACC Backend Ready"
};

// Assignment 2: Read environment variables
const port = Number(process.env.PORT || 3000);
const clubSecretKey = process.env.CLUB_SECRET_KEY;

const configuration = {
    port: port,
    clubSecretKeyConfigured: Boolean(clubSecretKey)
};

// Display the student information and configuration
console.log(JSON.stringify({
    student,
    configuration
}, null, 2));