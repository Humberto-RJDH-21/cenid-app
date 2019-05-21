import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  public static GATEWAY_URL_BASE(): string {
    console.log('Gateway base ---> ', environment.gateWayUrl);
    return environment.gateWayUrl;
}
}
