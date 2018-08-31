let elizabethSanger = {
    congressionalDistrict: 5,
    statements: [
        { statement: "pie for everyone", category: "Jobs" },
        { statement: "no taxes on pie", category: "Taxes" },
        { statement: "No working on friday", category: "Jobs" }
    ],
    donationFormUrl: 'www.google.com',
    events: [
        { date: '08/27/2018', title: "Zoe's birthday", description: "eat all the pie at the party" },
        { date: '08/28/2018', title: "Arrays", description: "all the looping" },
        { date: '09/4/2018', title: "Some important event", description: "SUPER important" },
        { date: '09/4/2018', title: "Running", description: "from the police" },
        { date: '03/14/2019', title: "Pi Day", description: "Eat it all???" }
    ],
    volunteers: [
        {
            name: 'Callan',
            address: '500 interstate blvd S',
            email: 'callan@yomamma.com',
            phone: '1234567890',
            availability: '9-5',
            activities: 'phone calls only'
        },
        {
            name: 'Lauren',
            address: '1 main street',
            email: 'lauren@comcast.net',
            phone: '1134567890',
            availability: 'never',
            activities: 'collecting money'
        },
        {
            name: 'Bernard',
            address: '1 Bernard Way',
            email: 'Bernard@thebear.net',
            phone: '1134567890',
            availability: 'all day',
            activities: 'everything'
        }
    ],
    biography: "I'm so cool!  please elect me",
    images: [
        {
            imageUrl: "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
            description: "The Crew",
            type: "constituents"
        },
        {
            imageUrl: "https://imgix.bustle.com/uploads/image/2018/4/18/5f312113-eaa8-4e71-9360-871e51084f4f-fotolia_125402501_subscription_monthly_m.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70",
            description: "Elizabeth at the fair",
            type: "headshot"
        },
        {
            imageUrl: "http://los40cl00.epimg.net/los40/imagenes/2018/08/13/actualidad/1534185434_207658_1534185597_noticia_normal.jpg",
            description: "Elizabeth and her homies",
            type: "constituents"
        },
        {
            imageUrl: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3658031.jpg",
            description: "All the people of district 5",
            type: "constituents"
        },
    ],
    missionStatement: "Do good stuff",
    voterRegistrationUrl: 'www.google.com'
};


// Print to Dom Function
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

// Congressional District
const congressionalDistrictStringBuilder = () => {
    const newString = `<h3>Congressional District: ${elizabethSanger.congressionalDistrict}</h3>`;
    printToDom(newString, 'congressionalDistrict');
};

// Statements
const statementsStringBuilder = () => {
    let newString = '';
    for (let i = 0; i < elizabethSanger.statements.length; i++) {
        newString += `<div class="statements">`;
        newString +=    `<h3>${elizabethSanger.statements[i].statement}</h3>`;
        newString +=    `<h6>${elizabethSanger.statements[i].category}</h6>`;
        newString += `</div>`;
    }
    printToDom(newString, 'statements');
};

// Donation Form
const donationFormStringBuilder = () => {
    const newString = `<a href="https://${elizabethSanger.donationFormUrl}"> Click Here to Give Me Your Money </a>`;
    printToDom(newString, 'donationForm');
};

// Events
const eventsStringBuilder = () => {
    let newString = '';
    for (let i = 0; i < elizabethSanger.events.length; i++) {
        newString += `<div class="events">`;
        newString +=    `<h3>${elizabethSanger.events[i].date}</h3>`;
        newString +=    `<h6>${elizabethSanger.events[i].title}</h6>`;
        newString +=    `<h6>${elizabethSanger.events[i].description}</h6>`;
        newString += `</div>`;
    }
    printToDom(newString, 'events');
};

// Volunteers
const volunteersStringBuilder = () => {
    let newString = '';
    for(let i=0; i <elizabethSanger.volunteers.length; i++) {
        newString += `<div class="volunteers">`;
        newString +=    `<h3>${elizabethSanger.volunteers[i].name}</h3>`;
        newString +=        `<h6>${elizabethSanger.volunteers[i].address}</h6>`;
        newString +=        `<h6>${elizabethSanger.volunteers[i].email}</h6>`;
        newString +=        `<h6>${elizabethSanger.volunteers[i].phone}</h6>`;
        newString +=        `<h6>${elizabethSanger.volunteers[i].availability}</h6>`;
        newString +=        `<h6>${elizabethSanger.volunteers[i].activities}</h6>`;
        newString += `</div>`;
    }
    printToDom(newString, 'volunteers');
};

