# LineupApp (Backend Endpoints)
## Server URL: 107.21.53.171:3000

## Key Ideas
* Device ID (device_id) is the unique identifier for each of our users

</br>


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
</br>


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
</br>


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
</br>



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
</br>




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
</br>



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
| 200           | Returns nothing. This signals that the user was successfully added.
| 400           | Returns the string "The username specified does not exist", if the given username does not exist or there is no associated device_id with it.
</br>



## /check-positions
#### Returns an array that contains position of the user on each of the line's they are currently in. (This does not show the position of other user's in the lines. If you need to see other user's too, use /load-line)
```javascript
//Request body
{
  device_id : String
}
```
| HTTP STATUS   | Responses      
| ------------- | ------------- 
| 200           | Returns an array of status objects. Check below for the structure of the status object.
```javascript
{
  description: String,
  position: Number
}
```
</br>



## /delete-line 
#### Deletes the line
```javascript
//Request body
{
  line_id : Number
}
```
| HTTP STATUS   | Responses      
| ------------- | ------------- 
| 200           | Returns nothing. Signals that the deletion was successful.
</br>




## /delete-user-from-line 
#### Deletes the a user from a given line
```javascript
//Request body
{
  line_id : Number,
  username: String
}
```
| HTTP STATUS   | Responses      
| ------------- | ------------- 
| 200           | Returns nothing. Signals that the deletion was successful. Even if the username/line doesn't exist.
</br>


