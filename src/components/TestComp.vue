<template>
  <div>
    <h5>{{ activeSidebar }}</h5>
    <div v-if="activeSidebar == 'products'">
      <p>salah</p>
    </div>
    <div v-else>
      <h5>benar</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: ["activeSidebar"],
};
</script>
