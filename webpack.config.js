module.exports = {
	mode: 'none',
    entry: "./src/main.ts",
    output: {
        filename: "bundle.js",
        path: __dirname + '/dist'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts"]
    },

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader'
			}
		]
},

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        //"react": "React",
        //"react-dom": "ReactDOM"
    },
};
