<template>
  <div>
    <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- Sidebar -->
      <SidebarComponent activeSidebar="inventory" />
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
                      Inventory
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <!-- End Breadcrum -->
            <h1 class="h3 mb-4 text-gray-800">Inventory</h1>
            <!-- count -->
            <div class="row mb-4">
              <!-- Total Product -->
              <div class="col-lg-4 col-md-6 mb-3">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                        >
                          Total Product
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                          21
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-archive fa-3x text-primary"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end Total Product -->
              <!-- Total Stock -->
              <div class="col-lg-4 col-md-6 mb-3">
                <div class="card border-left-success shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-success text-uppercase mb-1"
                        >
                          Total Stock
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                          21
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-plus-circle fa-3x text-success"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end Total Stock -->
              <!-- request Expired Stock -->
              <div class="col-lg-4 col-md-6 mb-3">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                        >
                          Expired Stock
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                          21
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-folder-open fa-3x text-primary"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end Expired Stock -->
              <!-- request Incoming Stock -->
              <div class="col-lg-4 col-md-6 mb-3">
                <div class="card border-left-danger shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-danger text-uppercase mb-1"
                        >
                          Incoming Stock
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                          21
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-minus-circle fa-3x text-danger"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end Incoming Stock -->
              <!-- beta -->
              <div class="col-lg-4 col-md-6 mb-3">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                        >
                          Beta
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                          21
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-archive fa-3x text-primary"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end beta -->
              <!-- request beta -->
              <div class="col-lg-4 col-md-6 mb-3">
                <div class="card border-left-success shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-success text-uppercase mb-1"
                        >
                          Beta
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                          21
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-plus-circle fa-3x text-success"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end beta -->
            </div>
            <!-- end count -->
            <!-- table -->
            <div class="row mb-4">
              <div class="col">
                <div class="card">
                  <div class="card-body shadow">
                    <div class="table-responsive">
                      <table
                        class="table table-striped"
                        id="dataTable"
                        width="100%"
                      >
                        <thead>
                          <tr>
                            <th>Seller</th>
                            <th>Tipe Barcode</th>
                            <th width="12%">Qty SKU</th>
                            <th width="12%">Qty Stock</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div class="d-flex flex-row">
                                <div class="p-2 bd-highlight">
                                  <router-link to="#">
                                    <i class="fas fa-store fa-2x"></i>
                                  </router-link>
                                </div>
                                <div class="p-2 bd-highlight">
                                  <span> Agen Depok Bersih </span>
                                  <br />
                                  <a href="tel:+62822212345">0822212345</a>
                                </div>
                              </div>
                            </td>
                            <td>No Barcode</td>
                            <td>20</td>
                            <td>1820</td>
                          </tr>
                          <tr>
                            <td>
                              <div class="d-flex flex-row">
                                <div class="p-2 bd-highlight">
                                  <router-link to="#">
                                    <i class="fas fa-store fa-2x"></i>
                                  </router-link>
                                </div>
                                <div class="p-2 bd-highlight">
                                  <span> Berkah Sentosa </span>
                                  <br />
                                  <a href="tel:+62822212345">0822212345</a>
                                </div>
                              </div>
                            </td>
                            <td>No Barcode</td>
                            <td>20</td>
                            <td>1820</td>
                          </tr>
                          <tr>
                            <td>
                              <div class="d-flex flex-row">
                                <div class="p-2 bd-highlight">
                                  <router-link to="#">
                                    <i class="fas fa-store fa-2x"></i>
                                  </router-link>
                                </div>
                                <div class="p-2 bd-highlight">
                                  <span> Agen Jaya </span>
                                  <br />
                                  <a href="tel:+62822212345">0822212345</a>
                                </div>
                              </div>
                            </td>
                            <td>No Barcode</td>
                            <td>20</td>
                            <td>1820</td>
                          </tr>
                          <tr>
                            <td>
                              <div class="d-flex flex-row">
                                <div class="p-2 bd-highlight">
                                  <router-link to="#">
                                    <i class="fas fa-store fa-2x"></i>
                                  </router-link>
                                </div>
                                <div class="p-2 bd-highlight">
                                  <span> Clean House </span>
                                  <br />
                                  <a href="tel:+62822212345">0822212345</a>
                                </div>
                              </div>
                            </td>
                            <td>No Barcode</td>
                            <td>20</td>
                            <td>1820</td>
                          </tr>
                          <tr>
                            <td>
                              <div class="d-flex flex-row">
                                <div class="p-2 bd-highlight">
                                  <router-link to="#">
                                    <i class="fas fa-store fa-2x"></i>
                                  </router-link>
                                </div>
                                <div class="p-2 bd-highlight">
                                  <span> Agen Depok Bersih </span>
                                  <br />
                                  <a href="tel:+62822212345">0822212345</a>
                                </div>
                              </div>
                            </td>
                            <td>No Barcode</td>
                            <td>20</td>
                            <td>1820</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end table -->
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
              <span aria-hidden="true">??</span>
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

// import axios from "axios";
import $ from "jquery";

export default {
  name: "InventoryView",
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
