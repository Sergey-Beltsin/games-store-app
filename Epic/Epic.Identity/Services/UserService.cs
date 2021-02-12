using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Epic.Identity.Entities;
using Epic.Identity.Models;
using Microsoft.EntityFrameworkCore;

namespace Epic.Identity.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IConfiguration _configuration;

        public UserService(UserManager<AppUser> userManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _configuration = configuration;
        }

        public async Task<UserManagerResponse> LoginUserAsync(LoginEntity model)
        {
            AppUser user;

            try
            {
                user = await _userManager.FindByEmailAsync(model.Email);
            }
            catch (InvalidOperationException e)
            {
                return new UserManagerResponse
                {
                    Message = "This email is already taken",
                    Type = "email.taken",
                    IsSuccess = false,
                    Errors = new List<string> { e.ToString() }
                };
            }
            catch (Exception e)
            {
                return new UserManagerResponse
                {
                    Message = "Something went wrong",
                    Type = "error",
                    IsSuccess = false,
                    Errors = new List<string> { e.ToString() }
                };
            }

            if (user == null)
                return new UserManagerResponse
                {
                    Message = "There is no user with that Email address",
                    Type = "email.noUser",
                    IsSuccess = false
                };

            var result = await _userManager.CheckPasswordAsync(user, model.Password);

            if (!result)
                return new UserManagerResponse
                {
                    Message = "Invalid password",
                    Type = "password.invalid",
                    IsSuccess = false
                };

            var claims = new[]
            {
                new Claim("Email", user.Email),
                new Claim(ClaimTypes.NameIdentifier, user.Id)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["AuthSettings:Key"]));

            var token = new JwtSecurityToken(
                issuer: _configuration["AuthSettings:Issuer"],
                audience: _configuration["AuthSettings:Issuer"],
                claims: claims,
                expires: DateTime.Now.AddDays(30),
                signingCredentials: new SigningCredentials(key, SecurityAlgorithms.HmacSha256)
            );

            string tokenAsString = new JwtSecurityTokenHandler().WriteToken(token);

            AuthResponseUser responseUser = new AuthResponseUser
            {
                Email = user.Email,
                Login = user.UserName,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Country = user.Country
            };

            return new UserManagerResponse
            {
                Message = tokenAsString,
                IsSuccess = true,
                ExpiresDate = token.ValidTo,
                User = responseUser
            };
        }

        public async Task<UserManagerResponse> RegisterUserAsync(RegisterEntity model)
        {
            if (model == null)
                throw new NullReferenceException("Register model is not provided");

            var identityUser = new AppUser()
            {
                Email = model.Email,
                UserName = model.Login,
                Country = model.Country,
                FirstName = model.FirstName,
                LastName = model.LastName
            };

            var result = await _userManager.CreateAsync(identityUser, model.Password);

            if (result.Succeeded)
            {
                var response = await LoginUserAsync(new LoginEntity
                {
                    Email = model.Email,
                    Password = model.Password
                });

                return response;
            }

            return new UserManagerResponse
            {
                Message = "User did not created",
                Type = "error",
                IsSuccess = false,
                Errors = result.Errors.Select(e => e.Description)
            };
        }

        // public async Task<UserManagerResponse> GetById(Guid id)
        // {
        //     var user = await _userManager.FindByIdAsync(id.ToString());
        //
        //     if (user == null)
        //     {
        //         return new UserManagerResponse
        //         {
        //             Message = "User id is incorrect",
        //             IsSuccess = false
        //         };
        //     }
        //
        //     return new UserManagerResponse
        //     {
        //         Message = "Find user success",
        //         IsSuccess = true,
        //         Data = user.ToString()
        //     };
        // }
    }
}