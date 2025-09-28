using AutoMapper;
using SameApi.Dto;
using SameApi.Model;
using SameApi.Model.LKP;

namespace SameApi.Business
{
    public class SameApiProfile : Profile
    {
        public SameApiProfile()
        {
            CreateMap<UserInput, UserDao>();
            CreateMap<UserDao, UserResponse>();
            CreateMap<GenderInput, LKP_GenderDao>();
            CreateMap<LKP_GenderDao, GenderResponse>();
            CreateMap<ProfessionInput, LKP_ProfessionDao>();
            CreateMap<LKP_ProfessionDao, ProfessionResponse>();
        }
    }
}