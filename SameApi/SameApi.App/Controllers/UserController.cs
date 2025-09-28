using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using SameApi.Business.User.Command;
using SameApi.Dto;

namespace SameApi.App.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly IMapper _mapper;

        public UserController(IMediator mediator, IMapper mapper)
        {
            _mediator = mediator;
            _mapper = mapper;
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