'use strict'

class finaly {
    constructor(item){
        this.title=item.title;
        this.description=item.description;
        this.content=item.content;
        this.url=item.url;
        this.image=item.img;
        this.publishDate=item.publishedAt;
        this.sourseName=item.source.name;
        this.sourseUrl= item.source.url;


    }

}
module.exports=finaly;