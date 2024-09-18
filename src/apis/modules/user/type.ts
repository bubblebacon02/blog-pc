import { IPageParams } from "../types";

// !当前登陆的用户信息
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

// !编辑用户信息参数
export interface EditLoginUserInfoParams {
  nickname?: string;
  description?: string;
  sign?: string;
  avatarUrl?: string;
}

// !获取用户列表
export interface GetUserListParams extends IPageParams {
  nickname: string;
}

// !修改用户密码
export interface ModifyUserPasswordParams {
  email: string;
  captcha: string;
  account: string;
  oldPassword: string;
  newPassword: string;
}

// !更换邮箱
export interface ReplaceBindEmailParams {
  captcha: string;
  account: string;
  newEmail: string;
  oldEmail: string;
}
