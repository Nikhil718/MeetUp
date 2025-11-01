using System;
using AutoMapper;
using Domain;

namespace Application.Common;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Activity, Activity>().ForMember(dest => dest.ActivityId, opt => opt.Ignore());
    }
}
