using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SameApi.Model.LKP
{
    [Table("LKP_SameApi_Gender")]
    public class LKP_GenderDao
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
