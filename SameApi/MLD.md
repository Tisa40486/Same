```mermaid
erDiagram
    User {
        int id PK
        bool isAdmin
        DateTime Birthday
        string firstName
        string lastName
        string Pseudo
        string Email
        string password
        int NumberFollowers
        DateTime CreateAt
        int genderId FK
    }
