<script setup lang="ts">
import { compare } from '~/content'
</script>

<template>
  <section id="compare" class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">{{ compare.eyebrow }}</span>
        <h2 class="h2">{{ compare.title }}</h2>
      </div>

      <div class="table-wrap" tabindex="0" role="region" :aria-label="compare.title">
        <table>
          <colgroup>
            <col class="col-label" />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">{{ compare.headers[0] }}</th>
              <th scope="col" class="nurse">{{ compare.headers[1] }}</th>
              <th scope="col" class="carer">{{ compare.headers[2] }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in compare.rows" :key="row[0]">
              <th scope="row">{{ row[0] }}</th>
              <td class="nurse">{{ row[1] }}</td>
              <td>{{ row[2] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped>
.table-wrap {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

table {
  width: 100%;
  min-width: 640px;
  border-collapse: collapse;
  table-layout: fixed;
}

.col-label {
  width: 150px;
}

th,
td {
  padding: 20px 24px;
  text-align: left;
  vertical-align: top;
  font-size: 16px;
  line-height: 1.75;
  border-bottom: 1px solid var(--border);
}

tbody tr:last-child th,
tbody tr:last-child td {
  border-bottom: 0;
}

thead th {
  font-size: 17px;
  font-weight: 700;
  color: var(--ink);
}

thead th.nurse {
  background: var(--accent);
  color: #fff;
}

thead th.carer {
  color: var(--primary);
}

tbody th {
  font-weight: 700;
  color: var(--ink);
}

td {
  color: var(--ink-muted);
}

td.nurse {
  background: var(--accent-soft);
  color: var(--ink);
  font-weight: 500;
}
</style>
