import { pipe } from 'rxjs';
import * as utils from './util'

export class PriorityQueue<T> {
    private heap: T[];
    private compare: utils.CompareFunction<T>;
    // private queueArray: number[] = new Array();

    constructor(elements?: Iterable<T>, compareFunction?: utils.CompareFunction<T>) {
        this.heap = [];
        this.compare = compareFunction || utils.defaultCompare;

        if (elements) {            
            this.heap = Array.from(elements);
            this.heapify();
        }
    }

    private heapify(): void {
        if (this.heap.length === 0) {
            return;
        }

        let i = Math.max(0, Math.floor(this.size() / 2));
        for(; i >= 0; i--) {
            this.shiftDown(i);
        }
    }

    /**
     * return the size of the heap
     * @returns 
     */
    size(): number {
        return this.heap.length;
    }

    /**
     * check if the heap is empty
     * @returns boolean var true if heap not empty
     */
    isEmpty(): boolean {
        return this.size() === 0;
    }

    /**
     * insert an element in the heap and maintain the heap proprity
     * @param element 
     */
    enqueue(element: T): void {
        this.heap.push(element);
        const index = this.size() - 1;
        this.shiftUp(index);
    }

    /**
     * peek the first element
     * @returns 
     */
    peek(): T | null {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.heap[0];
        }
    }

    /**
     * pop the first element
     * @returns 
     */
    pop(): T | null {
        if (this.isEmpty()) {
            return null;
        } else {
            const result = this.remove(0);
            this.shiftDown(0);
            return result;
        }
    }

    /**
     * search for a specific element
     * @param element 
     * @returns boolean var, true if element exists
     */
    search(element: T): boolean {
        return this.heap.includes(element);
        // return this.heap.indexOf(element) !== -1;
    }

    /**
     * get the element with index
     * @param index index of the element
     * @returns 
     */
    get(index: number): T {
        return this.heap[index];
    }

    /**
     * clear the priority queue
     */
    clear(): void {
        this.heap.length = 0;
    }

    /**
     * display the pQueue as a list, currently not working!
     */
    display(): void {
        var queueArray: number[] = new Array();
        for (var _i = 0; _i < this.size(); _i++) {
          this.heap.push(this.get(_i));
        }
        console.log("current pQueue = " + queueArray);
    }

    /**
     * shift up a newly enqueue
     ed element to maintain heap properity
     * @param k 
    */
    private shiftUp(k: number) {
        let pIndex = this.parentIndex(k);
        console.log("k=" + k + " val[k]=" + this.heap[k] + " parent=" + pIndex + " val[pIndex]=" + this.heap[pIndex]);
        while (k > 0 && (this.heap[k] < this.heap[pIndex])) {
            console.log("shift element index = " + k + " with val = " + this.get(k) + " with index = " + pIndex + " val = "+ this.get(pIndex));
            this.swap(pIndex, k);
            k = pIndex;
            pIndex = this.parentIndex(k);
            // this.display();
            console.log("k = " + this.heap[k] + " parent = " + this.heap[pIndex]);
        }
        this.shiftDown(k);
    }

    /**
     * shift down an element when doing heapify
     * @param k
     */
    private shiftDown(index: number): void {

        const leftChild = this.leftChildIndex(index);
        const rightChild = this.rightChildIndex(index);

        let minIndex = index;

        if( (leftChild <= this.size()) && (leftChild > 0)) {
            if(this.heap[leftChild] < this.heap[minIndex]) {
                minIndex = leftChild;
            }
        }

        if( (rightChild <= this.size()) && (rightChild > 0)) {
            if(this.heap[rightChild] < this.heap[minIndex]) {
                minIndex = rightChild;
            }
        }

        if (minIndex != index) {
            console.log("swap minIndex = " + minIndex + " with val = " + this.get(minIndex) + " with index = " + index + " val = "+ this.get(index));
            this.swap(minIndex, index);
            this.shiftDown(minIndex);
        }
    }

    /**
     * remove the element with index and maintain heap properity
     * @param index 
     * @returns 
     */
    remove(index: number): T {
        const removeItem = this.heap[index];
        const lastIndex = this.size() - 1;
        this.swap(index, lastIndex);
        this.heap.pop();

        if (this.heap.length === 0) {
            return removeItem;
        }

        if (index === lastIndex - 1) {
            return removeItem;
        }

        const indexToHeapify = index;
        const itemToHeapify = this.heap[indexToHeapify];
        this.shiftDown(index);
        if (this.heap[indexToHeapify] === itemToHeapify) {
            this.shiftUp(indexToHeapify);
        }

        return removeItem;
    }

    /**
     * swap two elements with index
     * @param i 
     * @param j 
     */
    private swap(i: number, j: number): void {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    private parentIndex(index: number): number {
        return Math.floor(index / 2);
    }

    private leftChildIndex(pIndex: number): number {
        return pIndex * 2;
    }

    private rightChildIndex(pIndex: number): number {
        return pIndex * 2 + 1;
    }
}
