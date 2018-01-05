# goodeggs-interview
A simple http server that's useful for interviews

## Endpoints

```
https://goodeggs-interview.herokuapp.com/<n>
An endpoint that returns data about a randomly generated person.

Request params:
<n> - an integer between 0 and 149

Response:
statusCode - 200
body (JSON) -
  {
    id: <n>,
    friends: <array of integers between 0 and 149>,
    firstName: <string>,
    lastName: <string>,
    fullName: <string>,
    <etc...>
  }
```

```
https://goodeggs-interview.herokuapp.com/500
An endpoint that always throws an error

Response:
statusCode - 500
body (String) - "Server error"
```

```
https://goodeggs-interview.herokuapp.com/504
An endpoint that times out

Response: <none>
```
