// !额外字段
export type ExtractFields<T extends { field: string }[]> = {
  [K in T[number]["field"]]: any;
};

// !枚举博客状态
export enum EBlogStatus {
  HIDE = 0, // 隐藏
  PUBLISH = 1, // 发布
  DRAFT = 2, // 草稿
}
export type BlogStatus = (typeof EBlogStatus)[keyof typeof EBlogStatus];

// !枚举博客排序类型
export enum EBlogRank {
  LATEST = "latest", // 最新
  HOT = "hot", // 最热
}
export type BlogRankType = (typeof EBlogRank)[keyof typeof EBlogRank];

// !枚举点赞类型
export enum ESubjectType {
  BLOG = 100, // 博客点赞
  PARENT_COMMENT = 200, // 父级评论点赞
  CHILD_COMMENT = 300, // 子级评论点赞
}
export type SubjectType = (typeof ESubjectType)[keyof typeof ESubjectType];

// !枚举评论类型
export enum ECommentType {
  BLOG_COMMENT = 100, // 博客评论
  SITE_MESSAGE = 200, // 站点留言
}
export type CommentType = (typeof ECommentType)[keyof typeof ECommentType];
