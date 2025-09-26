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
        public required string Pseudo { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
        public int Number_follow { get; set; }
        public DateTime CreateAt { get; set; }


        [ForeignKey("Same_Api_User_Gender")]
        public int id_gender_fk { get; set; }
        public LKP_GenderDao? GenderDao { get; set; }

        [ForeignKey("Same_Api_User_School")]
        public int id_school_fk { get; set; }
        public LKP_School? SchoolDao { get; set; }

        [ForeignKey("Same_Api_User_Post")]
        public int id_post_fk { get; set; }
        public PostDao? PostDao { get; set; }
    }
}