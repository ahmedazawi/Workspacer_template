# APi Documentation

## Auth

- <details><summary>login :white_check_mark: </summary>

  Request

  ```json
  {
    "email": "",
    "password": ""
  }
  ```

  Response

  ```json
  // status 200
  {
    "successful": true,
    "type": "ok",
    "message": "User logged in",
    "data": {
      "token": "",
      "firstName": "",
      "secondName": "",
      "user_avatar": "/userAvatars/3.jpeg",
      "registrationDate": "2021-04-27T19:55:38.000Z"
    }
  }
  ```

  ```json
  // status 401 - Invalid password
  {
    "successful": false,
    "type": "password",
    "message": "Invalid Password",
    "data": null
  }
  ```

  ```json
  // status 401 - Email Not Found
  {
    "successful": false,
    "type": "email",
    "message": "Email Not Registerated",
    "data": null
  }
  ```

  ```json
  // status 500 - Sever Side Issue
  {
    "successful": false,
    "type": "server",
    "message": "Some thing went wronge please contact the support team",
    "data": null
  }
  ```

  ```json
  // status 400 - Input Validation Error
  {
    "successful": false,
    "type": "validation",
    "message": "Input Validation Error",
    "data": {
      "type": "",
      "error": ""
    }
  }
  ```

  <details>
  <summary>Input Validation Types & Errors Data :white_check_mark:</summary>

  - ```json
    ...
    "data": {
      "type": "data",
      "error": "not supported type of data"
    }
    ```
  - ```json
    ...
    "data": {
      "type": "email",
      "error": ""
    }
    ```
  - ```json
    ...
    "data": {
      "type": "password",
      "error": ""
    }
    ```

  </details>

</details>

- <details><summary>register :white_check_mark: :wrench:</summary>

  Request

  ```json
  {
    "firstName": "",
    "secondName": "",
    "email": "",
    "password": ""
  }
  ```

  Response

  :wrench: :wrench: :wrench:

  ```json
  // status 200
  {
    "successful": true,
    "type": "ok",
    "message": "User Signed Up But Need Verification",
    "data": null
  }
  ```

  ```json
  // status 409 Email Already Used
  {
    "successful": false,
    "type": "email",
    "message": "Email Already Registered",
    "data": null
  }
  ```

  ````json
  // status 500 - Sever Side Issue
  {
  	"successful": false,
   "type": "server",
  	"message": "Some thing went wronge please contact the support team",
  	"data": null
  }
   ```
  ```json
  // status 400 - Input Validation Error
  {
  	"successful": false,
   "type": "validation",
  	"message": "Input Validation Error",
  	"data": {
         "type": "",
         "error": ""
     }
  }
   ```


  <details>
  <summary>Input Validation Types & Errors Data :white_check_mark:</summary>

  -
   ```json
   ...
   "data": {
     "type": "data",
     "error": "not supported type of data"
   }
   ```
  -
   ```json
   ...
   "data": {
     "type": "firstName",
     "error": ""
   }
   ```

  -
   ```json
   ...
   "data": {
     "type": "secondName",
     "error": ""
   }
   ```

  -
   ```json
   ...
   "data": {
     "type": "email",
     "error": ""
   }
   ```
  -
   ```json
   ...
   "data": {
     "type": "password",
     "error": ""
   }
   ```

  </details>
  </details>

  ````

- <details><summary>confirm-email :white_check_mark:</summary>

  Request `Get`
  URL: "http://192.168.1.2:100/user/register/:verifyToken" <br>
  `ملاحظة هاي الجزئية خاصة فقط للـ باك ايند في الوقت الحلي ` <br>

  Response

  - send token to the user email :white_check_mark:
  - server error :white_check_mark:
  - eamilError :white_check_mark:
  - expiredToken :white_check_mark:
  - verification success :white_check_mark:

</details>

- <details><summary>reset-password :white_check_mark:</summary>

  Request **(Requires Token)**

  ```json
  {
    "old-password": "",
    "new-password": ""
  }
  ```

  Response

  ```json
  // status 200
  {
    "successful": true,
    "type": "ok",
    "message": "Password has been reset",
    "data": null
  }
  ```

  ```json
  // status 401 - Invalid password
  {
    "successful": false,
    "type": "password",
    "message": "Invalid Password",
    "data": null
  }
  ```

  ```json
  // status 400 - Input Validation Error
  {
    "successful": false,
    "type": "validation",
    "message": "Input Validation Error",
    "data": {
      "type": "",
      "error": ""
    }
  }
  ```

  <details>
  <summary>Input Validation Types & Errors Data :white_check_mark:</summary>

  - ```json
    ...
    "data": {
      "type": "oldPassword",
      "error": ""
    }
    ```
  - ```json
    ...
    "data": {
      "type": "newPassword",
      "error": ""
    }
    ```

  </details>

</details>

- <details><summary>forgot-password :white_check_mark:</summary>

  Request `Post` <br>

  `/user/password/forget`

  ```json
  {
    "email": "XXXX@gmail.com"
  }
  ```

  Response

  ```json
  // status 200
  {
    "successful": true,
    "type": "ok",
    "message": "Password reset token has been send to the user email",
    "data": null
  }
  ```

  ```json
  // status 409
  {
    "successful": false,
    "type": "email",
    "message": "Email Not Registered",
    "data": null
  }
  ```

  ```json
  // status 500 - Sever Side Issue
  {
    "successful": false,
    "type": "server",
    "message": "Some thing went wronge please contact the support team",
    "data": null
  }
  ```

  ```json
  // status 400 - Input Validation Error
  {
    "successful": false,
    "type": "validation",
    "message": "Input Validation Error",
    "data": {
      "type": "email",
      "error": ""
    }
  }
  ```

</details>

- <details><summary>confirm-forgot-password :white_check_mark:</summary>
  `ملاحظة هاي الجزئية خاصة فقط للـ باك ايند في الوقت الحلي ` <br>
  Request `Get` , `POST` <br>
  `Get: /user/password/forget/:verifyToken`

  - Expired Token :white_check_mark:
  - Render password form :white_check_mark:

  `Post: /user/password/forget/update`

  - Expired Token :white_check_mark:
  - new , old password validation check :white_check_mark:
  - Server error :white_check_mark:
  - success "Password Updated!" :white_check_mark:

</details>

## Workspace

- <details><summary>new-workspace ✅</summary>

  Request

  ```json
  {
    "workspaceName": "",
    "workspaceDescription": ""
  }
  ```

  Response

  ```json
  // status 200
  {
    "successful": true,
    "type": "ok",
    "message": "New workspace has been created",
    "data": {
      "workspace_id": ""
    }
  }
  ```

  ```json
  // status 500 - Sever Side Issue
  {
    "successful": false,
    "type": "server",
    "message": "Some thing went wronge please contact the support team",
    "data": null
  }
  ```

  ````json
     // status 400 - Input Validation Error
     {
       "successful": false,
       "type": "validation",
       "message": "Input Validation Error",
        "data": {
              "type": "",
              "error": ""
          }
     }
    ```


  <details>
  <summary>Input Validation Types & Errors Data :white_check_mark:</summary>

  -
    ```json
    ...
    "data": {
      "type": "data",
      "error": "not supported type of data"
    }
    ```
  -
    ```json
    ...
    "data": {
      "type": "workspaceName",
      "error": ""
    }
    ```
  -
    ```json
    ...
    "data": {
      "type": "workspaceDescription",
      "error": ""
    }
    ```

  </details>
  </details>

  ````

