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
default_lang = 'typescript'
support_lang = [
    'typescript',
    'go',
    'java',
    'rust',
    'python'
]


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


def get_extension(language):
    if language == 'typescript' or language == 'ts':
        return 'ts'
    if language == 'go':
        return 'go'
    if language == 'java' or language == 'ja':
        return 'java'
    if language == 'python' or language == 'py':
        return 'py'
    if language == 'c':
        return 'c'
    if language == 'cpp':
        return 'cpp'
    if language == 'rust' or language == 'rs':
        return 'rs'
    return 'ts'


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


def file_exists_with_lang(id, slut, lang):
    workbase_dir = '/Users/yiny/workspace/algorithms/leetcode/'
    id_range = get_id_range(id)
    slut_dir = workbase_dir + id_range + "/" + id.zfill(5) + "_" + slut
    if not os.path.exists(slut_dir):
        os.mkdir(slut_dir)
    extension = get_extension(lang)
    solution_file = slut_dir + "/Solution." + extension
    readme_file = slut_dir + "/README.md"
    readme_file_cn = slut_dir + "/README.zh-CN.md"
    if not os.path.exists(solution_file):
        # print("solution file not exists", solution_file)
        return False
    if not os.path.exists(readme_file):
        # print("readme file not exists", readme_file)
        return False
    if not os.path.exists(readme_file_cn):
        # print("cn version readme file not exists", readme_file_cn)
        return False
    cmdline = 'code -r '+solution_file
    os.system(cmdline)
    return True


def write_file_ts(solution_file, id, title, difficulty, content_text):
    sf = open(solution_file, 'w')
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


def write_file_py(solution_file, id, title, difficulty, content_text):
    sf = open(solution_file, 'w')
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
    sf.write("class Solution:\n")
    sf.write("    def solution(self, param: int) -> int:\n")
    sf.write("        pass\n")
    sf.write("\n")
    sf.write("\n")
    sf.write("def test_" + id + "():\n")
    sf.write("    print(Solution.solution(Solution, 0))\n")
    sf.write("    pass\n")
    sf.write("\n")
    sf.write("\n")
    sf.write("if __name__ == '__main__':\n")
    sf.write("    test_" + id + "()\n")
    sf.write("\n")
    sf.close()


def write_file_go(solution_file, id, title, difficulty, content_text):
    sf = open(solution_file, 'w')
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


def write_file_java(solution_file, id, title, difficulty, content_text):
    sf = open(solution_file, 'w')
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


def write_file_c(solution_file, id, title, difficulty, content_text):
    sf = open(solution_file, 'w')
    sf.write("/**\n")
    sf.write(" * ID:    " + id + "\n")
    sf.write(" * Title: " + title + "\n")
    sf.write(" * Difficulty: " + difficulty + "\n")
    sf.write(" * Description: " + content_text + "\n")
    sf.write(" */\n")
    sf.write("\n")
    sf.write("#include <stdio.h>\n")
    sf.write("\n")
    sf.write("void solution() {\n")
    sf.write("  cout << \"solution\" << endl;\n")
    sf.write("}\n")
    sf.write("\n")
    sf.write("function test_" + id + "() {\n")
    sf.write("  solution();\n")
    sf.write("}\n")
    sf.write("\n")
    sf.write("int main(){\n")
    sf.write("  test_" + id + "();\n")
    sf.write("  return 0;\n")
    sf.write("}\n")
    sf.write("\n")
    sf.close()


def write_file_cpp(solution_file, id, title, difficulty, content_text):
    sf = open(solution_file, 'w')
    sf.write("/**\n")
    sf.write(" * ID:    " + id + "\n")
    sf.write(" * Title: " + title + "\n")
    sf.write(" * Difficulty: " + difficulty + "\n")
    sf.write(" * Description: " + content_text + "\n")
    sf.write(" */\n")
    sf.write("\n")
    sf.write("#include <iostream>\n")
    sf.write("using namespace std;\n")
    sf.write("\n")
    sf.write("void solution() {\n")
    sf.write("  cout << \"solution\" << endl;\n")
    sf.write("}\n")
    sf.write("\n")
    sf.write("function test_" + id + "() {\n")
    sf.write("  solution();\n")
    sf.write("}\n")
    sf.write("\n")
    sf.write("int main(){\n")
    sf.write("  test_" + id + "();\n")
    sf.write("  return 0;\n")
    sf.write("}\n")
    sf.write("\n")
    sf.close()


def write_file_rust(solution_file, id, title, difficulty, content_text):
    sf = open(solution_file, 'w')
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


def write_readme(readme_file, id, title, content):
    sf = open(readme_file, 'w')
    sf.write("# " + id + ". " + title + "\n")
    sf.write("\n")
    sf.write("  _Read this in other languages:_\n")
    sf.write("    [_简体中文_](README.zh-CN.md)\n")
    sf.write("\n")
    sf.write(content)
    sf.close()


