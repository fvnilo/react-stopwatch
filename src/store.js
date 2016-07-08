 import mobx from 'mobx';

 function createStore() {
   let intervalToken = null;

   function tick(store) {
     store.timeRemaining--;

     if (store.timeRemaining === 0) {
       store.stop();
     }
   }

   let store = {
     timeRemaining: null,

     stop: function stop() {
       if (intervalToken) {
         clearInterval(intervalToken);
         intervalToken = null;
       }
     },

     start: function start() {
       if (!intervalToken) {
         intervalToken = setInterval(function() {
           tick(store);
         }, 1000);
       }
     },

     reset: function reset() {
       store.timeRemaining = 10;
     }
   };

   return store;
 }

 export default function storeFactory() {
   let store = createStore();
   let observables = { timeRemaining: 10 };

   mobx.extendObservable(store, observables);

   return store;
 }
