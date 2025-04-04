import React from 'react';
import { Calendar, Target, Award } from 'lucide-react';

const ChallengesPage = () => {
  const challenges = [
    {
      category: "Daily Habits",
      challenges: [
        {
          title: "Zero Waste Day",
          description: "Challenge yourself to produce no waste for an entire day",
          difficulty: "Medium",
          impact: "High",
          points: 100
        },
        {
          title: "Plant-Based Meals",
          description: "Try eating only plant-based meals for a day",
          difficulty: "Easy",
          impact: "High",
          points: 75
        }
      ]
    },
    {
      category: "Weekly Goals",
      challenges: [
        {
          title: "Public Transport Week",
          description: "Use only public transportation for a week",
          difficulty: "Medium",
          impact: "Very High",
          points: 200
        },
        {
          title: "Local Shopping",
          description: "Buy only from local producers for a week",
          difficulty: "Medium",
          impact: "High",
          points: 150
        }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-[#111814]">Environmental Challenges</h1>
        <p className="text-[#638872]">Join our challenges and make a positive impact on the environment</p>
      </div>

      {challenges.map((category, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#111814]">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.challenges.map((challenge, challengeIndex) => (
              <div key={challengeIndex} className="bg-white rounded-xl shadow-sm p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-[#111814]">{challenge.title}</h3>
                  <span className="bg-[#14b858] text-white px-3 py-1 rounded-full text-sm">
                    {challenge.points} pts
                  </span>
                </div>
                <p className="text-[#638872]">{challenge.description}</p>
                <div className="flex gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Target size={16} />
                    Difficulty: {challenge.difficulty}
                  </span>
                  <span className="flex items-center gap-1">
                    <Award size={16} />
                    Impact: {challenge.impact}
                  </span>
                </div>
                <button className="w-full bg-[#14b858] text-white rounded-xl py-2 font-semibold">
                  Accept Challenge
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChallengesPage;