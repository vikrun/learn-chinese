import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'pes-server-error',
    templateUrl: './server-error.component.html'
})
export class ServerErrorComponent implements OnInit {

    constructor(
        private titleService: Title,
        private route: ActivatedRoute,
        private router: Router,
    ) {
    }

    ngOnInit(): void {
        this.titleService.setTitle('Server error');
    }

}
