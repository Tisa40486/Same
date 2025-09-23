using SameApi.Db.UnitOfWork;
using AutoMapper;
using SameApi.Dto;
using MediatR;

namespace SameApi.Business.User.Command
{
    public class GetAllUserQuery : IRequest<IEnumerable<UserResponse>>
    {
    }
    public class GetAllUserQueryHandler : IRequestHandler<GetAllUserQuery, IEnumerable<UserResponse>>
    {
        readonly IApiSameUnitOfWork _apiTestUnitOfWork;
        readonly IMapper _mapper;

        public GetAllUserQueryHandler(
            IApiSameUnitOfWork apiTestUnitOfWork, IMapper mapper)
        {
            _apiTestUnitOfWork = apiTestUnitOfWork;
            _mapper = mapper;
        }


        public async Task<IEnumerable<UserResponse>> Handle(GetAllUserQuery request, CancellationToken cancellationToken)
        {
            var data = await _apiTestUnitOfWork.UserRepository.GetAllAsync();

            var result = _mapper.Map<IEnumerable<UserResponse>>(data);
            return result;
        }

    }
}