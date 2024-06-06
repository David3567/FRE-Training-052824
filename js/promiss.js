const isThenable = (maybePromise) =>
  maybePromise && typeof maybePromise.then === 'function';

class MyPromise {
  #statusGroup = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected',
  };

  #status = this.#statusGroup.PENDING;
  #value = undefined;
  #reason = undefined;
  #thenQueue = [];
  #finallyQueue = [];

  constructor(executor) {
    if (typeof executor === 'function') {
      try {
        executor(this.#resolve.bind(this), this.#reject.bind(this));
      } catch (err) {
        this.#reject(err);
      }
    }
  }

  #propagationResolved() {
    setTimeout(() => {
      this.#thenQueue.forEach(([controlledPromise, fulfilledFn]) => {
        if (typeof fulfilledFn === 'function') {
          const valueOrPromise = fulfilledFn(this.#value);

          if (isThenable(valueOrPromise)) {
            valueOrPromise.then(
              (value) => controlledPromise.#resolve(value),
              (reason) => controlledPromise.#reject(reason)
            );
          } else {
            controlledPromise.#resolve(valueOrPromise);
          }
        } else {
          return controlledPromise.#resolve(this.#value);
        }
      });

      this.#finallyQueue.forEach(([controlledPromise, sideEffectFn]) => {
        sideEffectFn();
        controlledPromise.#resolve(this.#value);
      });

      this.#thenQueue = [];
      this.#finallyQueue = [];
    });
  }

  #propagationRejected() {
    setTimeout(() => {
      this.#thenQueue.forEach(([controlledPromise, _, catchFn]) => {
        if (typeof catchFn === 'function') {
          const valueOrPromise = catchFn(this.#reason);

          if (isThenable(valueOrPromise)) {
            valueOrPromise.then(
              (value) => controlledPromise.#resolve(value),
              (reason) => controlledPromise.#reject(reason)
            );
          } else {
            controlledPromise.#resolve(valueOrPromise);
          }
        } else {
          return controlledPromise.#reject(this.#reason);
        }
      });

      this.#finallyQueue.forEach(([controlledPromise, sideEffectFn]) => {
        sideEffectFn();
        controlledPromise.#reject(this.#value);
      });

      this.#thenQueue = [];
      this.#finallyQueue = [];
    });
  }

  #resolve(value) {
    if (this.#status === this.#statusGroup.PENDING) {
      this.#status = this.#statusGroup.FULFILLED;
      this.#value = value;
      this.#propagationResolved();
    }
  }
  #reject(reason) {
    if (this.#status === this.#statusGroup.PENDING) {
      this.#status = this.#statusGroup.REJECTED;
      this.#reason = reason;
      this.#propagationRejected();
    }
  }

  then(fulfilledFn, catchFn) {
    const controlledPromise = new MyPromise();
    this.#thenQueue.push([controlledPromise, fulfilledFn, catchFn]);

    if (this.#status === this.#statusGroup.FULFILLED) {
      this.#propagationResolved();
    } else if (this.#status === this.#statusGroup.REJECTED) {
      this.#propagationRejected();
    }

    return controlledPromise;
  }

  catch(catchFn) {
    return this.then(undefined, catchFn);
  }

  finally(sideEffectFn) {
    if (this.#status !== this.#statusGroup.PENDING) {
      sideEffectFn();

      return this.#status === this.#statusGroup.FULFILLED
        ? MyPromise.resolve(this.#value)
        : MyPromise.reject(this.#reason);
    }

    const controlledPromise = new MyPromise();
    this.#finallyQueue.push([controlledPromise, sideEffectFn]);

    return controlledPromise;
  }
}

module.exports = MyPromise;