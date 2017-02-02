import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {ErrorComponent} from "./error/error.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {PinyinComponent} from "./pinyin/pinyin.component";
import {PronunctionComponent} from "./pronunction/pronunction.component";
import {TonesComponent} from "./tones/tones.component";
import {SentenceComponent} from "./sentence/sentence.component";
import {LessonComponent} from "./lesson/lesson.component";
import {TopicsComponent} from "./topics/topics.component";
import {IntroductionComponent} from "./introduction/introduction.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LabComponent} from "./lab/lab.component";
import {NumbersComponent} from "./numbers/numbers.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {CultureComponent} from "./culture/culture.component";
import {ThingstodoComponent} from "./thingstodo/thingstodo.component";
import {FamiliesComponent} from "./families/families.component";
import {AllaboutmeComponent} from "./allaboutme/allaboutme.component";
import {SoundsComponent} from "./sounds/sounds.component";
import {ButtonModule} from "primeng/components/button/button";

import {AngularFireModule} from "angularfire2";
import {firebaseConfig} from "../environments/firebase.config";


@NgModule({
    declarations: [
        AppComponent,
        ErrorComponent,
        NotFoundComponent,
        NavbarComponent,
        PinyinComponent,
        PronunctionComponent,
        TonesComponent,
        SentenceComponent,
        LessonComponent,
        TopicsComponent,
        IntroductionComponent,
        DashboardComponent,
        LabComponent,
        NumbersComponent,
        CalendarComponent,
        CultureComponent,
        ThingstodoComponent,
        FamiliesComponent,
        AllaboutmeComponent,
        SoundsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

        AngularFireModule.initializeApp(firebaseConfig),
        ButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
