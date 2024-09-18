import type { BlogStatus, BlogRankType } from "@/typings";
import { IPageParams } from "../types";

// !文章类型及其数量
export interface BlogCategoryItem {
  id: number;
  categoryName: string;
  blogNum: number;
}

// !文章标签
export interface BlogTagItem {
  id: number;
  tagName: string;
}

// !文章详情
export interface BlogItem {
  id: number;
  data: string;
  title: string;
  htmlContent: string;
  status: BlogStatus;
  lookNum: number;
  likeNum: number;
  isLike: boolean;
  tags: BlogTagItem[];
  authorId: number;
  commentNum: number;
  categoryName?: string;
  previewUrl?: any;
  description?: string;
  tagIds?: number[];
  categoryId?: number | null;
}

// !获取博客排序参数
export interface GetBlogRankParams {
  type: BlogRankType;
}

// !获取博客列表参数
export interface GetBlogListParams extends IPageParams {
  title: string;
  categoryId?: number | undefined;
}
