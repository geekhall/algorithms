#!/usr/bin/env python3
# -*- coding:UTF-8 -*-

from curses.ascii import isdigit
from traceback import print_tb
from capstone import cs_disasm_lite
from numpy import diff
import requests
import json
import os
import sys
from requests_toolbelt import MultipartEncoder
import pandas as pd
import matplotlib.pyplot as plt
import html_text
from problem_list import problem_dict

session = requests.Session()
user_agent = r'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'


class CrawlSlut:
    'Crawl leetcode problem description.'
    url = 'https://leetcode.com'

    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def displayUrl(self):
        print("LeetCode baseUrl: %s" % CrawlSlut.url)


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

    for question in question_list['stat_status_pairs']:
        # 题目编号
        question_id = question['stat']['question_id']
        # 题目名称
        question_slug = question['stat']['question__title_slug']
        # 题目状态
        question_status = question['status']

        # 题目难度级别，1 为简单，2 为中等，3 为困难
        level = question['difficulty']['level']

        # 是否为付费题目
        if question['paid_only']:
            continue


session = requests.Session()
user_agent = r'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'


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
    # 题目详细信息
    question = content['data']['question']
    questionId = question['questionId']
    questionFrontendId = question['questionFrontendId'].rjust(5, '0')
    questionTitle = question['questionTitle']
    questionTitleSlug = question['questionTitleSlug']
    content = question['content']
    difficulty = question['difficulty']

    # headers_cn = {'User-Agent': user_agent, 'Connection':
    #               'keep-alive', 'Content-Type': 'application/json',
    #               'Referer': 'https://leetcode-cn.com/problems/' + slug}
    # resp_cn = session.post(url_cn, data=json_data,
    #                        headers=headers_cn, timeout=10)
    # content_cn = resp_cn.json()
    # question_cn = content_cn['data']['question']
    # content_cn = question_cn['translatedContent']
    # content_cn = question_cn['content']
    return questionFrontendId, questionTitleSlug, questionTitle, difficulty, content


'''
write to csv file
'''


def write_to_csv(file_name, list_data):
    df = pd.DataFrame(list_data)
    df.to_csv(file_name, index=False)


def get_id_range(id):
    range_id = str(int(int(id) / 100)).zfill(3)
    return range_id+"00-"+range_id+"99"


def file_exists(id, slut, type):
    workbase_dir = '/Users/yiny/workspace/algorithms/leetcode/'
    id_range = get_id_range(id)
    slut_dir = workbase_dir + id_range + "/" + id.zfill(5) + "_" + slut
    print(slut_dir)
    if not os.path.exists(slut_dir):
        os.mkdir(slut_dir)
    solution_file = slut_dir + "/Solution.ts"
    if not os.path.exists(solution_file):
        print("solution file %s not exists", solution_file)
        return False


def file_exists(id, slut):
    workbase_dir = '/Users/yiny/workspace/algorithms/leetcode/'
    id_range = get_id_range(id)
    slut_dir = workbase_dir + id_range + "/" + id.zfill(5) + "_" + slut
    print(slut_dir)
    if not os.path.exists(slut_dir):
        os.mkdir(slut_dir)
    solution_file_ts = slut_dir + "/Solution.ts"
    solution_file_go = slut_dir + "/Solution.go"
    solution_file_java = slut_dir + "/Solution.java"
    solution_file_py = slut_dir + "/Solution.py"
    # solution_file_c = slut_dir + "/Solution.c"
    # solution_file_cpp = slut_dir + "/Solution.cpp"
    solution_file_rust = slut_dir + "/Solution.rs"
    readme_file = slut_dir + "/README.md"
    readme_file_cn = slut_dir + "/README.zh-CN.md"
    if not os.path.exists(solution_file_ts):
        print("typescript solution file not exists", solution_file_ts)
        return False
    if not os.path.exists(solution_file_go):
        print("go solution file not exists", solution_file_go)
        return False
    if not os.path.exists(solution_file_java):
        print("java solution file not exists", solution_file_java)
        return False
    if not os.path.exists(solution_file_py):
        print("python solution file not exists", solution_file_py)
        return False
    # if not os.path.exists(solution_file_c):
    #     print("python solution file not exists", solution_file_c)
    #     return False
    # if not os.path.exists(solution_file_cpp):
    #     print("python solution file not exists", solution_file_cpp)
    #     return False
    if not os.path.exists(solution_file_rust):
        print("python solution file not exists", solution_file_rust)
        return False
    if not os.path.exists(readme_file):
        print("readme file not exists", readme_file)
        return False
    if not os.path.exists(readme_file_cn):
        print("cn version readme file not exists", readme_file_cn)
        return False
    cmdline = 'code -r '+solution_file_ts
    os.system(cmdline)
    return True

################################
# save file
################################


