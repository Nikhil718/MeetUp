using System;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class CreateActivity
{
    public class Command : IRequest<string>
    {
        public required Activity activity { get; set; }
    }
    public class Handler(AppDbContext dbContext) : IRequestHandler<Command, string>
    {
        public async Task<string> Handle(Command request, CancellationToken cancellationToken)
        {
            dbContext.Add(request.activity);
            await dbContext.SaveChangesAsync();
            return request.activity.ActivityId;
        }
    }
}
