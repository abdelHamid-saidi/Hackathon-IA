import React from 'react';
import { MessageSquare, Users, Heart } from 'lucide-react';

const CommunityPage = () => {
  const posts = [
    {
      id: 1,
      author: {
        name: "Sarah Johnson",
        avatar: "https://cdn.usegalileo.ai/sdxl10/fb503a98-e470-434d-be1b-b5ad9703a166.png"
      },
      content: "Just completed my first week of the Zero Waste challenge! It's amazing how much plastic we can avoid with just a little planning.",
      likes: 24,
      comments: 8,
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      author: {
        name: "Michael Chen",
        avatar: "https://cdn.usegalileo.ai/sdxl10/271e7f8a-f591-4c3a-846b-454bcef84131.png"
      },
      content: "Looking for tips on starting a community garden! Anyone have experience with urban farming?",
      likes: 15,
      comments: 12,
      timestamp: "4 hours ago"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-[#111814]">Community</h1>
        <p className="text-[#638872]">Connect with fellow eco-warriors and share your journey</p>
      </div>

      <div className="flex gap-6">
        <div className="flex-1 space-y-6">
          {/* Create Post */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <textarea
              className="w-full border border-[#f0f4f2] rounded-xl p-4 resize-none"
              placeholder="Share your eco-friendly journey..."
              rows={3}
            />
            <div className="flex justify-end mt-4">
              <button className="bg-[#14b858] text-white px-6 py-2 rounded-xl font-semibold">
                Post
              </button>
            </div>
          </div>

          {/* Posts Feed */}
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm p-6 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-[#111814]">{post.author.name}</h3>
                  <p className="text-sm text-[#638872]">{post.timestamp}</p>
                </div>
              </div>
              <p className="text-[#111814]">{post.content}</p>
              <div className="flex gap-6 text-[#638872]">
                <button className="flex items-center gap-2">
                  <Heart size={20} />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-2">
                  <MessageSquare size={20} />
                  <span>{post.comments}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="w-80 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-[#111814] mb-4">Community Stats</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="text-[#14b858]" />
                <div>
                  <p className="font-semibold">1,234</p>
                  <p className="text-sm text-[#638872]">Active Members</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="text-[#14b858]" />
                <div>
                  <p className="font-semibold">5,678</p>
                  <p className="text-sm text-[#638872]">Posts This Week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;