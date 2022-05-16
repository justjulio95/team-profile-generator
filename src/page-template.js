const checkRole = teamMembers => { // pass in the teamMembers array from the index.js file.
    // create an empty array to store html data
    let htmlData = [];
    
    //loop over the team member data to create the appropriate html for each member.
    for (let i = 0; i < teamMembers.length; i++) {
        switch (teamMembers[i].getRole()) {
            case 'Manager':
                //feed in the appropriate team member's info and the htmlData array tp each function
                createManager(teamMembers[i], htmlData)
                break;
            case 'Engineer':
                createEngineer(teamMembers[i], htmlData)
                break;
            case 'Intern':
                createIntern(teamMembers[i], htmlData)
                break;
        }
    }
    //join all html data after the loops are done. 
    return htmlData.join('');
}

const createManager = (manager, htmlData) => {

    htmlData.push(`<div class="col col-md-4">
    <div class="card">
        <div class="card-header">
            <h2 class="text-center">${manager.name}</h2>
            <div class="row justify-content-center">
                <i class="col-1 fa-solid fa-mug-hot fa-xl"></i><h3 class="col-7 col-md-8 col-lg-4 text-center">Manager</h3>
            </div>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush border">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}" target="_blank">${manager.email}</a></li>
                <li class="list-group-item">Office Number: <a href="tel:${manager.officeNumber}">${manager.officeNumber}</a></li>
            </ul>
        </div>
    </div>
</div>`)

}

const createEngineer = (engineer, htmlData) => {

    htmlData.push(`<div class="col col-md-4">
    <div class="card">
        <div class="card-header">
            <h2 class="text-center">${engineer.name}</h2>
            <div class="row justify-content-center">
                <i class="col-1 fa-solid fa-glasses fa-xl"></i><h3 class="col-7 col-md-8 col-lg-4 text-center">Engineer</h3>
            </div>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush border">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}" target="_blank">${engineer.email}</a></li>
                <li class="list-group-item">Github: <a href="https://www.github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
            </ul>
        </div>
    </div>
</div>`)

}

const createIntern = (intern, htmlData) => {

    htmlData.push(`<div class="col col-md-4">
    <div class="card">
        <div class="card-header">
            <h2 class="text-center">${intern.name}</h2>
            <div class="row justify-content-center">
                <i class="col-1 fa-solid fa-user-graduate fa-xl"></i><h3 class="col-5 col-md-6 col-lg-3 text-center">Intern</h3>
            </div>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush border">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}" target="_blank">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}
            </ul>
        </div>
    </div>
</div>`)

}

module.exports = templateData => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/b34f19ae97.js" crossorigin="anonymous"></script>
    <title>My Team</title>
</head>

<body>
    <header>
        <h1 class="text-center bg-danger" >My Team</h1>
    </header>

    <main>
        <div class="container-fluid">
            <div class="row justify-content-center">
                ${checkRole(templateData)}
            </div>
        </div>
    </main>
</body>
</html>`
}