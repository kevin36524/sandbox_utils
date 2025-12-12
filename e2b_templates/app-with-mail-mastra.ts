import { Template, defaultBuildLogger } from 'e2b'
import { mailTemplate } from './template-mail'

async function main() {
  await Template.build(mailTemplate, {
    alias: 'app-with-mail-mastra',
    onBuildLogs: defaultBuildLogger(),
    cpuCount: 2,
    memoryMB: 4096
  });
}

main().catch(console.error);
