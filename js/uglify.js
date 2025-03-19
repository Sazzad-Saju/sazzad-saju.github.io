var fs = require('fs');
var uglifyJs = require('uglify-js');

// List of JS files to combine and minify
var files = ["portfolio.js", "contact.js"];

// Check if all files exist before proceeding
files.forEach(file => {
    if (!fs.existsSync(file)) {
        console.error(`Error: ${file} not found!`);
        process.exit(1);
    }
});

// Read and minify the files
var result = uglifyJs.minify(files.map(file => fs.readFileSync(file, "utf8")));

if (result.error) {
    console.error("UglifyJS Error:", result.error);
    process.exit(1);
}

// Save the minified file
fs.writeFile("other-main.min.js", result.code, function(err) {
    if (err) {
        console.error("Error writing file:", err);
    } else {
        console.log("File successfully saved as other-main.min.js!");
    }
});
