import math
def factorial(num):
   return math.factorial(num)

def compare_data(str1,str2):
   count=0
   if(len(str2)>len(str1)):
      str2,str1 = str1,str2
   for i in str1.split():
      for j in str2.split():
         if(i==j):
            count+=1

   return count