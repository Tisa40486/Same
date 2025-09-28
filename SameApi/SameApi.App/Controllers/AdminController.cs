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

        [HttpGet("gender")]
        public async Task<ActionResult<IEnumerable<GenderResponse>>> GetAllGenderAsync()
        {
            var result = await _mediator.Send(new GetAllGenderQuery());
            return Ok(result);
        }
        [HttpGet("profession")]
        public async Task<ActionResult<IEnumerable<ProfessionResponse>>> GetAllProfessionAsync()
        {
            var result = await _mediator.Send(new GetAllProfessionQuery());
            return Ok(result);
        }

        [HttpPost("Gender")]
        public async Task CreateGenderAsync([FromBody] CreateGenderCommand command)
        {
            await _mediator.Send(command);
        }
        [HttpDelete("Gender")]
        public async Task DeleteGenderAsync([FromQuery] int id)
        {
            await _mediator.Send(new DeleteGenderCommand { Id = id });
        }
        [HttpPost("profession")]
        public async Task CreateProfessionAsync([FromBody] CreateProfessionCommand command)
        {
            await _mediator.Send(command);
        }
    }
}