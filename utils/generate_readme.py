#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
import os

leetcode_dir = '/Users/yiny/workspace/algorithms/leetcode/'

dir_list = ['00001-00099', '00100-00199']
out_dir = []
for dir in dir_list:
    path = os.walk(leetcode_dir + dir)
    for root, directories, files in path:
        for directory in directories:
            out_dir.append(directory)
        # for file in files:
            # print(file)

out_dir.sort()
for dir in out_dir:
    print(dir)
