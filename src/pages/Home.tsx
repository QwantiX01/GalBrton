import Banner from "../components/Banner";
// import Header from "../components/Header";
import OutlineLink from "../components/OutlineLink";
import PaneHolder from "../components/PaneHolder";

function Home() {
  return (
    <>
      <main className="mx-44 mt-9">
        <Banner
          image={
            "linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.7)), url('https://images.squarespace-cdn.com/content/v1/58471a2329687f12c60955a3/1693005196936-YSH3TW1VIPK2Q0QZMFDT/architectural-concrete.jpg?format=1000w')"
          }
          title="Бетон, переосмислено"
          description="Відкрийте для себе наш асортимент преміальних бетонних виробів"
          link={
            <OutlineLink link={"/products"} isOutline={true}>
              Переглянути товари
            </OutlineLink>
          }
        />
        <PaneHolder />
        <div className="flex pt-10 mb-10">
          <Banner
            image="linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.7)),url('https://blog.architizer.com/wp-content/uploads/bf365638-1-scaled.jpg')"
            description=""
            title=""
            link={<></>}
          />
          <div className="ml-8 w-3/4 flex flex-col place-content-center items-start">
            <div className="font-black text-5xl mb-4">
              Спеціальні пропозиції
            </div>
            <p className="mb-8">Отримайте знижку 10% на перше замовлення</p>
            <OutlineLink link={"#"} isOutline={true}>
              Купити зараз
            </OutlineLink>
          </div>
        </div>

        <div className="text-center mt-20 mb-10">
          <h1 className="text-4xl font-black mb-4">Готові розпочати?</h1>
          <OutlineLink link={"#"} isOutline={true}>
            Отримати пропозицію
          </OutlineLink>
        </div>
      </main>
    </>
  );
}

export default Home;
