import { Component } from "@angular/core";

@Component({
    selector:'artimages-component',
    templateUrl:'./artimages.component.html',
    styleUrl:'./artimages.component.css',
    standalone:true,
})
export class ArtimagesComponent{
    bigImgSource='Designer.png'

    changeImg=(img:HTMLImageElement)=>{
        this.bigImgSource=img.src


    }
}