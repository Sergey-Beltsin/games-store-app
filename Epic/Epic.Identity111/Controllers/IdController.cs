using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Epic.Identity.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Epic.Identity.Controllers
{
    [ApiController]
    [Route("api/Id")]
    public class IdController : ControllerBase
    {
        private UserManager<AppUser> _userManager;

        public IdController(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpGet("users")]
        public IActionResult GetUsers()
        {
            return Ok(_userManager.Users);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginModel loginModel)
        {
            if (ModelState.IsValid)
            {
                AppUser user = await _userManager.FindByEmailAsync(loginModel.Email);
                if (user != null)
                {
                    var result = await _userManager.CheckPasswordAsync(user, loginModel.Password);
        
                    if (result)
                    {
                        return Ok();
                    }
                }
                ModelState.AddModelError(nameof(LoginModel.Email), "invalidEmailOrPassword");
            }
        
            return BadRequest("invalidEmailOrPassword");
        }

        [HttpPost("register")]
        public IActionResult Register(CreateModel createModel)
        {
            if (ModelState.IsValid)
            {
                var claims = new List<Claim>
                {
                    new Claim(JwtRegisteredClaimNames.Sub, createModel.Login),
                    new Claim(JwtRegisteredClaimNames.Email, createModel.Email)
                };

                byte[] secretBytes = Encoding.UTF8.GetBytes(Constants.SecretKey);
                var key = new SymmetricSecurityKey(secretBytes);

                var signingCredintals = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    Constants.Issuer,
                    Constants.Audience,
                    claims,
                    notBefore: DateTime.Now,
                    expires: DateTime.Now.AddMinutes(2),
                    signingCredintals
                );

                var value = new JwtSecurityTokenHandler().WriteToken(token);
                return Ok(value);
            }

            return BadRequest();
        }

        [Authorize]
        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            // await _userManager.
            return Ok();
        }
    }
}