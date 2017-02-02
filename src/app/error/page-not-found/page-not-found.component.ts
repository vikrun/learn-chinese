import {Component} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'learn-page-not-found',
    templateUrl: 'page-not-found.component.html'
})
export class PageNotFoundComponent {

    constructor(
        private titleService: Title,
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.titleService.setTitle('Fant ikke siden');
    }

    goBack(): void {
        window.history.back();
    }

}
