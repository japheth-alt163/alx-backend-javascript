function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Here you can place the asynchronous operation, such as an API request
        // For demonstration purposes, we're resolving with a simple string after a short delay
        setTimeout(() => {
            resolve("API response");
        }, 1000); // Simulating a delay of 1 second
    });
}

export default getResponseFromAPI;
