// import { PriorityQueue } from 'ts-pq/src/priorityqueue';
import { Injectable } from '@angular/core';
import { Component } from '@angular/core'
import PriorityQueue from 'ts-priority-queue/src/PriorityQueue';


export interface DelayedCallOption {
  id: string;
  taskHandler: any;
  timeScheduled: number;
  data: any;
  delay: number;
}

export interface MyType {
  id: string;
  delay: number;
}

export type data<T> = [T, number];

// const queue = new PriorityQueue();
// queue.insert({x:0, y:1}, 2);
// queue.insert({x:2, y:1}, 10);
// queue.insert({x:5, y:0}, 0 );

// queue.values();
// queue.pop();
// queue.shift();


const queue = new PriorityQueue({ comparator: (a: number,b: number) =>{
  return b-a;
}});

queue.queue(5);
queue.queue(3);
queue.queue(2);
var lowest = queue.dequeue(); 
console.log(lowest);
alert(lowest);

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  constructor() { }
  
}
                                                            