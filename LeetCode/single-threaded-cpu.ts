class Task {
  enqueueTime: number;
  processingTime: number;
  index: number;
}

function getOrder(tasks: number[][]): number[] {
  const availableTasks = new MinPriorityQueue({
      priority: (task: Task) => task.processingTime * 100000 + task.index });

  const remainTasks = new MinPriorityQueue({
      priority: (task: Task) => task.enqueueTime});
  tasks
      .map((it, index) => {
          return {
              enqueueTime: it[0],
              processingTime: it[1],
              index: index,
          };
      })
      .forEach((value) => remainTasks.enqueue(value));

  const ret: number[] = [];
  let curTime = 0;
  while(true) {
      if(!remainTasks.isEmpty() && availableTasks.isEmpty() && curTime < remainTasks.front().element.enqueueTime) {
          curTime = remainTasks.front().element.enqueueTime;
      }
      while(!remainTasks.isEmpty() && remainTasks.front().element.enqueueTime <= curTime) {
          availableTasks.enqueue(remainTasks.dequeue().element);
      }
      if(availableTasks.isEmpty()) break;
      const curTask: Task = availableTasks.dequeue().element;
      ret.push(curTask.index);
      curTime += curTask.processingTime;
  }
  return ret;
}