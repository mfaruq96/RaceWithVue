import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardView from '../views/Dashboard/DashboardView.vue'
import TestView from '../views/test/TestView.vue'

// view stock
import InventoryView from '../views/Stock/InventoryView.vue'
import ProductsView from '../views/Stock/ProductsView.vue'

// view shipment
import InboundView from '../views/Shipment/InboundView.vue'
import OutboundView from '../views/Shipment/OutboundView.vue'
import TrackingView from '../views/Shipment/TrackingView.vue'
import OrdersView from '../views/Shipment/OrdersView.vue'

// view settings
import IntegrationsView from '../views/Settings/IntegrationsView.vue'
import IntegrationsAddView from '../views/Settings/IntegrationsAddView.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: DashboardView },
  { path: '/dashboard', name: 'dashboard', component: DashboardView },
  { path: '/test', name: 'test', component: TestView },

  // stock
  { path: '/inventory', name: 'inventory', component: InventoryView },
  { path: '/products', name: 'products', component: ProductsView },

  // shipment
  { path: '/inbound', name: 'inbound', component: InboundView },
  { path: '/outbound', name: 'outbound', component: OutboundView },
  { path: '/tracking', name: 'tracking', component: TrackingView },
  { path: '/orders', name: 'orders', component: OrdersView },

  // settings
  { path: '/integrations', name: 'integrations', component: IntegrationsView },
  { path: '/integrations/add', name: 'integrationsadd', component: IntegrationsAddView },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
