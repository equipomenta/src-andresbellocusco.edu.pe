import { Component, ElementRef } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "pronoe-web",
    templateUrl: "./pronoe.component.html",
    styleUrls: ["./pronoe.component.css"]
})
export class PronoeWebComponent {
    constructor(private translate: TranslateService){
    }
    setLanguage(lang: string){
        this.translate.use(lang);
    }

}