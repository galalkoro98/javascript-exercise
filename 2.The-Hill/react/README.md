# Kahoot but better

* **Type of challenge: Mini Project**
* **Duration: 2 days**
* **Team challenge** : Solo

## The objective

- Consume an API
- Make a React application
- KAHOOT MUSIC INTENSIFIES


## Concretely, what are we going to do?

We are going to try to make a quiz site / application that will be better than Kahoot! Starting with a simple react project we are going to keep adding layers of complexity 'till we have a super fun quiz to share with friends and family.

Now to make it a bit easier, instead of having the user create their own quizzes we are going to consume the [open trivia database](https://opentdb.com/). Here we can fetch multiple choice questions with possible answers! (And the correct one of course ;) )

I will get you started with some basic react explanation, but you will have to complete it. Good luck!

## Getting started

- First we have to create a React project: ``npx create-react-app kahoot-but-better``
- We have to understand that React works in components, if this is new to you go to the [React getting started documentation](https://reactjs.org/docs/getting-started.html)
- The current React standard is functional components, here is a basic example with props:
````jsx
    import React from 'react';
    
    function Header(title) {
        return (
            <div className={"header"}>
                <h1>{{title}}</h1>
            </div>
        );
    }
    
    export default Header;
````
- It can receive a title via props and display it accordingly.
- Using state is everything in React (check [the docs](https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly) for more info)
- Now we are adding useState to this example so the user can change the content of the title at the click of a button:
````jsx
    import React, {useState} from 'react';

    
    function Header(props) {

        const [title, setTitle] = useState("Hello World!");
        
        return (
            <div className={"header"}>
                <h1>{{title}}</h1>
                <button onClick={setTitle("Hello State!")}>Click me to change state!</button>
            </div>
        );
    }
    
    export default Header;
````
- Another BIIIIG thing in React is [Hooks](https://reactjs.org/docs/hooks-intro.html)! (not the Captain one). You already used one ;)
- A another example hook is useEffect, by adding useEffect we can yeet an event whenever a certain change happens and log it in the records ;):
````jsx
    import React, {useEffect, useState} from 'react';
    
    function Header(props) {

        const [title, setTitle] = useState("Hello World!");

        useEffect(() => {
            console.log("Title changed to: " +  title);
        }, [title]);
        
        return (
            <div className={"header"}>
                <h1>{{title}}</h1>
                <button onClick={setTitle("Hello State!")}>Clcik me to change state!</button>
            </div>
        );
    }
    
    export default Header;
````
- Now go and make some layout components! (I'm thinking Header, Navigation, Footer, GameWindow, ...)

- In the Game Component try fetching some questions! (perhaps a cool fetch function in a Helper folder? Or a cool built-in Hook of React?)
````javascript
const url = "https://opentdb.com/api.php?amount=10&category=20"
//something seems awfully hardcoded here, if only the user could change these settings!

const getQuestions = async(url) => {
    const res = await  fetch(url);
    return await res.json();
}
````
- When you get the json of questions back try finding a Reactive (badum-tss) way of showing them one by one and validating a correct answer (read: USE COMPONENTS and HOOKS)
- When this logic is in place you can start adding score, settings and all that jazz!
- ...
- Profit!



## Must have

- A trivia style quiz
- Settings (subject, difficulty, amount of questions, ...)
- Score / Rapport card

## Extra's

- Go wild
- Make it super mobile friendly
- Deploy it online
- Keep high scores of your players
- Connect with Node and Socket.io to make it multiplayer!


