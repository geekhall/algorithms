#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
#########################################################
# filename : generateReadme.py
# author   : geekhall
# version  : v1.0.0
# function : Gererate root README.md file.
#########################################################
import os

# Constant
ROOT_DIR = './'
# link address : https://github.com/geekhall/leetcode/tree/main/00003_LongestSubstring
LEETCODE_PRE_GITHUB = 'https://github.com/geekhall/algorithms/tree/main/leetcode/'
LEETCODE_PRE_GITEE='https://gitee.com/geekhall/algorithms/tree/main/leetcode/'
LINTCODE_PRE_GITHUB = 'https://github.com/geekhall/algorithms/tree/main/lintcode/'
LINTCODE_PRE_GITEE='https://gitee.com/geekhall/algorithms/tree/main/lintcode/'
CODEWARS_PRE_GITHUB = 'https://github.com/geekhall/algorithms/tree/main/codewars/'
CODEWARS_PRE_GITEE='https://gitee.com/geekhall/algorithms/tree/main/codewars/'
EXCLUDES = ['QuickSort', '.vscode', '.git', 'TempSource','00000_Template','00000_Template_Go','static']

class Quiz:
	def __init__(self, id, name, type):
		self.id = id
		self.name = name
		self.type = type

	def __lt__(self,other):
		if self.type == other.type:
			return int(self.id) < int(other.id)
		elif self.type < other.type:
			return True

	def __str__(self):
		return self.id+" "+str(self.name)

# Generate quiz list from folder started by numbers
def generate_quiz_list():
	quizs = []
	for parent,dirs,files in os.walk(ROOT_DIR):
		for dirname in dirs:
			if parent == './leetcode' and dirname not in EXCLUDES:
				q = Quiz(dirname[0:5],dirname[6:], 1)
				quizs.append(q)
			if parent == './lintcode' and dirname not in EXCLUDES:
				q = Quiz(dirname[0:5],dirname[6:], 2)
				quizs.append(q)
			if parent == './codewars' and dirname not in EXCLUDES:
				q = Quiz(dirname[0:5],dirname[6:], 3)
				quizs.append(q)
	quizs.sort()
	return quizs


if __name__ == '__main__':
	quizs = generate_quiz_list()
	f = open('./problem-list.md', 'w', encoding='utf-8')
	f.write('## Problem List\n')
	f.write('\n')
	f.write('### LeetCode\n')
	f.write('\n')
	f.write('| id |Name(Github)|Name(Gitee)|\n')
	f.write('|----|----|----|\n')
	for q in quizs:
		if q.type == 1:
			line = '|' + q.id + '|[' + q.name+']('+LEETCODE_PRE_GITHUB+q.id+'_'+q.name+')|[' + q.name+']('+LEETCODE_PRE_GITEE+q.id+'_'+q.name+')|' +'\n'
			f.write(line)
	f.write('\n')

	f.write('### LintCode\n')
	f.write('\n')
	f.write('| id |Name(Github)|Name(Gitee)|\n')
	f.write('|----|----|----|\n')
	for q in quizs:
		if q.type == 2:
			line = '|' + q.id + '|[' + q.name+']('+LINTCODE_PRE_GITHUB+q.id+'_'+q.name+')|[' + q.name+']('+LINTCODE_PRE_GITEE+q.id+'_'+q.name+')|' +'\n'
			f.write(line)
	f.write('\n')

	f.write('### codewars\n')
	f.write('\n')
	f.write('| id |Name(Github)|Name(Gitee)|\n')
	f.write('|----|----|----|\n')
	for q in quizs:
		if q.type == 3:
			line = '|' + q.id + '|[' + q.name+']('+CODEWARS_PRE_GITHUB+q.id+'_'+q.name+')|[' + q.name+']('+CODEWARS_PRE_GITEE+q.id+'_'+q.name+')|' +'\n'
			f.write(line)
	f.close()