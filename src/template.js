const createManager = () => {
    return `<div class="col col-md-4">
    <div class="card">
        <div class="card-header">
            <h2 class="text-center">Luis Tuesta</h2>
            <div class="row justify-content-center">
                <i class="col-1 fa-solid fa-mug-hot fa-xl"></i><h3 class="col-7 col-md-8 col-lg-4 text-center">Manager</h3>
            </div>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush border">
                <li class="list-group-item">ID: 18354</li>
                <li class="list-group-item">Email: <a href="mailto:luistuesta@umiami.edu" target="_blank">luistuesta@umiami.com</a></li>
                <li class="list-group-item">Office Number: <a href="tel:3050000000">3050000000</a></li>
            </ul>
        </div>
    </div>
</div>`
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
        
    </main>
</body>
</html>`
}