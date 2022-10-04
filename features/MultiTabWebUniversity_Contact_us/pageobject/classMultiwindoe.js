class contactus{
    get welcomeTxt(){
        return $('//h1[text()="Thank You for your Message!"]').getText()
    }

    get contactlink(){
        return $('//div/h1[text()="CONTACT US"]')
    }
  
    get firstName(){
        return $('//input[@name="first_name"]')
    }

    get lastName(){
        return $('//input[@name="last_name"]')
    }

    get mail(){
        return $('//input[@name="email"]')
    }

    get comment(){
        return $('//textarea[@name="message"]')
    }

    get submitbtn(){
        return $('//input[@value="SUBMIT"]')
    }


    fillData = async function(fn,ln,mail,msg){
        await this.firstName.setValue(fn)
        await this.lastName.setValue(ln)
        await this.mail.setValue(mail)
        await this.comment.setValue(msg)

    }
}
module.exports=new contactus;