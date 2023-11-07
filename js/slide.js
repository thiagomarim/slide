export default class slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper =  document.querySelector(wrapper);
  }

  onStart(event) {
    event.preventDefault();
    console.log('clicou')
    this.wrapper.addEventListener('mouseup', this.onMove);
  }

  onMove(event) {
  }
  
  onEnd() {
    this.wrapper.removeEventListener('mouseup', this.onMove);
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}