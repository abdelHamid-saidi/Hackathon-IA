import React from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { format } from 'date-fns';

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "Community Beach Cleanup",
      description: "Join us for a day of cleaning our local beaches and protecting marine life.",
      date: new Date(2024, 3, 20),
      time: "9:00 AM - 12:00 PM",
      location: "Sunset Beach",
      attendees: 45,
      maxAttendees: 100,
      image: "https://cdn.usegalileo.ai/sdxl10/546211d7-73c5-40ee-a0e8-794be144832c.png"
    },
    {
      id: 2,
      title: "Urban Gardening Workshop",
      description: "Learn how to start and maintain your own urban garden, even in small spaces.",
      date: new Date(2024, 3, 25),
      time: "2:00 PM - 4:00 PM",
      location: "Community Center",
      attendees: 28,
      maxAttendees: 50,
      image: "https://cdn.usegalileo.ai/sdxl10/64eacaa3-17a6-46cf-8759-70e3b2c352b1.png"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-[#111814]">Upcoming Events</h1>
        <p className="text-[#638872]">Join our community events and make a difference together</p>
      </div>

      {/* Calendar View */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-[#111814]">Event Calendar</h2>
          <div className="flex gap-4">
            <button className="px-4 py-2 rounded-xl bg-[#f0f4f2] text-[#111814]">
              Previous
            </button>
            <button className="px-4 py-2 rounded-xl bg-[#f0f4f2] text-[#111814]">
              Next
            </button>
          </div>
        </div>
        {/* Calendar grid would go here */}
      </div>

      {/* Events List */}
      <div className="space-y-6">
        {events.map(event => (
          <div key={event.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="flex">
              <img
                src={event.image}
                alt={event.title}
                className="w-1/3 object-cover"
              />
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-[#111814]">{event.title}</h3>
                    <p className="text-[#638872] mt-2">{event.description}</p>
                  </div>
                  <button className="bg-[#14b858] text-white px-6 py-2 rounded-xl font-semibold">
                    Join Event
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-2 text-[#638872]">
                    <Calendar size={20} />
                    <span>{format(event.date, 'MMMM d, yyyy')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#638872]">
                    <Clock size={20} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#638872]">
                    <MapPin size={20} />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#638872]">
                    <Users size={20} />
                    <span>{event.attendees}/{event.maxAttendees} attending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;