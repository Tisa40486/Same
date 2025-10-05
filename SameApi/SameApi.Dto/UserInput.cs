namespace SameApi.Dto
{
    public class UserInput
    {
        public int Id { get; set; }
        public bool IsAdmin { get; set; }
        public DateTime? Birthday { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Pseudo { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public int NumberFollowers { get; set; }
        public DateTime CreateAt { get; set; } = DateTime.Now;
        public int GenderId { get; set; }

    }
}