// Central place to read environment variables (safe defaults for dev/demo)

function readEnv(name, fallback = "") {
  const value = (typeof process !== "undefined" && process.env && process.env[name]) || fallback;
  return String(value);
}

function requireEnv(name) {
  const value = readEnv(name, "");
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const env = {
  NODE_ENV: readEnv("NODE_ENV", "development"),
  DB_PROVIDER: readEnv("DB_PROVIDER", "mock"),
  DB_HOST: readEnv("DB_HOST", "localhost"),
  DB_NAME: readEnv("DB_NAME", "checkpoint2"),
};

export { readEnv, requireEnv };
