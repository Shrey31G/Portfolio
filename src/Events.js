class Events {
  callbacks = [];
  nextId = 0;
  // emit events
  emit(eventName, value) {
    this.callbacks.forEach((stored) => {
      if (stored.eventName === eventName) {
        stored.callback(value);
      }
    });
  }

  // sub to something happening but adding it into callback array
  on(eventName, caller, callback) {
    const existingSubscription = this.callbacks.find(
      (stored) =>
        stored.eventName === eventName &&
        stored.caller === caller &&
        stored.callback.toString() === callback.toString()
    );
    if (existingSubscription) {
      console.log(
        `Warning: Duplicate subscription for event ${eventName} ignored`
      );
      return existingSubscription.id;
    }
    this.nextId += 1;
    this.callbacks.push({
      id: this.nextId,
      eventName,
      caller,
      callback,
    });
    return this.nextId;
  }

  // remove the subscription
  off(id) {
    this.callbacks = this.callbacks.filter((stored) => stored.id !== id);
  }

  unsubscribe(caller) {
    const beforeCount = this.callbacks.length;
    this.callbacks = this.callbacks.filter(
      (stored) => stored.caller !== caller
    );
    const afterCount = this.callbacks.length;
    console.log(
      `Unsubscribed caller: removed ${beforeCount - afterCount} subscriptions`
    );
  }
}

export const events = new Events();
