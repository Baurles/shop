import { Spinner } from "@/components/ui/wellcomePage/Spinner";
import { Category } from "@/components/ui/wellcomePage/Category";
import { Recs } from "@/components/ui/wellcomePage/Recs";
import { Sale } from "@/components/ui/wellcomePage/Sale";
import { Sweets } from "@/components/ui/wellcomePage/Sweets";
import { Feed } from "@/components/ui/wellcomePage/Feed";

export default function Page() {
  return (
    <div className="snap-y snap-mandatory h-fit mt-14 pt-4 pb-4">
      <div className=" justify-center flex-col  h-[calc(100vh-9rem)]  text-black flex">
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
}
