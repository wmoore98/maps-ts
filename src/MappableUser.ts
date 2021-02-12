import { Mappable } from "./Map";
import { User } from "./User";

export class MappableUser extends User implements Mappable {
  get position() {
    return this.location;
  }

  get label() {
    return this.name;
  }

  infoWindowContent() {
    try {
      if (!this) {
        throw new Error(
          `"this" is undefined. Make sure you are calling the method on the object. Destructuring loses the context of the object.`
        );
      }
      return `User: ${this.name}`;
    } catch (error) {
      console.error(error);
    }
  }
}
