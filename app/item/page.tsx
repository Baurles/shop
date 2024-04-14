import { SimmilarItems } from "@/components/ui/itemPage/SimmilarItems";
import { ItemInfo } from "@/components/ui/itemPage/ItemInfo";
import { ItemSpinner } from "@/components/ui/itemPage/ItemSpinner";

export default function Item() {
  return (
    <div className="h-fit mt-14 pt-4 pb-4">
      <div className="bg-white rounded-lg h-[calc(100vh-9rem)]">
        <div className="w-full flex h-3/5 p-4 ">
          <ItemSpinner />
          <ItemInfo />
        </div>
        <SimmilarItems />
      </div>
    </div>
  );
}
