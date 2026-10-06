<script setup lang="ts">
import { footer } from '~/content'
</script>

<template>
  <footer class="footer">
    <div class="container inner">
      <span class="left">{{ footer.left }}</span>
      <span class="right">{{ footer.right }}</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--ink);
  color: var(--on-dark-muted);
  padding: 32px 0;
  font-size: 14px;
}

.inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 24px;
}

.left {
  font-family: var(--font-serif);
  font-weight: 600;
  font-size: 16px;
  color: #fff;
}
</style>
