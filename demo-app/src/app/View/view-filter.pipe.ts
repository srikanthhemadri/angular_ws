import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'viewFilter'})
export class ViewFilterPipe implements PipeTransform {
    transform(value: any[], args: string): any[] {
        console.log(value);
        console.log(args);
        let searchFilter: string = args ? args.toLocaleLowerCase() : null;
        return searchFilter ? value.filter(employee => 
            employee.name.toLocaleLowerCase().startsWith(searchFilter) != false) : value;
    }
}