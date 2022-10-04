Feature: purchase the product


    Scenario: TC-003 Add product to Online Cart and checkout
        Given I am on the home page
        When I am on the Sign In Page
        When Login using credentials
        When I add below products to cart
            | category | subCategory    | name                        | model  | quantity |
            | Dresses  | Casual Dresses | Printed Dress               | demo_4 | 2        |
          
        Then I shall validate shopping cart

        Then I shall be able to Buy the product
        Then  I shall be able to Buy bank wire

    # Scenario:TC-004 Contact customer service for the previous successful order
    #     Given I am on the Sign In Page
    #     When Login using newly created static credentials
    #     And I am on the contact page
    #     Then I send refund request to customer care for prev. order