def write_cn_readme(readme_file, id, title, content):
    sf = open(readme_file, 'w')
    sf.write("# " + id + ". " + title + "\n")
    sf.write("\n")
    sf.write("  _Read this in other languages:_\n")
    sf.write("    [_English_](README.md)\n")
    sf.write("\n")
    sf.write(content)
    sf.close()


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
    solution_file_rust = slut_dir + "/Solution.rs"
    # solution_file_c = slut_dir + "/Solution.c"
    # solution_file_cpp = slut_dir + "/Solution.cpp"
    readme_file = slut_dir + "/README.md"
    readme_file_cn = slut_dir + "/README.zh-CN.md"
    content_text = html_text.extract_text(content).replace('\n', '\n * ')
    # content_text_cn = html_text.extract_text(content_cn).replace('\n', '\n * ')
    if not os.path.exists(solution_file_ts):
        write_file_ts(solution_file_ts, id, title, difficulty, content_text)
    if not os.path.exists(solution_file_go):
        write_file_go(solution_file_go, id, title, difficulty, content_text)
    if not os.path.exists(solution_file_py):
        write_file_py(solution_file_py, id, title, difficulty, content_text)
    if not os.path.exists(solution_file_java):
        write_file_java(solution_file_java, id, title,
                        difficulty, content_text)
    if not os.path.exists(solution_file_rust):
        write_file_rust(solution_file_rust, id, title,
                        difficulty, content_text)
    # if not os.path.exists(solution_file_c):
    #     write_file_c(solution_file_java, id, title,
    #                  difficulty, content_text)
    # if not os.path.exists(solution_file_cpp):
    #     write_file_cpp(solution_file_cpp, id, title, difficulty, content_text)

    if not os.path.exists(readme_file):
        write_readme(readme_file, id, title, content)

    if not os.path.exists(readme_file_cn):
        write_cn_readme(readme_file_cn, id, title, content)

    cmdline = 'code -r '+solution_file_ts
    os.system(cmdline)


def save_file_with_lang(id, slut, title, difficulty, content, lang):
    workbase_dir = '/Users/yiny/workspace/algorithms/leetcode/'
    id_range = get_id_range(id)
    slut_dir = workbase_dir + id_range + "/" + id.zfill(5) + "_" + slut
    print(slut_dir)
    if not os.path.exists(slut_dir):
        os.mkdir(slut_dir)
    extension = get_extension(lang)
    solution_file = slut_dir + "/Solution." + extension
    readme_file = slut_dir + "/README.md"
    readme_file_cn = slut_dir + "/README.zh-CN.md"
    content_text = html_text.extract_text(content).replace('\n', '\n * ')
    if not os.path.exists(solution_file) and extension == 'ts':
        write_file_ts(solution_file, id, title, difficulty, content_text)
    if not os.path.exists(solution_file) and extension == 'go':
        write_file_go(solution_file, id, title, difficulty, content_text)
    if not os.path.exists(solution_file) and extension == 'py':
        write_file_py(solution_file, id, title, difficulty, content_text)
    if not os.path.exists(solution_file) and extension == 'java':
        write_file_java(solution_file, id, title, difficulty, content_text)
    if not os.path.exists(solution_file) and extension == 'rs':
        write_file_rust(solution_file, id, title,
                        difficulty, content_text)
    if not os.path.exists(readme_file):
        write_readme(readme_file, id, title, content)
    if not os.path.exists(readme_file_cn):
        write_cn_readme(readme_file_cn, id, title, content)
    # if not os.path.exists(solution_file) and extension == 'c':
    #     write_file_c(solution_file, id, title, difficulty, content_text)
    # if not os.path.exists(solution_file) and extension == 'cpp':
    #     write_file_cpp(solution_file, id, title, difficulty, content_text)

    cmdline = 'code -r '+solution_file
    os.system(cmdline)


def create_single_slug(id):
    slut = problem_dict[id]
    if not file_exists(id, slut):
        print("EEEEEEnter")
        questionFrontendId, questionTitleSlug, questionTitle, difficulty, content = get_problem_by_slug(
            slut)
        save_file(questionFrontendId, questionTitleSlug,
                  questionTitle, difficulty, content)


def create_single_slug_with_lang(id, lang):
    slut = problem_dict[id]
    if not file_exists_with_lang(id, slut, lang):
        print("EEEEEEnter")
        questionFrontendId, questionTitleSlug, questionTitle, difficulty, content = get_problem_by_slug(
            slut)
        save_file_with_lang(questionFrontendId, questionTitleSlug,
                            questionTitle, difficulty, content, lang)


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
        print("Usage: cr leetcode_id <language1> <language2>")
        exit(-1)
    elif len(sys.argv) == 2:  # generate all language
        leetcode_id = str(sys.argv[1])
        if is_number(leetcode_id):
            id = leetcode_id
            real_slut = problem_dict[id]
            # create_single_slug(id)
            create_single_slug_with_lang(id, 'py')
    else:
        languages = sys.argv[2:]
        leetcode_id = str(sys.argv[1])
        if is_number(leetcode_id):
            id = leetcode_id
            slut = problem_dict[id]
            need_access = False
            for lang in languages:
                if not file_exists_with_lang(id, slut, lang):
                    need_access = True
                    break
            if need_access:
                questionFrontendId, questionTitleSlug, questionTitle, difficulty, content = get_problem_by_slug(
                    slut)
            for lang in languages:
                if not file_exists_with_lang(id, slut, lang):
                    save_file_with_lang(questionFrontendId, questionTitleSlug,
                                        questionTitle, difficulty, content, lang)
