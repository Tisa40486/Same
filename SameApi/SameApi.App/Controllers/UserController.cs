using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using SameApi.Business.User.Command;
using SameApi.Business.User.Query;
using SameApi.Db.Repository.Implementation;
using SameApi.Dto;

namespace SameApi.App.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserController : ControllerBase
    {
        private readonly IMediator _mediator;
        
        public UserController(IMediator mediator)
        {
            _mediator = mediator;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<UserResponse?>> GetByIdAsync(int id)
        {
            var result = await _mediator.Send(new GetUserByIdQuery { Id = id });

            return Ok(result);
        }
        [HttpGet("getAll")]
        public async Task<ActionResult<IEnumerable<UserResponse>>> GetAllAsync()
        {
            var result = await _mediator.Send(new GetAllUserQuery());
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> CreateUserAsync([FromBody] CreateUserCommand command)
        {
            await _mediator.Send(command);
            return Ok();
        }

        [HttpDelete("user")]
        public async Task<IActionResult> DeleteUserAsync([FromQuery] int id)
        {
            await _mediator.Send(new DeleteUserCommand { Id = id});
            return Ok();
        }

        [HttpPut("update/user")]
        public async Task<IActionResult> UpdateUserAsync([FromBody] UpdateUserCommand command)
        {
            var result = await _mediator.Send(command);
            return Ok(result);
        }   
    }
}