import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'categoryList'
})

// Pipes sono puri di default

export class CategoryListPipe implements PipeTransform{
    transform(highMovies) {
        const categories = [];
        highMovies.forEach(movie =>{
            if(categories.indexOf(movie.category) <= -1){
                categories.push(movie.category);
            }
        });
        return categories.join(', ');
    }
}