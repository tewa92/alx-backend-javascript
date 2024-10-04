# ES6 Promises

This repository contains tasks focused on learning how to use Promises in ECMAScript 2015 (ES6).

## Tasks Overview

+ [x] **0. Keep every promise you make and only make promises you can keep**  
  [0-promise.js](0-promise.js): Exports a function `getResponseFromAPI()` that returns a Promise.

+ [x] **1. Don't make a promise...if you know you can't keep it**  
  [1-promise.js](1-promise.js): Exports a function `getFullResponseFromAPI(success)` that returns a Promise.  
  The `success` parameter is a boolean, and based on its value:
  - If `true`, resolves with an object containing:
    - `status`: `200`
    - `body`: `'Success'`
  - If `false`, rejects with an error object: `'The fake API is not working currently'`.

+ [x] **2. Catch me if you can!**  
  [2-then.js](2-then.js): Exports a function `handleResponseFromAPI(promise)` that appends handlers to the given Promise:
  - On resolution, returns an object:
    - `status`: `200`
    - `body`: `'success'`
  - On rejection, returns an empty `Error` object.
  - Logs `Got a response from the API` for every resolution.

+ [x] **3. Handle multiple successful promises**  
  [3-all.js](3-all.js): Handles multiple promises:
  - Imports `uploadPhoto` and `createUser` from [utils.js](utils.js).
  - Exports `handleProfileSignup()`, which resolves all promises and logs `body firstName lastName`.
  - Logs `Signup system offline` in case of an error.

+ [x] **4. Simple promise**  
  [4-user-promise.js](4-user-promise.js): Exports `signUpUser(firstName, lastName)` which returns a resolved Promise with the following object:
  ```js
  {
    firstName: value,
    lastName: value,
  }
  ```

+ [x] **5. Reject the promises**  
  [5-photo-reject.js](5-photo-reject.js): Exports `uploadPhoto(fileName)` that returns a rejected Promise with an error message:  
  `'fileName cannot be processed'`.

+ [x] **6. Handle multiple promises**  
  [6-final-user.js](6-final-user.js): Exports `handleProfileSignup(firstName, lastName, fileName)`:
  - Imports `signUpUser` from [4-user-promise.js](4-user-promise.js) and `uploadPhoto` from [5-photo-reject.js](5-photo-reject.js).
  - Returns an array containing the status and result (value or error) of each Promise.

+ [x] **7. Load balancer**  
  [7-load_balancer.js](7-load_balancer.js): Exports `loadBalancer(chinaDownload, USDownload)` that returns the result of the first resolved Promise between the two.

+ [x] **8. Throw error / try catch**  
  [8-try.js](8-try.js): Exports `divideFunction(numerator, denominator)`:
  - Throws an error if `denominator` is `0`: `'cannot divide by 0'`.
  - Otherwise, returns the result of `numerator / denominator`.

+ [x] **9. Throw an error**  
  [9-try.js](9-try.js): Exports `guardrail(mathFunction)`:
  - Executes `mathFunction` and appends the result (or error) to an array `queue`.
  - Always appends `'Guardrail was processed'` to the `queue`.

+ [x] **10. Await / Async**  
  [100-await.js](100-await.js): Exports an async function `asyncUploadUser()`:
  - Imports `uploadPhoto` and `createUser` from [utils.js](utils.js).
  - Returns an object:
    ```js
    {
      photo: response_from_uploadPhoto_function,
      user: response_from_createUser_function,
    }
    ```
  - If either function fails, returns:
    ```js
    {
      photo: null,
      user: null,
    }
    ```