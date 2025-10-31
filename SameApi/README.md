# 🗣️ SameApiUnitOfWork API

A RESTful Web API for a Same, built with **ASP.NET Core** and **Entity Framework Core**.  
This API allows clients to perform full CRUD operations on forum entities such as **Users**, **Threads**, **Posts**, and **Comments**.

---
## 🚀 Features

- Full CRUD for:
  - 🧑 Users
  - 💬 Posts
- Entity Framework Core with database migrations
- Swagger UI for interactive API documentation
- DTOs and AutoMapper for clean data handling
- CORS support for frontend integration

---
## Database Model

You can find the detailed MLD diagram [here](./MLD.md).

## 🧱 Entities Overview

### User
- `id`, `isadmin`, `birthday`, `firstName`, `lastName`, `pseudo`, `email`, `password`, `numberFollowers`, `createAt`, `id_gender_fk`, `id_school_fk`

### Post 
- `id`,

### Gender
- `id`, `Name`

  
### SCHOOL
- `Id`, `name`, `id_profession_fk`

### PROFESSION
- `Id`, `name`

---
## 🛠️ Technologies Used

- ASP.NET Core 9
- C#
- Entity Framework Core
- Swagger (Swashbuckle)
- AutoMapper

SameApi:
  - 💻 SameApi.App
    - 🧭 Controller
      - 🧩 AdminController.cs
      - 🧩 UserController.cs
    - 🚀 Program.cs

  - 🧠 SameApi.Business
    - 🧱 Admin
      - 🛠️ Command
        - 🧩 CreateGenderCommand.cs
        - 🧩 CreateProfessionCommand.cs
        - 🧩 DeleteGenderCommand.cs
      - 🔍 Query
        - 🧩 GetAllGenderQuery.cs
        - 🧩 GetAllProfessionQuery.cs

    - 👥 User
      - 🛠️ Command
        - 🧩 CreateUserCommand.cs
        - 🧩 DeleteUserCommand.cs
        - 🧩 UpdateUserCommand.cs
      - 🔍 Query
        - 🧩 GetAllUserQuery.cs
        - 🧩 GetUserByIdQuery.cs
    - 🧭 SameApiProfile.cs

  - 🗄️ SameApi.Data
    - 🗃️ DbContexts
      - 🧩 BaseDbContext.cs
      - 🧩 IBaseDbContext.cs
    - 🧠 Model
      - 🧾 IModelDao.cs
    - 📚 Repository
      - 🧩 BaseRepository.cs
      - 🧩 IBaseRepository.cs

  - 🏗️ SameApi.Db
    - 🗃️ DbContexts
      - 🧩 SameApiDbContext.cs
      - 🧩 ISameApiDbContext.cs
    - ⏱️ Migrations
      - 🧾 20251005003003_1.0.0.cs
      - 🧾 20251005003732_1.0.1.cs
    - 📚 Repository
      - 🧩 IGenderRepository.cs
      - 🧩 IProfessionRepository.cs
      - 🧩 ISchoolRepository.cs
      - 🧩 IUserRepository.cs
    - ⚙️ Implementation
      - 🧩 GenderRepository.cs
      - 🧩 ProfessionRepository.cs
      - 🧩 SchoolRepository.cs
      - 🧩 UserRepository.cs
    - 🔗 UnitOfWork
      - 🧩 SameApiUnitOfWork.cs
      - 🧩 ISameApiUnitOfWork.cs

  - 📦 SameApi.Dto
    - 🧾 GenderInput.cs
    - 🧾 GenderResponse.cs
    - 🧾 ProfessionInput.cs
    - 🧾 UserInput.cs

  - 🧱 SameApi.Model
    - 🧩 LKP
      - 🧾 LKP_GenderDao.cs
      - 🧾 LKP_ProfessionDao.cs
      - 🧾 LKP_SchoolDao.cs
    - 👤 PostDao.cs
    - 👥 UserDao.cs


## ⚙️ Getting Started

### Prerequisites

- [.NET 9}(https://dotnet.microsoft.com/)
- DB Server
- Visual Studio or VS Code

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Tisa40486/Same.git



2. **API Endpoints**
   
| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| GET    | `/api/threads`       | Get all threads     |
| POST   | `/api/threads`       | Create a new thread |
| GET    | `/api/posts/{id}`    | Get a single post   |
| PUT    | `/api/posts/{id}`    | Update a post       |
| DELETE | `/api/comments/{id}` | Delete a comment    |


--

- 📬 Contact
  - 📧Same - same@sames.school
  - 🧑‍💻GitHub - https://github.com/Tisa40486

