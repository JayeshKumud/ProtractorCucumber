import {by, ElementFinder, element} from 'protractor'

export class calculator{

    txt_first : ElementFinder;
    txt_second : ElementFinder;
    btn_Go : ElementFinder;
    lbl_Header : ElementFinder;

    constructor(){
        this.txt_first = element(by.model("first"));
        this.txt_second = element(by.model("second"));
        this.btn_Go = element(by.id("gobutton"));
        this.lbl_Header = element(by.css("h2"));
    }
}