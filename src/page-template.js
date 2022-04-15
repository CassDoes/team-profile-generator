templateHTML = (data) => {

    pageArr = []; 

    for (let i = 0; i < data.length; i++) {
        const teamMember = data[i];
        const role = teamMember.getRole(); 

        if (role === 'Manager') {
            const managerCard = generateManager(teamMember);

            pageArr.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(teamMember);

            pageArr.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(teamMember);

            pageArr.push(internCard);
        }
        
    }

    const teamCards = pageArr.join('')

    const generateTeam = generateHTML(teamCards); 
    return generateTeam;
}

//create MANAGER cards
const generateManager = manager => {
    return `
        <div class="card">
            <h2 class="title" id="manager">MANAGER</h2>
            <h3 class="name">${manager.name}</h3>
            <p class="badge">ID: ${manager.idNumber}</p>
            <div>
                <ul class="contact">
                    <li class="phone">${manager.number}</li>
                    <li class="email">${manager.email}</li>
                </ul>
            </div>
            <div class="wrapper">
                <div class="phone-icon">
                    <p class="fa-solid fa-phone-flip"></p>
                </div>
                <div class="email-icon">
                    <p class="fa-solid fa-envelope"></p>
                </div>
            </div>
        </div>
    `;
};

//create ENGINEER cards
const generateEngineer = engineer => {
    return `
        <div class="card">
            <h2 class="title" id="engineer">ENGINEER</h2>
            <h3 class="name">${engineer.name}</h3>
            <p class="badge">ID: ${engineer.idNumber}</p>
            <div>
                <ul class="contact">
                    <li class="github">${engineer.github}</li>
                    <li class="email">${engineer.email}</li>
                </ul>
            </div>
            <div class="wrapper">
                <div class="github-icon">
                    <i class="fa-brands fa-github"></i>
                </div>
                <div class="email-icon">
                    <p class="fa-solid fa-envelope"></p>
                </div>
            </div>
        </div>
    `;
};

//create INTERN cards
const generateIntern = intern => {
    return `
        <div class="card">
            <h2 class="title" id="intern">INTERN</h2>
            <h3 class="name">${intern.name}</h3>
            <p class="badge">ID: ${intern.idNumber}</p>
            <div>
                <ul class="contact">
                    <li class="school">${intern.school}</li>
                    <li class="email">${intern.email}</li>
                </ul>
            </div>
            <div class="wrapper">
                <div class="school-icon">
                    <p class="fa-solid fa-graduation-cap"></p>
                </div>
                <div class="email-icon">
                    <p class="fa-solid fa-envelope"></p>
                </div>
            </div>
        </div>
    `;
};



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
        <title>Employee Contacts</title>
    </head>

    <body>
    
        <header class="jumbotron">
            <h1 class="business">HEADER NAME<br><span class="header-text">TEAM MEMBERS</span></h1>
        </header>

        <section class="container">
            ${teamCards}
        </section>

        <footer>${new Date().getFullYear()}</footer>

    </body>

    </html>
    `;
};

module.exports = templateHTML;