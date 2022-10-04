class Key {

    get search(){
        return $('#target')
    }
    get resultLable(){
        return $('#result')
    }

    getResultLableText = async function(){
        this.resultLable.waitForDisplayed() 
         return this.resultLable.getText()
    }

    enterSearch = async function(text){
        this.search.waitForDisplayed()
        await this.search.setValue(text)
 
    }



}

module.exports=new Key