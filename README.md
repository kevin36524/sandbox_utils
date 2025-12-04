# Sandbox Utils

A collection of templates and scripts for working with E2B sandboxes, including automated feature implementation assistants and git operations.

## Overview

This repository contains reusable templates and utility scripts designed to streamline development workflows in E2B sandbox environments. It provides pre-configured sandbox templates and automation scripts for common development tasks.

## Project Structure

```
sandbox_utils/
├── e2b_templates/     # E2B sandbox template definitions
│   ├── template.ts    # Main template configuration
│   └── build.prod.ts  # Production build script
└── scripts/           # Utility scripts
    ├── feature-assistant.ts  # AI-powered feature implementation
    └── git_ops.sh            # Git workflow automation
```

## E2B Templates

### template.ts

Defines a custom E2B sandbox template based on the code-interpreter image with:
- Git, curl, and build-essential tools
- Node.js 20.x environment
- Pre-cloned application from GitHub (hack-skeleton-app)
- Installed npm dependencies
- Configured for development work

### build.prod.ts

Builds and deploys the E2B template with production specifications:
- Template alias: `hack-skeleton-joke`
- 2 CPU cores
- 2048 MB memory
- Build logging enabled

**Usage:**
```bash
npx tsx e2b_templates/build.prod.ts
```

## Scripts

### feature-assistant.ts

An AI-powered feature implementation assistant using Claude Code Agent SDK. Automates feature development by leveraging Claude AI to read, write, and edit code.

**Prerequisites:**
- Set `ANTHROPIC_API_KEY` environment variable
- Install dependencies: `@anthropic-ai/claude-agent-sdk`, `dotenv`

**Basic Usage:**
```bash
npx tsx scripts/feature-assistant.ts "Add a dark mode toggle to the app"
```

**Advanced Options:**
```bash
# With context and scope
npx tsx scripts/feature-assistant.ts "Add user authentication" \
  --context "Use NextAuth.js for JWT sessions" \
  --scope large

# Specify target files and model
npx tsx scripts/feature-assistant.ts "Create a dashboard component" \
  --files "app/components/Dashboard.tsx,app/page.tsx" \
  --model claude-sonnet-4-20250514

# Resume a previous session
npx tsx scripts/feature-assistant.ts "continue with the implementation" \
  --session-id <session-id>
```

**Options:**
- `--description <text>` - Feature description (or use as first argument)
- `--context <text>` - Additional requirements or context
- `--scope <small|medium|large>` - Estimated feature scope (default: medium)
- `--files <path1,path2>` - Comma-separated target files
- `--model <model>` - AI model selection:
  - `claude-haiku-4-5-20251001` (default, fastest)
  - `claude-sonnet-4-20250514` (balanced)
  - `claude-opus-4-1` (most capable)
- `--max-iterations <num>` - Maximum agent iterations (default: 30)
- `--session-id <id>` - Resume previous session

**Available Tools:**
- Read, Write, Edit, MultiEdit
- Bash command execution
- Glob, Grep for code search
- NotebookEdit for Jupyter notebooks
- Task spawning and slash commands

### git_ops.sh

Utility script for common git operations in sandbox environments.

**Operations:**

1. **fetchAndSwitch** - Fetch and checkout a branch
   ```bash
   ./scripts/git_ops.sh fetchAndSwitch feature/new-feature
   ```

2. **commitAndPush** - Rename current branch, commit all changes, and push
   ```bash
   ./scripts/git_ops.sh commitAndPush feature/my-feature "Add new feature"
   ```

**Examples:**
```bash
# Switch to main branch
./scripts/git_ops.sh fetchAndSwitch main

# Commit and push changes on a feature branch
./scripts/git_ops.sh commitAndPush feature/auth-system "Implement authentication"
```

## Setup

1. **Clone this repository:**
   ```bash
   git clone <repository-url>
   cd sandbox_utils
   ```

2. **Set up environment variables:**
   ```bash
   # Create .env file in the root directory
   echo "ANTHROPIC_API_KEY=your_api_key_here" > .env
   ```

3. **Install dependencies (if running scripts locally):**
   ```bash
   npm install @anthropic-ai/claude-agent-sdk dotenv
   # or
   npm install
   ```

## Use Cases

### E2B Templates
- Quickly spin up pre-configured development environments
- Standardize sandbox configurations across projects
- Reduce setup time for new sandbox instances

### Feature Assistant
- Accelerate feature development with AI assistance
- Maintain consistency in code implementation
- Handle repetitive coding tasks
- Resume interrupted development sessions

### Git Operations
- Streamline branch management in sandboxes
- Automate commit and push workflows
- Simplify branch switching for shallow clones

## Requirements

- Node.js 20.x or later
- E2B CLI (for template operations)
- Anthropic API key (for feature-assistant)
- Git installed in sandbox environment

## License

[Specify your license here]

## Contributing

[Add contribution guidelines if applicable]
