using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SameApi.Db.Migrations
{
    /// <inheritdoc />
    public partial class _100 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "LKP_SameApi_Gender",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LKP_SameApi_Gender", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LKP_SameApi_Profession",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LKP_SameApi_Profession", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SameApi_Post",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SameApi_Post", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LKP_SameApi_School",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IdProfession = table.Column<int>(type: "int", nullable: false),
                    ProfessionId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LKP_SameApi_School", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LKP_SameApi_School_LKP_SameApi_Profession_ProfessionId",
                        column: x => x.ProfessionId,
                        principalTable: "LKP_SameApi_Profession",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "SameApi_User",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IsAdmin = table.Column<bool>(type: "bit", nullable: false),
                    Age = table.Column<int>(type: "int", nullable: false),
                    Pseudo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Number_follow = table.Column<int>(type: "int", nullable: false),
                    CreateAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    id_gender_fk = table.Column<int>(type: "int", nullable: false),
                    GenderDaoId = table.Column<int>(type: "int", nullable: true),
                    id_school_fk = table.Column<int>(type: "int", nullable: false),
                    SchoolDaoId = table.Column<int>(type: "int", nullable: true),
                    id_post_fk = table.Column<int>(type: "int", nullable: false),
                    PostDaoId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SameApi_User", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SameApi_User_LKP_SameApi_Gender_GenderDaoId",
                        column: x => x.GenderDaoId,
                        principalTable: "LKP_SameApi_Gender",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_SameApi_User_LKP_SameApi_School_SchoolDaoId",
                        column: x => x.SchoolDaoId,
                        principalTable: "LKP_SameApi_School",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_SameApi_User_SameApi_Post_PostDaoId",
                        column: x => x.PostDaoId,
                        principalTable: "SameApi_Post",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_LKP_SameApi_School_ProfessionId",
                table: "LKP_SameApi_School",
                column: "ProfessionId");

            migrationBuilder.CreateIndex(
                name: "IX_SameApi_User_GenderDaoId",
                table: "SameApi_User",
                column: "GenderDaoId");

            migrationBuilder.CreateIndex(
                name: "IX_SameApi_User_PostDaoId",
                table: "SameApi_User",
                column: "PostDaoId");

            migrationBuilder.CreateIndex(
                name: "IX_SameApi_User_SchoolDaoId",
                table: "SameApi_User",
                column: "SchoolDaoId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SameApi_User");

            migrationBuilder.DropTable(
                name: "LKP_SameApi_Gender");

            migrationBuilder.DropTable(
                name: "LKP_SameApi_School");

            migrationBuilder.DropTable(
                name: "SameApi_Post");

            migrationBuilder.DropTable(
                name: "LKP_SameApi_Profession");
        }
    }
}
