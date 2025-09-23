using AutoMapper;
using MediatR;
using SameApi.Db.UnitOfWork;
using SameApi.Dto;
using SameApi.Model;

namespace SameApi.Business.User.Command
{
    public class DeleteUserCommand : UserInput, IRequest<int>
    {
    }
    public class DeleteUserCommandHandler : IRequestHandler<DeleteUserCommand, int>
    {
        private readonly IMapper _mapper;
        private readonly IApiSameUnitOfWork _iuow;

        public DeleteUserCommandHandler(IMapper mapper, IApiSameUnitOfWork iuow)
        {
            _mapper = mapper;
            _iuow = iuow;
        }

        public async Task<int> Handle(DeleteUserCommand command, CancellationToken cancellationToken)
        {
            var dao = _mapper.Map<UserDao>(command);

            await _iuow.UserRepository.RemoveByIdAsync(command.Id);

            return dao.Id;
        }
    }
}
