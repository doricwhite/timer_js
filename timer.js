"use strict";

class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    // Check if these were provided when an instance was created.
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    // Event Listeners
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  // Start the time countdown
  start = () => {
    //Check if onStart was provided
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }

    this.tick();
    this.timerId = setInterval(this.tick, 50);
  };

  // Decrements the time provided by the user
  tick = () => {
    // check to stop timer when it reaches 0
    if (this.timeRemaining <= 0) {
      this.pause();

      //Check if onComplete was provided
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      //setter -------------------> getter
      this.timeRemaining = this.timeRemaining - 0.05;

      //Check if onTick was provided
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };

  // Getter
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  // Setter
  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }

  // Pause time duration
  pause = () => {
    clearInterval(this.timerId);
  };
}
