import { Template, defaultBuildLogger } from 'e2b'
import { template } from './template-mail'

async function main() {
  await Template.build(template, {
    alias: 'app-with-mail-mastra',
    onBuildLogs: defaultBuildLogger(),
    cpuCount: 2,
    memoryMB: 2048
  });
}

main().catch(console.error);
