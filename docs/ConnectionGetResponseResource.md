# BasiqApi.ConnectionGetResponseResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounts** | [**AccountsContainer**](AccountsContainer.md) |  | [optional] 
**id** | **String** | A string that uniquely identifies the user connection. | 
**institution** | [**ConnectionInstitution**](ConnectionInstitution.md) |  | 
**createdDate** | **String** | Created date of the connection, available only for SERVER_SCOPE. | 
**lastUsed** | **String** | UTC Date and Time of when the connection was last used, in RFC 3339 format, available only for SERVER_SCOPE. | [optional] 
**links** | [**GetConnectionLinks**](GetConnectionLinks.md) |  | 
**profile** | [**ConnectionProfile**](ConnectionProfile.md) |  | [optional] 
**status** | **String** | Indicates the connection status, available only for SERVER_SCOPE. Possible values include: <ul> <li>pending - the connection is in this status briefly until credentials are verified</li> <li>active - the connection is valid (is working!) and the credentials have been verified (the jobs steps will continue) </li> <li>invalid -  the connection is no longer valid and requires the user to update their logon details. Invalid connections cannot refreshed until the password is updated. </li> </ul> | [optional] 
**type** | **String** | Type, always \"connection\". | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `active` (value: `"active"`)

* `pending` (value: `"pending"`)

* `invalid` (value: `"invalid"`)




