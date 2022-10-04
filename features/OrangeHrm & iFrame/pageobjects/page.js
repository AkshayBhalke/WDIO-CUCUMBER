 class Login {

    get username1(){
        return $('input[name="username"]');
 }

     
    get password(){
        return $('input[name="password"]');

    }
    get button(){
        return $('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button')
    }
    login = async function(user,pass){
        await this.username1.setValue(user)
        await this.password.setValue(pass)

    }
    logout= async function(){
        await $('//p[text()="Paul Collings"]').click()
        await $('//a[text()="Logout"]').click()
    }
   
   
    
}
// export default new Login() ;
module.exports= new Login;

