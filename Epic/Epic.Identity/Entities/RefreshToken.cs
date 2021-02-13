using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace Epic.Identity.Entities
{
    [Owned]
    public class RefreshToken
    {
        // public string Token { get; set; }
        // public DateTime Expires { get; set; }
        // public bool IsExpired => DateTime.Now >= Expires;
        // public DateTime Created { get; set; }
        // public DateTime? Revoked { get; set; }
        // public bool IsActive => Revoked == null && !IsExpired;
    }
}