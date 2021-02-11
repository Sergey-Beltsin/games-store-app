using System.ComponentModel.DataAnnotations;

namespace Epic.Identity.Entities
{
    public class RegisterEntity
    {
        [Required]
        [StringLength(50)]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 8)]
        public string Password { get; set; }
        
        [Required]
        [StringLength(50)]
        public string Login { get; set; }
        
        [Required]
        [StringLength(6)]
        public string Country { get; set; }
        
        [Required]
        [StringLength(50)]
        public string FirstName { get; set; }
        
        [Required]
        [StringLength(50)]
        public string LastName { get; set; }
    }
}