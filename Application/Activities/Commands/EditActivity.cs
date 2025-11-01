using System;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities.Commands;

public class EditActivity
{
    public class Command : IRequest
    {
        public required Activity activity { get; set; }
    }
    public class Handler(AppDbContext dbContext, IMapper mapper) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await dbContext.Activities.FindAsync([request.activity.ActivityId], cancellationToken);
            if (activity == null)
                throw new KeyNotFoundException("Activity not found");
            mapper.Map(request.activity, activity);
            await dbContext.SaveChangesAsync(cancellationToken);    
        }
    }
}
