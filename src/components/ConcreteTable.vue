<template>
  <div class="table-container">
    <table class="table">
      <thead>
        <tr>
          <th>Марка бетону</th>
          <th>Клас міцності</th>
          <th>Характеристики</th>
          <th>Застосування</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(concrete, index) in concretes" :key="index">
          <td>{{ concrete.brand }}</td>
          <td>{{ concrete.strengthClass }}</td>
          <td>
            <ul>
              <li v-for="(feature, i) in concrete.features" :key="i">
                {{ feature }}
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li v-for="(usage, i) in concrete.usages" :key="i">
                {{ usage }}
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface Concrete {
  brand: string;
  strengthClass: string;
  features: string[];
  usages: string[];
}

const concretes = ref<Concrete[]>([
  {
    brand: "М100",
    strengthClass: "В7.5",
    features: [
      "Міцність: 10 МПа",
      "Морозостійкість: F50",
      "Водонепроникність: W2",
    ],
    usages: [
      "Підготовка основи",
      "Тимчасові конструкції",
      "Стяжки під підлогу",
    ],
  },
  {
    brand: "М150",
    strengthClass: "В12.5",
    features: [
      "Міцність: 15 МПа",
      "Морозостійкість: F75",
      "Водонепроникність: W2",
    ],
    usages: [
      "Фундаменти малоповерхових будівель",
      "Доріжки",
      "Підлоги в гаражах",
    ],
  },
  {
    brand: "М200",
    strengthClass: "В15",
    features: [
      "Міцність: 20 МПа",
      "Морозостійкість: F100",
      "Водонепроникність: W4",
    ],
    usages: ["Монолітні фундаменти", "Плити перекриття", "Сходи"],
  },
  {
    brand: "М250",
    strengthClass: "В20",
    features: [
      "Міцність: 25 МПа",
      "Морозостійкість: F150",
      "Водонепроникність: W4",
    ],
    usages: ["Несучі конструкції", "Міжповерхові перекриття", "Колони"],
  },
  {
    brand: "М300",
    strengthClass: "В22.5",
    features: [
      "Міцність: 30 МПа",
      "Морозостійкість: F200",
      "Водонепроникність: W6",
    ],
    usages: ["Високонавантажені конструкції", "Мости", "Гідротехнічні споруди"],
  },
  {
    brand: "М350",
    strengthClass: "В25",
    features: [
      "Міцність: 35 МПа",
      "Морозостійкість: F300",
      "Водонепроникність: W8",
    ],
    usages: ["Висотне будівництво", "Промислові об'єкти", "Спеціальні споруди"],
  },
  {
    brand: "М400",
    strengthClass: "В30",
    features: [
      "Міцність: 40 МПа",
      "Морозостійкість: F300",
      "Водонепроникність: W10",
    ],
    usages: ["Особливо відповідальні конструкції", "Мостові опори", "Дамби"],
  },
  {
    brand: "М450",
    strengthClass: "В25",
    features: [
      "Міцність: 40 МПа",
      "Морозостійкість: F100",
      "Водонепроникність: W4",
    ],
    usages: [
      "Фундаменти високоповерхових будівель",
      "Мости",
      "Спортивні майданчики",
    ],
  },
  {
    brand: "М500",
    strengthClass: "В30",
    features: [
      "Міцність: 50 МПа",
      "Морозостійкість: F150",
      "Водонепроникність: W6",
    ],
    usages: [
      "Конструкції з високими навантаженнями",
      "Фундаменти для промислових об'єктів",
      "Дорожні покриття",
    ],
  },
]);
</script>

<style scoped>
.table-container {
  overflow: hidden;
  border-radius: 0.5rem;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table thead {
  background-color: var(--background-secondary);
}

.table th,
.table td {
  padding: 1rem 1.5rem;
  text-align: left;
}

.table tbody tr {
  border-top: 1px solid #e2e8f0;
}

.table th {
  font-weight: bold;
}
</style>
