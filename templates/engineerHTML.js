function engineerCard(newEngineer) {
    return `
    <div class="card m-2 col-3">
      <div class="card-header">
        <h2 class="card-title">${newEngineer.name}</h2>
        <h3 class="card-title">
          <i class="fas fa-glasses mr-2"></i>Engineer
        </h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${newEngineer.id}</li>
          <li class="list-group-item">
            Email:
            <a href="mailto:${newEngineer.email}">${newEngineer.email}</a>
          </li>
          <li class="list-group-item">
          GitHub:
          <a
            href="https://github.com/${newEngineer.github}"
            target="_blank"
            >${newEngineer.github}</a
          >
          </li>
        </ul>
      </div>
    </div>
      `;
  }
  
  module.exports = engineerCard;