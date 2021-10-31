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
### Voter APIs
#### Create new Voter API
HTTP Method: POST
```http
/api/voter
```
##### Request body
 JSON request Body:

```javascript
{
	"electionId": string,
	"username": string,
	"password": string
}
```
#### Voter Login API
HTTP Method: POST
```http
/api/voter/login
```
##### Request body
 JSON request Body:

```javascript
{
	"username": string,
	"password": string
}
```
