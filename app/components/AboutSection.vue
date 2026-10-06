<script setup lang="ts">
import { about } from '~/content'
</script>

<template>
  <section id="about" class="section about">
    <div class="container grid layout">
      <div>
        <span class="eyebrow">{{ about.eyebrow }}</span>
        <h2 class="h2">{{ about.title }}</h2>
      </div>
      <div class="body">
        <article v-for="p in about.paragraphs" :key="p.title">
          <h3>{{ p.title }}</h3>
          <p>{{ p.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--surface);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.layout {
  grid-template-columns: 1fr 2fr;
  gap: 48px;
}

.body {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

h3 {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 12px;
}

p {
  font-size: 17px;
  line-height: 1.95;
  color: var(--ink-muted);
}

@media (max-width: 860px) {
  .layout {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  h3 {
    font-size: 21px;
  }
}
</style>
