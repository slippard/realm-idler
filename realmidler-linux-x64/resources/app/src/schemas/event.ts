export class Event {
    constructor() {
        
    }

    updateList(event: string) {
        
        (document.getElementsByClassName('event__list__item')[0] as HTMLInputElement).innerHTML = event;
        /* var ul = document.getElementById("event__list"); */

        /* var li = document.createElement("li");
        li.appendChild(document.createTextNode(event));
        li.setAttribute("class", "event__list__item");
        (document.getElementsByClassName('event__list')[0] as HTMLInputElement).appendChild(li) */

        /* ul.appendChild(li); */
    }

    notify(title:string, desc: string) {

    }
}