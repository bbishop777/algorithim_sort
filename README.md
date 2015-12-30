# bubble-sort
There are many algorithms that deal with sorting collections of data. One of the most basic forms of sorting is known as __Bubble Sort__ and is named by it's nature of the order of data having a "bubbling" effect as a collection of data is sorted. We will start off by implementing a Bubble Sort algorithm on a one-dimensional Array.

The bubbleModule built here uses a simple strategy of going thru the array and, starting at the beginning, it compares the first 2 elements to see which is smaller.  If the one to the right is smaller, it swaps their positions.  Then the 2nd position, whether changed or not, becomes the first of the next two to be compared.  It is compared to the next element in the array and the greater one is placed to the right, the lesser one to the left.  When it reaches the end of the array, it repeats the process. When no moves are made in a pass thru the array, the sorter stops and returns the completed array.

For this type of sort algorithm, the worst case scenario is where the array runs from largest to smallest, with the largest to the right and smallest to the left.  In Big O notation, a computer science methodology to analyze the perfomance of an algorithm, bubble sort methods are ranked as O(N^2).  This means that for the number of elements in the array (N), the time and memory consumption is squared.  So if our bubbleModule was given an array of 4 items and it was the worst case scenario (as mentioned above), the function would need to pass thru the array 4 times (the 4th sees no swaps and this indicates it is sorted and to stop the function).  So, here we see the function will "look" at the array 16 times, even if it doesn't swap any positions.  Even when it reaches the last number in the array it must look at that number and see if there is another element after it to compare it to.  When it sees there is none.  It either begins again, if swaps were made, or it stops (if no swaps were made).  So that last look at the array is counted too in the time/performance. In a best case scenario, where no moves are made, the performance is directly proportional to the number of elements in the array.  So 4 items (in order) would result in 4 "looks" with no swaps.  This is performance is called O(N) in Big O notation.

###Bubble Sort Implementation
The trick to remembering bubble sort is to visualize that your array is vertical rather than horizontal. If smaller values are "deeper" in the array, they will "rise" to the top until they are the smallest value. If larger values are "higher" in the array, they will sink to the bottom until they are the largest value.

###Your challenge
1. Create a project and a repo for your Bubble Sort implementation. You probably want a README as well.
2. Add Mocha/Chai to your project for writing your tests against your function.
3. Write your tests __FIRST__ that will indicate that your sorting function works with multiple inputs.
4. Implement a function that will take an input Array and apply the bubble sort algorithm to sort the input and return the number of moves that were necessary to sort the Array.

###Extra
Create a way for all Arrays to be able to use your bubble sort function as a method of the Array object.

###Super Extra
Write a browser tool that will visually show the array and it's values as they are being sorted to see how the elements are moving in real time. It will be impossible to see things being sorted in real time, so you may need to tweak your function to make this work or find new ways of calling it.
