import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'candidateFilter'
})
export class CandidateFilterPipe implements PipeTransform {
  transform(value: any, args: string): any {
    let filter = args.toLowerCase();
    return filter ? value.filter(candidate => candidate.firstName.toLowerCase().indexOf(filter) != -1) : value;
  }
} 