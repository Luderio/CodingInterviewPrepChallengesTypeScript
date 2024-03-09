# Key Takeaways: No Repeats Please - Coding Interview Challenges
### Completion time: 1 day.
### Completed on: March 6, 2024.

## Comments:

This challenge i is indimidating but I am able to resolve this quickly than before. To solve the challenge, I first research/study permutation to get an understanding of what it is. 

I stumbled upon the Permutation article from wikipedia discussing about ***[Heap's Algprithm](https://en.wikipedia.org/wiki/Heap%27s_algorithm)***. I read through the article and I decided to implement the algorithm to solve the challenge as it says that Heap's algorithm is the most efficient way of dealing with permutation. 

I used the below Pseudocode  to guide me with the algorithm implementation ***(pseudocode  below is copied directly from wikipedia)***

```
procedure generate(k : integer, A : array of any):
    
    if k = 1 then
        output(A)
    else

        // Generate permutations with k-th unaltered
        // Initially k = length(A)
        generate(k - 1, A)

        // Generate permutations for k-th swapped with each k-1 initial
        for i := 0; i < k-1; i += 1 do
            // Swap choice dependent on parity of k (even or odd)
            if k is even then
                swap(A[i], A[k-1]) // zero-indexed, the k-th is at k-1
            else
                swap(A[0], A[k-1])
            end if
            generate(k - 1, A)
        end for

    end if
```

At first, I was pridefull because I want to come up with my own logic for the permutation part but I realized that using the Heap's Algorithm will help me address the permutation faster and effectively, hence I let my prode down. HAHAHHA. 

Once I got the permutation part down, I get to work with checking if the permuted srings has same consecutive letters to as per the requirement of the challenge. Then I returne dthe length of the permutation. 

### Here is the steps that I did to solve the challenge:

1. Since the input is a string, I used the .split() method to convert the string input to an array. 
2. I created a separate function called ***switcher()*** to handle the switching of array elements. 
3. I also created a separate function called ***consecutiveChecker*** to check if the permuted array of string has a 2 consecutive letter.  the function return ***true*** if there is a consecutive, and ***false*** otherwise.
4. On the main fuction: ***permAlone()***, I implemented the Heap's algoritm inside it which is a ***recursive function*** to generate the permutation of the string array. I used the ***switcher()*** function inside the ***generate()*** function to handle the switching of elements. 
5. After the permutation is generated, i used a ***.filter()*** method to filter the permutated arrays checking if they have 2 consecutive letter using the ***consecutiveChecker()** function. 
6. since I already have list of permutated array that doesn't have a consecutive letter, I simple returned the length of that array. 

All in all, using the Heap's algorithm makes me solve the challenge faster. 

