<template>
  <div>
    <b-navbar toggleable="sm" type="dark" class="div-topbar shadow">
      <b-navbar-brand href="#"></b-navbar-brand>

      <b-navbar-toggle
        target="nav-collapse"
        class="bg-secondary"
      ></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown class="mr-2" right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <img
                class="img-profile rounded-circle div-img-profile border ml-2"
                src="../../assets/logo.png"
              />
              <span class="ml-2 text-dark">User</span>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "TopbarComponent2",
};
</script>
