<script setup lang="ts">
import { brand, nav } from '~/content'

const open = ref(false)
const close = () => (open.value = false)
</script>

<template>
  <header class="header" :class="{ open }">
    <div class="container bar">
      <a href="#" class="logo" @click="close">
        <span class="logo-name">{{ brand.name }}</span>
        <span class="logo-en">{{ brand.en }}</span>
      </a>

      <nav class="nav" aria-label="主選單">
        <a v-for="item in nav" :key="item.href" :href="item.href" @click="close">{{ item.label }}</a>
      </nav>

      <div class="actions">
        <a href="#contact" class="btn btn-primary cta" @click="close">聯絡我們</a>
        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="open"
          aria-controls="mobile-nav"
          aria-label="開啟選單"
          @click="open = !open"
        >
          <span /><span /><span />
        </button>
      </div>
    </div>

    <nav id="mobile-nav" class="mobile-nav" aria-label="行動版選單">
      <div class="container">
        <a v-for="item in nav" :key="item.href" :href="item.href" @click="close">{{ item.label }}</a>
        <a href="#contact" class="btn btn-primary" @click="close">聯絡我們</a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(246, 248, 250, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.bar {
  height: var(--header-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.logo {
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-shrink: 0;
}

.logo-name {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 22px;
  color: var(--ink);
}

.logo-en {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.12em;
  color: var(--primary);
}

.nav {
  display: flex;
  gap: 28px;
  font-size: 15px;
  color: var(--ink-muted);
}

.nav a:hover {
  color: var(--primary);
}

.actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cta {
  padding: 10px 22px;
  font-size: 15px;
}

.menu-toggle {
  display: none;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.menu-toggle span {
  display: block;
  width: 18px;
  height: 2px;
  border-radius: 2px;
  background: var(--ink);
  transition: transform 0.2s, opacity 0.2s;
}

.open .menu-toggle span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}
.open .menu-toggle span:nth-child(2) {
  opacity: 0;
}
.open .menu-toggle span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

.mobile-nav {
  display: none;
}

@media (max-width: 960px) {
  .nav {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .open .mobile-nav {
    display: block;
    border-top: 1px solid var(--border);
    padding: 12px 0 24px;
  }

  .mobile-nav .container {
    display: flex;
    flex-direction: column;
  }

  .mobile-nav a:not(.btn) {
    padding: 14px 0;
    border-bottom: 1px solid var(--border);
    font-size: 16px;
    color: var(--ink);
  }

  .mobile-nav .btn {
    margin-top: 20px;
  }
}

@media (max-width: 520px) {
  .cta {
    display: none;
  }
}
</style>
