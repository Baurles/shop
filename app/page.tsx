import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Spinner } from "@/components/ui/wellcomePage/Spinner";
import { Category } from "@/components/ui/wellcomePage/Category";
import { Recs } from "@/components/ui/wellcomePage/Recs";
import { Sale } from "@/components/ui/wellcomePage/Sale";
import { Sweets } from "@/components/ui/wellcomePage/Sweets";
import { Feed } from "@/components/ui/wellcomePage/Feed";
// const Slide = ({ color }: { color: string }) => {
//   return <div className="w-full h-full"></div>;
// };
// function Slider() {
//   return <Slide color={"red"} />;
// }

export const Wellcome = () => {
  return (
    <div className="h-fit mt-14 pt-4 pb-4">
      <div className="container justify-center flex-col  h-[calc(100vh-9rem)]  text-black flex">
        <Spinner />
        <Category />
      </div>
      <Recs />
      <div className="container mt-4 flex flex-col gap-4 h-[calc((100vh-9rem)/2)]">
        <Sale />
        <Sweets />
      </div>
      <Feed />
    </div>
  );
};

// export const Brands = () => {
//   return <div className="container h-screen w-full"></div>;
// };
export default function Page() {
  return (
    <div className="container h-fit flex flex-col  justify-between align-middle">
      <Header />
      <Wellcome />
      <Footer />
    </div>
  );
}
