import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-teams',
    templateUrl: './teams.component.html',
    styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

    constructor() {}

    ngOnInit() {

        jQuery(function($) {

            const owl = $('.owl-carousel');

            owl.owlCarousel({
                margin: 10,
                touchDrag: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 5
                    }
                }
            });

            $('.customNextBtn').click(function() {
                owl.trigger('next.owl.carousel');
            });

            $('.customPrevBtn').click(function() {
                owl.trigger('prev.owl.carousel');
            });

        });

    }


}
