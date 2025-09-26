using SameApi.Data.Model;
using System.ComponentModel.DataAnnotations.Schema;

namespace SameApi.Model
{
    [Table("SameApi_Post")]
    public class PostDao : IModelDao
    {
        public int Id { get; set; }

    }
}
