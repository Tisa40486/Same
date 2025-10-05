using SameApi.Data.Model;
using SameApi.Model.LKP;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SameApi.Model
{
    [Table("SameApi_User")]
    public class UserDao : IModelDao
    {
        [Key]
        public int Id { get; set; }
        public bool IsAdmin { get; set; }
        public int Age { get ; set; }
        public DateTime? Birthday { get; set; }
        public required string Pseudo { get; set; }
        public required string? FirstName { get; set; }
        public required string? LastName { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
        public int NumberFollowers { get; set; }
        public DateTime CreateAt { get; set; }


        [ForeignKey("Same_Api_User_Gender")]
        public int id_gender_fk { get; set; }
        public LKP_GenderDao? GenderDao { get; set; }

        [ForeignKey("Same_Api_User_School")]
        public int id_school_fk { get; set; }
        public LKP_SchoolDao? SchoolDao { get; set; }
    }
}