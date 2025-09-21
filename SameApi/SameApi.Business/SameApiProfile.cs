using AutoMapper;
using SameApi.Dto;
using SameApi.Model;

namespace SameApi.Business
{
    public class SameApiProfile : Profile
    {
        public SameApiProfile() 
        {
            CreateMap<UserDao, UserResponse>();
            //CreateMap<UserInput, UserDao>();

        }
    }
}