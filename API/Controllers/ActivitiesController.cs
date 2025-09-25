using System;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class ActivitiesController(AppDbContext context) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetAllActivities()
    {
        return await context.Activities.ToListAsync();
    }

    [HttpGet("{activityId}")]
    public async Task<ActionResult<Activity>> GetActivityById(string activityId)
    {
        var activity = await context.Activities.FindAsync(activityId);
        if (activity == null) return NotFound();
        return activity;
    }
}
