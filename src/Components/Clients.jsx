import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = [
  "PPC Advertising",
  "Organic SEO",
  "Website Design",
  "Best Agency",
  "Very Responsive",
  "Amazing Results",
  "Great Value",
];

const cardData = {
  "PPC Advertising": [
    {
      name: "Brandon Browne",
      company: "Mind & Body Health Center",
      review: "Our phones ring off the hook!",
    },
    {
      name: "Joe Grace",
      company: "Ancestral Supplements",
      review: "It's a real game-changer working with SmartSites",
    },
    {
      name: "Don Bruhnke",
      company: "Chicago Watermark",
      review: "Lowered my click costs dramatically",
    },
  ],
  "Organic SEO": [
    {
      name: "Alice Johnson",
      company: "Eco Marketing",
      review: "SEO results exceeded expectations!",
    },
    {
      name: "Bob Smith",
      company: "Tech Boost",
      review: "Improved our ranking significantly!",
    },
  ],
};

export default function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState("PPC Advertising");

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-4">
        Our clients love working with us
      </h2>
      <div className="flex justify-center gap-2 mb-6 overflow-auto">
        {categories.map((category) => (
          <Button
            key={category}
            className={
              category === selectedCategory ? "bg-yellow-500 text-black" : "bg-gray-700 text-white"
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {(cardData[selectedCategory] || []).map((card, index) => (
          <Card key={index} className="p-4 bg-gray-900 text-white rounded-2xl shadow-lg">
            <CardContent>
              <h3 className="text-xl font-bold">{card.name}</h3>
              <p className="text-sm text-gray-400">{card.company}</p>
              <p className="mt-2 font-semibold">{card.review}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
