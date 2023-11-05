using AuctionService.Data;
using Contracts;
using MassTransit;

namespace AuctionService;

public class BidPlacedConsumer : IConsumer<BidPlaced>
{
    private readonly AuctionDbContext _dbContext;

    public BidPlacedConsumer(AuctionDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    public async Task Consume(ConsumeContext<BidPlaced> context)
    {
        Console.WriteLine("--> Consuming bid placed");

        var auctionId = Guid.Parse(context.Message.AuctionId);

        var auction = await _dbContext.Auctions.FindAsync(auctionId);

        if (auction.CurrentHightBid == null || context.Message.BidStatus.Contains("Accepted") && context.Message.Amount > auction.CurrentHightBid)
        {
            auction.CurrentHightBid = context.Message.Amount;

            await _dbContext.SaveChangesAsync();
        }
    }
}