def save_file(id, slut, title, difficulty, content):
    workbase_dir = '/Users/yiny/workspace/algorithms/leetcode/'
    id_range = get_id_range(id)
    slut_dir = workbase_dir + id_range + "/" + id.zfill(5) + "_" + slut
    print(slut_dir)
    if not os.path.exists(slut_dir):
        os.mkdir(slut_dir)
    solution_file_ts = slut_dir + "/Solution.ts"
    solution_file_go = slut_dir + "/Solution.go"
    solution_file_py = slut_dir + "/Solution.py"
    solution_file_java = slut_dir + "/Solution.java"
    # solution_file_c = slut_dir + "/Solution.c"
    # solution_file_cpp = slut_dir + "/Solution.cpp"
    solution_file_rust = slut_dir + "/Solution.rs"
    # solution_file_c = slut_dir + "/Solution.c"
    # solution_file_cpp = slut_dir + "/Solution.cpp"
    readme_file = slut_dir + "/README.md"
    readme_file_cn = slut_dir + "/README.zh-CN.md"
    content_text = html_text.extract_text(content).replace('\n', '\n * ')
    # content_text_cn = html_text.extract_text(content_cn).replace('\n', '\n * ')
    if not os.path.exists(solution_file_ts):
        sf = open(solution_file_ts, 'w')
        sf.write("/**\n")
        sf.write(" * ID:    " + id + "\n")
        sf.write(" * Title: " + title + "\n")
        sf.write(" * Difficulty: " + difficulty + "\n")
        sf.write(" * Description: " + content_text + "\n")
        sf.write(" */\n")
        sf.write("function solution() {\n")
        sf.write("  \n")
        sf.write("}\n")
        sf.write("\n")
        sf.write("function test_" + id + "() {\n")
        sf.write("  \n")
        sf.write("}\n")
        sf.write("\n")
        sf.write("test_" + id + "()\n")
        sf.close()
    if not os.path.exists(solution_file_go):
        sf = open(solution_file_go, 'w')
        sf.write("/**\n")
        sf.write(" * ID:    " + id + "\n")
        sf.write(" * Title: " + title + "\n")
        sf.write(" * Difficulty: " + difficulty + "\n")
        sf.write(" * Description: " + content_text + "\n")
        sf.write(" */\n")
        sf.write("package main\n")
        sf.write("\n")
        sf.write("import (\n")
        sf.write("  \"fmt\"\n")
        sf.write(")\n")
        sf.write("\n")
        sf.write("func solution() {\n")
        sf.write("  fmt.Print(\"solution\\n\") \n")
        sf.write("}\n")
        sf.write("\n")
        sf.write("func test_" + id + "() {\n")
        sf.write("  solution()\n")
        sf.write("}\n")
        sf.write("\n")
        sf.write("func main() {\n")
        sf.write("  test_" + id + "()\n")
        sf.write("}\n")
        sf.close()
    if not os.path.exists(solution_file_py):
        sf = open(solution_file_py, 'w')
        sf.write("#!/usr/bin/env python3\n")
        sf.write("# -*- coding:UTF-8 -*-\n")
        sf.write("'''\n")
        sf.write(" ID:    " + id + "\n")
        sf.write(" Title: " + title + "\n")
        sf.write(" Difficulty: " + difficulty + "\n")
        sf.write(" Description: " + content_text + "\n")
        sf.write("'''\n")
        sf.write("\n")
        sf.write("\n")
        sf.write("def solution():\n")
        sf.write("    print(\"solution\")\n")
        sf.write("    pass\n")
        sf.write("\n")
        sf.write("\n")
        sf.write("def test_" + id + "():\n")
        sf.write("    solution()\n")
        sf.write("    pass\n")
        sf.write("\n")
        sf.write("\n")
        sf.write("if __name__ == '__main__':\n")
        sf.write("    test_" + id + "()\n")
        sf.write("\n")
        sf.close()
    if not os.path.exists(solution_file_java):
        sf = open(solution_file_java, 'w')
        sf.write("/**\n")
        sf.write(" * ID:    " + id + "\n")
        sf.write(" * Title: " + title + "\n")
        sf.write(" * Difficulty: " + difficulty + "\n")
        sf.write(" * Description: " + content_text + "\n")
        sf.write(" */\n")
        sf.write("class Solution {\n")
        sf.write("\n")
        sf.write("  public static void solution(){\n")
        sf.write("    System.out.println(\"solution\");\n")
        sf.write("  }\n")
        sf.write("\n")
        sf.write("  public static void test_" + id + "() {\n")
        sf.write("    Solution.solution();\n")
        sf.write("  }\n")
        sf.write("\n")
        sf.write("  public static void main(String[] args) {\n")
        sf.write("    Solution.test_" + id + "();\n")
        sf.write("  }\n")
        sf.write("}\n")
        sf.write("\n")
        sf.close()
    # if not os.path.exists(solution_file_c):
    #     sf = open(solution_file_c, 'w')
    #     sf.write("/**\n")
    #     sf.write(" * ID:    " + id + "\n")
    #     sf.write(" * Title: " + title + "\n")
    #     sf.write(" * Difficulty: " + difficulty + "\n")
    #     sf.write(" * Description: " + content_text + "\n")
    #     sf.write(" */\n")
    #     sf.write("\n")
    #     sf.write("#include <stdio.h>\n")
    #     sf.write("\n")
    #     sf.write("void solution() {\n")
    #     sf.write("  cout << \"solution\" << endl;\n")
    #     sf.write("}\n")
    #     sf.write("\n")
    #     sf.write("function test_" + id + "() {\n")
    #     sf.write("  solution();\n")
    #     sf.write("}\n")
    #     sf.write("\n")
    #     sf.write("int main(){\n")
    #     sf.write("  test_" + id + "();\n")
    #     sf.write("  return 0;\n")
    #     sf.write("}\n")
    #     sf.write("\n")
    #     sf.close()
    # if not os.path.exists(solution_file_cpp):
    #     sf = open(solution_file_cpp, 'w')
    #     sf.write("/**\n")
    #     sf.write(" * ID:    " + id + "\n")
    #     sf.write(" * Title: " + title + "\n")
    #     sf.write(" * Difficulty: " + difficulty + "\n")
    #     sf.write(" * Description: " + content_text + "\n")
    #     sf.write(" */\n")
    #     sf.write("\n")
    #     sf.write("#include <iostream>\n")
    #     sf.write("using namespace std;\n")
    #     sf.write("\n")
    #     sf.write("void solution() {\n")
    #     sf.write("  cout << \"solution\" << endl;\n")
    #     sf.write("}\n")
    #     sf.write("\n")
    #     sf.write("function test_" + id + "() {\n")
    #     sf.write("  solution();\n")
    #     sf.write("}\n")
    #     sf.write("\n")
    #     sf.write("int main(){\n")
    #     sf.write("  test_" + id + "();\n")
    #     sf.write("  return 0;\n")
    #     sf.write("}\n")
    #     sf.write("\n")
    #     sf.close()
    if not os.path.exists(solution_file_rust):
        sf = open(solution_file_rust, 'w')
        sf.write("/**\n")
        sf.write(" * ID:    " + id + "\n")
        sf.write(" * Title: " + title + "\n")
        sf.write(" * Difficulty: " + difficulty + "\n")
        sf.write(" * Description: " + content_text + "\n")
        sf.write(" */\n")
        sf.write("\n")
        sf.write("\n")
        sf.write("fn solution() {\n")
        sf.write("  println!(\"solution\");\n")
        sf.write("}\n")
        sf.write("\n")
        sf.write("fn test_" + id + "() {\n")
        sf.write("  solution();\n")
        sf.write("}\n")
        sf.write("\n")
        sf.write("fn main(){\n")
        sf.write("  test_" + id + "();\n")
        sf.write("}\n")
        sf.write("\n")
        sf.close()
    if not os.path.exists(readme_file):
        sf = open(readme_file, 'w')
        sf.write("# " + id + ". " + title + "\n")
        sf.write("\n")
        sf.write("  _Read this in other languages:_\n")
        sf.write("    [_简体中文_](README.zh-CN.md)\n")
        sf.write("\n")
        sf.write(content)
        sf.close()
    if not os.path.exists(readme_file_cn):
        sf_cn = open(readme_file_cn, 'w')
        sf_cn.write("# " + id + ". " + title + "\n")
        sf_cn.write("\n")
        sf_cn.write("  _Read this in other languages:_\n")
        sf_cn.write("    [_English_](README.md)\n")
        sf_cn.write("\n")
        sf_cn.write(content)
        sf_cn.close()
    cmdline = 'code -r '+solution_file_ts
    os.system(cmdline)


def create_single_slug(id):
    slut = problem_dict[id]
    if not file_exists(id, slut):
        print("EEEEEEnter")
        questionFrontendId, questionTitleSlug, questionTitle, difficulty, content = get_problem_by_slug(
            slut)
        save_file(questionFrontendId, questionTitleSlug,
                  questionTitle, difficulty, content)


def is_number(s):
    try:
        float(s)
        return True
    except ValueError:
        pass

    try:
        import unicodedata
        unicodedata.numeric(s)
        return True
    except (TypeError, ValueError):
        pass

    return False


if __name__ == '__main__':
    if len(sys.argv) <= 1:
        print("please input the problem id first.")
        exit(-1)
    leetcode_id = str(sys.argv[1])
    if is_number(leetcode_id):
        id = leetcode_id
        real_slut = problem_dict[id]
        create_single_slug(id)
    else:
        print("developing...")
    # default language is typescript
    # generate Typescript, Python, Java, Go by default
    if len(sys.argv) >= 3:
        language = str(sys.argv[2])
        print("language", language)

    # get_problem_by_slug('running-sum-of-1d-array')
    # get_problem_by_slug(slut)
    # save_file("01480", "running-sum-of-1d-array",
    #           "Running Sum of 1d Array", "Easy")
