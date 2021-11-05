#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
import os
from requests_toolbelt import MultipartEncoder
import requests
import json
from playwright.sync_api import sync_playwright

URL_EN='https://leetcode.com/problemset/all/'
URL_CN='https://leetcode-cn.com/problemset/all/'
USERNAME=os.getenv("leetcode_username")
PASSWORD=os.getenv("leetcode_password")
def get_info():
    print("================== get_info() : started ==========================")
    with sync_playwright() as p:
        for browser_type in [p.chromium]:
            browser = browser_type.launch(headless=False)
            page = browser.new_page()
            page.goto('https://leetcode-cn.com')
            page.click('div[data-cypress="sign-in-with-password"]')
            page.wait_for_timeout(2000)
            page.click('input[name="login"]')
            page.fill('input[name="login"]', USERNAME)
            page.click('input[name="login"]')
            page.fill('input[name="password"]', PASSWORD)
            page.click('button[type="submit"]')
            page.wait_for_timeout(5000)
            page.goto('https://leetcode-cn.com/problemset/all/?page=2')
            page.wait_for_timeout(5000)
            page.click()
            # browser.close()
    print("================== get_info() : end     ==========================")
if __name__ == '__main__':
    get_info()