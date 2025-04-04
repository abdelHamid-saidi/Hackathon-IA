import React from 'react';
import { Leaf } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f4f2] px-10 py-3">
      <div className="flex items-center gap-4 text-[#111814]">
        <div className="size-4">
          <Leaf />
        </div>
        <h2 className="text-[#111814] text-lg font-bold leading-tight tracking-[-0.015em]">Eco-Challenge</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a className="text-[#111814] text-sm font-medium leading-normal" href="#">Home</a>
          <a className="text-[#111814] text-sm font-medium leading-normal" href="#">Challenges</a>
          <a className="text-[#111814] text-sm font-medium leading-normal" href="#">Community</a>
          <a className="text-[#111814] text-sm font-medium leading-normal" href="#">About</a>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f4f2] text-[#111814] text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Sign In</span>
        </button>
        <div 
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/1f3d7b35-58d5-4e3d-8c61-bcb41ad416a7.png")'}}
        />
      </div>
    </header>
  );
};

export default Header;