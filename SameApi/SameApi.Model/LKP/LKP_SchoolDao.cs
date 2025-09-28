using SameApi.Data.Model;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SameApi.Model.LKP
{
    [Table("LKP_SameApi_School")]
    public class LKP_SchoolDao : IModelDao
    {
        [Key]
        public int Id { get; set; }
        public required string Name { get; set; }

        [ForeignKey("Same_Api_School_Profession")]
        public int IdProfession { get; set; }
        public LKP_ProfessionDao? Profession { get; set; }

    }
}