// Biography
const biographyStringBuilder = () => {
    let newString = '';
    newString += `<div class="biography">`;
    newString +=    `<h3>Biography: </h3>`;
    newString +=    `<h6>${elizabethSanger.biography}</h6>`;
    newString += `</div>`;
    printToDom(newString, 'biography');
};

// Images
const imagesStringBuilder = () => {
    let newString = '';
    for (let i=0; i<elizabethSanger.images.length; i++) {
        newString += `<div class="images">`;
        newString +=    `<img src="${elizabethSanger.images[i].imageUrl}"></img>`;
        newString +=    `<h6>${elizabethSanger.images[i].description}</h6>`;
        newString +=    `<h6>${elizabethSanger.images[i].type}</h6>`;
        newString += `</div>`;
    }
    printToDom(newString, 'images');
};

// Mission Statement
const missionStatementStringBuilder = () => {
    let newString = ``;
    newString += `<div class="missionStatement">`;
    newString +=    `<h3>Mission Statement: </h3>`;
    newString +=    `<h6>${elizabethSanger.missionStatement}</h6>`;
    newString += `</div>`;
    printToDom(newString, 'missionStatement');
};

// Voter Registration Form
const voterRegistrationStringBuilder = () => {
    const newString = `<a href="https://${elizabethSanger.voterRegistrationUrl}"> Register to Vote Here </a>`;
    printToDom(newString, 'voterRegistration');
};

// Call the Functions (Challenge 1)
congressionalDistrictStringBuilder();
statementsStringBuilder();
donationFormStringBuilder();
eventsStringBuilder();
volunteersStringBuilder();
biographyStringBuilder();
imagesStringBuilder();
missionStatementStringBuilder();
voterRegistrationStringBuilder();


// Challenge 2

// Update Congressional District -- change 5 to 15
const updateCongressionalDistrict = (newDistrict => {
    elizabethSanger.congressionalDistrict = newDistrict;
    congressionalDistrictStringBuilder();
});

// Update Statements -- Push a new statement + category 
const updateStatements = (newStatement, newCategory) => {
    let statementStuff = {
        statement: newStatement,
        category: newCategory
    }
    elizabethSanger.statements.push(statementStuff);
    statementsStringBuilder();
};

// Update Donation Form URL
const updateDonationForm = (newUrl => {
    elizabethSanger.donationFormUrl = newUrl;
    donationFormStringBuilder();
});

// Update Events -- push new event for 2019
const updateEvents = (newDate, newTitle, newDescription) => {
    let eventInfo = {
        date: newDate,
        title: newTitle,
        description: newDescription
    }
    elizabethSanger.events.push(eventInfo);
    eventsStringBuilder();
};

// Update Volunteers -- push new volunteer
const updateVolunteers = (newName, newAddress, newEmail, newPhone, newAvail, newActivities) => {
    let volunteerInfo = {
        name: newName,
        address: newAddress,
        phone: newPhone,
        availability: newAvail,
        activities: newActivities
    }
    elizabethSanger.volunteers.push(volunteerInfo);
    volunteersStringBuilder();
};

// Update Biography - change the text
const updateBiography = (newBio => {
    elizabethSanger.biography = newBio;
    biographyStringBuilder();
});

// Update Images -- push a new image of a cat.
const updateImages = (newImageUrl, newDescription, newType) => {
    let imageInfo = {
        imageUrl: newImageUrl,
        description: newDescription,
        type: newType
    }
    elizabethSanger.images.push(imageInfo);
    imagesStringBuilder();
};

// Update Mission Statement - change the text
const updateMissionStatement = (newMission => {
    elizabethSanger.missionStatement = newMission;
    missionStatementStringBuilder();
});

// Update Voter Registration URL
const updateVoterRegistration = (newUrl => {
    elizabethSanger.voterRegistrationUrl = newUrl;
    voterRegistrationStringBuilder();
});

// Calling the Upate Functions

updateCongressionalDistrict(15);
updateStatements('free vet visits', 'healthcare');
updateDonationForm('yahoo.com');
updateEvents('04/21/2019', 'Disc golf tournament', 'Toss some discs');
updateVolunteers('Jenny', '2120 S Michigan Avenue', 'jenny@yahoo.com', '8675309', 'most days', 'events');
updateBiography('She is probably the best');
updateImages('https://c1.staticflickr.com/8/7295/9776257606_15b08c4a19.jpg', '2cool4school', 'headshot');
updateMissionStatement('Do great stuff');
updateVoterRegistration('classtracker.zoeams.com');