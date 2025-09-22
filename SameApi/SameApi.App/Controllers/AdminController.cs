using MediatR;
using Microsoft.AspNetCore.Mvc;
using SameApi.Business.Admin.Command;
using SameApi.Business.Admin.Query;
using SameApi.Dto;

namespace SameApi.App.Controllers
{
    [ApiController]
    [Route("api/admin")]
    public class AdminController : Controller
    {
        private readonly IMediator _mediator;

        public AdminController(IMediator mediator)
        {
            _mediator = mediator;
        }
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GenderResponse>>> GetAllAsync()
        {
            var result = await _mediator.Send(new GetAllGenderQuery());
            return Ok(result);
        }

        [HttpPost]
        public async Task CreateGenderAsync([FromBody] CreateGenderCommand command)
        {
            await _mediator.Send(command);
        }
    }
}