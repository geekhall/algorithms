#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
import requests
import json
import os

session = requests.Session()
user_agent = r'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'

#
# 'questionId': '1',
# 'questionFrontendId': '1',
# 'questionTitle': 'Two Sum',
# 'questionTitleSlug': 'two-sum',
# 'content': '<p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>\n\n<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>\n\n<p>You can return the answer in any order.</p>\n\n<p>&nbsp;</p>\n<p><strong>Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [2,7,11,15], target = 9\n<strong>Output:</strong> [0,1]\n<strong>Output:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].\n</pre>\n\n<p><strong>Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,2,4], target = 6\n<strong>Output:</strong> [1,2]\n</pre>\n\n<p><strong>Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,3], target = 6\n<strong>Output:</strong> [0,1]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>\n\t<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>\n\t<li><strong>Only one valid answer exists.</strong></li>\n</ul>\n\n<p>&nbsp;</p>\n<strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than&nbsp;<code>O(n<sup>2</sup>)&nbsp;</code>time complexity?',
# 'difficulty': 'Easy',
# 'stats': '{"totalAccepted": "5.2M", "totalSubmission": "10.8M", "totalAcceptedRaw": 5151711, "totalSubmissionRaw": 10788462, "acRate": "47.8%"}',
# 'similarQuestions': '[{"title": "3Sum", "titleSlug": "3sum", "difficulty": "Medium", "translatedTitle": null}, {"title": "4Sum", "titleSlug": "4sum", "difficulty": "Medium", "translatedTitle": null}, {"title": "Two Sum II - Input array is sorted", "titleSlug": "two-sum-ii-input-array-is-sorted", "difficulty": "Easy", "translatedTitle": null}, {"title": "Two Sum III - Data structure design", "titleSlug": "two-sum-iii-data-structure-design", "difficulty": "Easy", "translatedTitle": null}, {"title": "Subarray Sum Equals K", "titleSlug": "subarray-sum-equals-k", "difficulty": "Medium", "translatedTitle": null}, {"title": "Two Sum IV - Input is a BST", "titleSlug": "two-sum-iv-input-is-a-bst", "difficulty": "Easy", "translatedTitle": null}, {"title": "Two Sum Less Than K", "titleSlug": "two-sum-less-than-k", "difficulty": "Easy", "translatedTitle": null}, {"title": "Max Number of K-Sum Pairs", "titleSlug": "max-number-of-k-sum-pairs", "difficulty": "Medium", "translatedTitle": null}, {"title": "Count Good Meals", "titleSlug": "count-good-meals", "difficulty": "Medium", "translatedTitle": null}, {"title": "Count Number of Pairs With Absolute Difference K", "titleSlug": "count-number-of-pairs-with-absolute-difference-k", "difficulty": "Easy", "translatedTitle": null}, {"title": "Number of Pairs of Strings With Concatenation Equal to Target", "titleSlug": "number-of-pairs-of-strings-with-concatenation-equal-to-target", "difficulty": "Medium", "translatedTitle": null}]', 'categoryTitle': 'Algorithms', 'topicTags': [{'name': 'Array', 'slug': 'array'}, {'name': 'Hash Table', 'slug': 'hash-table'}]}


class Slug:
    def __init__(self, questionId, questionFrontendId, questionTitle, questionTitleSlug, content, difficulty):
        self.questionId = questionId
        self.questionFrontendId = questionFrontendId
        self.questionTitle = questionTitle
        self.questionTitleSlug = questionTitleSlug
        self.content = content
        self.difficulty = difficulty

    def __lt__(self, other):
        return self.questionId < other.questionId

    def __str__(self):
        return self.questionId.rjust(5, '0')+"_"+str(self.questionTitleSlug)


def get_problem_by_slug(slug):
    url = "https://leetcode.com/graphql"
    params = {'operationName': "getQuestionDetail",
              'variables': {'titleSlug': slug},
              'query': '''query getQuestionDetail($titleSlug: String!) {
            question(titleSlug: $titleSlug) {
                questionId
                questionFrontendId
                questionTitle
                questionTitleSlug
                content
                difficulty
                stats
                similarQuestions
                categoryTitle
                topicTags {
                        name
                        slug
                }
            }
        }'''
              }
    json_data = json.dumps(params).encode('utf8')
    headers = {'User-Agent': user_agent, 'Connection':
               'keep-alive', 'Content-Type': 'application/json',
               'Referer': 'https://leetcode.com/problems/' + slug}
    resp = session.post(url, data=json_data, headers=headers, timeout=10)
    print("============== json data =============")
    print(json_data)
    print("============== json data =============")
    print("")
    content = resp.json()

    # 题目详细信息
    question = content['data']['question']
    print("============== question =============")
    print(question)
    print("============== question =============")


if __name__ == '__main__':
    get_problem_by_slug('two-sum')
    work_dir = '/Users/yiny/Sites/algorithms/leetcode/static/'
    dest_dir = '/Users/yiny/Sites/algorithms/leetcode/static/generate/'

    slugs = []
    line = 0
    if not os.path.exists(dest_dir + '00001_test'):
        os.makedirs(dest_dir+'00001_test')

    # f=open(work_dir+'all_slug.txt', 'r')
    # slugs = f.readlines()
    # for slug in slugs:
    #     print(slug)
    folders = []
    with open(work_dir+'all_slug.txt', 'r') as f:
        for slug in f.readlines():
            line += 1
            id = str(line).rjust(5, '0')
            folder_name = '/Users/yiny/Sites/algorithms/leetcode/'+id+'_'+slug
            slugs.append(slug)
            folders.append(folder_name)

    for f in folders:
        if not os.path.exists(f) and f == '/Users/yiny/Sites/algorithms/leetcode/00002_add-two-numbers':
            os.makedirs(f)
            readme = f+'/README.md'
            go = f+'solution.go'
            f_readme = open(readme, 'w')
            f_readme.write('# ' + + '00000. Title')

    # f.close()