- <details><summary>Set-workspace-Avatar :white_check_mark:</summary>

  Request `POST`
  `/workspace/avatar/:workspaceId`

  ```json
  "headers": {
      "token": ""
  },
  "body": {
   "workspaceAvatar": "formData object!"
  }
  ```

  Response

  ```json
  // status 200
  {
    "successful": true,
    "type": "ok",
    "message": "User Picture has been stored correctly",
    "data": null
  }
  ```

  ```json
  // status 415 - Image Type Not Supported
  {
    "successful": false,
    "type": "data",
    "message": "Picture Type is not supported use JPEG or PNG only",
    "data": null
  }
  ```

  ```json
  // status 500 - Server Side Issue
  {
    "successful": false,
    "type": "server",
    "message": "Some thing went wronge please contact the support team",
    "data": null
  }
  ```

</detais>

- <details><summary>Delete-workspace-Avatar :white_check_mark:</summary>

  Request `Delete`
  `/workspace/avatar/:workspaceId`

  ```json
  "headers": {
    "token": ""
  }
  ```

  Response

  ```json
  // status 200
  {
    "successful": true,
    "type": "ok",
    "message": "User picture has been removed correctly",
    "data": null
  }
  ```

  ```json
  // status 500 - Server Side Issue
  {
    "successful": false,
    "type": "server",
    "message": "Some thing went wronge please contact the support team",
    "data": null
  }
  ```

</detais>

- <details><summary>get-workspaces :white_check_mark:</summary>

  Request `(GET)`

  Response

  ```json
  // status 200
  {
    "successful": true,
    "type": "ok",
    "message": "Get all user workspaces",
    "data": null
  }
  ```

  ```json
  // status 200
  {
    "successful": true,
    "type": "ok",
    "message": "Get all user workspaces",
    "data": [
        {
            "workspaceId": ,
            "workspaceName": "",
            "workspaceDescription": "",
            "workspaceAvatar": "",
            "role": "",
            "users": [
                {
                    "firstName": "",
                    "secondName": "",
                    "user_avatar": ""
                }
            ]
        }
    ]
  }
  ```

  ```json
  // status 500 - Sever Side Issue
  {
    "successful": false,
    "type": "server",
    "message": "Some thing went wronge please contact the support team",
    "data": null
  }
  ```

