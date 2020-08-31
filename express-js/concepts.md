## Intro to Node

- Allows running Javascript code server-side
    - High Performance
    - npm
    - Javascript \-.\-
    - it's a popular technology
    
- Interacting with the node console
- Running a file with node `node <filename>`

### npm
Means: Node Package Manager<br>
Used to: install js libraries on node (server-side)<br>
`npm install` & `require()`/`import`

---

## Express
- A Web Development Framework 
(the control flow of the framework is not under your control)
- Lightweight (Does few things by itself)

 _(the library is just a collection of different features)_
 
#### package.json
 - it's a file where all the metadata about the project is saved
 - it also contains all the dependencies with their own compatible versions
 - the `--save` flag makes npm automatically create the package.json file while installing a package
 - the `npm init` command manually creates the package.json file with all the info
 
#### Routes
- Used in Express to intercept http request and doing something in response
- Route parameters allows creating patterns for custom routes
- The * route matches every request that wasn't specified before

#### Rendering HTML and Templates
- `res.render()` Renders HTML from an EJS file
- EJS (?)
- EJS Templates and variables

#### POST Requests
- Post Routes
- Body Parser

#### Web APIs 
- Application Programming Interfaces
- They allow everyone to get data easily without having to scrape websites manually

#### RESTful Routes Table
`rest_chart.html`

REST: a pattern that servers as mapping between HTTP routes and CRUD

#### Traversing folders
- `/` means go back to the root folder, then traverse forward/downward.
- `./` means begin in the folder we are currently in (current working directory) and traverse forward/downward in the tree.
- `../` means go up one directory, then begin the traverse.

#### Associations
Database Elements that are associated with each other:
- Users
- Posts
- Comments

Types of associations:
- one <-> one (one book has one publisher)
- one <-> many (one user can have multiple posts)
- many <-> many (students can signup to multiple courses and courses themselves can have multiple students)

Two ways to associate entities:
- Embedding Data
- Referencing Data