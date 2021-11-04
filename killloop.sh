ps -ef|grep Solution |grep -v grep |awk '{print $2}'|xargs kill -9
