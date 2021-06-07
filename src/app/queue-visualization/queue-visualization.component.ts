import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { PriorityQueue } from './priority-queue/priority-queue'

@Component({
  selector: 'app-queue-visualization',
  templateUrl: './queue-visualization.component.html',
  styleUrls: ['./queue-visualization.component.css'],
})
export class QueueVisualizationComponent {

  priorityQueue: PriorityQueue<number> = new PriorityQueue();
  lastElement = null;
  queueArray: number[] = new Array();

  /**
   * add an user input to the queue
   * @param element user input element to add
   */
  add(element: string): void {
    var lastElement: number = +element;
    this.priorityQueue.enqueue(lastElement);
    this.display();
  }

  /**
   * add a random generated number to the queue
   */
  addRan(): void {
    // const lastElement = Math.random();
    const lastElement = this.random(10,200);
    
    this.priorityQueue.enqueue(lastElement);
    console.log("======= added element ====== " + lastElement);
    this.display();
  }

  /**
   * remove an element with index
   * @param index element index to be removed
   */
  remove(index: string) {
    var removeIndex: number = +index;
    console.log("element at index " + index + " with var " + this.priorityQueue.get(removeIndex) + " will be removed");
    this.priorityQueue.remove(removeIndex);
  }

  /**
   * default dequeue method
   */
  dequeue(): void {
    this.priorityQueue.pop();
    // this.display();
  }

  peek(): void {
    this.priorityQueue.peek();
    console.log("first element in qQueue is " + this.priorityQueue.peek());
  }

  /**
   * display the pQueue in form of min heap
   */
  display(): void {
    for (var _i = 0; _i < this.priorityQueue.size(); _i++) {
      this.queueArray.push(this.priorityQueue.get(_i));
    }
    console.log("min heap pQueue is " + this.queueArray);
    this.queueArray = [];
  }

  /**
   * display the pQueue as a sorted queue
   */
  displaySorted(): void {
    for (var _i = 0; _i < this.priorityQueue.size(); _i++) {
      this.queueArray.push(this.priorityQueue.get(_i));
    }
    console.log("sorted pQueue is " + this.queueArray.sort((a,b) => a-b));
    this.queueArray = [];
  }

  /**
   * clear the prorityQueue
   */
  clear(): void {
    this.priorityQueue.clear();
    this.display();
  }

  /**
   * random generator
   * @param min lower bound
   * @param max upper bound
   * @returns 
   */
  random(min: number, max: number): number {
    return Math.floor(Math.random() * ( max - min + 1) + min);
  }

}
