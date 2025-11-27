import crypto from "crypto";

export function verifyTelegramAuth(
  data: Record<string, any>,
  botToken: string
): boolean {
  if (!botToken || !data || !data.hash) return false;
  const { hash, ...rest } = data;
  const dataCheckString = Object.keys(rest)
    .filter((key) => rest[key] !== undefined && rest[key] !== null)
    .sort()
    .map((key) => `${key}=${rest[key]}`)
    .join("\n");

  const secretKey = crypto.createHmac("sha256", "WebAppData").update(botToken).digest();
  const computedHash = crypto
    .createHmac("sha256", secretKey)
    .update(dataCheckString)
    .digest("hex");

  return computedHash === hash;
}

export function parseInitData(initData: string): Record<string, any> {
  if (!initData) return {};
  return initData.split("&").reduce<Record<string, any>>((acc, pair) => {
    const [key, rawValue] = pair.split("=");
    if (!key) return acc;
    acc[key] = decodeURIComponent(rawValue ?? "");
    return acc;
  }, {});
}
