using System;
using System.Security.Cryptography.X509Certificates;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityById
{
    public class Query : IRequest<Activity>
    {
        public required string Id { get; set; }
    }

    public class Handler(AppDbContext dbContext) : IRequestHandler<Query, Activity>
    {
        public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
        {
            return await dbContext.Activities.FindAsync([request.Id], cancellationToken)?? throw new Exception("Activity Not Found");
        }
    }
}
