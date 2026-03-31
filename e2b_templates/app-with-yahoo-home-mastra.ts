import 'dotenv/config'
import { Template, defaultBuildLogger } from 'e2b'
import { homeTemplate } from './template-yahoo-home'

async function main() {
  await Template.build(homeTemplate, {
    alias: 'app-with-yahoo-home-mastra',
    onBuildLogs: defaultBuildLogger(),
    cpuCount: 4,
    memoryMB: 8192
  });
}

main().catch(console.error);
