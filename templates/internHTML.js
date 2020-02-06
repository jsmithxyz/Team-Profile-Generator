function internCard(newIntern) {
    return `
    <div class="card m-2 col-3">
      <div class="card-header">
        <h2 class="card-title">${newIntern.name}</h2>
        <h3 class="card-title">
          <i class="fas fa-user-graduate mr-2"></i>Intern
        </h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${newIntern.id}</li>
          <li class="list-group-item">
            Email:
            <a href="mailto:${newIntern.email}">${newIntern.email}</a>
          </li>
          <li class="list-group-item">
            School: ${newIntern.school}
          </li>
        </ul>
      </div>
    </div>
      `;
  }
  
  module.exports = internCard;