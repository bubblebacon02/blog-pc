import type { CommentType, BlogRankType } from "@/typings";
import type { IPageParams } from "../types";

// !发布父级评论参数
export interface PublishParentCommentParams {
  content: string;
  subjectId: number;
  subjectType: CommentType;
  imageIds?: string;
}

// !发布子级评论参数
export interface PublishChildCommentParams {
  content: string;
  parentId: string;
  replyId: string;
  imageIds?: string;
}

// !获取父级评论列表参数
export interface GetParentCommentListParams extends IPageParams {
  subjectId: number;
  subjectType: CommentType;
  sort: BlogRankType;
}

// !获取子级评论列表参数
export interface GetChildCommentListParams extends IPageParams {
  parentId: string;
  sort: BlogRankType;
}

// !用户信息
interface UserItem {
  id: number;
  nickname: string;
  avatarUrl: string;
  sign?: string;
}

// !评论信息
export interface CommentItem {
  id: number;
  content: string;
  dateTime: string;
  imageList: { id: number; url: string }[];
  userInfo: UserItem;
  childCommentNum?: number;
  parentId: number;
  isLike: boolean;
  replyUserInfo: UserItem | null;
  children: CommentItem[];
}
