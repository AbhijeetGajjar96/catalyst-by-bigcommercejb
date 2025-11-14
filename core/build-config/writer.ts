import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

interface BuildConfigInput {
  locales?: Array<{ code: string; isDefault: boolean }>;
  urls: {
    vanityUrl?: string;
    cdnUrl?: string;
    checkoutUrl?: string;
    cdnUrls: string[];
  };
}

interface BuildConfigOutput {
  locales?: Array<{ code: string; isDefault: boolean }>;
  urls: {
    vanityUrl?: string;
    cdnUrl?: string;
    checkoutUrl?: string;
    cdnUrls: string[];
  };
}

export async function writeBuildConfig(config: BuildConfigInput): Promise<BuildConfigOutput> {
  const buildConfigDir = join(process.cwd(), 'build-config');
  const buildConfigPath = join(buildConfigDir, 'config.json');

  // Ensure the directory exists
  mkdirSync(buildConfigDir, { recursive: true });

  // Write the config file
  writeFileSync(buildConfigPath, JSON.stringify(config, null, 2), 'utf-8');

  // Return the config for use in next.config.ts
  return config;
}

