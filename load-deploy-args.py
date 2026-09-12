#!/usr/bin/env python3
import json, sys
path = sys.argv[1] if len(sys.argv) > 1 else '/tmp/clean-batch-39.json'
print(json.dumps(json.load(open(path))))
