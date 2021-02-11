using System.ComponentModel.DataAnnotations;

namespace Epic.Identity.Models
{
    public class CreateModel
    {
        [Required(ErrorMessage = "loginNotFound")]
        public string Login { get; set; }
        [Required(ErrorMessage = "emailNotFound")]
        public string Email { get; set; }
        [Required(ErrorMessage = "passwordNotFound")]
        public string Password { get; set; }
        [Required(ErrorMessage = "countryNotFound")]
        public string Country { get; set; }
        [Required(ErrorMessage = "nameNotFound")]
        public string Name { get; set; }
        [Required(ErrorMessage = "secondNameNotFound")]
        public string SecondName { get; set; }
    }

    public class LoginModel
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}