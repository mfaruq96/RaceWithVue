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
