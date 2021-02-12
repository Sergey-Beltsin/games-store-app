using System;
using System.Threading.Tasks;
using Epic.Identity.Entities;

namespace Epic.Identity.Services
{
    public interface IUserService
    {
        Task<UserManagerResponse> RegisterUserAsync(RegisterEntity model);
        Task<UserManagerResponse> LoginUserAsync(LoginEntity model);
        // Task<UserManagerResponse> GetById(Guid id);
    }
}