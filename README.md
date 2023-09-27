# Icon Ninja 

I conceptualized and developed this project as an integral facet of the "Essential JavaScript concepts” module, a pivotal component of the Front-End Developer career path offered by Scrimba.  I later rebuild it into a REACT app. This REACT-based project has been meticulously crafted to provide users with an immersive and visually stunning experience, featuring elements like parallax scrolling and interactive 3D objects sourced from Spline. Upon entering the ICON NINJA world, users are seamlessly transported into a futuristic realm. This transition is elegantly achieved through the art of parallax scrolling, guiding users as they journey deeper into the immersive gaming environment. As users scroll, they find themselves within the captivating confines of the gaming room, where the real challenge begins. The primary objective of ICON NINJA is to skilfully match all the icons while minimizing the number of rolls required to achieve this feat. It's a test of strategy, skill, and precision that keeps users engaged and entertained. To further enrich the experience, the app leverages Firebase, a robust platform, to securely store and manage high scores, fostering friendly competition and encouraging players to continually strive for excellence. ICON NINJA is more than just a game; it's a captivating fusion of cutting-edge technology and interactive design, providing users with an unforgettable journey into the world of digital entertainment.

![Icon Ninja Game](link/to/icon-ninja-game-screenshot.png)

## Getting Started

To run the Icon Ninja app on your local machine, follow the instructions below:

1. **Clone the repository:**

git clone https://github.com/your-username/icon-ninja.git
cd icon-ninja

2. **Install dependencies:**

Make sure you have Node.js and npm installed. Then, run:

npm install


3. **Firebase setup:**

This app uses Firebase to store high scores. Make sure to set up a Firebase project and configure it in the `firebase.js` file. You can follow the Firebase documentation for instructions on how to set up a Firestore database.

4. **Run the app:**

npm start


The app will be available at http://localhost:3000 in your browser.

## How to Play

1. Click the "Roll" button to roll the dice and randomize the icons.
2. Click on individual icons to hold or release them.
3. If all icons have the same value and are held, you win and confetti animation will play.

## High Scores

The app keeps track of the top three highest scores. The scores are stored in a Firestore database. To view the top scores, check the "Top scores" section on the app's main page.

## Dependencies

The app uses the following dependencies:

- React: A JavaScript library for building user interfaces.
- nanoid: A small utility library for generating unique IDs.
- react-confetti: A React component for creating confetti animations.
- firebase/firestore: Firebase Firestore SDK for storing high scores.
- @fortawesome/react-fontawesome: React component for using Font Awesome icons.

## Contributing

If you find any issues or have ideas for improvements, feel free to open an issue or submit a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](link/to/license-file) file for details.
