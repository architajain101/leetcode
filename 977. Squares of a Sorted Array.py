# reguler code but not optimal as sorted take O(n log n)

nums = [-4,-1,0,3,10]
arr=[]
for n in nums:
    n=n**2
    arr.append(n)
print(arr)
a=sorted(arr)
print(a)

#  optimal solution with time complexity of O(n)

#    with 2 pointer
def square_of_sorted_array(nums):
      arr=[]
      left,right=0,len(nums)-1
      while (left <= right):
            
                    if abs(nums[left]) > abs(nums[right]):
                        arr.append(nums[left]**2)
                        left += 1
                    else:
                        arr.append(nums[right]**2)
                        right -= 1 
      
      return(arr[::-1])
nums = [-4,-1,0,3,10]
print(square_of_sorted_array(nums))
  
#     with neg,pos 2 array


def square_of_sorted_array(nums):
   pos=[n**2 for n in nums if n>=0] #[0,9,100]j
   neg=[n**2 for n in nums if n<0][::-1] #[1,16]i
   arr=[]
   i,j=0,0
   while j<len(pos) and i<len(neg):
      if neg[i]<pos[j]:
        arr.append(neg[i])
        i +=1
      else:
        arr.append(pos[i])
        j +=1
   arr += neg[i:] 
   arr += pos[j:]          
   return(arr)    
nums = [-4,-1,0,3,10] 
print(square_of_sorted_array(nums))   



# time complexity for both = O(n)
# space complexity for both =O(n)     

      


       
         





