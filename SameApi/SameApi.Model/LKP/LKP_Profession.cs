using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SameApi.Model.LKP
{
    [Table("LKP_SameApi_Gender")]
    public class LKP_Profession
    {
        [Key]
        public int Id { get; set; }
        public required string Name { get; set; }
    }
}
