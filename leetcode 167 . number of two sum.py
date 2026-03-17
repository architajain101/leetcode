#for int value
num = [2,7,11,15,23]
target = 12
i,j=0,len(num)-1

while(i<j):
        c=num[i]+num[j]
        if target==c:
            print(f"[{num[i]},{num[j]}]")
            break
        elif target>c: i=i+1
        else: j=j-1   
else:
    print("no any value") 

#for index value 
num = [2,4,5,7,11,15,23]
target = 12
i,j=0,len(num)-1

while(i<j):
        c=num[i]+num[j]
        if target==c:
            print(f"[{i},{j}]")
            break
        elif target>c: i=i+1
        else:  j=j-1   
else:
    print("no any value")         
              

