using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using MediatR;
using AutoMapper;

namespace SameApi.App.Controllers
{
    public class UserController : Controller
    {
        [ApiController]
        [Route("api/person")]
        public class PersonController : ControllerBase
        {
            readonly IMediator _mediator;
            readonly IMapper _mapper;

            public PersonController(IMediator mediator, IMapper mapper)
            {
                _mediator = mediator;
                _mapper = mapper;
            }

            [HttpGet]
            public async Task<ActionResult<>> GetAllAync()
            {
                var result = await _mediator.Send(new GetByIdUserQuery());
                return Ok(result);
            }
        }
    }
}
