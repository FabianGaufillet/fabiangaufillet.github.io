"use strict";

export class Sprite {

    #currentState;
    #currentIndexOfSprite;

    constructor(state,indexOfSprite) {
        this.#currentState = state;
        this.#currentIndexOfSprite = indexOfSprite;
    }

    getNextSprite(sprites) {
        const previousIndexOfSprite = this.#currentIndexOfSprite;
        this.#currentIndexOfSprite = (this.#currentIndexOfSprite + 1)%sprites.length;
        return sprites[previousIndexOfSprite];
    }

    get currentState() {
        return this.#currentState;
    }

    set currentState(state) {
        this.#currentState = state;
    }

    set currentIndexOfSprite(index) {
        this.#currentIndexOfSprite = index;
    }

}