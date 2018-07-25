define({ "api": [
  {
    "type": "get",
    "url": "/api/auth/activate?token=:token",
    "title": "Activate user",
    "version": "1.0.0",
    "name": "Activate",
    "group": "Auth",
    "permission": [
      {
        "name": "all"
      }
    ],
    "description": "<p>Response data in &quot;auth-activate&quot; cookie, redirect to &quot;/profile&quot;</p>",
    "filename": "./components/auth/auth.route.js",
    "groupTitle": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "data.user",
            "description": "<p>User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.accessToken",
            "description": "<p>Token for access to private methods</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.refreshToken",
            "description": "<p>Token to update the access token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.expiresIn",
            "description": "<p>Token expiration date in seconds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.tokenType",
            "description": "<p>Token type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example:",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"message\": \"User successfully logged in\",\n   \"data\": {\n       \"user\": User,\n       \"accessToken\": \"eyJhbGciOiJIUzI1NiIsI...\",\n       \"refreshToken\": \"5981764d3e73971ffc1c...\",\n       \"expiresIn\": 1507027911,\n       \"tokenType\": \"JWT\"\n   }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/auth/verify",
    "title": "Add user as a referal",
    "version": "1.0.0",
    "name": "Add_as_a_referal",
    "group": "Auth",
    "permission": [
      {
        "name": "all"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "referer",
            "description": "<p>Referer's id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "referal",
            "description": "<p>Referal's id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      }
    },
    "filename": "./components/auth/auth.route.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/auth/forgot",
    "title": "Forgot password",
    "version": "1.0.0",
    "name": "Forgot",
    "group": "Auth",
    "permission": [
      {
        "name": "all"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          }
        ]
      }
    },
    "filename": "./components/auth/auth.route.js",
    "groupTitle": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": ...\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "User login",
    "version": "1.0.0",
    "name": "Login",
    "group": "Auth",
    "permission": [
      {
        "name": "all"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "filename": "./components/auth/auth.route.js",
    "groupTitle": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "data.user",
            "description": "<p>User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.accessToken",
            "description": "<p>Token for access to private methods</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.refreshToken",
            "description": "<p>Token to update the access token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.expiresIn",
            "description": "<p>Token expiration date in seconds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.tokenType",
            "description": "<p>Token type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example:",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"message\": \"User successfully logged in\",\n   \"data\": {\n       \"user\": User,\n       \"accessToken\": \"eyJhbGciOiJIUzI1NiIsI...\",\n       \"refreshToken\": \"5981764d3e73971ffc1c...\",\n       \"expiresIn\": 1507027911,\n       \"tokenType\": \"JWT\"\n   }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/auth/login/facebook",
    "title": "Facebook login",
    "version": "1.0.0",
    "name": "LoginFacebook",
    "group": "Auth",
    "permission": [
      {
        "name": "all"
      }
    ],
    "description": "<p>Redirect to &quot;/api/auth/login/facebook/callback&quot;</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "---",
            "description": "<p>Facebook auth html page</p>"
          }
        ]
      }
    },
    "filename": "./components/auth/auth.route.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/api/auth/login/facebook/callback",
    "title": "Facebook callback",
    "version": "1.0.0",
    "name": "LoginFacebookCallback",
    "group": "Auth",
    "permission": [
      {
        "name": "all"
      }
    ],
    "description": "<p>Response data in &quot;auth-social&quot; cookie, redirect to &quot;/&quot;</p>",
    "filename": "./components/auth/auth.route.js",
    "groupTitle": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "data.user",
            "description": "<p>User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.accessToken",
            "description": "<p>Token for access to private methods</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.refreshToken",
            "description": "<p>Token to update the access token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.expiresIn",
            "description": "<p>Token expiration date in seconds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.tokenType",
            "description": "<p>Token type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example:",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"message\": \"User successfully logged in\",\n   \"data\": {\n       \"user\": User,\n       \"accessToken\": \"eyJhbGciOiJIUzI1NiIsI...\",\n       \"refreshToken\": \"5981764d3e73971ffc1c...\",\n       \"expiresIn\": 1507027911,\n       \"tokenType\": \"JWT\"\n   }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/auth/login/google",
    "title": "Google login",
    "version": "1.0.0",
    "name": "LoginGoogle",
    "group": "Auth",
    "permission": [
      {
        "name": "all"
      }
    ],
    "description": "<p>Redirect to &quot;/api/auth/login/google/callback&quot;</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "---",
            "description": "<p>Google auth html page</p>"
          }
        ]
      }
    },
    "filename": "./components/auth/auth.route.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/api/auth/login/google/callback",
    "title": "Google callback",
    "version": "1.0.0",
    "name": "LoginGoogleCallback",
    "group": "Auth",
    "permission": [
      {
        "name": "all"
      }
    ],
    "description": "<p>Response data in &quot;auth-social&quot; cookie, redirect to &quot;/&quot;</p>",
    "filename": "./components/auth/auth.route.js",
    "groupTitle": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "data.user",
            "description": "<p>User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.accessToken",
            "description": "<p>Token for access to private methods</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.refreshToken",
            "description": "<p>Token to update the access token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.expiresIn",
            "description": "<p>Token expiration date in seconds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.tokenType",
            "description": "<p>Token type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example:",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"message\": \"User successfully logged in\",\n   \"data\": {\n       \"user\": User,\n       \"accessToken\": \"eyJhbGciOiJIUzI1NiIsI...\",\n       \"refreshToken\": \"5981764d3e73971ffc1c...\",\n       \"expiresIn\": 1507027911,\n       \"tokenType\": \"JWT\"\n   }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/auth/login/linkedin",
    "title": "Linkedin login",
    "version": "1.0.0",
    "name": "LoginLinkedin",
    "group": "Auth",
    "permission": [
      {
        "name": "all"
      }
    ],
    "description": "<p>Redirect to &quot;/api/auth/login/linkedin/callback&quot;</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "---",
            "description": "<p>Linkedin auth html page</p>"
          }
        ]
      }
    },
    "filename": "./components/auth/auth.route.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/api/auth/login/linkedin/callback",
    "title": "Linkedin callback",
    "version": "1.0.0",
    "name": "LoginLinkedinCallback",
    "group": "Auth",
    "permission": [
      {
        "name": "all"
      }
    ],
    "description": "<p>Response data in &quot;auth-social&quot; cookie, redirect to &quot;/&quot;</p>",
    "filename": "./components/auth/auth.route.js",
    "groupTitle": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "data.user",
            "description": "<p>User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.accessToken",
            "description": "<p>Token for access to private methods</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.refreshToken",
            "description": "<p>Token to update the access token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.expiresIn",
            "description": "<p>Token expiration date in seconds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.tokenType",
            "description": "<p>Token type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example:",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"message\": \"User successfully logged in\",\n   \"data\": {\n       \"user\": User,\n       \"accessToken\": \"eyJhbGciOiJIUzI1NiIsI...\",\n       \"refreshToken\": \"5981764d3e73971ffc1c...\",\n       \"expiresIn\": 1507027911,\n       \"tokenType\": \"JWT\"\n   }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/auth/login/twitter",
    "title": "Twitter login",
    "version": "1.0.0",
    "name": "LoginTwitter",
    "group": "Auth",
    "permission": [
      {
        "name": "all"
      }
    ],
    "description": "<p>Redirect to &quot;/api/auth/login/twitter/callback&quot;</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "---",
            "description": "<p>Twitter auth html page</p>"
          }
        ]
      }
    },
    "filename": "./components/auth/auth.route.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/api/auth/login/twitter/callback",
    "title": "Twitter callback",
    "version": "1.0.0",
    "name": "LoginTwitterCallback",
    "group": "Auth",
    "permission": [
      {
        "name": "all"
      }
    ],
    "description": "<p>Response data in &quot;auth-social&quot; cookie, redirect to &quot;/&quot;</p>",
    "filename": "./components/auth/auth.route.js",
    "groupTitle": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "data.user",
            "description": "<p>User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.accessToken",
            "description": "<p>Token for access to private methods</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.refreshToken",
            "description": "<p>Token to update the access token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.expiresIn",
            "description": "<p>Token expiration date in seconds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.tokenType",
            "description": "<p>Token type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example:",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"message\": \"User successfully logged in\",\n   \"data\": {\n       \"user\": User,\n       \"accessToken\": \"eyJhbGciOiJIUzI1NiIsI...\",\n       \"refreshToken\": \"5981764d3e73971ffc1c...\",\n       \"expiresIn\": 1507027911,\n       \"tokenType\": \"JWT\"\n   }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/auth/register",
    "title": "Register user",
    "version": "1.0.0",
    "name": "Registration",
    "group": "Auth",
    "permission": [
      {
        "name": "all"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "displayName",
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example:",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"message\": \"Successfully created new user\",\n   \"data\": User",
          "type": "json"
        }
      ]
    },
    "filename": "./components/auth/auth.route.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/auth/token",
    "title": "Refresh access token",
    "version": "1.0.0",
    "name": "Token",
    "group": "Auth",
    "permission": [
      {
        "name": "all"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Refresh token</p>"
          }
        ]
      }
    },
    "filename": "./components/auth/auth.route.js",
    "groupTitle": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "data.user",
            "description": "<p>User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.accessToken",
            "description": "<p>Token for access to private methods</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.refreshToken",
            "description": "<p>Token to update the access token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.expiresIn",
            "description": "<p>Token expiration date in seconds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.tokenType",
            "description": "<p>Token type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example:",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"message\": \"User successfully logged in\",\n   \"data\": {\n       \"user\": User,\n       \"accessToken\": \"eyJhbGciOiJIUzI1NiIsI...\",\n       \"refreshToken\": \"5981764d3e73971ffc1c...\",\n       \"expiresIn\": 1507027911,\n       \"tokenType\": \"JWT\"\n   }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/auth/verify",
    "title": "Send verify email",
    "version": "1.0.0",
    "name": "Verify_Email",
    "group": "Auth",
    "permission": [
      {
        "name": "all"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      }
    },
    "filename": "./components/auth/auth.route.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/api/user/current",
    "title": "Get current user",
    "version": "1.0.0",
    "name": "GetCurrentUser",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"data\": User\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./components/user/user.route.js",
    "groupTitle": "User",
    "header": {
      "examples": [
        {
          "title": "Header Example:",
          "content": "{\n   \"Authorization\": \"JWT eyJhbGciOiJIUzI1...\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Token expired error Example:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"success\": false,\n    \"message\": \"Unauthorized\"\n}",
          "type": "json"
        },
        {
          "title": "Wrong permissions Example:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"success\": false,\n    \"message\": \"You do not have permissions\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/user?userId=:userId",
    "title": "Get user",
    "version": "1.0.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "all"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"data\": User\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./components/user/user.route.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/password",
    "title": "Change current user password",
    "version": "1.0.0",
    "name": "PostPassword",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>Old password of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>New password for the User</p>"
          }
        ]
      }
    },
    "filename": "./components/user/user.route.js",
    "groupTitle": "User",
    "header": {
      "examples": [
        {
          "title": "Header Example:",
          "content": "{\n   \"Authorization\": \"JWT eyJhbGciOiJIUzI1...\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": ...\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Token expired error Example:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"success\": false,\n    \"message\": \"Unauthorized\"\n}",
          "type": "json"
        },
        {
          "title": "Wrong permissions Example:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"success\": false,\n    \"message\": \"You do not have permissions\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/user",
    "title": "Update current user",
    "version": "1.0.0",
    "name": "PutCurrentUser",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "displayName",
            "description": "<p>Display name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "newPassword",
            "description": "<p>New password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"data\": User\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./components/user/user.route.js",
    "groupTitle": "User",
    "header": {
      "examples": [
        {
          "title": "Header Example:",
          "content": "{\n   \"Authorization\": \"JWT eyJhbGciOiJIUzI1...\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Token expired error Example:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"success\": false,\n    \"message\": \"Unauthorized\"\n}",
          "type": "json"
        },
        {
          "title": "Wrong permissions Example:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"success\": false,\n    \"message\": \"You do not have permissions\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/user/photo",
    "title": "Update current user photo",
    "version": "1.0.0",
    "name": "PutCurrentUserPhoto",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "photo",
            "description": "<p>User photo</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"data\": User\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./components/user/user.route.js",
    "groupTitle": "User",
    "header": {
      "examples": [
        {
          "title": "Header Example:",
          "content": "{\n   \"Authorization\": \"JWT eyJhbGciOiJIUzI1...\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Token expired error Example:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"success\": false,\n    \"message\": \"Unauthorized\"\n}",
          "type": "json"
        },
        {
          "title": "Wrong permissions Example:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"success\": false,\n    \"message\": \"You do not have permissions\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/models",
    "title": "User",
    "version": "1.0.0",
    "name": "User",
    "group": "_Models",
    "success": {
      "fields": {
        "User": [
          {
            "group": "User",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id</p>"
          },
          {
            "group": "User",
            "type": "String",
            "optional": false,
            "field": "displayName",
            "description": "<p>Name</p>"
          },
          {
            "group": "User",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "User",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User name</p>"
          },
          {
            "group": "User",
            "type": "String",
            "optional": false,
            "field": "bio",
            "description": "<p>Biography</p>"
          },
          {
            "group": "User",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Location</p>"
          },
          {
            "group": "User",
            "type": "String",
            "optional": false,
            "field": "referals",
            "description": "<p>Array of referals id</p>"
          },
          {
            "group": "User",
            "type": "String",
            "optional": false,
            "field": "google",
            "description": "<p>Google id</p>"
          },
          {
            "group": "User",
            "type": "String",
            "optional": false,
            "field": "twitter",
            "description": "<p>Twitter id</p>"
          },
          {
            "group": "User",
            "type": "String",
            "optional": false,
            "field": "facebook",
            "description": "<p>Facebook id</p>"
          },
          {
            "group": "User",
            "type": "String",
            "optional": false,
            "field": "linkedin",
            "description": "<p>Linkedin id</p>"
          }
        ]
      }
    },
    "filename": "./components/user/user.model.js",
    "groupTitle": "_Models"
  }
] });
