const useConvertElementCategory = (category: string) => {
  return category.toLowerCase().replaceAll(" ", "-");
};

export default useConvertElementCategory;
