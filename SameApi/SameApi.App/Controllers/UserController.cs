using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using SameApi.Business.User.Command;
using SameApi.Dto;

namespace SameApi.App.Controllers
{
    [ApiController]
    [Route("api/person")]
    public class UserController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly IMapper _mapper;

        public UserController(IMediator mediator, IMapper mapper)
        {
            _mediator = mediator;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserResponse>>> GetAllAsync()
        {
            var result = await _mediator.Send(new GetAllUserQuery());
            return Ok(result);
        }
    }
}