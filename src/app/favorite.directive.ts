import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[movieFavorite]'
})

export class FavoriteDirective {
    @HostBinding('class.is-favorite') isFavorite = true;
    @HostBinding('class.is-favorite-hovering') hovering = false;
    @HostListener('mouseenter') onMouseEnter(){
        this.hovering = true;
    }
    @HostListener('mouseleave') onMouseleave(){
        this.hovering = false;
    }
    @Input() set movieFavorite(value: any){
        this.isFavorite = value;
    }
}