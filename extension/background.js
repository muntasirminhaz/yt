browser.runtime.onMessage.addListener((request) => {
    console.log("Received request: ", request);

    if (request.greeting === "hello")
        return Promise.resolve({ farewell: "goodbye" });
});
