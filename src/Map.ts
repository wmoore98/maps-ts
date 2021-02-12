export interface Mappable {
  position: {
    lat: number;
    lng: number;
  };
  label?: string;
  infoWindowContent?(): string;
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    try {
      const divElem = document.getElementById(divId);
      if (!divElem) {
        throw new Error(
          `An HTML element with the id of "${divId}" was not found.`
        );
      }
      this.googleMap = new google.maps.Map(divElem, {
        center: { lat: 0, lng: 0 },
        zoom: 1,
      });
    } catch (error) {
      console.error(error);
    }
  }

  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mappable.position,
      label: mappable.label,
      title: "Marker Title",
    });

    if (mappable.infoWindowContent) {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.infoWindowContent(),
      });

      marker.addListener("click", () => {
        infoWindow.open(this.googleMap, marker);
      });
    }

    return marker;
  }
}
