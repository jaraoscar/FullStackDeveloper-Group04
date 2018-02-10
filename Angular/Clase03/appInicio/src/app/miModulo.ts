import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { miComponent } from "./miComponent";

// import { NgModule} from '@angular/core'


@NgModule({
    declarations: [
        miComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap:[miComponent],
    entryComponents: [] 
})
export class miModulo {}