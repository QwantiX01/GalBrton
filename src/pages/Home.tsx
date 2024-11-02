import data from "../assets/data.json";
import Banner from "../components/Banner";
import OutlineLink from "../components/OutlineLink";
import ContentSlider, { ISlide } from "../components/ContentSlider.tsx";
import { Building2, Ruler, Shield, Timer } from "lucide-react";

function Home() {
  const companySlides: Array<ISlide> = data.coopCompanies;
  return (
    <>
      <Banner
        image="linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.7)), url('')"
        title="ГалБетон — Бетон, про який ти мрієш"
        description="Відкрийте для себе наш асортимент бетону, та інших буд-матеріалів"
        link={
          <OutlineLink link={"/products"} isOutline={true}>
            Переглянути товари
          </OutlineLink>
        }
      />
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-2 text-center">
          Компанії, які обрали наші послуги:
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-12">
          Оберіть оптимальну марку бетону для вашого проекту. Кожна марка має
          свої унікальні характеристики та сфери застосування.
        </p>
        <ContentSlider slides={companySlides} />
      </section>

      <section className="mt-16">
        <div className="mt-10 mx-auto w-3/4 flex flex-col items-center">
          <div className="font-bold text-5xl mb-4">Про бетон</div>
          <p className="text-lg text-center max-w-2xl mb-12">
            Наш бетон - це поєднання інновацій та традицій. Ми пропонуємо
            широкий спектр марок для різних будівельних потреб, від простих
            побутових робіт до складних інженерних проектів.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full mb-16">
            <div className="text-center p-8 bg-shark-950 rounded-lg shadow-sm">
              <Shield className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="font-bold text-xl mb-2">Гарантована якість</h3>
              <p>Всі марки бетону відповідають державним стандартам</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-shark-950 rounded-lg shadow-sm">
              <Timer className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-2">Швидка доставка</h3>
              <p>Доставляємо бетон точно в термін</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-shark-950 rounded-lg shadow-sm">
              <Building2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-2">Для будь-яких проектів</h3>
              <p>Від малих до великих будівельних робіт</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-shark-950 rounded-lg shadow-sm">
              <Ruler className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-2">Точне дозування</h3>
              <p>Комп'ютерний контроль складу суміші</p>
            </div>
          </div>
        </div>
        <div className="py-16">
          <div className="mx-auto w-3/4">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Марки бетону та їх характеристики
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12">
              Оберіть оптимальну марку бетону для вашого проекту. Кожна марка
              має свої унікальні характеристики та сфери застосування.
            </p>
            <div className="rounded-lg shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left">Марка бетону</th>
                    <th className="px-6 py-4 text-left">Клас міцності</th>
                    <th className="px-6 py-4 text-left">Характеристики</th>
                    <th className="px-6 py-4 text-left">Застосування</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-6 py-4">М100</td>
                    <td className="px-6 py-4">В7.5</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4">
                        <li>Міцність: 10 МПа</li>
                        <li>Морозостійкість: F50</li>
                        <li>Водонепроникність: W2</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4">
                        <li>Підготовка основи</li>
                        <li>Тимчасові конструкції</li>
                        <li>Стяжки під підлогу</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">М150</td>
                    <td className="px-6 py-4">В12.5</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4">
                        <li>Міцність: 15 МПа</li>
                        <li>Морозостійкість: F75</li>
                        <li>Водонепроникність: W2</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4">
                        <li>Фундаменти малоповерхових будівель</li>
                        <li>Доріжки</li>
                        <li>Підлоги в гаражах</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">М200</td>
                    <td className="px-6 py-4">В15</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4">
                        <li>Міцність: 20 МПа</li>
                        <li>Морозостійкість: F100</li>
                        <li>Водонепроникність: W4</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4">
                        <li>Монолітні фундаменти</li>
                        <li>Плити перекриття</li>
                        <li>Сходи</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">М250</td>
                    <td className="px-6 py-4">В20</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4">
                        <li>Міцність: 25 МПа</li>
                        <li>Морозостійкість: F150</li>
                        <li>Водонепроникність: W4</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4">
                        <li>Несучі конструкції</li>
                        <li>Міжповерхові перекриття</li>
                        <li>Колони</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">М300</td>
                    <td className="px-6 py-4">В22.5</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4">
                        <li>Міцність: 30 МПа</li>
                        <li>Морозостійкість: F200</li>
                        <li>Водонепроникність: W6</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4">
                        <li>Високонавантажені конструкції</li>
                        <li>Мости</li>
                        <li>Гідротехнічні споруди</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">М350</td>
                    <td className="px-6 py-4">В25</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4">
                        <li>Міцність: 35 МПа</li>
                        <li>Морозостійкість: F300</li>
                        <li>Водонепроникність: W8</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4">
                        <li>Висотне будівництво</li>
                        <li>Промислові об'єкти</li>
                        <li>Спеціальні споруди</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">М400</td>
                    <td className="px-6 py-4">В30</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4">
                        <li>Міцність: 40 МПа</li>
                        <li>Морозостійкість: F300</li>
                        <li>Водонепроникність: W10</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4">
                        <li>Особливо відповідальні конструкції</li>
                        <li>Мостові опори</li>
                        <li>Дамби</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">М450</td>
                    <td className="px-6 py-4">В25</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4">
                        <li>Міцність: 40 МПа</li>
                        <li>Морозостійкість: F100</li>
                        <li>Водонепроникність: W4</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4">
                        <li>Фундаменти високоповерхових будівель</li>
                        <li>Мости</li>
                        <li>Спортивні майданчики</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">М500</td>
                    <td className="px-6 py-4">В30</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4">
                        <li>Міцність: 50 МПа</li>
                        <li>Морозостійкість: F150</li>
                        <li>Водонепроникність: W6</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4">
                        <li>Конструкції з високими навантаженнями</li>
                        <li>Фундаменти для промислових об'єктів</li>
                        <li>Дорожні покриття</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-16 mb-16 mx-auto w-3/4 text-center">
          <h2 className="text-3xl font-bold mb-6">Потрібна консультація?</h2>
          <p className="mb-8">
            Наші спеціалісти допоможуть підібрати оптимальну марку бетону для
            вашого проекту
          </p>
          <OutlineLink link={"/contact"} isOutline={true}>
            Зв'язатися з нами
          </OutlineLink>
        </div>
      </section>
    </>
  );
}

export default Home;