</details>

- <details><summary>delete-workspace :white_check_mark:</summary>

  Request `(DELETE)`

  Response

  ```json
  // status 200
  {
    "successful": true,
    "type": "ok",
    "message": "Workspace has been wiped",
    "data": null
  }
  ```

  ```json
  // status 409 - server or user error
  {
    "successful": false,
    "type": "conflict",
    "message": "Can't Deleting the workspace please contact the support team",
    "data": null
  }
  ```

  ```json
  // status 500 - Sever Side Issue
  {
    "successful": false,
    "type": "server",
    "message": "Some thing went wronge please contact the support team",
    "data": null
  }
  ```

  </details>

- <details><summary>leave-workspace-member :white_check_mark:</summary>

  Request `(DELETE)`

  Response

  ```json
  // status 200
  {
    "successful": true,
    "type": "ok",
    "message": "user has been wiped from workspace",
    "data": null
  }
  ```

  ```json
  // status 409 - server or user error
  {
    "successful": false,
    "type": "conflict",
    "message": "Can't leaving the workspace please contact the workspace owner",
    "data": null
  }
  ```

  ```json
  // status 500 - Sever Side Issue
  {
    "successful": false,
    "type": "server",
    "message": "Some thing went wronge please contact the support team",
    "data": null
  }
  ```

  </details>

- <details><summary>Update-workspace :construction:</summary>

  Request

  ```json
  {
     "workspaceId": ,
    "updateWorkspaceName": "",
    "updateWorkspaceDescription": ""
  }
  ```

  Response

  ```json
  // status 200
  {
    "successful": true,
    "type": "ok",
    "message": "user has been wiped from workspace",
    "data": null
  }
  ```

  ```json
  // status 409 - server or user error
  {
    "successful": false,
    "type": "conflict",
    "message": "Can't updating the workspace please contact the support team",
    "data": null
  }
  ```

  ```json
  // status 500 - Sever Side Issue
  {
    "successful": false,
    "type": "server",
    "message": "Some thing went wronge please contact the support team",
    "data": null
  }
  ```

  ```json
  // status 400 - Input Validation Error
  {
    "successful": false,
    "type": "validation",
    "message": "Input Validation Error",
    "data": {
      "type": "",
      "error": ""
    }
  }
  ```

   <details>
  <summary>Input Validation Types & Errors Data :white_check_mark:</summary>

  - ```json
    ...
    "data": {
      "type": "updateWorkspaceName",
      "error": ""
    }
    ```
  - ```json
    ...
    "data": {
      "type": "updateWorkspaceDescription",
      "error": ""
    }
    ```

  </details>

</details>

- <details><summary>Dynamic-workspace :white_check_mark: </summary>

  Request `Get`
  `URL: "workspace/:id"`

  Response

  ```json
  // status 200
  {
    "successful": true,
    "type": "ok",
    "message": "Workspace is exists",
    "data": {
      "workspaceName": "",
      "users": [
        {
          "role": "employer",
          "userId": 2,
          "firstName": "ali",
          "secondName": "ali",
          "user_avatar": "/userAvatars/2.jpeg"
        },
        {
          "role": "employee",
          "userId": 3,
          "firstName": "thotho",
          "secondName": "ali",
          "user_avatar": null
        }
      ]
    }
  }
  ```

  ```json
  // status 200
  {
    "successful": true,
    "type": "ok",
    "message": "is not exists",
    "data": null
  }
  ```

  ```json
  // status 500 - Sever Side Issue
  {
    "successful": false,
    "type": "server",
    "message": "Some thing went wronge please contact the support team",
    "data": null
  }
  ```

</details>

- <details><summary>Get-workspace-Members :white_check_mark:</summary>

  Request `Get`
  `URL: "workspace/members/:id"`

  Response

  ```json
  // status 200
  {
    "successful": true,
    "type": "ok",
    "message": "Workspace members have been found",
    "data":  [
        {
            "userId": ,
            "firstName": "",
            "secondName": "",
            "user_avatar": "",
            "role": ""
        }
    ]
  }
  ```

  ```json
  // status 500 - Sever Side Issue
  {
    "successful": false,
    "type": "server",
    "message": "Some thing went wronge please contact the support team",
    "data": null
  }
  ```

</details>

