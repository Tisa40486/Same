erDiagram
    USER {
        int id PK
        string pseudo
        string email
        string password
        datetime birthday
        datetime createdAt
        int id_gender_fk FK
        int id_school_fk FK
    }

    POST {
        int id_post PK
        string content
        string img_url
        datetime createdAt
        int id_user_fk FK
    }

    COMMENT {
        int id PK
        string content
        datetime createdAt
        int id_user_fk FK
        int id_post_fk FK
    }

    POST_LIKE {
        int id_user_fk PK,FK
        int id_post_fk PK,FK
    }

    LKP_TAG {
        int id_tag PK
        string name
        bool is_required
    }

    POST_TAGS {
        int id_post_fk PK,FK
        int id_tag_fk PK,FK
    }

    LKP_SCHOOL {
        int id_school PK
        string name
    }

    LKP_PROFESSION {
        int id_profession PK
        string name
    }

    SCHOOL_PROFESSIONS {
        int id_school_fk PK,FK
        int id_profession_fk PK,FK
    }

    LKP_Gender {
        int id_gender PK
        string name
    }

    %% --- Relations ---
    USER ||--|{ POST : "creates"
    USER ||--|{ COMMENT : "writes"
    USER ||--o{ LKP_Gender : "is of"
    USER ||--o{ LKP_SCHOOL : "attends"
    USER ||--o{ POST_LIKE : "likes"

    POST ||--|{ COMMENT : "has"
    POST ||--o{ POST_LIKE : "is liked by"

    %% Many-to-many relationship for Tags
    POST                 }o--|| POST_TAGS        : "is tagged with"
    POST_TAGS            ||--o{ LKP_TAG          : "uses tag"

    %% Many-to-many relationship for Professions
    LKP_SCHOOL           }o--|| SCHOOL_PROFESSIONS : "offers"
    SCHOOL_PROFESSIONS   ||--o{ LKP_PROFESSION   : "is taught in"