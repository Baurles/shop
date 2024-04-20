"use client";
import { BuyButtonProvider } from "@/components/providers/BuyProvider";
export const ItemInfo = () => {
  return (
    <div className="pl-4 flex flex-col w-2/6 justify-between h-full text-black">
      <div className="flex flex-col h-3/4">
        <h1 className=" text-4xl mb-4">Крутой компутер</h1>
        <span className="text-xl h-full no-scrollbar overflow-scroll ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quia
          debitis tenetur perspiciatis ipsam repellendus qui adipisci nemo
          numquam facere vel, officiis vero nostrum accusantium similique neque
          minus laboriosam beatae maxime officia voluptas. Facilis autem rem
          esse reiciendis eaque impedit optio eveniet molestias magnam? Fuga,
          veniam animi in voluptas architecto obcaecati itaque ex atque tenetur
          esse aliquid saepe doloribus aliquam, nihil deserunt deleniti qui ea!
          Excepturi eligendi enim sapiente. Aliquid autem cum explicabo ullam ea
          libero amet, recusandae debitis enim ratione ad cumque molestiae
          doloremque numquam dolores ducimus sapiente totam fugiat. In maxime
          vero placeat consectetur aliquid vel, fuga asperiores magni animi
          error dolor dicta nulla aut, suscipit commodi consequuntur ipsa
          doloribus repudiandae dolorem delectus quidem earum et? A neque quia
          saepe nobis. Distinctio minima illo eum sit maiores placeat non
          consequatur voluptas impedit labore exercitationem, aspernatur quia
          illum dolorem tempore expedita cupiditate? Laudantium eligendi ex
          voluptatum adipisci quas rem veritatis totam ullam et voluptas? Rem
          possimus quia laboriosam deserunt doloremque excepturi, ut minus
          consequatur distinctio accusamus illum quasi vitae ad modi dicta sed,
          omnis voluptatum optio corrupti atque? Porro voluptatum blanditiis
          delectus fuga veritatis eos officia totam laborum aspernatur corporis?
          Labore ipsa tempora nesciunt eaque natus eos maiores voluptatum
          necessitatibus ut, reiciendis corporis dolorum adipisci fuga eius,
          corrupti voluptatem? Eveniet, qui sint dolorem dolorum dicta, sit
          doloribus totam labore praesentium blanditiis repellat id sed saepe,
          facere fugit numquam provident consectetur tempore. Corporis, quod
          libero nemo aut, perspiciatis maxime vero voluptates ullam animi sequi
          officia veritatis. Explicabo quidem quaerat quis?
        </span>
      </div>
      <span className="text-4xl pt-2 pb-2 self-center ">100$</span>
      <BuyButtonProvider />
    </div>
  );
};

