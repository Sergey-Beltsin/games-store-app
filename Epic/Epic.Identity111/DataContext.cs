using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Epic.Identity.Models;
using Microsoft.EntityFrameworkCore;

namespace Epic.Identity
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
    }
}