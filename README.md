# LineupApp (Backend Endpoints)
## Server URL: 107.21.53.171:3000

## Key Ideas
* Device ID (device_id) is the unique identifier for each of our users


## /is-registered
#### Determines if the device and it's unique device_id exists in the database.
```javascript
//Request body
{
  device_id : String
}
```

| HTTP STATUS   | Responses      
| ------------- | ------------- 
| 200           | Returns the username (String) if their exists a username associated with the device_id
| 200           | Returns nothing. Occurs when device_id has not been registered yet on the database


## /register-device
#### Adds the device id to the database and an associated username. Also requires the device's OS type (ie: ios, android).
```javascript
//Request body
{
  device_id : String,
  username: String,
  device_type: String
}
```

| HTTP STATUS   | Responses      
| ------------- | ------------- 
| 200           | Returns nothing. This signals that the registration was successful.




## /create-line
#### Will generate a new line when given the device id and a description/title of the line.
```javascript
//Request body
{
  device_id : String,
  description : String
}
```

| HTTP STATUS   | Responses      
| ------------- | ------------- 
| 200           | Returns nothing. Status 200 signals that the line was sucessfully created.


## /load-line
#### Shows all users on a given line and all of their positions on the line
```javascript
//Request body
{
  line_id: Number
}
```
| HTTP STATUS   | Responses      
| ------------- | ------------- 
| 200           | Returns an array of objects. The structure of the object is shown below.
```javascript
{
  userID: Number, //This is the primary key of the user in the database. 
  username: String,
  position: Number //The position of this user in the line
}
```

## /get-metadata-for-lines-created-by-device'
#### Gets the meta data of all lines created by a given device_id.
```javascript
//Request body
{
  device_id: String
}
```
| HTTP STATUS   | Responses      
| ------------- | ------------- 
| 200           | Returns an empty array if the given device_id doesn't exist or their is no created lines under the device_id
| 200           | Returns an array of meta data info.  The structure of the meta data object is shown below.
```javascript
//Meta data object
{
  description: String, //This is the same thing as the "description" key used in /create-lines
  line_id: String
}
```

## /add-user-to-line
#### Adds a user to a line. This is done by specifying a username and a line_id.
```javascript
//Request body
{
  line_id: Number
}
```
| HTTP STATUS   | Responses      
| ------------- | ------------- 
| 200           | Returns an array of meta data info. The structure of the meta data object is shown below.
| 400           | Returns the string "The username specified does not exist", if the given username does not exist or there is no associated device_id with it.
```javascript
//meta data object
{
  description: String, //This is the same thing as the "description" key used in /create-lines
  line_id: String
}
```

## Delete-line
* 107.21.53.171:3000/delete-line
* input: LineID
* return: nothing

## Delete-user-from-line
* 107.21.53.171:3000/delete-user-from-line
* input: username, line_id
* return: nothing

## View-line-for-user
* 107.21.53.171:3000/view-line-for-user
* input:username
* return: the specific lineinfo the user is in

