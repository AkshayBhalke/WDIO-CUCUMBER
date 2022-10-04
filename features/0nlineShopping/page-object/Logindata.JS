class LoginCls{


    get signinbutton(){
        return $('//a[@title="Log in to your customer account"]')
    }
    get enteremail(){
        return $('#email')
    }
    get enterpass(){
        return $('#passwd')
    }
    get loginBtn(){
        return $('//button[@id="SubmitLogin"]')
    }


  

}

module.exports=new LoginCls;