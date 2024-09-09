/**
 * Name: cropImage.ts
 * Description: Crop the given image to the given size.
 */

import { cropImage } from "./shared";

if (process.argv.length < 4 || process.argv.length > 5) {
    console.error("Error: Invalid number of arguments.");
    console.log("Usage: cropImage <imagePath> <width> <height> [outputPath]");
    process.exit(1);
}

const imagePath = process.argv[2]!;
const width = parseInt(process.argv.at(3)!, 10);
const height = parseInt(process.argv.at(4)!, 10);
const outputPath = process.argv.at(5);

await cropImage(imagePath, width, height, outputPath);

console.log("Done!");
