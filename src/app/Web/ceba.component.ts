import { Component, ElementRef } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "ceba-web",
    templateUrl: "./ceba.component.html",
    styleUrls: ["./ceba.component.css"]
})
export class CebaWebComponent {
    constructor(private translate: TranslateService){
    }
    setLanguage(lang: string){
        this.translate.use(lang);
    }

}