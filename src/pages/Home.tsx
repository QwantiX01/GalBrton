import Banner from "../components/Banner";
// import Header from "../components/Header";
import OutlineLink from "../components/OutlineLink";
import PaneHolder from "../components/PaneHolder";

function Home() {
  return (
    <>
      {/* <Header /> */}
      <main className="mx-44 mt-9">
        <Banner
          image={"linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.7)), url('https://images.squarespace-cdn.com/content/v1/58471a2329687f12c60955a3/1693005196936-YSH3TW1VIPK2Q0QZMFDT/architectural-concrete.jpg?format=1000w')"}
          title="Concrete, redefined"
          description="Discover our range of premium concrete products"
          link={
            <OutlineLink link={"#"} isOutline={true}>
              View Collection
            </OutlineLink>
          }
        ></Banner>
        <PaneHolder/>
        <div className="flex pt-10 mb-10">
          <Banner image="" description="" title="" link={<></>}/>
          <div className="ml-8 w-3/4 flex flex-col place-content-center items-start">
            <div className="font-black text-5xl mb-4">Спеціальні пропозиції</div>
            <p className="mb-8">Отримайте знижку 10% на перше замовлення</p>
            <OutlineLink link={"#"} isOutline={true}>
              Купити зараз
            </OutlineLink>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-center">Про ГалБетон</h1>
        <p className={"text-xl text-center"}>
          Галбетон - провідний виробник високоякісних бетонних виробів. Ми пропонуємо широкий вибір текстур, що дозволяє
          легко знайти ідеальне рішення для вашого проекту. Наша команда експертів готова
          допомогти вам на кожному етапі, від проектування до монтажу. Незалежно від того, чи ви домовласник, підрядник
          або архітектор, у нас є продукти та досвід, необхідні для втілення вашого бачення в життя.</p>
        <div className="text-center mt-20 mb-10">
          <h1 className="text-4xl font-black mb-4">Готові розпочати?</h1>
          <OutlineLink link={"#"} isOutline={true}>Отримати пропозицію</OutlineLink>
        </div>
      </main>
    </>
  );
}

export default Home;
