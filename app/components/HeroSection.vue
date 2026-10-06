<script setup lang="ts">
import { hero, images, settings } from '~/content'

const centered = settings.heroLayout === 'centered'
</script>

<template>
  <section class="hero" :class="centered ? 'centered' : 'split'">
    <div class="container inner">
      <div class="text">
        <span class="eyebrow">{{ hero.eyebrow }}</span>
        <h1 class="title">
          <template v-if="centered">{{ hero.titleLines.join('') }}</template>
          <template v-else>
            {{ hero.titleLines[0] }}<br />{{ hero.titleLines[1] }}
          </template>
        </h1>
        <p class="subtitle">{{ hero.subtitle }}</p>
        <div class="ctas">
          <a :href="hero.primaryCta.href" class="btn btn-primary">{{ hero.primaryCta.label }}</a>
          <a :href="hero.secondaryCta.href" class="btn btn-secondary">{{ hero.secondaryCta.label }}</a>
        </div>
      </div>

      <div v-if="centered" class="banner">
        <PhotoBox v-bind="images.heroBanner" />
      </div>

      <div v-else class="collage">
        <div class="tall"><PhotoBox v-bind="images.heroElder" /></div>
        <div><PhotoBox v-bind="images.heroWalk" /></div>
        <div class="highlight">
          <strong>{{ hero.highlight.big }}</strong>
          <span>{{ hero.highlight.small }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 88px 0 96px;
}

.inner {
  display: grid;
  gap: 56px;
  align-items: center;
}

.inner > * {
  min-width: 0;
}

.split .inner {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 440px), 1fr));
}

.title {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: clamp(36px, 5vw, 58px);
  line-height: 1.25;
  color: var(--ink);
  margin-bottom: 24px;
}

.subtitle {
  font-size: 17px;
  line-height: 1.9;
  color: var(--ink-muted);
  max-width: 34em;
  margin-bottom: 36px;
}

.ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.collage {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  grid-template-rows: 220px 220px;
  gap: 16px;
}

.collage > * {
  min-width: 0;
}

.tall {
  grid-row: span 2;
}

.highlight {
  border-radius: 20px;
  background: var(--primary);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 28px;
}

.highlight strong {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 40px;
  line-height: 1.2;
}

.highlight span {
  margin-top: 6px;
  font-size: 16px;
  color: var(--primary-soft);
}

/* 置中版 */
.centered .text {
  text-align: center;
}

.centered .subtitle {
  margin-left: auto;
  margin-right: auto;
}

.centered .ctas {
  justify-content: center;
}

.banner {
  height: 420px;
}

@media (max-width: 720px) {
  .hero {
    padding: 56px 0 72px;
  }

  .collage {
    grid-template-rows: 170px 170px;
    gap: 12px;
  }

  .highlight {
    padding: 20px;
  }

  .highlight strong {
    font-size: 30px;
  }

  .banner {
    height: 260px;
  }
}
</style>
