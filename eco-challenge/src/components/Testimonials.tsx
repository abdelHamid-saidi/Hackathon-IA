import React from 'react';
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      avatar: "https://cdn.usegalileo.ai/sdxl10/fb503a98-e470-434d-be1b-b5ad9703a166.png",
      name: "Emily Parker",
      date: "June 15, 2024",
      rating: 5,
      content: "Eco-Challenge has been a game-changer for me. It has not only made me more aware of my environmental impact but also provided a supportive community to share ideas and celebrate small wins. I feel empowered to make a difference!",
      likes: 15,
      dislikes: 1
    },
    {
      avatar: "https://cdn.usegalileo.ai/sdxl10/271e7f8a-f591-4c3a-846b-454bcef84131.png",
      name: "Daniel Carter",
      date: "May 22, 2024",
      rating: 4,
      content: "The challenges are engaging and have helped my family and me adopt sustainable habits that we'll carry on. I've significantly reduced our household waste and found joy in contributing to a healthier planet. The support from the community is always appreciated.",
      likes: 10,
      dislikes: 2
    },
    {
      avatar: "https://cdn.usegalileo.ai/sdxl10/b7cff2e9-9d32-4a9c-af24-053ac2cde29b.png",
      name: "Sophie Brooks",
      date: "April 10, 2024",
      rating: 5,
      content: "This platform is fantastic! It's a fun and effective way to get involved in environmental action. I've met incredible people and learned so much about sustainable living. I've started a community garden, and the impact is amazing.",
      likes: 12,
      dislikes: 0
    }
  ];

  return (
    <>
      <h2 className="text-[#111814] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Featured Testimonials
      </h2>
      <div className="flex flex-col gap-8 overflow-x-hidden bg-white p-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col gap-3 bg-white">
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{ backgroundImage: `url("${testimonial.avatar}")` }}
              />
              <div className="flex-1">
                <p className="text-[#111814] text-base font-medium leading-normal">{testimonial.name}</p>
                <p className="text-[#638872] text-sm font-normal leading-normal">{testimonial.date}</p>
              </div>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={i < testimonial.rating ? "text-[#111814]" : "text-[#bbcec3]"}
                  size={20}
                  fill={i < testimonial.rating ? "currentColor" : "none"}
                />
              ))}
            </div>
            <p className="text-[#111814] text-base font-normal leading-normal">{testimonial.content}</p>
            <div className="flex gap-9 text-[#638872]">
              <button className="flex items-center gap-2">
                <ThumbsUp size={20} />
                <p className="text-inherit">{testimonial.likes}</p>
              </button>
              <button className="flex items-center gap-2">
                <ThumbsDown size={20} />
                {testimonial.dislikes > 0 && <p className="text-inherit">{testimonial.dislikes}</p>}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonials;