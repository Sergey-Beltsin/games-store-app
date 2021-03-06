using System;
using System.Collections.Generic;
using Epic.Identity.Entities;
using Microsoft.AspNetCore.Identity;

namespace Epic.Identity.Models
{
    public class AppUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Country { get; set; }
        // public List<RefreshToken> RefreshTokens;
    }
}