#!/bin/ksh
# cat page1.html|grep -v solution  |grep -n "\/problems\/" |awk -F"href=" '{print $2}' |awk -F"\"" '{print $2}' > page1.txt
cat page$1.html|grep -v solution  |grep -n "\/problems\/" |awk -F"href=" '{print $2}' |awk -F"\"" '{print $2}' > page$1.txt
