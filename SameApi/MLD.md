```mermaid
erDiagram
    User {
        int id PK
        bool isAdmin
        DateTime birthday
        string firstName
        string lastName
        string pseudo
        string email
        string password
        int numberFollowers
        DateTime createAt
        int genderId FK
        int schoolId FK
    }
    Post {
        int id PK
    }

    Gender {
        int id PK
        string name
    }

    School {
        int id PK
        string name
        int professionId FK
    }
    
    Profession {
        int id PK
        string name
    }


    User ||--o{ Gender : "identify"
    User ||--o{ School : "at"
    School ||--o{ Profession : "Get Profession"

