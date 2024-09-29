import React from "react";
import { Domain } from "../types/ColorTypes";
import { useTheme } from "../context/ThemeContext";

type DomainSelectorProps = {
  domains: Domain[];
};

const DomainSelector: React.FC<DomainSelectorProps> = ({ domains }) => {
  const { switchDomain } = useTheme();

  return (
    <select
      onChange={(e) => {
        const domain = domains.find((d) => d.name === e.target.value);
        if (domain) switchDomain(domain);
      }}
      className="border border-gray-300 p-2 mb-4"
    >
      {domains.map((domain) => (
        <option key={domain.name} value={domain.name}>
          {domain.name}
        </option>
      ))}
    </select>
  );
};

export default DomainSelector;
