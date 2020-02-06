
function managerCard(newManager) {
    return `
    <div class="card m-2 col-3">
      <div class="card-header">
        <h2 class="card-title">${newManager.name}</h2>
        <h3 class="card-title">
          <i class="fas fa-mug-hot mr-2"></i>Manager
        </h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${newManager.id}</li>
          <li class="list-group-item">
            Email:
            <a href="mailto:${newManager.email}">${newManager.email}</a>
          </li>
          <li class="list-group-item">
            Office number: ${newManager.officeNumber}
          </li>
        </ul>
      </div>
    </div>
      `;
  }
  
  module.exports = managerCard;