import { Component, OnInit } from '@angular/core';
import PriorityQueue from 'ts-priority-queue/src/PriorityQueue';
import { QueueService } from '../queue.service';

// const queue = new PriorityQueue({ comparator: (a: number,b: number) =>{
//   return b-a;
// }});

// queue.queue(5);
// queue.queue(3);
// queue.queue(2);
// var lowest = queue.dequeue(); 
// alert(lowest);



@Component({
  selector: 'app-p-queue',
  templateUrl: './p-queue.component.html',
  styleUrls: ['./p-queue.component.css']
})
export class PQueueComponent implements OnInit {

  // lowest: number = queue.dequeue();
  constructor(private queueService: QueueService) {
    // console.log(this.lowest)
   }

  ngOnInit(): void {
  }

}
