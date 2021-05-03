# Hodinkee Blog Clone

![Preview-Screens](https://github.com/hygorchristian/willdom-challenge/blob/master/public/readme/hodinkee.gif)

## :book: Sumary

- [About this Project](https://github.com/hygorchristian/willdom-challenge#speech_balloon-about-this-project)
- [Why?](https://github.com/hygorchristian/willdom-challenge#thinking-why)
- [Some Observations about this App](https://github.com/hygorchristian/willdom-challenge#mag_right-some-observations-about-this-app)
- [Links](https://github.com/hygorchristian/willdom-challenge#link-links)
- [Features](https://github.com/hygorchristian/willdom-challenge#white_check_mark-features)
- [Getting Started](https://github.com/hygorchristian/willdom-challenge#rocket-getting-started)
- [Dependencies ans Tools](https://github.com/hygorchristian/willdom-challenge#gear-dependencies-ans-tools)
- [Support tools](https://github.com/hygorchristian/willdom-challenge#wrench-support-tools)
- [Contributing](https://github.com/hygorchristian/willdom-challenge#ok_hand-contributing)
- [License](https://github.com/hygorchristian/willdom-challenge#book-license)

## :speech_balloon: About this Project

The idea of the App is:
_"Reproduce some features of the Hodinkee Blog, providing a simple way to implement the article list"._

## :thinking: Why?

This project is challenge. I'll be happy if you could provide me any feedback about the project, code, structure or anything that you can report that could make me a better developer!

Email-me: hygor.christian@gmail.com

Connect with me at [LinkedIn](https://www.linkedin.com/in/hygor-christian/).

Also, you can use this Project as you wish, be for study, be for make improvements or earn money with it!

It's free!

## :mag_right: Some Observations about this App

1 - There's no functionality of the menu items, the buttons are only for UI matters.

## :link: Links

If you want to test the App in the Production mode, the links is here:

[Hodinkee Clone](https://optimistic-benz-88f684.netlify.app/)

## :white_check_mark: Features

- Header
    - Has some items, none of them are clickable

![Preview-Screens](https://github.com/hygorchristian/willdom-challenge/blob/master/public/readme/header.png)

- Article List
	- List the article with title, descriptions and an image
	- The scroll is infinite. If you have a premium key for the [gnews.io](https://gnews.io/) API, you can see all the posts, if not the first ten posts will repeat over each request.

![Preview-Screens](https://github.com/hygorchristian/willdom-challenge/blob/master/public/readme/list.png)

- Footer 
    - Has some items, none of them are clickable
    
![Preview-Screens](https://github.com/hygorchristian/willdom-challenge/blob/master/public/readme/footer.png)

## :rocket: Getting Started

### Prerequisites

To run this project in the development mode, you'll need to have a basic environment to run a React JS App, that can be found [here](https://pt-br.reactjs.org/docs/getting-started.html).
You will also need and API_KEY for the [gnews.io](https://gnews.io/), you can create and account and get the key [here](https://gnews.io/register/)

### Installing

**Cloning the Repository**

```
$ git clone https://github.com/hygorchristian/willdom-challenge

$ cd willdom-challenge
```

**Installing dependencies**

```
$ yarn
```

_or_

```
$ npm install
```

### Environment

You need to put your `API_KEY` inside the `.env` file, you can create a new `.env` and just copy the structure of the `.env.example` that can be found in the root of this project.

```.env
HOST=0.0.0.0  # to run in LAN
REACT_APP_GNEWS_API_KEY=your-api-key
```

### Running

With all dependencies installed and the environment properly configured, you can now run the app:

Development

```
$ yarn start
```
_or_

```
$ npm run start
```

Production


```
$ yarn build
```
_or_

```
$ npm run build
```
Then run the file located at /build/index.html

## :gear: Dependencies ans Tools

- [React JS](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Styled Components](https://styled-components.com/) - Visual primitives for the component age.
- [ESlint](https://eslint.org/) - Linter
- [Prettier](https://prettier.io/) - Code Formatter
- [Babel](https://babeljs.io/) - JavaScript Compiler

## :ok_hand: Contributing

You can send how many PR's do you want, I'll be glad to analyse and accept them! And if you have any question about the project...

Email-me: hygor.christian@gmail.com

Connect with me at [LinkedIn](https://www.linkedin.com/in/hygor-christian/)

Thank you!

## :book: License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/hygorchristian/willdom-challenge/blob/master/LICENSE) file for details
