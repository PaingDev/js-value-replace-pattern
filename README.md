# js-value-replace-pattern

# Easy to replace with given value in JavaScript Object or Array. It can be used for encrypted field inside in json to decrypt data. 


# sample usage
let data1 = {
  "org_admin": [{
    "userName": "MgMg",
    "password": "Password1",
  },
  {
    "userName": "AAA",
    "password": "Password2",
  },
  {
    "userName": "BBB",
    "password": "Password3",
  }
  ]
}

let data = [{
  "org_admin": [{
    "userName": "MgMg",
    "password": "Password1",
  },
  {
    "userName": "AAA",
    "password": "Password2",
  },
  {
    "userName": "BBB",
    "password": "Password3",
  }
  ]
},
{
  "org_admin": [{
    "userName": "Test1",
    "password": "Password1",
  },
  {
    "userName": "Test2",
    "password": "Password2",
  }
  ]
}
];

# //replace data  
valueReplace(data, "[].org_admin.[].userName", customAction);
valueReplace(data1, "org_admin.[].userName", customAction);

# // customAction is a function to replace a value for the pattern. This fuction should return replacement value.
