# Key Takeaways: Pairwise - Coding Interview Challenges
### Completion time: 3 days.
### Completed on: March 9, 2024.

## Comments:

Well, this challenge takes me days to figure out. This challenge is the most challenging one as of date. I took a long time completing this challenge because I was distracted by other tasks also hence it took along time. 

What took time for me to solve if the part where I need to check if the array element's index is already used. that is the challenge for me.

What I did to address this challenge's requirements is I separated each step into a separate functions. 

1. I created a function that will add the pair of array elements then returns the indices of the pair of elements if their ***sum*** is equal to ***arg***. 

2. I also created a separate function to handle the addition of the indices. 

3. On the main function, which is the ***pairwise*** function, I handled the tracking of the used array elements and their indices. 

I got so confused on how I will track the indices and how to prevent them from being used again, but eventually, I resolved it by creating a conditional statement that checks if the current indices are already added on the indexes array which stores that array of indices which their array elements equaled to arg. 

I decided to separate each step to make the main function cleaner and to separate the concerns of identifiying what pair will equal to arg and the addition of the indices. For me it was cleaner and easy to understand. 