import React from "react";
import DomainCard from "./DomainCard"; // Assurez-vous que le chemin est correct

const DomainList: React.FC = () => {
  const domains = [
    {
      name: "Domaine 1",
      description: "Description du domaine 1.",
      icon: "/path/to/icon1.png", // Remplacez par le chemin de votre icône
    },
    {
      name: "Domaine 2",
      description: "Description du domaine 2.",
      icon: "/path/to/icon2.png",
    },
    {
      name: "Domaine 3",
      description: "Description du domaine 3.",
      icon: "/path/to/icon3.png",
    },
    {
      name: "Domaine 4",
      description: "Description du domaine 4.",
      icon: "/path/to/icon4.png",
    },
    {
      name: "Domaine 5",
      description: "Description du domaine 5.",
      icon: "/path/to/icon5.png",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center mt-6 space-x-4">
      {domains.map((domain, index) => (
        <DomainCard key={index} domain={domain} />
      ))}
    </div>
  );
};

export default DomainList;
