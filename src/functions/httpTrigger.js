const { app } = require('@azure/functions');

app.http('httpTrigger', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log('HTTP trigger function processed a request.');
        return {
            status: 200,
            body: "Hello, World! from Shivansh (8983634)"
        };
    }
});
