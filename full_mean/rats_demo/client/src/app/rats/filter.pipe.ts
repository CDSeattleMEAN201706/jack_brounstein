import { Pipe, PipeTransform } from '@angular/core';

import { Rat } from "./rat"

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list_of_rats: Rat[], search_text: string): Rat[] {
  	if(!search_text){ return list_of_rats }

    let output: Rat[] = []

    for(let rat of list_of_rats){
    	if(rat.name.toLowerCase().indexOf(search_text.toLowerCase()) > -1 || rat.favorite_food.toLowerCase().indexOf(search_text.toLowerCase()) > -1){
    		output.push(rat)
    	}
    }

    return output
  }

}
