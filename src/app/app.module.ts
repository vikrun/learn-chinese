import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {TopComponent} from "./top/top.component";
import {BottomComponent} from "./bottom/bottom.component";
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
import {AllaboutmeComponent} from "./allaboutme/allaboutme.component";
import {SoundsComponent} from "./sounds/sounds.component";
import {ButtonModule} from "primeng/components/button/button";

import {ServerErrorComponent} from "./error/server-error/server-error.component";
import {PageNotFoundComponent} from "./error/page-not-found/page-not-found.component";

import {routing} from "./app.routing";
import {AngularFireModule} from "angularfire2";
import {firebaseConfig} from "../environments/firebase.config";
import {ChartModule} from "primeng/components/chart/chart";


@NgModule({
    declarations: [
        AppComponent,

        HomeComponent,
        TopComponent,
        BottomComponent,
        ServerErrorComponent,
        PageNotFoundComponent,

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
        AllaboutmeComponent,
        SoundsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,

        AngularFireModule.initializeApp(firebaseConfig),
        ButtonModule,
        ChartModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
