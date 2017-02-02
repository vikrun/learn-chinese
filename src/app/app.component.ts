import {Component} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
    selector: 'learn-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'learn works!';

    words: FirebaseListObservable<any[]>;
    sentences: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire) {
        this.words = af.database.list('/words');
        this.sentences = af.database.list('/sentences');
    }

}