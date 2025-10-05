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

            //User
            CreateMap<UserInput, UserDao>()
            .ForMember(dest => dest.id_gender_fk, opt => opt.MapFrom(src => src.GenderId));
            CreateMap<UserDao, UserResponse>();

            //Gender
            CreateMap<GenderInput, LKP_GenderDao>();
            CreateMap<LKP_GenderDao, GenderResponse>();

            //Profession
            CreateMap<ProfessionInput, LKP_ProfessionDao>();
            CreateMap<LKP_ProfessionDao, ProfessionResponse>();


        }
    }
}