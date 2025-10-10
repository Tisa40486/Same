```mermaid
erDiagram
    UTILISATEUR {
        int id_utilisateur PK
        string nom
        string email
    }
    COMMANDE {
        int id_commande PK
        date date_commande
        float total
        int id_utilisateur FK
    }

    UTILISATEUR ||--o{ COMMANDE : "passe"
