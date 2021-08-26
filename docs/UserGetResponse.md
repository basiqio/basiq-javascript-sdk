# BasiqApi.UserGetResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounts** | [**GetUserAccount**](GetUserAccount.md) |  | 
**business** | **String** | Business is ignored - it is populated when user has BusinessNumber or BusinessName swagger: ignore | [optional] 
**connections** | [**GetUserConnection**](GetUserConnection.md) |  | 
**email** | **String** | User email or empty. | 
**id** | **String** | User identification. | 
**links** | [**GetUserLinks**](GetUserLinks.md) |  | 
**mobile** | **String** | User mobile number, or empty. | 
**name** | **String** | Name, or empty. | 
**type** | **String** | Always \"user\". | 


