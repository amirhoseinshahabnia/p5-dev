# P5.js Local Project

A local development environment for p5.js projects with live reloading capabilities.

## 🚀 Quick Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm start
   ```

   This will:

   - Start a local server on `http://localhost:3000`
   - Automatically open your browser
   - Enable live reloading when you make changes

3. **Start developing:**
   - Edit `sketch.js` to create your p5.js sketches
   - Modify `style.css` to customize the layout and styling
   - Changes will automatically reload in the browser
   - Check the browser console for any errors

## 📁 Project Structure

```
p5/
├── index.html          # Main HTML file with p5.js CDN
├── sketch.js           # Your p5.js sketch code (edit this!)
├── style.css           # CSS styling for layout and centering
├── package.json        # Project dependencies and scripts
├── .gitignore          # Git ignore rules for Node.js projects
└── README.md          # This file
```

## 🎨 Getting Started with P5.js

The `sketch.js` file contains a basic example with:

- An animated pulsing circle
- Moving particles in orbit
- Mouse interaction (click to add circles)
- Keyboard interaction (spacebar to clear)

### Key P5.js Functions:

- `setup()` - Runs once when the sketch starts
- `draw()` - Runs continuously (60fps by default)
- `mousePressed()` - Handles mouse clicks
- `keyPressed()` - Handles keyboard input

## 🛠️ Development Commands

- `npm start` - Start development server with live reload
- `npm run dev` - Alternative command (same as start)

## 📚 P5.js Resources

- [P5.js Reference](https://p5js.org/reference/)
- [P5.js Examples](https://p5js.org/examples/)
- [P5.js Learn](https://p5js.org/learn/)

## 🎨 Styling & Layout

The `style.css` file handles styling of the layout

## 💡 Tips

- Use `console.log()` to debug your code
- Check the browser's developer tools for errors
- The canvas size is set to 800x600 pixels in `setup()`
- You can modify colors, shapes, and animations in `draw()`
- Edit `style.css` to change the layout and appearance

Happy coding! 🎉
