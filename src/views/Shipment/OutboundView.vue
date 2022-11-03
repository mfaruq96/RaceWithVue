<template>
  <div>
    <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- Sidebar -->
      <SidebarComponent activeSidebar="outbound" />
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
                      Outbound
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <!-- End Breadcrum -->
            <h1 class="h3 mb-4 text-gray-800">Outbound</h1>
            <div class="row mb-4">
              <div class="col-lg-3">
                <div class="card shadow">
                  <div class="card-body">
                    <div class="m-3 mb-4 div-active-product">
                      <router-link to="#">
                        <img
                          src="../../assets/img/icon/shopee-icon.png"
                          class="img-thumbnail"
                          width="15%"
                          alt=""
                        />
                        Shopee
                      </router-link>
                    </div>
                    <div class="m-3 mb-4">
                      <router-link to="#">
                        <img
                          src="../../assets/img/icon/tokopedia-icon.png"
                          class="img-thumbnail"
                          width="15%"
                          alt=""
                        />
                        Tokopedia
                      </router-link>
                    </div>
                    <div class="m-3 mb-4">
                      <router-link to="#">
                        <img
                          src="../../assets/img/icon/lazada-icon.png"
                          class="img-thumbnail"
                          width="15%"
                          alt=""
                        />
                        Lazada
                      </router-link>
                    </div>
                    <div class="m-3 mb-4">
                      <router-link to="#">
                        <img
                          src="../../assets/img/icon/blibli-icon.png"
                          class="img-thumbnail"
                          width="15%"
                          alt=""
                        />
                        Blibli
                      </router-link>
                    </div>
                    <div class="m-3 mb-4">
                      <router-link to="#">
                        <img
                          src="../../assets/img/icon/jdid-icon.jpg"
                          class="img-thumbnail"
                          width="15%"
                          alt=""
                        />
                        JD.ID
                      </router-link>
                    </div>
                    <div class="m-3 mb-4">
                      <router-link to="#">
                        <img
                          src="../../assets/img/icon/bukalapak-icon.png"
                          class="img-thumbnail"
                          width="15%"
                          alt=""
                        />
                        Bukalapak
                      </router-link>
                    </div>
                    <div class="m-3 mb-4">
                      <div class="card">
                        <div class="card-body">
                          <center>
                            <router-link to="#">
                              <div>
                                <i class="fas fa-plus"></i>
                              </div>
                              <span class="btn">Input Order</span>
                            </router-link>
                          </center>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-9">
                <div class="card">
                  <div class="card-body">
                    <div class="table-responsive">
                      <table
                        class="table table-bordered table-striped"
                        id="dataTable"
                        width="100%"
                      >
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Invoice</th>
                            <th>Customer</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Courier</th>
                            <th>Exported</th>
                            <th>Order_Date</th>
                            <th>Created_Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-nowrap">1</td>
                            <td class="text-nowrap">
                              <strong> INV-201232131 </strong>
                            </td>
                            <td class="text-nowrap">
                              <strong> Agen Depok Bersih </strong>
                            </td>
                            <td class="text-nowrap">
                              Jl. Margonda Raya No.488, Pondok Cina, Kecamatan
                              Beji, Kota Depok, Jawa Barat 16424
                            </td>
                            <td class="text-nowrap"></td>
                            <td class="text-nowrap">JNE</td>
                            <td class="text-nowrap">20-12-2019</td>
                            <td class="text-nowrap">20-12-2019</td>
                            <td class="text-nowrap">20-12-2019</td>
                          </tr>
                          <tr>
                            <td class="text-nowrap">2</td>
                            <td class="text-nowrap">
                              <strong> INV-201232131 </strong>
                            </td>
                            <td class="text-nowrap">
                              <strong> Agen Depok Bersih </strong>
                            </td>
                            <td class="text-nowrap">
                              Jl. Margonda Raya No.488, Pondok Cina, Kecamatan
                              Beji, Kota Depok, Jawa Barat 16424
                            </td>
                            <td class="text-nowrap"></td>
                            <td class="text-nowrap">JNE</td>
                            <td class="text-nowrap">20-12-2019</td>
                            <td class="text-nowrap">20-12-2019</td>
                            <td class="text-nowrap">20-12-2019</td>
                          </tr>
                          <tr>
                            <td class="text-nowrap">3</td>
                            <td class="text-nowrap">
                              <strong> INV-201232131 </strong>
                            </td>
                            <td class="text-nowrap">
                              <strong> Agen Depok Bersih </strong>
                            </td>
                            <td class="text-nowrap">
                              Jl. Margonda Raya No.488, Pondok Cina, Kecamatan
                              Beji, Kota Depok, Jawa Barat 16424
                            </td>
                            <td class="text-nowrap"></td>
                            <td class="text-nowrap">JNE</td>
                            <td class="text-nowrap">20-12-2019</td>
                            <td class="text-nowrap">20-12-2019</td>
                            <td class="text-nowrap">20-12-2019</td>
                          </tr>
                          <tr>
                            <td class="text-nowrap">4</td>
                            <td class="text-nowrap">
                              <strong> INV-201232131 </strong>
                            </td>
                            <td class="text-nowrap">
                              <strong> Agen Depok Bersih </strong>
                            </td>
                            <td class="text-nowrap">
                              Jl. Margonda Raya No.488, Pondok Cina, Kecamatan
                              Beji, Kota Depok, Jawa Barat 16424
                            </td>
                            <td class="text-nowrap"></td>
                            <td class="text-nowrap">JNE</td>
                            <td class="text-nowrap">20-12-2019</td>
                            <td class="text-nowrap">20-12-2019</td>
                            <td class="text-nowrap">20-12-2019</td>
                          </tr>
                          <tr>
                            <td class="text-nowrap">5</td>
                            <td class="text-nowrap">
                              <strong> INV-201232131 </strong>
                            </td>
                            <td class="text-nowrap">
                              <strong> Agen Depok Bersih </strong>
                            </td>
                            <td class="text-nowrap">
                              Jl. Margonda Raya No.488, Pondok Cina, Kecamatan
                              Beji, Kota Depok, Jawa Barat 16424
                            </td>
                            <td class="text-nowrap"></td>
                            <td class="text-nowrap">JNE</td>
                            <td class="text-nowrap">20-12-2019</td>
                            <td class="text-nowrap">20-12-2019</td>
                            <td class="text-nowrap">20-12-2019</td>
                          </tr>
                          <tr>
                            <td class="text-nowrap">6</td>
                            <td class="text-nowrap">
                              <strong> INV-201232131 </strong>
                            </td>
                            <td class="text-nowrap">
                              <strong> Agen Depok Bersih </strong>
                            </td>
                            <td class="text-nowrap">
                              Jl. Margonda Raya No.488, Pondok Cina, Kecamatan
                              Beji, Kota Depok, Jawa Barat 16424
                            </td>
                            <td class="text-nowrap"></td>
                            <td class="text-nowrap">JNE</td>
                            <td class="text-nowrap">20-12-2019</td>
                            <td class="text-nowrap">20-12-2019</td>
                            <td class="text-nowrap">20-12-2019</td>
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
  name: "OutboundView",
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
