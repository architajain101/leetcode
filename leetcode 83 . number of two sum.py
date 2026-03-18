# 83. Remove Duplicates from Sorted List
arr = [1,1,2,2,3,3,3,4,4,5]
s = 0
for f in range(1, len(arr)):  # here f increase
    if arr[f] != arr[s]: 
        s += 1 
        arr[s] = arr[f]

print(arr[:s+1])








