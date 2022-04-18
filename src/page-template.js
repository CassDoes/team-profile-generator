//get date, time, and year for footer
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const d = new Date();

let weekday = weekdays[d.getDay()];
let month = months[d.getMonth()];

//create team member array attached to appropriate HTML based on getRole()
employeeCards = (data) => {

    cardArr = []; 

    for (let i = 0; i < data.length; i++) {
        const teamMember = data[i];
        const role = teamMember.getRole(); 

        if (role === 'Manager') {
            const managerCard = generateManager(teamMember);

            cardArr.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(teamMember);

            cardArr.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(teamMember);

            cardArr.push(internCard);
        }
        
    }

    const teamCards = cardArr.join('')

    const generateTeamCards = generateHTML(teamCards); 
    return generateTeamCards;
}

//HTML for MANAGER card
const generateManager = manager => {
    return `
    <header class="jumbotron">
        <h1 class="business">${manager.company}<br><span class="header-text">TEAM MEMBERS</span></h1>
    </header>

    <section class="container">
        <div class="card">
            <h2 class="title" id="manager">MANAGER</h2>
            <h3 class="name">${manager.name}</h3>
            <p class="badge">ID: ${manager.idNumber}</p>
            <div>
                <ul class="contact">
                    <li class="phone">Phone: <span>${manager.officeNumber}</span></li>
                    <li class="email">${manager.email}</li>
                </ul>
            </div>
            <div class="wrapper">
                <div class="phone-icon">
                    <p class="fa-solid fa-phone-flip"></p>
                </div>
                <div class="email-icon">
                <a href = "mailto: ${manager.email}" class="fa-solid fa-envelope"></a>
                </div>
            </div>
        </div>
    `;
};

//HTML for ENGINEER cards
const generateEngineer = engineer => {
    return `
        <div class="card">
            <h2 class="title" id="engineer">ENGINEER</h2>
            <h3 class="name">${engineer.name}</h3>
            <p class="badge">ID: ${engineer.idNumber}</p>
            <div>
                <ul class="contact">
                    <li class="github">GitHub: <span>${engineer.github}</span></li>
                    <li class="email">${engineer.email}</li>
                </ul>
            </div>
            <div class="wrapper">
                <div class="github-icon">
                    <a href="https://www.github.com/${engineer.github}" class="fa-brands fa-github"></a>
                </div>
                <div class="email-icon">
                    <a href = "mailto: ${engineer.email}" class="fa-solid fa-envelope"></a>
                </div>
            </div>
        </div>
    `;
};

//HTML for INTERN cards
const generateIntern = intern => {
    return `
        <div class="card">
            <h2 class="title" id="intern">INTERN</h2>
            <h3 class="name">${intern.name}</h3>
            <p class="badge">ID: ${intern.idNumber}</p>
            <div>
                <ul class="contact">
                    <li class="github">School: <span>${intern.school}</span></li>
                    <li class="email">${intern.email}</li>
                </ul>
            </div>
            <div class="wrapper">
                <div class="school-icon">
                    <p class="fa-solid fa-graduation-cap"></p>
                </div>
                <div class="email-icon">
                <a href = "mailto: ${intern.email}" class="fa-solid fa-envelope"></a>
                </div>
            </div>
        </div>
    `;
};

//HTML for remaining page combined with all team member cards
const generateHTML = function (teamCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <script src="https://kit.fontawesome.com/10c0b6b763.js" crossorigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Anek+Bangla&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./style.css"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Business Contact Page</title>
    </head>
    <body>

        <!-- BUSINESS NAME, HEADER, and TEAM MEMBER cards -->
            ${teamCards}
        </section>

        <!-- FOOTER WITH CURRENT DATE -->
        <footer>${weekday + ' ' + month + ' ' + d.getDate() + ', ' + d.getFullYear()}</footer>

    </body>
    </html>
    `;
};

module.exports = employeeCards;