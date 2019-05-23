#!/usr/bin/env bash
# Author="Humberto Ramírez Juárez <humberto.rjdh@gmail.com>" 
export STATUS=0
i=0
host="$1"
echo "waiting for MySQL!"
while [[ ${STATUS} -eq 0 ]] && [[ ${i} -lt 60 ]]; do
	sleep 1
	i=$((i+1))
	STATUS=$(docker logs $host 2>&1 | grep "MySQL init process done. Ready for start up" | wc -c)	
    echo ${STATUS}
    echo "MySQL: Ready for Connections!"

	
done

exit $STATUS