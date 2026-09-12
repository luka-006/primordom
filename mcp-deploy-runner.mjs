#!/usr/bin/env node
import { readFileSync } from 'fs';
import { spawnSync } from 'child_process';

const payloadPath = process.argv[2] || '/tmp/full-deploy-args.json';
const payload = JSON.parse(readFileSync(payloadPath, 'utf8'));
console.log(JSON.stringify({ ready: true, target: payload.target, name: payload.name, filesCount: payload.files.length, payloadBytes: JSON.stringify(payload).length }));
