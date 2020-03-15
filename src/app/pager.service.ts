import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagerService {

  constructor() { }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number){
    let totalPages = Math.ceil(totalItems / pageSize);
    //Ensure that this do not fall out of bounds
    if(currentPage < 1) {
      currentPage = 1;      
    }
    else if(currentPage > totalPages){
      currentPage = totalPages;
    }
    let startPage : number;
    let endPage : number;

    if(totalPages!=null || totalPages!=undefined){
      startPage = 1;
      endPage = totalPages;
    }else{
      alert('page not defined.values0');
    }
    //Calculate Start and End indexItems
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min((startIndex + pageSize - 1), (totalItems - 1));

    //Create and array of pages
    let pages = Array.from(Array(endPage ).keys()).map(i => startPage + i);
    
    return{
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }
}
