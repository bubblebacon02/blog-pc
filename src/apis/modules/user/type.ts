export interface UserItem {
  id: number;
  account: string;
  email: string;
  nickname: string;
  status: 0 | 1;
  avatarUrl?: string;
  description?: string;
  sign?: string;
  roleId?: number;
  roleNickname?: string | undefined;
}
