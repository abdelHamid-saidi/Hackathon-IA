import React from 'react';

const ImpactStories = () => {
  const stories = [
    {
      image: "https://cdn.usegalileo.ai/sdxl10/64eacaa3-17a6-46cf-8759-70e3b2c352b1.png",
      title: "Samantha's Journey to Sustainable Living",
      description: "Samantha transformed her lifestyle by embracing eco-friendly practices and reducing her carbon footprint."
    },
    {
      image: "https://cdn.usegalileo.ai/sdxl10/546211d7-73c5-40ee-a0e8-794be144832c.png",
      title: "The Riveras' Commitment to a Clean Ocean",
      description: "The Riveras family organizes regular beach cleanups, significantly reducing plastic waste in their community."
    },
    {
      image: "https://cdn.usegalileo.ai/sdxl10/fe0c9888-3aeb-41a3-9b75-b020aeae8740.png",
      title: "Mark's Pedal-Powered Commute Adventure",
      description: "Mark cycles to work daily, promoting a healthier lifestyle and reducing traffic congestion."
    }
  ];

  return (
    <>
      <h2 className="text-[#111814] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Real Impact, Real Stories
      </h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          {stories.map((story, index) => (
            <div key={index} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                style={{ backgroundImage: `url("${story.image}")` }}
              />
              <div>
                <p className="text-[#111814] text-base font-medium leading-normal">{story.title}</p>
                <p className="text-[#638872] text-sm font-normal leading-normal">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImpactStories;