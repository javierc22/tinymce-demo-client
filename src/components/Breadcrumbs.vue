<template>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li v-for="(item, i) in items" :key="i" :class="isActive(item.is_active)">
        <router-link :to="item.to">
          {{ item.text }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    items: { type: Array, default: () => [] },
  },
  methods: {
    isActive(value) {
      return value ? "is-active" : ""
    }
  }
}
</script>
<style lang="">
  
</style>