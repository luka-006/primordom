#!/usr/bin/env node
import { readFileSync } from 'fs';
const TOKEN = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
if (!TOKEN) { console.error('Missing GITHUB_PERSONAL_ACCESS_TOKEN'); process.exit(1); }
const args = JSON.parse(readFileSync('/tmp/push-args.json', 'utf8'));
console.log('Use GitHub MCP push_files instead');
