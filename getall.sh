MAX_WAIT=3
for i in {10..2255}
do
	sleep $(($RANDOM % $MAX_WAIT + 1))
	/Users/yiny/workspace/algorithms/utils/crawl_slut.py $i
done
