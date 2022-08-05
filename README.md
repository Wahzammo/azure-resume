## Front-end resources

The front-end is a static site with HTML, CSS, and JavaScript. It's static and has a visitor counter. The visitor counter data fetched via an API call to an Azure Function.

## Back-end resources

The back-end is an [HTTP triggered](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger?tabs=csharp) Azure Functions with Cosmos DB input and output binding. The Function is triggered, it retrieves the CosmosDB item, add +1 to it, and saves it and returns its value to the caller.
