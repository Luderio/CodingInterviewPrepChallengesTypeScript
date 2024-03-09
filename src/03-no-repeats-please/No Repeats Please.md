# No Repeats Please

Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

## TESTS:

1. permAlone("aab") should return a number.
2. permAlone("aab") should return 2.
3. permAlone("aaa") should return 0.
4. permAlone("aabb") should return 8.
5. permAlone("abcdefa") should return 3600.
6. permAlone("abfdefa") should return 2640.
7. permAlone("zzzzzzzz") should return 0.
8. permAlone("a") should return 1.
9. permAlone("aaab") should return 0.
10. permAlone("aaabb") should return 12.