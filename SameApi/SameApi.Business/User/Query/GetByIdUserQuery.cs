using SameApi.Db.UnitOfWork;
using AutoMapper;
using SameApi.Dto;
using MediatR;

namespace SameApi.Business.User.Command
{
    public class GetByIdUserQuery: IRequest<UserResponse>
    {
        public int Id { get; set; }
    }
    public class GetPersonByIdQueryHandler : IRequestHandler<GetPersonByIdQuery, PersonResponse>
    {
        readonly  ISameApiUnitOfWork _apiTestUnitOfWork;
        readonly IMapper _mapper;

        public GetPersonByIdQueryHandler(
            ISameApiUnitOfWork apiTestUnitOfWork, IMapper mapper)
        {
            _apiTestUnitOfWork = apiTestUnitOfWork;
            _mapper = mapper;
        }


        public async Task<PersonResponse> Handle(GetPersonByIdQuery request, CancellationToken cancellationToken)
        {
            var data = await _apiTestUnitOfWork.PersonRepository.GetByIdAsync(request.Id);

            var result = _mapper.Map<PersonResponse>(data);
            return result;
        }
    }

}