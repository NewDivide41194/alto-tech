import React from "react";

export const ServiceGallery = () => {
  return (
    <div className="p-6">
      <div className="font-bold pb-4 text-xl"> Welcome to Alto Hotel</div>
      <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {galleryData.map((v, k) => (
          <div
            className="flex bg-gray p-4 rounded-lg"
            key={k}
            style={{ minHeight: 200 }}
          >
            <span className="self-end">{v.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
const galleryData = [
  {
    title: "Room Service",
  },
  {
    title: "Service Request",
  },
  {
    title: "Service A",
  },
  {
    title: "Service B",
  },
];
