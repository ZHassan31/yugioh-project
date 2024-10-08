module.exports = {
    proxy: 'localhost:3000', // Replace with your local server's address and port
    files: ['public/**/*.*', 'views/**/*.*'], // Watch for changes in these folders
    reloadDelay: 500, // Optional delay for reloading
    notify: false // Disable the notification bubble in the browser
};
