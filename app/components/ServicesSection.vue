<script setup lang="ts">
import { services } from '~/content'

const num = (i: number) => String(i + 1).padStart(2, '0')
</script>

<template>
  <section id="services" class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">{{ services.eyebrow }}</span>
        <h2 class="h2">{{ services.title }}</h2>
      </div>

      <ul class="grid cards">
        <li v-for="(item, i) in services.items" :key="item.title" class="card">
          <span class="num">{{ num(i) }}</span>
          <h3>{{ item.title }}</h3>
          <p v-if="item.note">{{ item.note }}</p>
        </li>
      </ul>

      <div class="extra">
        <span class="tag">{{ services.extra.tag }}</span>
        <p>{{ services.extra.text }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cards {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: 20px;
}

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 28px;
}

.num {
  display: block;
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  color: var(--primary);
  margin-bottom: 18px;
}

h3 {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.6;
  overflow-wrap: anywhere;
}

.card p {
  margin-top: 6px;
  font-size: 15px;
  color: var(--ink-subtle);
}

.extra {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px 18px;
  padding: 22px 28px;
  border-radius: 18px;
  background: var(--primary-soft);
}

.tag {
  padding: 4px 14px;
  border-radius: 999px;
  background: var(--primary);
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}

.extra p {
  font-size: 16px;
  font-weight: 500;
  color: var(--ink);
}
</style>
