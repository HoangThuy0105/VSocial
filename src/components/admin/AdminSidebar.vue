<template>
  <div
    class="d-flex flex-column flex-shrink-0 p-3 bg-light"
    style="width: 250px; height: 100vh"
  >
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
    >
      <i class="fas fa-user-shield me-2"></i>
      <span class="fs-4">Admin Panel</span>
    </a>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          <i class="fas fa-home me-2"></i>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark">
          <i class="fas fa-users me-2"></i>
          Users
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark">
          <i class="fas fa-file-alt me-2"></i>
          Posts
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark">
          <i class="fas fa-comment-slash me-2"></i>
          Reports
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark">
          <i class="fas fa-cogs me-2"></i>
          Settings
        </a>
      </li>
    </ul>
    <hr />
    <div class="dropdown">
      <a
        href="#"
        class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
        id="dropdownUser"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://via.placeholder.com/32"
          alt=""
          width="32"
          height="32"
          class="rounded-circle me-2"
        />
        <strong>Admin</strong>
      </a>
      <ul
        class="dropdown-menu text-small shadow"
        aria-labelledby="dropdownUser"
      >
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminSidebar",
};
</script>

<style scoped>
.bg-light {
  background-color: #f8f9fa !important;
}

.nav-link.active {
  background-color: #0d6efd !important;
  color: #fff !important;
}

.nav-link:hover {
  background-color: #e2e6ea !important;
}

.dropdown-menu {
  min-width: 180px;
}
</style>
