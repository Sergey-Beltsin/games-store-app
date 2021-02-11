using System.ComponentModel.DataAnnotations;

namespace Epic.Identity.Entities
{
    public class LoginEntity
    {
        [Required]
        [StringLength(50)]
        public string Email { get; set; }
        
        [Required]
        [StringLength(50, MinimumLength = 8)]
        public string Password { get; set; }
    }
}