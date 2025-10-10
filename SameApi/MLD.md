erDiagram
    CLIENT ||--o{ COMMANDE : passe
    CLIENT {
        int id
        string nom
    }
    COMMANDE {
        int id
        string date
    }