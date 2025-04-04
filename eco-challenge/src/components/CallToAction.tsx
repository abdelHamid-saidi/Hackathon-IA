import React from 'react';

const CallToAction = () => {
  return (
    <div className="@container flex items-center justify-center">
      <div className="flex flex-col justify-center items-center gap-6 px-4 @[480px]:gap-8 @[480px]:px-10 text-center">
        <h1 className="text-[#111814] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
          Rejoignez des milliers de membres dans notre communauté !
        </h1>
        <p className="text-[#111814] text-base font-normal leading-normal max-w-[720px]">
          Devenez membre du mouvement Eco-Challenge et commencez votre voyage vers un avenir plus vert et plus durable.
        </p>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#14b858] text-[#111814] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
          <span className="truncate">Commencer</span>
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
