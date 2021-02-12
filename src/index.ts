import { MappableCompany } from "./MappableCompany";
import { Map } from "./Map";
import { MappableUser } from "./MappableUser";

const user = new MappableUser();
console.log(user);

const company = new MappableCompany();
console.log(company);

const map = new Map("map");

const userMarker = map.addMarker(user);
const companyMarker = map.addMarker(company);
