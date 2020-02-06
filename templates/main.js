function generateHTML(strHTML) {
    return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>Team Profile Generator</title>
          <link
            href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-yrfSO0DBjS56u5M+SjWTyAHujrkiYVtRYh2dtB3yLQtUz3bodOeialO59u5lUCFF"
            crossorigin="anonymous"
          />
          <script src="https://kit.fontawesome.com/c502137733.js"></script>
          <style>
            .jumbotron {
              background-color: lightblue;
            }
            body {
              background-color: white;
            }
            h1 {
              color: white;
            }
            .card-header,
            .card-body {
              background-color: white;
            }
          </style>
        </head>
      
        <body>
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 jumbotron mb-3">
                <h1 class="text-center">My Roster</h1>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-12 d-flex justify-content-center"></div>
              <!-- add team --> 
              ${strHTML}
            </div>
          </div>
        </body>
      </html>
      
      
      `;
  }
  
  module.exports = generateHTML;