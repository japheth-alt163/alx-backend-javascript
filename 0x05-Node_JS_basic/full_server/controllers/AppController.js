class AppController {
  /**
   * Handles the GET request for the homepage
   * @param {Object} request - The request object
   * @param {Object} response - The response object
   */
  static getHomepage = (request, response) => {
    response.status(200).send('Hello Holberton School!');
  };
}

module.exports = AppController;
