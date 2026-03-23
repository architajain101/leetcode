# Given an integer array nums of length n and an integer target, find three integers at distinct indices in nums such that the sum is closest to target.
# # Return the sum of the three integers.

def three_sum_closest(nums, target):
    nums.sort()
    n = len(nums)
    closest = float('inf')

    for i in range(n - 2):
        left, right = i + 1, n - 1

        while left < right:
            total = nums[i] + nums[left] + nums[right]

            if abs(total - target) < abs(closest - target):
                closest = total
            
            if total == target:
                return total
            elif total < target:
                left += 1
            else:
                right -= 1

    return closest

print(three_sum_closest([-1, 2, 1, -4], 1))  


        
        
            
             


