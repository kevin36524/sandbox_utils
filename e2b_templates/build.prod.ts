import { Template, defaultBuildLogger } from 'e2b'
import { template } from './template'

async function main() {
  await Template.build(template, {
    alias: 'hack-skeleton-joke',
    onBuildLogs: defaultBuildLogger(),
    cpuCount: 2,
    memoryMB: 2048
  });
}

main().catch(console.error);
