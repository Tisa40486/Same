using AutoMapper;
using MediatR;
using SameApi.Db.UnitOfWork;
using SameApi.Dto;
using SameApi.Model;

namespace SameApi.Business.User.Command
{
    public class CreateUserCommand : UserInput, IRequest
    {
    }
    public class CreateUserCommandHandler : IRequestHandler<CreateUserCommand>
    {
        private readonly IApiSameUnitOfWork _uow;
        private readonly IMapper _mapper;
        public CreateUserCommandHandler(
            IApiSameUnitOfWork unitOfWork, IMapper mapper)
        {
            _uow = unitOfWork;
            _mapper = mapper;
        }
        public async Task Handle(CreateUserCommand request, CancellationToken cancellationToken)
        {
            var dao = _mapper.Map<UserDao>(request);

            var today = DateTime.Now;

            var age = today.Year - dao.Birthday!.Value.Year;

            if (dao.Birthday.Value.Date> today.AddYears(-age))
                age--;

            dao.Age = age;

            await _uow.UserRepository.AddAndSaveAsync(dao);
        }
    }
}