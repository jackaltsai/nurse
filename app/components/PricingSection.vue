<script setup lang="ts">
import { pricing, settings } from '~/content'
</script>

<template>
  <section id="pricing" class="section pricing">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">{{ pricing.eyebrow }}</span>
        <h2 class="h2">{{ pricing.title }}</h2>
      </div>

      <div class="grid plans">
        <article v-for="plan in pricing.plans" :key="plan.name" class="plan" :class="{ featured: plan.featured }">
          <header>
            <h3>{{ plan.name }}</h3>
            <span class="time">{{ plan.time }}</span>
          </header>
          <p class="price">
            <strong>{{ plan.price }}</strong>
            <span>{{ plan.unit }}</span>
          </p>
          <p class="plan-note">{{ plan.note }}</p>
        </article>
      </div>

      <ul class="notes">
        <li v-for="note in pricing.notes" :key="note">{{ note }}</li>
      </ul>

      <div v-if="settings.showSpecialFees" class="special">
        <h3 class="sub-title">{{ pricing.specialTitle }}</h3>
        <div class="grid special-grid">
          <article v-for="fee in pricing.special" :key="fee.title" class="fee">
            <h4>{{ fee.title }}</h4>
            <ul>
              <li v-for="item in fee.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </div>

      <div class="addons">
        <span class="addons-label">{{ pricing.addonsTitle }}</span>
        <ul>
          <li v-for="addon in pricing.addons" :key="addon">{{ addon }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing {
  background: var(--ink);
  color: #fff;
}

.pricing .h2 {
  color: #fff;
}

.pricing .eyebrow {
  color: var(--on-dark-muted);
}

.plans {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 20px;
}

.plan {
  background: var(--dark-card);
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
}

.plan.featured {
  background: var(--primary);
}

.plan header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.plan h3 {
  font-size: 21px;
  font-weight: 700;
}

.time {
  font-size: 15px;
  color: var(--on-dark-muted-2);
}

.price {
  margin: 28px 0 24px;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
}

.price strong {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 52px;
  line-height: 1;
}

.price span {
  font-size: 16px;
  color: var(--on-dark-muted-2);
}

.plan-note {
  margin-top: auto;
  padding-top: 18px;
  border-top: 1px solid var(--dark-border);
  font-size: 15px;
  color: var(--on-dark-muted-2);
}

.featured .plan-note {
  border-top-color: rgba(255, 255, 255, 0.28);
  color: #fff;
}

.featured .time,
.featured .price span {
  color: var(--primary-soft);
}

.notes {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 15px;
  line-height: 1.8;
  color: var(--on-dark-muted);
}

.notes li::before {
  content: '※ ';
}

.special {
  margin-top: 56px;
  padding-top: 48px;
  border-top: 1px solid var(--dark-border);
}

.sub-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
}

.special-grid {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: 20px;
}

.fee {
  border: 1px solid var(--dark-border);
  border-radius: 18px;
  padding: 24px 28px;
}

.fee h4 {
  margin: 0 0 12px;
  font-size: 19px;
  font-weight: 700;
  color: var(--accent-on-dark);
}

.fee li {
  font-size: 15px;
  line-height: 1.8;
  color: var(--on-dark-muted-2);
  padding-left: 1em;
  text-indent: -1em;
}

.fee li::before {
  content: '・';
}

.addons {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px 18px;
}

.addons-label {
  font-size: 15px;
  font-weight: 500;
  color: var(--on-dark-muted);
}

.addons ul {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.addons li {
  padding: 8px 18px;
  border-radius: 999px;
  background: #fff;
  color: var(--ink);
  font-size: 15px;
  font-weight: 500;
}
</style>
