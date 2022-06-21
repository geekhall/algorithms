#
# ID:    00194
# Title: Transpose File
# Difficulty: Medium
# Description: Given a text file file.txt, transpose its content.
#
# You may assume that each row has the same number of columns, and each field is separated by the ' ' character.
#
# Example:
#
# If file.txt has the following content:
#
# name age alice 21 ryan 30
#
# Output the following:
#
# name alice ryan age 21 30
#
cd /Users/yiny/workspace/algorithms/leetcode/00100-00199/00194_transpose-file
# head_line=`head -1 file.txt`
# col=$(head -1 file.txt|tr -s ' ' '\n'|wc -l)
# row=$(wc -l file.txt|awk '{print $1}')
# echo $col $row
# NF : number of fields
# NR : number of rows

# 假如你在 awk 脚本中使用了特殊模式：BEGIN 和 END ，以下则是它们对应的含义：

# BEGIN 模式：是指 awk 将在读取任何输入行之前立即执行BEGIN 中指定的动作。
# END 模式：是指 awk 将在它正式退出前执行 END中指定的动作。
# 含有这些特殊模式的 awk 命令脚本的执行流程如下：

# 1. 当在脚本中使用了 BEGIN 模式，则 BEGIN 中所有的动作都会在读取任何输入行之前执行。
# 2. 然后，读入一个输入行并解析成不同的段。
# 3. 接下来，每一条指定的非特殊模式都会和输入行进行比较匹配，当匹配成功后，就会执行模式对应的动作。对所有你指定的模式重复此执行该步骤。
# 4. 再接下来，对于所有输入行重复执行步骤 2 和 步骤 3。
# 5. 当读取并处理完所有输入行后，假如你指定了 END 模式，那么将会执行相应的动作。

awk '
{
    for (i = 1; i <= NF; i++) {
        if(NR == 1) {
            s[i] = $i;
        } else {
            s[i] = s[i] " " $i;
        }
    }
}
END {
    for (i = 1; s[i] != ""; i++) {
        print s[i];
    }
}' file.txt
