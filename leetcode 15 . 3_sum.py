# Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
# such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.




def three_sum(nums):
    nums.sort()
    result=[]
    n=len(nums)
    for i in range(n-2):
        #skip duplicates
        if i>0 and nums[i]== nums[i-1]:
            continue
        left,right  = i+1,n-1
        
        while (left<right):
            total=nums[i] + nums[left] +nums[right]
            
            if total == 0: 
                result.append([nums[i] , nums[left] ,nums[right]])

                while left<right and nums[left] == nums[left +1]:
                    left += 1
                while left<right and nums[right] == nums[right - 1]:
                    right -= 1 

                left += 1
                right -= 1

            elif total < 0:
                left +=1
            else:
                right -=1
    return result
                          




print(three_sum([-1, 0, 1, 2, -1, -4]))