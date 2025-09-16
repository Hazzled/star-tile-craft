// Lazy load portfolio data to reduce initial bundle size
export const loadPortfolioData = async () => {
  const data = await import('./portfolioData');
  return { portfolioItems: data.portfolioItems, filters: data.filters };
};

// Export only what's needed for initial render
export const getPortfolioPreview = async (count: number = 6) => {
  const data = await import('./portfolioData');
  return data.portfolioItems.slice(0, count);
};

export const getFilteredPortfolio = async (filter: string) => {
  const data = await import('./portfolioData');
  return filter === "All" ? data.portfolioItems : data.portfolioItems.filter((item: any) => item.category === filter);
};