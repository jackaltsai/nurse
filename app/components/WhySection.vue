<script setup lang="ts">
import { why } from '~/content'
</script>

<template>
  <section id="why" class="section why">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">{{ why.eyebrow }}</span>
        <h2 class="h2">{{ why.title }}</h2>
      </div>

      <ul class="grid items">
        <li v-for="item in why.items" :key="item.title">
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.why {
  background: var(--surface);
  border-top: 1px solid var(--border);
}

.items {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: 40px 36px;
}

li {
  border-top: 2px solid var(--primary);
  padding-top: 24px;
}

h3 {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  line-height: 1.9;
  color: var(--ink-muted);
}
</style>
