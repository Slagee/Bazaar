using Contracts;
using MassTransit;

namespace AuctionService;

// Just an example of handling of a exception using the consumers
public class AuctionCreatedFaultConsumer : IConsumer<Fault<AuctionCreated>>
{
    public async Task Consume(ConsumeContext<Fault<AuctionCreated>> context)
    {
        Console.WriteLine("--> Consuming faulty creation");

        var exception = context.Message.Exceptions.First();

        if (exception.ExceptionType == "System.ArgumentException")
        {
            context.Message.Message.Model = "Foo";
            await context.Publish(context.Message.Message);
        }
    }
}
