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

    Gender {
        int id PK
        string Name
    }

    School {
        int id PK
        string Name
        int professionId FK
    }
    Profession {
        int id PK
        string Name
    }


    User ||--o{ Gender : "identify"
    School ||--o{ Profession : "Get Profession"

