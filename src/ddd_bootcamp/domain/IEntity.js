export class Entity {
  constructor() {
    if (new.target === Entity) {
      throw new TypeError("Cannot construct Entity instances directly");
    }
  }
}