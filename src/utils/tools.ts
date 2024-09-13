import dayjs from "dayjs";

/**
 * !时间格式化
 * @param time
 * @param format
 * @returns
 */
export function formatTime(
  time: string | Date,
  format: string = "YYYY-MM-DD HH:mm:ss"
) {
  return dayjs(time).format(format);
}

/**
 * !判断是否为空
 * @param value
 * @returns
 */
export function isEmpty(value: any): boolean {
  return value === null || value === undefined || value === "";
}

/**
 * !字节转换
 * @param bytes
 * @param toUnit
 * @returns
 */
const units = ["B", "KB", "MB", "GB"] as const;
type ByteUnit = (typeof units)[number];
export function convertBytes(bytes: number, toUnit: ByteUnit = "MB") {
  const index = units.indexOf(toUnit.toUpperCase() as ByteUnit);

  if (index === -1) {
    throw new Error(`无效的单位。请使用以下其中之一: ${units.join(", ")}`);
  }

  let result = bytes;
  for (let i = 0; i < index; i++) {
    result /= 1024;
  }

  return result.toFixed(2) + " " + units[index];
}

/**
 * !时间戳格式化
 * @param timestamp
 * @returns
 */
export function formatTimestamp(timestamp?: number) {
  timestamp = timestamp || Date.now();
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const milliseconds = String(date.getMilliseconds()).padStart(3, "0");
  return `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
}

/**
 * !生成随机字符串
 * @param len 字符串长度
 * @returns
 */
export function randomStr(len: number = 6): string {
  if (len <= 0) return "";
  // toString(36) 最多只能生成 11 位字符
  if (len <= 11) {
    return Math.random()
      .toString(36)
      .substring(2, 2 + len)
      .padEnd(len, "0");
  } else {
    // 如果需要的长度大于11，就使用递归实现
    return randomStr(11) + randomStr(len - 11);
  }
}

/**
 * !格式化文件类型
 * @param type
 * @returns
 */
export function formatFileType(type: string) {
  return `.${type.split("/").pop()}`;
}
