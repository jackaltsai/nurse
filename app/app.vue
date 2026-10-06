<script setup lang="ts">
import { settings } from '~/content'
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <PricingSection />
    <CompareSection v-if="settings.showComparison" />
    <WhySection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
