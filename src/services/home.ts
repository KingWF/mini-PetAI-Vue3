import type { PageParams, PageResult } from '@/types/global'
import type { BannerItem, GuessItem, RecommendGoodsItem, RecommendList } from '@/types/home'
import { http } from '@/utils/http'

/**
 * 首页-广告区域-小程序
 * @param distributionSite 广告区域展示位置（投放位置 投放位置，1为首页，2为分类商品页） 默认是1
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/swiper',
    data: {
      distributionSite,
    },
  })
}

/**
 * 猜你喜欢-小程序
 */
export const getHomeGoodsGuessLikeAPI = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
/**
 * 获取推荐数据
 */
type RecommendParams = PageParams & {
  subType?: number
}
export const getRecommendGoodsAPI = (data?: RecommendParams) => {
  return http<RecommendList>({
    method: 'GET',
    url: '/home/getRecommendGoods',
    data,
  })
}
