# lyftTechnicalSample

## Summary
This is a backend Express app that is designed to accept a post request with a single argument at "/test". 
The expected argument is a json object with a key of "string_to_cut". 
If successful, the server will respond with a json object with a single key value pair. 
The value is a string made up of every third character in the original string.

## Start the app
  - Fork the repository
  - Run the app on localhost by typing the following into the command line: `node routes/index.js`

## Routes
#### "/test"
  - request type: POST
  - Request Body Argument(s): `{"string_to_cut": STRING}`
  - Response: JSON object with the key "return_string" and a string containing every third letter from the original string


## Example
  - Request Body (json): `{"string_to_cut": "pinkmustache"}`
  - Response: `{"return_string": "nuae"}`
