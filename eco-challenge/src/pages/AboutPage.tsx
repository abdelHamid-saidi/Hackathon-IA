import React from 'react';
import { Leaf, Globe, Users, Target } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    {
      icon: <Users size={24} className="text-[#14b858]" />,
      value: "10,000+",
      label: "Active Members"
    },
    {
      icon: <Leaf size={24} className="text-[#14b858]" />,
      value: "50,000+",
      label: "Challenges Completed"
    },
    {
      icon: <Globe size={24} className="text-[#14b858]" />,
      value: "100+",
      label: "Countries Reached"
    }
  ];

  const values = [
    {
      icon: <Target size={24} className="text-[#14b858]" />,
      title: "Environmental Impact",
      description: "We believe in making measurable, positive changes to protect our planet."
    },
    {
      icon: <Users size={24} className="text-[#14b858]" />,
      title: "Community Driven",
      description: "Our strength lies in our community's collective action and support."
    },
    {
      icon: <Leaf size={24} className="text-[#14b858]" />,
      title: "Sustainable Living",
      description: "We promote practical, achievable steps toward a more sustainable lifestyle."
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-[#111814]">About Eco-Challenge</h1>
        <p className="text-xl text-[#638872] max-w-2xl mx-auto">
          We're on a mission to make environmental consciousness an integral part of daily life through engaging challenges and community support.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center space-y-2">
            <div className="flex justify-center">{stat.icon}</div>
            <p className="text-3xl font-bold text-[#111814]">{stat.value}</p>
            <p className="text-[#638872]">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Mission Section */}
      <div className="bg-[#f0f4f2] rounded-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-[#111814]">Our Mission</h2>
        <p className="text-[#638872]">
          Eco-Challenge aims to transform environmental awareness into action through engaging daily challenges, fostering a supportive community, and celebrating individual and collective achievements in sustainable living.
        </p>
      </div>

      {/* Values Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-[#111814]">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="space-y-4">
              <div className="flex justify-center">{value.icon}</div>
              <h3 className="text-xl font-semibold text-[#111814] text-center">{value.title}</h3>
              <p className="text-[#638872] text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold text-[#111814]">Join Our Movement</h2>
        <p className="text-[#638872]">
          Be part of the solution. Join Eco-Challenge today and start making a difference.
        </p>
        <button className="bg-[#14b858] text-white px-8 py-3 rounded-xl font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default AboutPage;