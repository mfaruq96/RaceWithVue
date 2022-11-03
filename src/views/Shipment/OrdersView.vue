<template>
  <div>
    <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- Sidebar -->
      <SidebarComponent activeSidebar="orders" />
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
                      Orders
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <!-- End Breadcrum -->
            <h1 class="h3 mb-4 text-gray-800">Orders</h1>
            <div class="row mb-4">
              <div class="col">
                <div class="card shadow">
                  <div class="card-body">
                    <!-- nav tabs -->
                    <TabNavComponent
                      :tabs="[
                        'All',
                        'Inbound',
                        'Proses',
                        'Outbound',
                        'Dikirim',
                        'Sampai',
                      ]"
                      :selected="selected"
                      @selected="setSelected"
                    >
                      <TabComponent :isSelected="selected === 'All'">
                        <h4 class="mt-4 mb-4">All</h4>
                        <div class="table-responsive mb-3">
                          <table
                            class="table table-bordered table-striped"
                            id="dataTable"
                            width="100%"
                          >
                            <thead>
                              <tr class="text-nowrap">
                                <th>No</th>
                                <th>Invoice</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Gudang</th>
                                <th>Created Date</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="text-nowrap">
                                <td>1</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-success">
                                    Outbound
                                  </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>2</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-warning">
                                    Inbound
                                  </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>3</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-info"> Proses </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>4</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-success">
                                    Outbound
                                  </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>5</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-warning">
                                    Inbound
                                  </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>6</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-info"> Proses </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>7</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-success">
                                    Outbound
                                  </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>8</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-warning">
                                    Inbound
                                  </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>9</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-info"> Proses </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>10</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-primary">
                                    Dikirim
                                  </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>11</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-primary">
                                    Dikirim
                                  </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>12</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-primary">
                                    Dikirim
                                  </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </TabComponent>
                      <TabComponent :isSelected="selected === 'Inbound'">
                        <h4 class="mt-4 mb-4">Inbound</h4>
                        <div class="table-responsive mb-3">
                          <table
                            class="table table-bordered table-striped"
                            id="dataTable"
                            width="100%"
                          >
                            <thead>
                              <tr class="text-nowrap">
                                <th>No</th>
                                <th>Invoice</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Gudang</th>
                                <th>Created Date</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="text-nowrap">
                                <td>1</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-warning">
                                    Inbound
                                  </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>2</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-warning">
                                    Inbound
                                  </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>3</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-warning">
                                    Inbound
                                  </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </TabComponent>
                      <TabComponent :isSelected="selected === 'Proses'">
                        <h4 class="mt-4 mb-4">Proses</h4>
                        <div class="table-responsive mb-3">
                          <table
                            class="table table-bordered table-striped"
                            id="dataTable"
                            width="100%"
                          >
                            <thead>
                              <tr class="text-nowrap">
                                <th>No</th>
                                <th>Invoice</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Gudang</th>
                                <th>Created Date</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="text-nowrap">
                                <td>1</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-info"> Proses </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>2</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-info"> Proses </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>3</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-info"> Proses </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </TabComponent>
                      <TabComponent :isSelected="selected === 'Outbound'">
                        <h4 class="mt-4 mb-4">Outbound</h4>
                        <div class="table-responsive mb-3">
                          <table
                            class="table table-bordered table-striped"
                            id="dataTable"
                            width="100%"
                          >
                            <thead>
                              <tr class="text-nowrap">
                                <th>No</th>
                                <th>Invoice</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Gudang</th>
                                <th>Created Date</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="text-nowrap">
                                <td>1</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-success">
                                    Outbound
                                  </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>2</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-success">
                                    Outbound
                                  </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>3</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-success">
                                    Outbound
                                  </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </TabComponent>
                      <TabComponent :isSelected="selected === 'Dikirim'">
                        <h4 class="mt-4 mb-4">Dikirim</h4>
                        <div class="table-responsive mb-3">
                          <table
                            class="table table-bordered table-striped"
                            id="dataTable"
                            width="100%"
                          >
                            <thead>
                              <tr class="text-nowrap">
                                <th>No</th>
                                <th>Invoice</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Gudang</th>
                                <th>Created Date</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="text-nowrap">
                                <td>1</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-primary">
                                    Dikirim
                                  </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>2</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-primary">
                                    Dikirim
                                  </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>3</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-primary">
                                    Dikirim
                                  </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </TabComponent>
                      <TabComponent :isSelected="selected === 'Sampai'">
                        <h4 class="mt-4 mb-4">Sampai</h4>
                        <div class="table-responsive mb-3">
                          <table
                            class="table table-bordered table-striped"
                            id="dataTable"
                            width="100%"
                          >
                            <thead>
                              <tr class="text-nowrap">
                                <th>No</th>
                                <th>Invoice</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Gudang</th>
                                <th>Created Date</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="text-nowrap">
                                <td>1</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-success">
                                    Outbound
                                  </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>2</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-warning">
                                    Inbound
                                  </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>3</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-info"> Proses </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>4</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-success">
                                    Outbound
                                  </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>5</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-warning">
                                    Inbound
                                  </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>6</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-info"> Proses </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>7</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-success">
                                    Outbound
                                  </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>8</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-warning">
                                    Inbound
                                  </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                              <tr class="text-nowrap">
                                <td>9</td>
                                <td>INV-123021</td>
                                <td>Rp.20.000.000</td>
                                <td>
                                  <span class="badge badge-info"> Proses </span>
                                </td>
                                <td>Bekasi</td>
                                <td>03-11-2022</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </TabComponent>
                    </TabNavComponent>
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
import TabNavComponent from "@/components/navTabs/TabNavComponent.vue";
import TabComponent from "@/components/navTabs/TabComponent.vue";

import $ from "jquery";

export default {
  name: "OrdersView",
  components: {
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    TabNavComponent,
    TabComponent,
  },
  data: () => {
    return {
      selected: "All",
    };
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
    setSelected(tab) {
      this.selected = tab;
    },
  },
};
</script>
