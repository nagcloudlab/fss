const { Observable, Subject, BehaviorSubject, ReplaySubject } = require("rxjs"); // cjs
const { map, filter, bufferCount } = require("rxjs/operators");
// const fssTngStream = new Subject();
// const fssTngStream = new BehaviorSubject(0); // buffer size
const fssTngStream = new ReplaySubject(5); // buffer size

//-------------------------
// trainer
//-------------------------

const trainer = {
  startTraining() {
    let topic = 0;
    let interval = setInterval(() => {
      topic++;
      console.log("trainer propagating topic - ", topic);
      fssTngStream.next(topic); // push
      //   if (topic === 3) {
      //     fssTngStream.error(new Error("topic-3 is too complex"));
      //     clearInterval(interval);
      //   }
      //   if (topic === 5) {
      //     fssTngStream.complete();
      //     clearInterval(interval);
      //   }
    }, 1000);
  },
};

trainer.startTraining();

//-------------------------
// student-1
//-------------------------

fssTngStream
  .pipe(filter((topic) => topic % 2 === 0))
  .pipe(bufferCount(3))
  .subscribe({
    next(topic) {
      console.log(`student-1 learning topic - ${topic}`);
    },
    error(err) {
      console.log(`student-1 learning error - ${err.message}`);
    },
    complete() {
      console.log(`student-1 learning completed`);
    },
  });

//-------------------------
// student-2
//-------------------------

// setTimeout(() => {
//   fssTngStream.subscribe({
//     next(topic) {
//       console.log(`student-2 learning topic - ${topic}`);
//     },
//     error(err) {
//       console.log(`student-2 learning error - ${err.message}`);
//     },
//     complete() {
//       console.log(`student-2 learning completed`);
//     },
//   });
// }, 5000);
