import Navigation from "@/components/navigation/Navigation";
import ProductsSlideShow from "./ProductsSlideShow";
import ClientQuery from "@/components/utils/PageQuery/ClientQuery";

export default function Shop() {
  return (
    <>
      <ClientQuery>
        <Navigation />
        <ProductsSlideShow />
      </ClientQuery>
    </>
  );
}
