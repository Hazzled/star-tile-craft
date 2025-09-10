
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
              ? "bg-primary text-primary-foreground shadow-primary/30 scale-105" 
              : "text-primary border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary bg-card"
            }
          `}
        >
          <span className="relative z-10">{filter}</span>
          {activeFilter === filter && (
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 animate-fade-in" />
          )}
        </Button>
      ))}
    </div>
  );
};

export default FilterTabs;
