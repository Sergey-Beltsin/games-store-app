using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace Epic.Identity.Models
{
    public class AppUser : IdentityUser
    {
        [Required(ErrorMessage = "countryNotFound")]
        public string Country { get; set; }
        [Required(ErrorMessage = "nameNotFound")]
        public string Name { get; set; }
        [Required(ErrorMessage = "secondNameNotFound")]
        public string SecondName { get; set; }
    }
}