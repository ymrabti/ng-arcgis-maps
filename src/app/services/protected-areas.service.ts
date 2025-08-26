import { Injectable } from '@angular/core';
import { on } from '@arcgis/core/core/reactiveUtils';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

@Injectable({
  providedIn: 'root'
})
export class ProtectedAreasService {
  IucnCategoryMap = new Map<string, string>();


  createFeatureLayer(): FeatureLayer {
    // Define the popup template with function that returns the content based on the feature attributes
    const template = {
      title: "{LIBELLE}",
      content: this.getContent.bind(this),
      actions: []
    };
    const protectedAreasRenderer = {
      type: "simple",
      symbol: {
        type: "simple-fill",
        style: "solid",
        color: [100, 180, 100, 0.5],
        outline: {
          color: [40, 100, 40, 0.8],
          width: 1
        }
      }
    };

    return new FeatureLayer({
      url: 'https://services7.arcgis.com/KJB6OX2G5dII6agv/arcgis/rest/services/mapalestine/FeatureServer/1',
      renderer: <any>protectedAreasRenderer,
      outFields: ["*"],
      title: 'Morocco Protected Areas && Reserves',
      popupTemplate: <any>template,
    });
  }
  getContent(feature: any): string {
    let attributes = feature.graphic.attributes;
    let category: string | undefined = this.IucnCategoryMap.get(attributes.name);
    const content: string = `<div><b>Source:</b> Morocco Protected Areas && Reserves</div>`;
    return content;
  }


}
