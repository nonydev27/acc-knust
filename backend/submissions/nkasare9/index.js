
// Assignment 1: Student information
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

// Assignment 3: Member registration validation
function validateMemberRegistration(member = {}) {
    const errors = [];

    const name = typeof member.name === "string"
        ? member.name.trim()
        : "";

    const email = typeof member.email === "string"
        ? member.email.trim()
        : "";

    // Check whether the name was provided
    if (!name) {
        errors.push("Name is required.");
    }

    // Check whether the email was provided
    if (!email) {
        errors.push("Email is required.");
    }

    // Return an error if required information is missing
    if (errors.length > 0) {
        return {
            statusCode: 400,
            status: "error",
            errors: errors
        };
    }

    // Return success if all required information is provided
    return {
        statusCode: 201,
        status: "success",
        message: "Member registration data is valid."
    };
}

// Test 1: Valid registration
const validRegistration = validateMemberRegistration({
    name: "Ama Mensah",
    email: "ama@example.com"
});

// Test 2: Invalid registration
const invalidRegistration = validateMemberRegistration({
    name: "",
    email: ""
});

// Display all assignment information and test results
console.log(JSON.stringify({
    student,
    configuration,
    validationTests: {
        validRegistration,
        invalidRegistration
    }
}, null, 2));
