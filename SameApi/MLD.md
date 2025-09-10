## Database Model

```mermaid
erDiagram
    USER || --o{ POST : "Make some"
       
    USER ||--o{ LKP_SCHOOL : "Be At"
    POST ||--o{ TAGS : "Had"
    POST ||--o{ COMMENT : "Comment"
    LKP_SCHOOL ||--o{ LKP_PROFESSION : "Have Professions"
    USER ||--o{ LKP_Gender : "Be"
    TAGS ||--o{ LKP_TAG_REQUIRED : "Contain"
    TAGS ||--o{ TAG_OPTIONAL : "Contain"
    TAGS ||--o{ POST : "On"

    USER {
        int id_user
        bool isadmin
        int age
        string pseudo
        string email
        string password
        int number_follow
        datetime createAt
        int id_gender_fk
        int id_school_fk
        int id_post_fk
    }

    LKP_Gender {
        int id_gender
        string gender
    }

    POST {
        int id_post
        string post
        int id_comment
        int like
        string img
        datetime createAt
        int id_user
        int id_tag_fk
    }

    TAGS {
        int id_tag
        datetime createAt
        int id_post_fk
        int id_tag_required_fk
        int id_tag_optional_fk
    }

    LKP_TAG_REQUIRED{
        int id_tag_required
        string tag_required
    }

    TAG_OPTIONAL{
        int id_tag_optional
        string tag_optional
    }

    LKP_SCHOOL {
        int id_school
        string name
        int id_profession_fk
    }

    LKP_PROFESSION {
        int id_profession
        string name_profession
    }

    COMMENT {
        int id
        int postId
        int id_user
        string title
        string content
        datetime createdAt
    }