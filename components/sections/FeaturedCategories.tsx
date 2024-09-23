import Featured from "@/components/sections/Featured";
import Trending from "./Trending";

const FeaturedCategories = () => {
  return (
    <section>
      {/* FEATURED PRODUCTS */}
      <div>
        <Featured />
        <Trending />
      </div>
    </section>
  );
};

export default FeaturedCategories;
