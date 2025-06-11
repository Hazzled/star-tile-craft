
import React from 'react';
import { Button } from "@/components/ui/button";

interface FilterTabsProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterTabs = ({ filters, activeFilter, onFilterChange }: FilterTabsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {filters.map((filter) => (
        <Button
          key={filter}
          onClick={() => onFilterChange(filter)}
          variant={activeFilter === filter ? "default" : "outline"}
          className={`
            px-8 py-3 text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden
            ${activeFilter === filter 
              ? "bg-navy text-white shadow-navy/30 scale-105" 
              : "text-navy border-navy/30 hover:bg-navy hover:text-white hover:border-navy bg-white"
            }
          `}
        >
          <span className="relative z-10">{filter}</span>
          {activeFilter === filter && (
            <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy/80 animate-fade-in" />
          )}
        </Button>
      ))}
    </div>
  );
};

export default FilterTabs;
