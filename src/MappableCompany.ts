import { Mappable } from "./Map";
import { Company } from "./Company";

export class MappableCompany extends Company implements Mappable {
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
      return `
      <div>
        <h1>${this.name}</h1>
        <p style="font-size: 1.25rem; font-weight: bold">${this.catchPhrase}</p>
      </div>
    `;
    } catch (error) {
      console.error(error);
    }
  }
}
