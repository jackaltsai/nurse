<script setup lang="ts">
import { contact, contactSection } from '~/content'

const telHref = contact.phone ? `tel:${contact.phone.replace(/[^\d+]/g, '')}` : '#contact'
const lineHref = contact.lineUrl || '#contact'
</script>

<template>
  <section id="contact" class="contact">
    <div class="container inner">
      <h2 class="h2">{{ contactSection.title }}</h2>
      <p v-if="contact.phone" class="phone">{{ contact.phone }}</p>
      <div class="ctas">
        <a :href="telHref" class="btn btn-light">{{ contactSection.phoneLabel }}</a>
        <a
          :href="lineHref"
          class="btn btn-outline-light"
          v-bind="contact.lineUrl ? { target: '_blank', rel: 'noopener' } : {}"
        >{{ contactSection.lineLabel }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 88px 0;
  background: var(--primary);
  color: #fff;
  text-align: center;
}

.inner {
  max-width: 860px;
}

.h2 {
  color: #fff;
}

.phone {
  margin-top: 16px;
  font-family: var(--font-serif);
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.ctas {
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
}

@media (max-width: 720px) {
  .contact {
    padding: 72px 0;
  }
}
</style>
