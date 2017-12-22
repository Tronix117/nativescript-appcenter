import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import * as buttons from 'tns-core-modules/ui/button';
import {HelloWorldModel} from './main-view-model';
import * as dialogs from 'tns-core-modules/ui/dialogs';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function generateCrash(args: observable.EventData) {
    let button = <buttons.Button>args.object;
    let vm = <HelloWorldModel>button.page.bindingContext;
    vm.generateCrash();
}

export function publishEvent(args: observable.EventData) {
    let button = <buttons.Button>args.object;
    let vm = <HelloWorldModel>button.page.bindingContext;
    vm.publishEvent();
}

export function publishEventWithProperties(args: observable.EventData) {
    let button = <buttons.Button>args.object;
    let vm = <HelloWorldModel>button.page.bindingContext;
    vm.publishEventWithProperties();
}