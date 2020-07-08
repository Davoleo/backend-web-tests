## Databases

- What's a database?
    - A collection of information
    - That has an interface to interact with data
- SQL (aka relational db) v/s NoSQL (aka non-relational db)

#### Relational Database data structure examples
| id | name | age | city |
|----|-------|-----|------|
| 1 | Bob | 45 | Los Angeles |
| 2 | Matthew | 24 | Luxembourg |
| 3 | Winston | 33 | UK |

| id | text |
|----| -----|
| 1  | "lmao u suck"|
| 2  | "Mr6060 is a bitch" |
| 3  | "I think I'm gonna have a walk" |
| 4  | "Got Ace on VALORANT :pog:" |

USER/COMMENT JOIN TABLE

| userID | commentID |
|---| --- |
| 2 | 2 |
| 1 | 4 |
| 1 | 1 |
| 3 | 3 |

Attributes:
- Tabular
- Not Flexible (data has to follow a specific pattern)
- Flat

#### Non-Relational Database data structure example

```metadata json
{
    name: "Matthew",
    age: 24,
    city: "Luxembourg",
    comments: [
      {text: "I think I'm gonna have a walk"}    
    ]
    favColor: "blue"
}
```

Attributes:
- They are not tabular
- It's flexible (data doesn't have to follow a specific pattern)
- It's not flat (there can be nested data)