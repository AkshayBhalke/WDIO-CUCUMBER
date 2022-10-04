class Product{

    // get category() {
    //     return $('//div[@id="block_top_menu"]/ul/li/a[text()="Women"]')
    // }
    get subcategory(){
        return $$ ('subcategory-name')
    }
    get txtproductTitle(){
        return $$('//div[@class="right-block"]//a[@class="product-name"]')
    }

    get cartqtyInput(){
        return $('#quantity_wanted')
    }

    get modelTextVer(){
        return $('//p[@id="product_reference"]//span[@class="editable"]')
    }

    get btnaddToCart(){
        return $('#add_to_cart')
    }

    get btncontinueShoppiing(){
        return $('//span[@title="Continue shopping"]')
    }

    get btnShoppingCart(){
        return $('//a[@title="View my shopping cart"]')
    }
    get btnContinueChkout(){
        return $('//span[text()="Proceed to checkout"]')
    }
    get listShoppingCartItem(){
        return $('.product-name')

    }
    get checoutFromCart(){
        return $('.button.btn.btn-default.standard-checkout')
    }
    get tabelsumrytablerow(){
        return $('//table[@id="cart_summary"]//tbody//tr')
    }
    get coment(){
        return $('textarea')
    }
    get h3(){
        return $('h3')
    }
  

    //function

 addproduct = async function(table){
        const tableRow= await table.hashes()
        for (const element of tableRow){
            const btnCategory=await $(`//div[@id="block_top_menu"]/ul/li/a[text()="${element.category}"]`)
      
        await btnCategory.click()
        //subcategory
        await this.subcategory.forEach(async function(value ){
            const subcat=await value.getText();
            if(subcat===element.subcategory){
                await value.click();
                return;
            }
        });

        //select product

        await this.txtproductTitle.forEach(async function(value){
            const prodName=await value.getText();
            if(await prodName===element.name){
                await value.click()
                return; 
            }
        })


        //enter qty
        await this.cartqtyInput.setValue(element.quantity);

        //validate model number
        // expect(await this.modelTextVer.getText()).toEqual(element.model)
        // const vald=await this.modelTextVer.getText()
        // expect(vald).toEqual(element.model)
        await this.btnaddToCart.click()
        //continue shoppiing button
        // await this.btncontinueShoppiing.isClickable({timeout:10000})
        // await this.btncontinueShoppiing.click(); 
        await browser.pause(5000)
        
    }
    

    }

    verify= async function(){
        
        const pgheading=await $('#cart_title')
        await pgheading.waitForExist({timeout:5000});
        expect  (await pgheading.getText())
        .toContain("SHOPPING-CART SUMMARY")
        
        
    }

    buyProduct= async function(){

        await this.btnContinueChkout.click();
        await this.coment.setValue("this is my order")
        await this.btnContinueChkout.click();
        await $('//input[@id="cgv"]').click()
        await $('.button.btn.btn-default.standard-checkout.button-medium').click()
        
    }

    payment=async function(){
        await $('//a[@title="Pay by bank wire"]').click()
        expect (await this.h3.getText()).toEqual("BANK-WIRE PAYMENT.")
        await $('//p[@id="cart_navigation"]//button').click()
        await browser.pause(4000)
        
        const heading=await $('h1').getText()
        expect(heading).toEqual("ORDER CONFIRMATION")

        
    }

//  verifyShoppingCart= async function(table){
//     await this.btnShoppingCart.moveto();
//     expect (await this.listShoppingCartItem.length).toEqual(2);
//     await browser.navigateTo('http://automationpractice.com/index.php?controller=order')

//     const pgheading=await $('#cart_title')
//     await pgheading.waitForExist({timeout:5000});
//     expect  (await (await pgheading.getText()).trim()).toContain("SHOPPING-CART SUMMARY")

//     const tableRows= table.hashes();
//     for (const element of tableRows){
//         console.log(element.name)
//         console.log(element.model)
//         console.log(element.quantity)

//         //validate summary table
//         await this.tabelsumrytablerow.filter(async function(el){
//             (await (await el.$('//td[@class="cart_description"]//p')).getText())===el.name;

//         }.forEach(async function(ele){

//         }))


//     }

//  }



}

module.exports = new Product