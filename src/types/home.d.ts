import type { type } from 'os'
import type { PageResult } from './global'

/** 首页-广告区域数据类型 */
export type BannerItem = {
  /** 跳转链接 */
  hrefurl: string
  /** id */
  id: string
  /** 图片链接 */
  imgurl: string
  /** 跳转类型 */
  type: number
}

/** 猜你喜欢-推荐的类型 */
export type GuessItem = {
  /** 商品描述 */
  textDec: string
  /** id */
  id: string
  /** 商品名称 */
  name: string
  /** 商品图片 */
  picture: string
}
// 返回的数据集合
export type RecommendList = {
  name: string
  items: RecommendGoodsItem[]
}
// 推荐数据集合
export type RecommendGoodsItem = {
  id: string
  name: string
  goodsItems: PageResult<GoodsItem>
}
// 具体商品名称
export type GoodsItem = {
  id: string
  name: string
  pic: string
  text: string
}
