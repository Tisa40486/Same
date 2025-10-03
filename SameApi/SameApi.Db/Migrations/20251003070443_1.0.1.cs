using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SameApi.Db.Migrations
{
    /// <inheritdoc />
    public partial class _101 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Number_follow",
                table: "SameApi_User",
                newName: "NumberFollowers");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "NumberFollowers",
                table: "SameApi_User",
                newName: "Number_follow");
        }
    }
}
