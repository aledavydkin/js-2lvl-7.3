class Character {
  constructor(name) {
    this.name = name;
    this.lvl = 1;
    this.health = 1;
    this.counter = 0;
    this.baseAtack = 10;
    this.isPowerMode = false;
  }

  get powerMode() {
    return this.isPowerMode;
  }

  set powerMode(value) {
    this.isPowerMode = value;
    if (this.powerMode) {
      if (this.isPowerMode === false) {
        this.isPowerMode = true;
      }
    }
    return this.isPowerMode;
  }

  get fightAtack() {
    return this.powerMode ? this.baseAtack * 10 : this.baseAtack;
  }

  fight() {
    this.counter += 1;
    if (this.counter <= 3) {
      this.powerMode = true;
    } else {
      this.powerMode = false;
    }
  }
}

export default Character;
