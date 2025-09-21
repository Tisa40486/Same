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
    public class GetPersonByIdQueryHandler : IRequestHandler<GetByIdUserQuery, UserResponse>
    {
        readonly ISameApiUnitOfWork _apiTestUnitOfWork;
        readonly IMapper _mapper;

        public GetPersonByIdQueryHandler(
            ISameApiUnitOfWork apiTestUnitOfWork, IMapper mapper)
        {
            _apiTestUnitOfWork = apiTestUnitOfWork;
            _mapper = mapper;
        }


        public async Task<UserResponse> Handle(GetByIdUserQuery request, CancellationToken cancellationToken)
        {
            var data = await _apiTestUnitOfWork.UserRepository.GetByIdAsync(request.Id);

            var result = _mapper.Map<UserResponse>(data);
            return result;
        }

    }
}