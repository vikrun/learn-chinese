import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {FirebaseListObservable, AngularFire} from "angularfire2";

@Component({
    selector: 'learn-home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

    words: FirebaseListObservable<any[]>;
    sentences: FirebaseListObservable<any[]>;

    constructor(
        private titleService: Title,
        private route: ActivatedRoute,
        private router: Router,
        private af: AngularFire
    ) {
        this.words = af.database.list('/words');
        this.sentences = af.database.list('/sentences');
    }

    ngOnInit(): void {

    }

}
