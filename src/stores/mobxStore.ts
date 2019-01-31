import {observable, action, computed} from 'mobx';

export interface IMobxStore {
  name: string;
  greeting: string;
  setName(name: string): void;
}

export class MobxStore implements IMobxStore {
  @observable
  public name: string = 'world';

  @computed
  public get greeting() {
    return `Hello, ${this.name}`;
  }

  @action.bound
  public setName(name: string): void {
    this.name = name;
  }
}
