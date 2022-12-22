# Data Structures and Algorithms

Welcome to my repository on data structures and algorithms! Here, you will find a collection of resources and implementations related to various data structures and algorithms in computer science using JavaScript.

## Table of Contents
* ###  Data Structures
    * [Arrays](/README.md#arrays)
    * [Linked Lists](/README.md#linked-lists)
    * [Trees](/README.md#trees)
    * [Binary Trees](/README.md#binary-trees)
    * [Graphs](/README.md#graphs)
    * [Heaps](/README.md#heaps)
    * [Hash Tables](/README.md#hash-tables)
* ###  Algorithms
    * #### Sorting
        * [Bubble](/README.md#bubble)
        * [Insertion](/README.md#insertion)
        * [Merge](/README.md#merge)
        * [Quick](/README.md#quick)
    * ### Searching
        * [Linear](/README.md#linear)
        * [Binary](/README.md#binary)
    * ### Graph Algorithms
        * [Depth First Search (DFS)](/README.md#breadth-first-search-bfs)
        * [Breadth First Search (BFS)](/README.md#depth-first-search-dfs)
        * [Djikstra's Algorithm](/README.md#dijkstras-algorithm)

## Data Structures

### Arrays
An array is a linear data structure that stores a fixed-size sequence of elements of the same type. Each element can be accessed by its index, and the elements are stored in contiguous memory locations.

### Linked Lists
A linked list is a linear data structure that consists of a sequence of nodes, where each node contains a value and a reference to the next node in the list. Linked lists are dynamic in size and can be easily inserted or removed from the list.

### Trees
A tree is a hierarchical data structure that consists of nodes organized into a parent-child relationship. The topmost node is called the root, and the nodes below it are called its children. Each node can have one or more children, and the nodes at the bottom level are called leaf nodes.

### Graphs
A graph is a data structure that consists of a set of vertices (nodes) and a set of edges that connect them. The edges can be directed or undirected, and the graph can be weighted or unweighted.

### Heaps
A heap is a complete binary tree that satisfies the heap property, which states that the value of each node must be greater than or equal to the values of its children (for a max heap) or less than or equal to the values of its children (for a min heap). Heaps are often used to implement priority queues.

### Hash Tables
A hash table is a data structure that stores key-value pairs in an array and uses a hash function to map the keys to the array indices. Hash tables are used for fast lookups, insertions, and deletions, and they have an average-case time complexity of O(1).

## Algorithms
#### Sorting
Sorting algorithms are used to arrange elements of a list in a specific order (ascending, descending, etc.).

#### Bubble Sort
Bubble sort is a simple sorting algorithm that repeatedly iterates through the list and swaps adjacent elements if they are in the wrong order

#### Insertion Sort
Insertion sort is a simple sorting algorithm that builds the final sorted list one item at a time by comparing the current item to the items already in the sorted list and inserting it in the correct position.

#### Merge Sort
Merge sort is a divide and conquer algorithm that recursively divides the list into smaller lists until each list has only one element, and then merges the lists back together in a sorted order.

#### Quick Sort
Quick sort is a divide and conquer algorithm that selects a pivot element from the list and partition the other elements into two lists based on whether they are less than or greater than the pivot. It then recursively sorts the two lists.

#### Searching
Searching algorithms are used to find an element in a list or a specific position in a list.

#### Linear Search
Linear search is a simple search algorithm that sequentially checks each element of the list until it finds the target element or determines that it is not present.

#### Binary Search
Binary search is an efficient search algorithm that works on sorted lists and uses a divide and conquer approach to find the target element. It repeatedly divides the list in half and compares the target element to the middle element until it is found or it is determined that it is not present.

### Graph Algorithms
Graph algorithms are algorithms that operate on graphs and are used to solve problems such as finding the shortest path between two nodes or determining the connected components of a graph.

#### Breadth First Search (BFS)
Breadth first search (BFS) is an algorithm that traverses a graph by exploring all the nodes at the current depth level before moving on to the next depth level.

#### Depth First Search (DFS)
Depth first search (DFS) is an algorithm that traverses a graph by exploring as far as possible along each branch before backtracking.

#### Dijkstra's Algorithm
Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph with non-negative edge weights, used for problems such as routing and navigating a map.

