using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

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
        
        [JsonIgnore]
        public string RefreshToken { get; set; }
        public DateTime RefreshTokenExpiration { get; set; }
    }
}