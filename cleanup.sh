#########################################################
# filename : cleanup.sh
# author   : geekhall
# version  : v1.0.0
# function : clean up tempory files.(.class, .o)
#########################################################
usage()
{
	echo "Usage:"
	echo "cleanup.sh"
	exit 2
}

work_dir=`pwd`

find $work_dir -name *.class |xargs \rm -f

