# Introduction
This application has exposed the API to handle E-Voting.
The UI application is driven by Blockchain smart contracts.
https://github.com/khanujasunny/Blockchain-EVoting-UI

## Run following commands set-up and run the project properly (Considering you have npm/ node installed)
```console
npm install --no-optional
```
```console
npm start
```

`
API Base path: https://e-voting-application.herokuapp.com/
`
# Below are the APIs currently available
### Elections API

#### Get all Elections:
HTTP Method: GET
```http
/api/electionName
```

#### Create an Election:
HTTP Method: POST
```http
/api/electionName
```
##### Request body
 JSON request Body:

```javascript
{
  "election_name": string,
  "election_organizer": string,
  "election_password": string
}
```

### Admin APIs
#### Create new Admin API
HTTP Method: POST
```http
/api/admin
```
##### Request body
 JSON request Body:

```javascript
{
	"username": string,
	"password": string
}
```
#### Admin Login API
HTTP Method: POST
```http
/api/admin/login
```
##### Request body
 JSON request Body:

```javascript
{
	"username": string,
	"password": string
}
```
