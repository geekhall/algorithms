#!/usr/bin/env python3
# -*- coding:UTF-8 -*-

from traceback import print_tb
from capstone import cs_disasm_lite
from numpy import diff
import requests
import json
import os
import sys
import html2text
from requests_toolbelt import MultipartEncoder
import pandas as pd
import matplotlib.pyplot as plt


session = requests.Session()
user_agent = r'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'


def login(username, password):
    url = 'https://leetcode.com'
    cookies = session.get(url).cookies
    for cookie in cookies:
        if cookie.name == 'csrftoken':
            csrftoken = cookie.value

    url = "https://leetcode.com/accounts/login"

    params_data = {
        'csrfmiddlewaretoken': csrftoken,
        'login': username,
        'password': password,
        'next': 'problems'
    }
    headers = {'User-Agent': user_agent, 'Connection': 'keep-alive',
               'Referer': 'https://leetcode.com/accounts/login/', "origin": "https://leetcode.com"}
    m = MultipartEncoder(params_data)

    headers['Content-Type'] = m.content_type
    session.post(url, headers=headers, data=m,
                 timeout=10, allow_redirects=False)
    is_login = session.cookies.get('LEETCODE_SESSION') != None
    return is_login


session = requests.Session()
user_agent = r'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'


def get_problems():
    url = "https://leetcode.com/api/problems/all/"

    headers = {'User-Agent': user_agent, 'Connection': 'keep-alive'}
    resp = session.get(url, headers=headers, timeout=10)

    question_list = json.loads(resp.content.decode('utf-8'))
    workbase_dir = '/Users/yiny/workspace/algorithms/'
    all_problems = workbase_dir + "leetcode/problems.csv"
    print(all_problems)
    ap = open(all_problems, 'w')

    for question in question_list['stat_status_pairs']:
        # 题目编号
        question_id = question['stat']['question_id']

        # Frontend question id
        frontend_question_id = question['stat']['frontend_question_id']
        # 题目名称
        question_title = question['stat']['question__title']
        question_slug = question['stat']['question__title_slug']

        # 题目状态
        question_status = question['status']
        paid_only = question['paid_only']
        # 题目难度级别，1 为简单，2 为中等，3 为困难
        level = question['difficulty']['level']
        # ap.write(str(question_id) + "," +
        #          str(frontend_question_id) + "," +
        #          str(question_slug) + "," +
        #          str(question_title) + "," +
        #          str(level) + "," +
        #          str(paid_only) + "," +
        #          str(question_status) + "\n")
        ap.write("'" + str(frontend_question_id) +
                 "': '" + str(question_slug) + "',\n")
        # 是否为付费题目
        if paid_only:
            continue
    ap.close()


session = requests.Session()
user_agent = r'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'


def get_problem_by_slug_bk(slug):
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
    content = resp.json()

    # 题目详细信息
    question = content['data']['question']
    data = content['data']
    print(question)
    print(data)


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
    content = resp.json()
    data = content['data']
    print(data)

    # 题目详细信息
    question = content['data']['question']
    questionId = question['questionId']
    questionFrontendId = question['questionFrontendId'].rjust(5, '0')
    questionTitle = question['questionTitle']
    questionTitleSlug = question['questionTitleSlug']
    content = question['content']
    difficulty = question['difficulty']

    print("questionFrontendId: " + questionFrontendId)
    print("questionTitle: " + questionTitle)
    print("questionTitleSlut: " + questionTitleSlug)
    print("difficulty: " + difficulty)
    print("content: " + content)
    # print("content: " + html2text.html2text(content))

    print(question['questionTitle'])
    save_file(questionFrontendId, questionTitleSlug,
              questionTitle, difficulty, content)
    # print_tb
    # print(json.dumps(question))
    # json_content = json.dumps(question)
    # json.decoder.JSONDecoder()
    # questionFrontendId = json_content['questionFrontendId']
    # print(questionFrontendId)

################################
# write to csv file
################################


def write_to_csv(file_name, list_data):
    df = pd.DataFrame(list_data)
    df.to_csv(file_name, index=False)


################################
# write to csv file
################################
def save_file(id, slut, title, difficulty, content):
    workbase_dir = '/Users/yiny/workspace/algorithms/'
    slut_dir = workbase_dir + "leetcode/" + id + "_" + slut
    print(slut_dir)
    if not os.path.exists(slut_dir):
        os.mkdir(slut_dir)
    solution_file = slut_dir + "/Solution.ts"
    readme_file = slut_dir + "/README.md"
    if not os.path.exists(solution_file):
        sf = open(solution_file, 'w')
        sf.write("// " + id + "\n")
        sf.write("// " + title + "\n")
        sf.write("// " + difficulty + "\n")
        sf.write("function solution() {\n")
        sf.write("  \n")
        sf.write("}\n")
        sf.write("function test() {\n")
        sf.write("  \n")
        sf.write("}\n")
        sf.write("\n")
        sf.write("test()\n")
        sf.close()
    if not os.path.exists(readme_file):
        sf = open(readme_file, 'w')
        sf.write(content)
        sf.close()


if __name__ == '__main__':
    get_problems()
