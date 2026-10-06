<script setup lang="ts">
// 有照片時顯示照片；尚未提供時顯示同尺寸佔位區塊。
defineProps<{ src: string; alt: string }>()
</script>

<template>
  <div class="photo">
    <img v-if="src" :src="src" :alt="alt" loading="lazy" />
    <div v-else class="placeholder" role="img" :aria-label="alt">
      <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20 5h-3.2l-1.8-2H9L7.2 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-8 13a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        />
      </svg>
      <span>照片：{{ alt }}</span>
    </div>
  </div>
</template>

<style scoped>
.photo {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  background: var(--primary-soft);
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--primary);
  font-size: 14px;
  background:
    repeating-linear-gradient(135deg, transparent 0 14px, rgba(63, 114, 153, 0.06) 14px 28px),
    var(--primary-soft);
}
</style>
