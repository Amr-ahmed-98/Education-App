import * as Imgs from "../../assets/images/images";
const EventDetailsHero = () => {
  return (
    <>
      <section
        className="h-[50vh] relative   
"
      >
        <img
          src={Imgs.EventDetailsHero}
          alt=""
          className="w-full h-full object-fill"
        />
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#2E4C9680]"></div>
      </section>
    </>
  );
};

export default EventDetailsHero;
