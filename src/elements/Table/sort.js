export const SortOrders = {
  DESC: -1,
  NOT_SORTED: 0,
  ASC: 1
};

export const SortOrder = (function() {
  const initialsSort = SortOrders.NOT_SORTED;
  const possibleSortsCount = Object.keys(SortOrders).length;

  let current = initialsSort;

  return {
    initial() {
      current = initialsSort;
      return current;
    },
    // 0, 1, -1, 0, 1, -1, ...
    next() {
      current = (current + possibleSortsCount - 1) % possibleSortsCount - 1;
      return current;
    }
  };
})();

export const sortBy = (array, field, order) => {
  const toBeSorted = [...array];

  if (order === SortOrders.NOT_SORTED) return toBeSorted;

  const [lt, gt] = order === SortOrders.DESC ? [1, -1] : [-1, 1];

  return toBeSorted.sort((x, y) => {
    const xField = x[field];
    const yField = y[field];

    if (xField < yField) return lt;
    if (xField > yField) return gt;

    return 0; 
  });
};
