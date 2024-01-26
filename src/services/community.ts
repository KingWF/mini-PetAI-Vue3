import { http } from '@/utils/http'
import type { communityItem } from '@/types/community'

/**
 * 首页-广告区域-小程序
 * @param distributionSite 广告区域展示位置（投放位置 投放位置，1为首页，2为分类商品页） 默认是1
 */
export const getCommunityDataAPI = () => {
  return http<communityItem[]>({
    method: 'GET',
    url: '/getCommunity',
  })
}
