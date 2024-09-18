
// !链接详情
export interface LinkItem {
  id: number;
  linkName: string;
  linkUrl: string;
  linkDesc: string;
  linkPreview: string;
}

// !分类详情
export interface FriendChainItem {
  id: number
  categoryName: string;
  linkList: LinkItem[];
}