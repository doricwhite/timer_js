"use strict";

class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    // Event Listeners
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  // Start the time countdown
  start = () => {
    this.tick();
    this.timerId = setInterval(this.tick, 1000);
  };

  // Decrements the time provided by the user
  tick = () => {
    // check to stop timer when it reaches 0
    if (this.timeRemaining <= 0) {
      this.pause();
    } else {
      //setter -------------------> getter
      this.timeRemaining = this.timeRemaining - 1;
    }
  };

  // Getter
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  // Setter
  set timeRemaining(time) {
    this.durationInput.value = time;
  }

  // Pause time duration
  pause = () => {
    clearInterval(this.timerId);
  };

  onDurationChange() {}
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
