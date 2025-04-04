import React from 'react';

const DailyChallenges = () => {
  const challenges = [
    {
      image: "https://cdn.usegalileo.ai/sdxl10/ef449a00-58bd-4711-b13f-4ce8724ba697.png",
      title: "Héros de l'hydratation",
      description: "Utilisez une gourde réutilisable toute la journée et évitez les plastiques à usage unique."
    },
    {
      image: "https://cdn.usegalileo.ai/sdxl10/b2dbadda-971c-4c18-91fc-ebc6a1f43c1f.png",
      title: "Guerrier du tri",
      description: "Triez correctement vos déchets pour le recyclage et le compostage, réduisant l'impact sur les décharges."
    },
    {
      image: "https://cdn.usegalileo.ai/sdxl10/6fb1b1e5-f431-4cd4-8fac-5b59fdc702b7.png",
      title: "À vos pédales",
      description: "Optez pour le vélo, la marche ou les transports en commun plutôt que la voiture."
    }
  ];

  return (
    <>
      <h2 className="text-[#111814] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Derniers défis quotidiens
      </h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          {challenges.map((challenge, index) => (
            <div key={index} className="flex h-full flex-1 flex-col gap-4 rounded-xl bg-white shadow-[0_0_4px_rgba(0,0,0,0.1)] min-w-60">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                style={{ backgroundImage: `url("${challenge.image}")` }}
              />
              <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                <div>
                  <p className="text-[#111814] text-base font-medium leading-normal">{challenge.title}</p>
                  <p className="text-[#638872] text-sm font-normal leading-normal">{challenge.description}</p>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f4f2] text-[#111814] text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Relever le défi</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DailyChallenges;