import Banner from "../components/Banner";
import OutlineLink from "../components/OutlineLink";
import ContentSlider, { ISlide } from "../components/ContentSlider.tsx";
import data from "../assets/data.json";
function Home() {
  const companySlides: Array<ISlide> = data.coopCompanies;
  return (
    <>
      <Banner
        image={
          "linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.7)), url('https://images.squarespace-cdn.com/content/v1/58471a2329687f12c60955a3/1693005196936-YSH3TW1VIPK2Q0QZMFDT/architectural-concrete.jpg?format=1000w')"
        }
        title="Бетон, переосмислено"
        description="Відкрийте для себе наш асортимент бетону, та інших буд-матеріалів"
        link={
          <OutlineLink link={"/products"} isOutline={true}>
            Переглянути товари
          </OutlineLink>
        }
      />
      <section className="mt-16">
        <h1 className="text-5xl font-bold">
          Компанії, які обрали наші послуги:
        </h1>
        <ContentSlider slides={companySlides} />
      </section>
      <section className=" mt-16 border-t-4">
        <div className="mt-10 mx-auto w-3/4 flex flex-col items-center">
          <div className="font-bold text-5xl mb-4">Про бетон</div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Марка бетону</th>
              <th>Клас міцності</th>
              <th>Характеристики</th>
              <th>Застосування</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>М100</td>
              <td>В7.5</td>
              <td>
                <ul>
                  <li>Міцність: 10 МПа</li>
                  <li>Морозостійкість: F50</li>
                  <li>Водонепроникність: W2</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Підготовка основи</li>
                  <li>Тимчасові конструкції</li>
                  <li>Стяжки під підлогу</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>М150</td>
              <td>В12.5</td>
              <td>
                <ul>
                  <li>Міцність: 15 МПа</li>
                  <li>Морозостійкість: F75</li>
                  <li>Водонепроникність: W2</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Фундаменти малоповерхових будівель</li>
                  <li>Доріжки</li>
                  <li>Підлоги в гаражах</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>М200</td>
              <td>В15</td>
              <td>
                <ul>
                  <li>Міцність: 20 МПа</li>
                  <li>Морозостійкість: F100</li>
                  <li>Водонепроникність: W4</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Монолітні фундаменти</li>
                  <li>Плити перекриття</li>
                  <li>Сходи</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>М250</td>
              <td>В20</td>
              <td>
                <ul>
                  <li>Міцність: 25 МПа</li>
                  <li>Морозостійкість: F150</li>
                  <li>Водонепроникність: W4</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Несучі конструкції</li>
                  <li>Міжповерхові перекриття</li>
                  <li>Колони</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>М300</td>
              <td>В22.5</td>
              <td>
                <ul>
                  <li>Міцність: 30 МПа</li>
                  <li>Морозостійкість: F200</li>
                  <li>Водонепроникність: W6</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Високонавантажені конструкції</li>
                  <li>Мости</li>
                  <li>Гідротехнічні споруди</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>М350</td>
              <td>В25</td>
              <td>
                <ul>
                  <li>Міцність: 35 МПа</li>
                  <li>Морозостійкість: F300</li>
                  <li>Водонепроникність: W8</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Висотне будівництво</li>
                  <li>Промислові об'єкти</li>
                  <li>Спеціальні споруди</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>М400</td>
              <td>В30</td>
              <td>
                <ul>
                  <li>Міцність: 40 МПа</li>
                  <li>Морозостійкість: F300</li>
                  <li>Водонепроникність: W10</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Особливо відповідальні конструкції</li>
                  <li>Мостові опори</li>
                  <li>Дамби</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Home;
