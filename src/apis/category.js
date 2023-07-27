import httpInstance from "@/utils/http";

// 获取二级分类列表
export const getCategoryAPI = (id) => {
  return httpInstance({
    url: "/category",
    params: {
      id,
    },
  });
};

export const getCategoryFilterAPI = (id) => {
  return httpInstance({
    url: "/category/sub/filter",
    params: {
      id,
    },
  });
};
