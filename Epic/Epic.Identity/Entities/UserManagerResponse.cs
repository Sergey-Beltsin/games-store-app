using System;
using System.Collections.Generic;
using Epic.Identity.Models;

namespace Epic.Identity.Entities
{
    public class UserManagerResponse
    {
        public string Message { get; set; }
        public bool IsSuccess { get; set; }
        public IEnumerable<string> Errors { get; set; }
        public DateTime? ExpiresDate { get; set; }
        public string Type { get; set; }
        public AuthResponseUser User { get; set; }
    }
}