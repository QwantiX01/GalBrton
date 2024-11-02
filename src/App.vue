<script lang="ts" setup>
import { Shield, Timer, Building2, Ruler } from "lucide-vue-next";
import Banner from "./components/Banner.vue";
import MyHeader from "./components/MyHeader.vue";
import Slider from "./components/UI/Slider.vue";
import BlockHeader from "./components/UI/BlockHeader.vue";
import Card from "./components/UI/Card.vue";
import ConcreteTable from "./components/ConcreteTable.vue";
import OutlineLink from "./components/UI/OutlineLink.vue";

const slides = [
  {
    image: "https://pro.lviv.ua/wp-content/uploads/epitsentr-lviv.jpeg",
    description:
      "Епіцентр на Зубрівській, 27 у Сокільниках вражає не лише своїм асортиментом, а й якістю будівництва. Завдяки використанню бетону від ГалБетон, вирізняється міцністю та надійністю. Сучасний дизайн та високі стандарти будівництва роблять Епіцентр ідеальним місцем для комфортних покупок і приємного",
    title: "Епіцетр",
  },
  {
    image: "https://img.lunstatic.net/building-440x330/31411.png",
    description:
      "ЖК Avalon Up у Львові вирізняється сучасною архітектурою та високими стандартами будівництва, зведений з використанням бетону від компанії ГалБетон. Завдяки цьому житловий комплекс має високу міцність і надійність, що гарантує безпеку та комфорт мешканців, а також довговічність будівлі.",
    title: "ЖК Avalon Up",
  },
];
</script>

<template>
  <my-header />
  <div class="main-banner">
    <banner
      description="Відкрийте для себе наш асортимент бетону, та інших буд-матеріалів"
      image="https://images.squarespace-cdn.com/content/v1/58471a2329687f12c60955a3/1693005196936-YSH3TW1VIPK2Q0QZMFDT/architectural-concrete.jpg?format=1000w"
      link="/"
      link-text="Перегляньте нашу продукцію"
      title="ГалБетон — Бетон, про який ти мрієш"
    />
  </div>
  <main class="main-section">
    <section>
      <block-header
        description="Компанії, які використовували послуги Галбетон та досягли успіху завдяки нашій продукції."
        title="Компанії, які обрали наші послуги:"
      />
      <slider :slides="slides" />
    </section>
    <section>
      <block-header
        description="Оберіть оптимальну марку бетону для вашого проекту. Кожна марка має свої унікальні характеристики та сфери застосування."
        title="Марки бетону та їх характеристики"
      />
      <div class="cards">
        <card
          description="Всі марки бетону відповідають державним стандартам"
          title="Гарантована якість"
        >
          <shield class="card-icon" />
        </card>
        <card
          description="Доставляємо бетон точно в термін"
          title="Швидка доставка"
        >
          <timer class="card-icon" />
        </card>
        <card
          description="Від малих до великих будівельних робіт"
          title="Для будь-яких проектів"
        >
          <building2 class="card-icon" />
        </card>
        <card
          description="Комп'ютерний контроль складу суміші"
          title="Точне дозування"
        >
          <ruler class="card-icon" />
        </card>
      </div>
    </section>
    <section>
      <block-header
        description="Наш бетон - це поєднання інновацій та традицій. Ми пропонуємо
            широкий спектр марок для різних будівельних потреб, від простих
            побутових робіт до складних інженерних проектів."
        title="Про бетон"
      />
      <concrete-table />
    </section>
    <section class="contact-section">
      <block-header
        description="Наші спеціалісти допоможуть підібрати оптимальну марку бетону для вашого проекту"
        title="Потрібна консультація?"
      />

      <div>
        <outline-link is-outline-link="true" link="/contact">
          Зв'язатися з нами
        </outline-link>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contact-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cards {
  display: flex;
  gap: 16px;
}

.main-banner {
  margin: 48px 10%;
}

.main-section {
  display: flex;
  padding: 24px 20%;
  flex-direction: column;
  gap: 80px;
}
</style>
