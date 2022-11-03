<template>
  <div>
    <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- Sidebar -->
      <SidebarComponent activeSidebar="dashboard" />
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
                      Dashboard
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <!-- End Breadcrum -->
            <h1 class="h3 mb-4 text-gray-800">Dashboard</h1>
            <!-- count -->
            <div class="row mb-4">
              <!-- request pickup -->
              <div class="col-lg-3 col-md-6 mb-3">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                        >
                          Request Pickup
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
              <!-- end request pickup -->
              <!-- request inbound -->
              <div class="col-lg-3 col-md-6 mb-3">
                <div class="card border-left-success shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-success text-uppercase mb-1"
                        >
                          Inbound
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
              <!-- end inbound -->
              <!-- request proccess -->
              <div class="col-lg-3 col-md-6 mb-3">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                        >
                          Proccess
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
              <!-- end proccess -->
              <!-- request outbound -->
              <div class="col-lg-3 col-md-6 mb-3">
                <div class="card border-left-danger shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-danger text-uppercase mb-1"
                        >
                          Outbound
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
              <!-- end outbound -->
            </div>
            <!-- end count -->
            <!-- status and maps -->
            <div class="row mb-3">
              <div class="col-md-6 mb-3">
                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                      Last Order <br />
                      <span class="text-secondary">RC-0821-0292282</span>
                    </h6>
                  </div>
                  <div class="card-body">
                    <table class="table" width="100%">
                      <tbody>
                        <tr>
                          <th width="10%">
                            <i class="far fa-dot-circle text-warning fa-2x"></i>
                          </th>
                          <td align="left">
                            <strong>Inbound</strong> <br />
                            Kamis, 20 Agustus 2018 11.00 PM
                          </td>
                        </tr>
                        <tr>
                          <th width="10%">
                            <i
                              class="far fa-dot-circle text-info text-primary fa-2x"
                            ></i>
                          </th>
                          <td align="left">
                            <strong>QC Checking</strong> <br />
                            Jumat, 21 Agustus 2018 08.00 PM
                          </td>
                        </tr>
                        <tr>
                          <th width="10%">
                            <i
                              class="far fa-dot-circle text-info text-primary fa-2x"
                            ></i>
                          </th>
                          <td align="left">
                            <strong>Labeling</strong> <br />
                            Kamis, 20 Agustus 2018 11.00 PM
                          </td>
                        </tr>
                        <tr>
                          <th width="10%">
                            <i
                              class="far fa-dot-circle text-info text-primary fa-2x"
                            ></i>
                          </th>
                          <td align="left">
                            <strong>Storing</strong> <br />
                            Kamis, 20 Agustus 2018 11.00 PM
                          </td>
                        </tr>
                        <tr>
                          <th width="10%">
                            <i
                              class="far fa-dot-circle text-info text-primary fa-2x"
                            ></i>
                          </th>
                          <td align="left">
                            <strong>Packing</strong> <br />
                            Kamis, 20 Agustus 2018 11.00 PM
                          </td>
                        </tr>
                        <tr>
                          <th width="10%">
                            <i
                              class="far fa-dot-circle text-danger text-primary fa-2x"
                            ></i>
                          </th>
                          <td align="left">
                            <strong>Outbound</strong> <br />
                            Kamis, 20 Agustus 2018 11.00 PM
                          </td>
                        </tr>
                        <tr>
                          <th width="10%">
                            <i
                              class="fas fa-car text-primary text-primary fa-2x"
                            ></i>
                          </th>
                          <td align="left">
                            <strong>Delivery</strong> <br />
                            Kamis, 20 Agustus 2018 11.00 PM
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <div class="card shadow mb-4">
                  <div class="card-body">
                    <MapsComponent />
                  </div>
                </div>
              </div>
            </div>
            <!-- end status and maps -->
            <!-- charts -->
            <div class="row mb-4">
              <div class="col-lg-6 mb-3">
                <div class="card">
                  <div class="card-body shadow">
                    <LineChartComponent />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mb-3">
                <div class="card">
                  <div class="card-body shadow">
                    <PieChartComponent />
                  </div>
                </div>
              </div>
            </div>
            <!-- end charts -->
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
import LineChartComponent from "@/components/charts/LineChartComponent.vue";
import PieChartComponent from "@/components/charts/PieChartComponent.vue";
import MapsComponent from "@/components/MapsComponent.vue";

export default {
  name: "DashboardView",
  components: {
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    LineChartComponent,
    PieChartComponent,
    MapsComponent,
  },
};
</script>
