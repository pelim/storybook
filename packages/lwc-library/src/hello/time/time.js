import { LightningElement, api, wire, buildCustomElementConstructor } from 'lwc';

import { Time } from '../../wire/time'

/**
 * Display the time coming from a complex object containing 3 number members.
 *  {
 *      hours: 21,
 *      minutes: 18,  
 *      seconds: 44  
 *  }
 */
export default class DisplayTime extends LightningElement {

    /**
     * Time passed as a complex object.
     */
    @api time = {hours:0,minutes:0,seconds:0}

    get invalid() {
        if(!this.time) {
            return true;
        }
        if(typeof this.time.hours!=="number" || (this.time.hours<0 || this.time.hours>23) ) {
            return true;
        }
        if(typeof this.time.minutes!=="number" || (this.time.minutes<0 || this.time.minutes>59) ) {
            return true;
        }
        if(typeof this.time.seconds!=="number" || (this.time.seconds<0 || this.time.seconds>59) ) {
            return true;
        }
        return false;
    }


    get timeAsString() {
        const time = this.time;
        if(time===null) {
            return "[null]";
        }
        if(time===undefined) {
            return "[undefined]";
        }
        return "[" + (typeof time) + "] " +  JSON.stringify(time,null,"  ");
    }
}

//customElements.define("hello-time", buildCustomElementConstructor(DisplayTime));
