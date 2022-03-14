import { Component, ElementRef } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "horario-web",
    templateUrl: "./horario.component.html",
    styleUrls: ["./horario.component.css"]
})
export class HorarioWebComponent {
    constructor(private translate: TranslateService){
    }
    setLanguage(lang: string){
        this.translate.use(lang);
    }

}