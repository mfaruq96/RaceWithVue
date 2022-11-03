<template>
  <div class="about">
    <h1>This is an test page</h1>
    <Test activeSidebar="products" />
    <div class="card shadow">
      <div class="card-body">
        <b-card no-body>
          <b-tabs v-model="tabIndex" card>
            <b-tab title="All" :title-link-class="linkClass(0)"
              >Tab contents 1</b-tab
            >
            <b-tab title="Tab 2" :title-link-class="linkClass(1)"
              >Tab contents 2</b-tab
            >
            <b-tab title="Tab 3" :title-link-class="linkClass(2)"
              >Tab contents 3</b-tab
            >
          </b-tabs>
        </b-card>
      </div>
    </div>

    <div class="row mb-4 mt-4">
      <div class="col">
        <div class="card shadow">
          <div class="card-body">
            <div class="d-flex justify-content-end mr-3">
              <!--  -->
              <div class="dropdown">
                <span class="">
                  <img
                    class="img-profile rounded-circle border mr-2"
                    src="../../assets/logo.png"
                    style="width: 30px"
                  />
                  <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                    User
                  </span>
                </span>
                <div class="dropdown-content dropdown-menu-right">
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Profile
                  </a>
                  <a
                    class="dropdown-item"
                    href="#"
                    data-toggle="modal"
                    data-target="#logoutModal"
                  >
                    <i
                      class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
                    ></i>
                    Logout
                  </a>
                </div>
              </div>
              <!--  -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Test from "@/components/TestComp.vue";

export default {
  name: "HomeView",
  components: {
    Test,
  },
  data() {
    return {
      tabIndex: 0,
    };
  },
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ["bg-primary", "text-light"];
      } else {
        return ["bg-light", "text-info"];
      }
    },
  },
};
</script>

<style></style>
