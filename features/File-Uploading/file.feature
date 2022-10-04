Feature: File-Uploading


# file uploading is not working in cucumber 


Scenario: verifying file uploading in wdio
Given user open herokuapp with fileUploading
When user upload the file
            # |file|
            # |/Users/akshay/Desktop/wdio cucumber/features/aaa.png|
Then File should be uploaded