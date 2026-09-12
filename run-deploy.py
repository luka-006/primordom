#!/usr/bin/env python3
import json, sys
path = sys.argv[1] if len(sys.argv) > 1 else '/tmp/clean-batch-39.json'
args = json.load(open(path))
print(json.dumps({'target': args['target'], 'name': args['name'], 'files_count': len(args['files']), 'files': args['files']}))
