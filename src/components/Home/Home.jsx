import bannerImg from "../../assets/banner.jpg";
import Products from "../Products/Products";
const Home = () => {
  return (
    <div className="relative">
      <div className="bg-[#9538E2]">
        <div className="hero min-h-[70vh] lg:min-h-[60vh]">
          <div className="hero-content text-center">
            <div className="mt-6 max-w-md lg:max-w-5xl">
              <h1 className="-mt-30 text-4xl font-bold lg:-mt-50 lg:text-5xl">
                Upgrade Your Tech Accessorize with Gadget Heaven Accessories
              </h1>
              <p className="py-6">
                Explore the latest gadgets that will take your experience to the
                next level. <br />
                From smart devices to the coolest accessories, we have it all!
              </p>
              <button
                onClick={() => {
                  window.location.href = "#allProducts";
                }}
                className="btn rounded-3xl border-none bg-white p-6 text-xl font-bold text-[#9538E2]"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-95 left-1/2 z-10 hidden h-full -translate-x-1/2 transform overflow-hidden rounded-2xl border border-gray-100 p-6 backdrop-blur-2xl lg:mx-auto lg:block lg:h-[500px] lg:w-full lg:max-w-5xl">
        <img
          src={bannerImg}
          alt="banner"
          className="z-20 h-full w-full rounded-2xl object-fill"
        />
      </div>

      <div id="allProducts" className="mt-4 lg:mt-100"></div>
      <Products />
    </div>
  );
};

export default Home;
