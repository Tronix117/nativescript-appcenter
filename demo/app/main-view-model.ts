import { Observable } from 'tns-core-modules/data/observable';
import { Appcenter } from 'nativescript-appcenter';

export class HelloWorldModel extends Observable {
  public message: string;
  private appcenter: Appcenter;

  constructor() {
    super();

    this.appcenter = new Appcenter();
    this.message = this.appcenter.message;
  }
}
