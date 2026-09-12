#!/usr/bin/env node
import { readFileSync } from 'fs';

const source = process.argv[2] || '/tmp/clean-batch-39.json';
const payload = JSON.parse(readFileSync(source, 'utf8'));
const args = {
  target: 'production',
  name: payload.name || 'primordom',
  files: payload.files,
};

process.stdout.write(JSON.stringify(args));
