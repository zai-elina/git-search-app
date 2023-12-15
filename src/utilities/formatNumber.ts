export const formatNumber = (count: number) => {
  return `${count}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
