"use strict";

export class KeyboardEventsManager {

    #arrowLeft = false;
    #arrowRight = false;
    #arrowUp = false;
    #control = false;
    #x = false;

    constructor() {
        this.#setEventsManager();
    }

    #setEventsManager() {
        document.addEventListener("keydown", (event) => {

            if (event.repeat) return false;
            switch(event.key) {

                case "ArrowLeft":
                    this.#arrowLeft = true;
                    break;

                case "ArrowRight":
                    this.#arrowRight = true;
                    break;

                case "ArrowUp":
                    this.#arrowUp = true;
                    break;

                case "Control":
                    this.#control = true;
                    break;

                case "x":
                case "X":
                    this.#x = true;
                    break;

                default:
                    return;
            }
        });

        document.addEventListener("keyup", (event) => {

            switch(event.key) {

                case "ArrowLeft":
                    this.#arrowLeft = false;
                    break;

                case "ArrowRight":
                    this.#arrowRight = false;
                    break;

                case "ArrowUp":
                    this.#arrowUp = false;
                    break;

                case "Control":
                    this.#control = false;
                    break;

                case "x":
                case "X":
                    this.#x = false;
                    break;

                default:
                    return;
            }
        });
    }

    get keyPressed() {
        return {
            "arrowLeft": this.#arrowLeft,
            "arrowRight": this.#arrowRight,
            "arrowUp": this.#arrowUp,
            "control": this.#control,
            "x": this.#x
        };
    }

}