import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(userslist: any[], filterString: String, propName: any): any[] {
    const result: any = []
    if (!userslist || filterString == '' || propName == '') {
      return userslist
    }

    userslist.forEach((users: any) => {
      // console.log(users[propName]);
      if (users[propName].trim().toLowerCase().includes(filterString.toLowerCase())) {
        result.push(users)
      }
    })
    return result
  }
}


