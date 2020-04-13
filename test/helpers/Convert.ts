import { apiResource } from "../testdata/data/apiResource.json";

export class userJsonToMap {
  static updateUser(key: string, value: string): Map<string, string> {
    var map = new Map(Object.entries(apiResource.body.user));
    Array.from(map.keys()).forEach((ky) => {
      if (ky == key) {
        map.set(key, value);
      }
    });
    return map;
  }
}
