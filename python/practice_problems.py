# ~/dev/coding_interview_practice/python/practice_problems.py


#---------------------------------------------------------------------------------
# Question 1
#---------------------------------------------------------------------------------
# Implement a function that adds two numbers together and returns their sum in binary.
# The conversion can be done before, or after the addition.
# THe binary number retruned should be a string.

# Original Implementation
def add_binary(a,b):
    #your code here
    a += b
    return (bin(a)[2:])

# Revised Implementation
def add_binary2(a,b):
    return (bin(a+b)[2:])
# Why is this implementation better?
    #A: Just saves a line of code that is not needed
# What is code doing?
    # 'bin()' is a function that turns any number into a base2 number. The number created as a
    # result of this function is represented as a string.
    # After we have the binary representation (eg. "0bx00001101" something like this), all that
    # needs to be done alter the string so that only the character after position 2 will be kept
