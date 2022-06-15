const hospitalQueues = [
  {name: 'A', queue: 11},
  {name: 'B', queue: 23},
  {name: 'C', queue: 16},
  {name: 'D', queue: 23},
  {name: 'E', queue: 22},
  {name: 'F', queue: 45},
  {name: 'G', queue: 2},
  {name: 'H', queue: 9},
]

function getSum(data) {
  // const queues = data => Object.values(data)[1];
  // const getQueuesValues = data.map(queues);
  const getQueuesValues = data.map(data => Object.values(data)[1]);

  const sum = getQueuesValues.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  console.log(sum);
}

function getMax(data) {
  // const queues = data => Object.values(data)[1];
  // const getQueuesValues = data.map(queues);
  const getQueuesValues = data.map(data => Object.values(data)[1]);
  const max = Math.max(...getQueuesValues);

  console.log(max)
}

function getLength(data) {
  const length = Object.values(data).length;

  console.log(length)
}

getMax(hospitalQueues);
getLength(hospitalQueues);
getSum(hospitalQueues);