#!/usr/bin/env node
import { readFileSync } from 'fs';
const args = JSON.parse(readFileSync('/tmp/push-args.json', 'utf8'));
process.stdout.write(JSON.stringify({ owner: args.owner, repo: args.repo, branch: args.branch, message: args.message, files: args.files }));
