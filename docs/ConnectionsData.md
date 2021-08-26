# BasiqApi.ConnectionsData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdDate** | **String** | Created date of the connection, available only for SERVER_SCOPE. | 
**id** | **String** | Connection identification. | 
**institution** | [**ConnectionInstitution**](ConnectionInstitution.md) |  | 
**lastUsed** | **String** | Connection last used date, available only for SERVER_SCOPE. | [optional] 
**links** | [**GetConnectionsLinks**](GetConnectionsLinks.md) |  | 
**status** | **String** | Connection status, available only for SERVER_SCOPE. | [optional] 
**type** | **String** | Type, always \"connection\". | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `active` (value: `"active"`)

* `pending` (value: `"pending"`)

* `invalid` (value: `"invalid"`)




