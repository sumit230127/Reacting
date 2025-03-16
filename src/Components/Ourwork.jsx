import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaDesktop, FaBullseye, FaSearch, FaShareAlt, FaEnvelope } from "react-icons/fa";

const services = [
  { icon: <FaDesktop />, name: "Web Design" },
  { icon: <FaBullseye />, name: "PPC Marketing" },
  { icon: <FaSearch />, name: "Organic SEO" },
  { icon: <FaShareAlt />, name: "Social Media" },
  { icon: <FaEnvelope />, name: "Email & SMS Marketing" },
];

const projects = [
  {
    name: "A&A Thermal Spray",
    image: "https://via.placeholder.com/600x400?text=A%26A+Thermal+Spray",
    description: "Innovative Coating Technology",
  },
  {
    name: "AGA Truck Parts",
    image: "https://via.placeholder.com/600x400?text=AGA+Truck+Parts",
    description: "Global Heavy Machinery Parts Dealers",
  },
];

export default function OurWork() {
  return (
    <div className="p-6 max-w-screen-xl mx-auto flex gap-6">
      {/* Left Side - Sticky Services List */}
      <div className="w-1/4 sticky top-6 h-full">
        <h2 className="text-2xl font-bold mb-4">Service</h2>
        <div className="space-y-4">
          {services.map((service, index) => (
            <Card key={index} className="p-4 flex items-center gap-2 cursor-pointer hover:shadow-lg">
              <span className="text-xl">{service.icon}</span>
              <span className="font-medium">{service.name}</span>
            </Card>
          ))}
        </div>
      </div>

      {/* Right Side - Scrollable Content */}
      <div className="w-3/4 overflow-y-auto">
        <h2 className="text-4xl font-bold">Our Work</h2>
        <p className="text-gray-600 my-2">
          Explore the best in PPC, SEO, and Web Design by SmartSites. Use the filters to narrow down your search.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-4">
              <img src={project.image} alt={project.name} className="w-full rounded-md" />
              <CardContent>
                <h3 className="text-xl font-semibold mt-2">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Button className="fixed right-4 top-1/2 bg-yellow-500 px-4 py-2 rounded-lg shadow-lg rotate-90">Need Help?</Button>
    </div>
  );
}
