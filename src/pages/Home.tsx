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
          title="Concrete, redefined"
          description="Discover our range of premium concrete products"
          link={
            <OutlineLink link={"#"} isOutline={true}>
              View Collection
            </OutlineLink>
          }
        ></Banner>
        <PaneHolder />
        <div className="flex pt-10 mb-10">
          <Banner description="" title="" link={<></>} />
          <div className="ml-8 w-3/4 flex flex-col place-content-center items-start">
            <div className="font-black text-5xl mb-4">Special Offers</div>
            <p className="mb-8">Get 10% off your first order</p>
            <OutlineLink link={"#"} isOutline={true}>
              Shop Now
            </OutlineLink>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
