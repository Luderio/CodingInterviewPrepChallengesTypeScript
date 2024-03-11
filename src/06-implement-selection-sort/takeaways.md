# Key Takeaways: Implement Selection Sort - Coding Interview Challenges
### Completion time: 1 day
### Completed on: March 10, 2024

## Comments:

This is a bit confusing for me 😅

Just as I thought that I can do this easily because I solved the ***Bubble Sort*** challenge in just an hour, Boy, I've never been more wrong. 🤣

What I did wrong is not tracking the minimum value's index and compare the next element to it during the iterations hence I wasted a lot of time trying to figure out why the result is returning in decending order. 

By the way, I followed the **Selection Sort** Algorithm from [Visualgo.net](https://visualgo.net/) to better understand how the selection sort works. It is a great help for me because I can see how different sorting algorithm sorts the data. 

It is a great help but I still struggle on figuring out how to track the index of the minimum value as well as where in the code should I call the switcher function that I created to handle the element switch.

Nevertheless, I solved it once I realized that I should always track the minimum's index and compare it's value to the next element value to see if the next element is less than the minimum, then switch the element in the array if yes.