- <details><summary>seek-members :white_check_mark:</summary>

  Request `Get`
  `URL: "workspace/members/seek/:id/:keyword"`
  `Token in Header!`
  Response

  ```json
  // status 200
  {
    "successful": true,
    "type": "ok",
    "message": "Some members are found",
    "data":  [
        {
            "userId": ,
            "firstName": "",
            "secondName": "",
            "user_avatar": "",
            "isJoined": 1 or 0 (TRUE or FALSE)
        }
    ]
  }
  ```

  ```json
  // status 200
  {
    "successful": true,
    "type": "ok",
    "message": "Memeber is not exist",
    "data": null
  }
  ```

  ```json
  // status 500 - Sever Side Issue
  {
    "successful": false,
    "type": "server",
    "message": "Some thing went wronge please contact the support team",
    "data": null
  }
  ```

</details>

- <details><summary>Send-invite :white_check_mark: </summary>

  Request `Post`
  `URL: "workspace/invite"`
  `ملاحظة لاتقم بارسل الدعوة الى نفس اليوزر اكثر من مرة `

  ```json
    "header": {
      "token": ""
    },
    "body":{
      "workspaceId": "",
      "employeeId": ""
    }
  ```

  Response

  ```json
  // status 200
  {
    "successful": true,
    "type": "ok",
    "message": "New employee has been added",
    "data": [
      {
        "addedUserId": 2
      }
    ]
  }
  ```

  ```json
  // status 500 - Sever Side Issue
  {
    "successful": false,
    "type": "server",
    "message": "Some thing went wronge please contact the support team",
    "data": null
  }
  ```

</details>

## Task

- <details><summary>Create-task :white_check_mark:</summary>

  Request `Post`
  `URL: "workspace/new/task"`

  ```json
    "header": {
      "token": ""
    },
    "body":{
      "workspace_id": ,
      "taskTitle": "",
      "taskContent": "",
      "priority": "",
      "assignedMembers": [
        {"userId": 1} , {"userId": 2}
      ]
    }
  ```

  Response

  ```json
  // status 200
  {
    "successful": true,
    "type": "ok",
    "message": "New task has been created",
    "data": null
  }
  ```

  ```json
  // status 500 - Sever Side Issue
  {
    "successful": false,
    "type": "server",
    "message": "Some thing went wronge please contact the support team",
    "data": null
  }
  ```

</details>

- <details><summary>Get-User-Task :white_check_mark:</summary>

  Request `Get`
  `URL: "/workspace/tasks/:id/:role"`
  :exclamation: `role = employer or employee` :exclamation:

  ```json
    "header": {
      "token": ""
    }
  ```

  Response

  ```json
  // status 200
  {
    "successful": true,
    "type": "ok",
    "message": "All related tasks have been found",
    "data": {
      "WAITING": [
        {
          "title": "Task 4",
          "taskId": 14,
          "content": "Welcome",
          "prority": "NORMAL",
          "taskMembers": [
                    {
                        "user_id": 3,
                        "firstName": "thotho",
                        "secondName": "ali",
                        "user_avatar": "/userAvatars/3.jpeg"
                    }
                ],
          "taskCreationDate": "2021-04-30 10:57:08.000000"
        }
      ],
      "IN_PROGRESS": [...],
      "STUCK": [...],
      "DONE": [...]
    }
  }
  ```

  ```json
  // status 500 - Sever Side Issue
  {
    "successful": false,
    "type": "server",
    "message": "Some thing went wronge please contact the support team",
    "data": null
  }
  ```

</details>

## Management

## Misc

- <details><summary>Set-User-Avatar :white_check_mark:</summary>

  Request `POST`

  ```json
  "headers": {
      "token": ""
  },
  "body": {
   "userAvatar": "formData object!"
  }
  ```

  Response

  ```json
  // status 200
  {
    "successful": true,
    "type": "ok",
    "message": "User Picture has been stored correctly",
    "data": null
  }
  ```

  ```json
  // status 415 - Image Type Not Supported
  {
    "successful": false,
    "type": "data",
    "message": "Image Type is not supported use JPEG or PNG only",
    "data": null
  }
  ```

  ```json
  // status 500 - Server Side Issue
  {
    "successful": false,
    "type": "server",
    "message": "Some thing went wronge please contact the support team",
    "data": null
  }
  ```

</detais>

- <details><summary>Delete-User-Avatar :white_check_mark:</summary>

  Request `Delete`

  ```json
  "headers": {
    "token": ""
  }
  ```

  Response

  ```json
  // status 200
  {
    "successful": true,
    "type": "ok",
    "message": "User picture has been removed correctly",
    "data": null
  }
  ```

  ```json
  // status 500 - Server Side Issue
  {
    "successful": false,
    "type": "server",
    "message": "Some thing went wronge please contact the support team",
    "data": null
  }
  ```

</detais>

Extra, useful APIs
