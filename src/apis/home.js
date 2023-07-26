import httpInstance from "@/utils/http";

// 获取banner轮播图
export const getBannerAPI = (params = {}) => {
  // 默认为1 商品为2
  const { distributionSite = "1" } = params;
  return httpInstance({
    url: "/home/banner",
    params: {
      distributionSite,
    },
  });
};

// 获取新鲜好物
export const findNewAPI = () => {
  return httpInstance({
    url: "/home/new",
  });
};

// 获取人气推荐
export const getHotAPI = () => {
  return httpInstance({
    url: "/home/hot",
  });
};

// 获取所有商品
export const getGoodsAPI = () => {
  return httpInstance({
    url: "/home/goods",
  });
};
