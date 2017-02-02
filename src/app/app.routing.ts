import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {LabComponent} from "./lab/lab.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {CultureComponent} from "./culture/culture.component";
import {IntroductionComponent} from "./introduction/introduction.component";
import {LessonComponent} from "./lesson/lesson.component";
import {NumbersComponent} from "./numbers/numbers.component";
import {PinyinComponent} from "./pinyin/pinyin.component";
import {PronunctionComponent} from "./pronunction/pronunction.component";
import {SoundsComponent} from "./sounds/sounds.component";
import {ThingstodoComponent} from "./thingstodo/thingstodo.component";
import {TonesComponent} from "./tones/tones.component";
import {TopicsComponent} from "./topics/topics.component";
import {ServerErrorComponent} from "./error/server-error/server-error.component";
import {PageNotFoundComponent} from "./error/page-not-found/page-not-found.component";

const APP_ROUTES: Routes = [

    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'culture', component: CultureComponent },
    { path: 'introduction', component: IntroductionComponent },
    { path: 'lab', component: LabComponent },
    { path: 'lesson', component: LessonComponent },
    { path: 'numbers', component: NumbersComponent },
    { path: 'pinyin', component: PinyinComponent },
    { path: 'pronunction', component: PronunctionComponent },
    { path: 'sounds', component: SoundsComponent },
    { path: 'thingstodo', component: ThingstodoComponent },
    { path: 'tones', component: TonesComponent },
    { path: 'topics', component: TopicsComponent },

    { path: 'error', component: ServerErrorComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);