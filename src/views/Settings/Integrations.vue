<template>
  <div>
    <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- Sidebar -->
      <SidebarComponent activeSidebar="integrations" />
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <!-- Topbar -->
          <TopbarComponent />
          <!-- End of Topbar -->

          <!-- Begin Page Content -->
          <div class="container-fluid">
            <!-- Breadcrum -->
            <div class="row">
              <div class="col">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <router-link to="/">Home</router-link>
                    </li>
                    <li class="breadcrumb-item">
                      <router-link to="/">Race Fullfillment</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Integrations
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <!-- End Breadcrum -->
            <h1 class="h3 mb-4 text-gray-800">Integrations</h1>
            <div class="row mb-4">
              <div class="col">
                <div class="card shadow">
                  <div class="card-body">
                    <button class="btn btn-sm btn-primary mb-3">
                      <i class="fas fa-store mr-2"></i>
                      ADD NEW
                    </button>
                    <div class="table-responsive mb-3">
                      <table
                        class="table table-bordered table-striped"
                        id="dataTable"
                        width="100%"
                      >
                        <thead>
                          <tr class="text-nowrap">
                            <th>SERVICE</th>
                            <th>IDENTIFIER</th>
                            <th>TYPE</th>
                            <th>LAST IMPORTED</th>
                            <th>LAST EXPORTED</th>
                            <th>SYNC STOCK</th>
                          </tr>
                        </thead>
                        <tbody class="text-nowrap">
                          <tr>
                            <td>Shopee</td>
                            <td>SH-2012</td>
                            <td>Seller</td>
                            <td>03-11-2022</td>
                            <td>03-11-2022</td>
                            <td>1200</td>
                          </tr>
                          <tr>
                            <td>Tokopedia</td>
                            <td>SH-2012</td>
                            <td>Seller</td>
                            <td>03-11-2022</td>
                            <td>03-11-2022</td>
                            <td>1200</td>
                          </tr>
                          <tr>
                            <td>Lazada</td>
                            <td>SH-2012</td>
                            <td>Seller</td>
                            <td>03-11-2022</td>
                            <td>03-11-2022</td>
                            <td>1200</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <FooterComponent />
        <!-- End of Footer -->
      </div>
      <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div
      class="modal fade"
      id="logoutModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button
              class="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            Select "Logout" below if you are ready to end your current session.
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-secondary"
              type="button"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <a class="btn btn-primary" href="login.html">Logout</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Script -->
    <script
      type="application/javascript"
      defer
      src="./frontend/vendor/jquery/jquery.min.js"
    ></script>
    <script
      type="application/javascript"
      defer
      src="./frontend/vendor/bootstrap/js/bootstrap.bundle.min.js"
    ></script>
    <script
      type="application/javascript"
      defer
      src="./frontend/vendor/jquery-easing/jquery.easing.min.js"
    ></script>
    <script
      type="application/javascript"
      defer
      src="./frontend/js/sb-admin-2.min.js"
    ></script>
    <!-- End Script -->
  </div>
</template>

<script>
import SidebarComponent from "@/components/layouts/SidebarComponent.vue";
import TopbarComponent from "@/components/layouts/TopbarComponent.vue";
import FooterComponent from "@/components/layouts/FooterComponent.vue";

import $ from "jquery";

export default {
  name: "IntegrationsView",
  components: {
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
  },

  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      $(document).ready(function () {
        $("#dataTable").DataTable();
      });
    },
  },
};
</script>
