#!/usr/bin/env python

# vim: syntax=python tabstop=4 expandtab

import os, sys
import json

def path_to_dict(path, id_num):
    if os.path.isdir(path):
        node_obj = {'id': id_num, 'name': os.path.basename(path), 'path': path, 'children': []}
        for cur_dir in os.listdir(path):
            id_num = id_num + 1
            node_obj['children'].append(path_to_dict(os.path.join(path,cur_dir), id_num))
    else:
        node_obj = {'id': id_num, 'name': os.path.basename(path), 'path': path}
        id_num = id_num + 1
    return node_obj

if __name__ == '__main__':
    print(json.dumps(path_to_dict(sys.argv[1],1)))
