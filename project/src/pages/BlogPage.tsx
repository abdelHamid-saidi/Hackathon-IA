import React from 'react';
import { Calendar, User, Clock } from 'lucide-react';

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "10 Simple Ways to Reduce Your Carbon Footprint",
      excerpt: "Discover practical tips for reducing your environmental impact through small, daily changes...",
      author: "Emma Wilson",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://cdn.usegalileo.ai/sdxl10/64eacaa3-17a6-46cf-8759-70e3b2c352b1.png",
      category: "Sustainability Tips"
    },
    {
      id: 2,
      title: "The Rise of Zero-Waste Living",
      excerpt: "Explore how the zero-waste movement is transforming communities and inspiring sustainable choices...",
      author: "David Chen",
      date: "March 12, 2024",
      readTime: "7 min read",
      image: "https://cdn.usegalileo.ai/sdxl10/546211d7-73c5-40ee-a0e8-794be144832c.png",
      category: "Zero Waste"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-[#111814]">Eco-Challenge Blog</h1>
        <p className="text-[#638872]">Insights and stories about sustainable living</p>
      </div>

      {/* Featured Post */}
      <div className="relative rounded-xl overflow-hidden">
        <img
          src="https://cdn.usegalileo.ai/sdxl10/fe0c9888-3aeb-41a3-9b75-b020aeae8740.png"
          alt="Featured post"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
          <span className="text-white bg-[#14b858] px-3 py-1 rounded-full text-sm">Featured</span>
          <h2 className="text-2xl font-bold text-white mt-4">The Future of Sustainable Cities</h2>
          <p className="text-white/80 mt-2">
            How urban planning and community initiatives are shaping eco-friendly cities...
          </p>
          <div className="flex items-center gap-6 mt-4 text-white/80">
            <span className="flex items-center gap-2">
              <User size={16} />
              John Smith
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              March 18, 2024
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              10 min read
            </span>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-4">
              <span className="text-[#14b858] text-sm font-medium">{post.category}</span>
              <h3 className="text-xl font-semibold text-[#111814]">{post.title}</h3>
              <p className="text-[#638872]">{post.excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-[#638872]">
                <span className="flex items-center gap-2">
                  <User size={16} />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  {post.readTime}
                </span>
              </div>
              <button className="text-[#14b858] font-semibold">Read More →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;