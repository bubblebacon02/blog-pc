//!作者信息
export interface AuthorInfo {
  id: number;
  nickname: string;
  avatarUrl: string;
  description: string;
  sign: string;
}

// !验证码
export interface GetCaptchaParams {
  account: string;
  email: string;
}

// !登录参数
export interface LoginParams {
  account: string;
  password: string;
}

// !登录返回
export interface LoginParamsResp {
  accessToken: string;
  refreshToken: string;
}

// !首页信息
export interface SiteHomeInfo {
  title: string;
  slogan: string;
  publish: string;
  runDays: number;
}

// !获取凭证信息
export interface GetCredentialResp {
  ExpiredTime: number;
  Expiration: string;
  Credentials: {
    Token: string;
    TmpSecretId: string;
    TmpSecretKey: string;
  };
  RequestId: string;
}

// !创建文件记录
export interface CreateFileRecordParams {
  filename: string;
  key: string;
  location: string;
  size: string;
  mimetype: string; // ~多用途网际邮件扩充协议(Multipurpose Internet Mail Extensions)
}

// !每日一言
export interface DailyQuoteItem {
  id: number;
  author: string;
  content: string;
}
