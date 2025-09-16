// Lazy load portfolio data to reduce initial bundle size
export const loadPortfolioData = async () => {
  const { portfolioItems, filters } = await import('./portfolioData');
  return { portfolioItems, filters };
};

// Export only what's needed for initial render
export const getPortfolioPreview = async (count: number = 6) => {
  const { portfolioItems } = await loadPortfolioData();
  return portfolioItems.slice(0, count);
};

export const getFilteredPortfolio = async (filter: string) => {
  const { portfolioItems } = await loadPortfolioData();
  return filter === "All" ? portfolioItems : portfolioItems.filter(item => item.category === filter);
};