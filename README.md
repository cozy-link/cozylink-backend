<div align="center">
  <h1 align="center">CozyLink Backend</h1>
</div>
<br>


## API routes
| Functionality            | Method | Endpoint                      | Description                                  |
|--------------------------|--------|-------------------------------|----------------------------------------------|
| **User Authentication**  |        |                               |                                              |
| Register User            | POST   | /users/register               | Registers a new user                         |
| Login User               | POST   | /users/login                  | Authenticates a user                         |
| Get User Profile         | GET    | /users/profile                | Retrieves the logged-in user's profile       |
| Update User Profile      | PUT    | /users/profile                | Updates the logged-in user's profile         |
| Delete User Account      | DELETE | /users/{userId}/delete        | Deletes a user account                       |
| **Property Listings**    |        |                               |                                              |
| Create Property          | POST   | /properties                   | Creates a new property listing               |
| List Properties          | GET    | /properties                   | Retrieves all property listings              |
| Get Property             | GET    | /properties/{propertyId}      | Retrieves a specific property listing        |
| Update Property          | PUT    | /properties/{propertyId}      | Updates a specific property listing          |
| Delete Property          | DELETE | /properties/{propertyId}      | Deletes a specific property listing          |
| Search Properties        | GET    | /properties/search            | Searches properties based on criteria        |

