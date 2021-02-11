using System;
using Microsoft.AspNetCore.Identity;

namespace Epic.Identity.Models
{
    public class AppUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Country { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
    }
}