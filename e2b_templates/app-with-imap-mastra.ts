import 'dotenv/config'
import { Template, defaultBuildLogger } from 'e2b'
import { mailTemplate } from './template-imap-mail'

async function main() {
  await Template.build(mailTemplate, {
    alias: 'app-with-imap-mail',
    onBuildLogs: defaultBuildLogger(),
    cpuCount: 4,
    memoryMB: 8192
  });
}

main().catch(console.error);
