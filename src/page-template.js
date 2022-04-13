//create MANAGER cards
const generateManager = managerArr => {
    const managerData = managerArr.filter(managers => {
        if (managers.confirmAddEmployee) {
            return true;
        } else {
            return false;
        }
    });

    const getManager = managerData.map(({ name, idNumber, email, number }) => {
        return `
        <div class="card">
            <h2 class="title" id="manager">MANAGER</h2>
            <h3 class="name">${name}</h3>
            <p class="badge">ID: ${idNumber}</p>
            <div>
                <ul class="contact">
                    <li class="phone">${number}</li>
                    <li class="email">${email}</li>
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
        </div>`
    });

    return `
    ${getManager.join('')}
    `;
};

module.exports = templateData => {
    const { manager, engineer, intern, ...header } = templateData;
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
            ${generateManager(manager)}
            ${generateEngineer(engineer)}
            ${generateIntern(intern)}
        </section>

        <footer>${new Date().getFullYear()}</footer>

    </body>

    </html>
    `;
};