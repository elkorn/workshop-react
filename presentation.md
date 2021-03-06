title: ReactJS + Flux
author:
  name: Korneliusz Caputa
  twitter: elkornel
  url: http://github.com/elkorn
style: presentation.css
output: index.html
controls: true

--

# React.js + Flux

--

### What is React?

UI library by Facebook.

Key features: virtual DOM and component orientation.

--

### Virtual DOM

Main use case: alternative to standard DOM manipulation.

"Intelligent" diffing algorithm.

Component's markup is re-rendered partially, according to state updates.

This is *not* shadow DOM.

--

### Components

React itself is only a view rendering library.

An application is comprised of building blocks, each of which encapsulates some data and rendering logic.

Components encourage good design by separation of concerns.

--

### Thinking in React

This part is mostly based on [this article](http://facebook.github.io/react/blog/2013/11/05/thinking-in-react.html).

--

### The application

We are going to build a simple view as shown here:

<center>
![Base view](http://facebook.github.io/react/img/blog/thinking-in-react-mock.png)
</center>

--

### Step 0: Identify components

To achieve idiomatic React app structure, we need to think solely in terms of components.

Components should naturally map to data as a visual representation.

The *Single Responsibility Principle* is key.

--

### Step 0: Identify components

What components can you identify?

<center>
![Base view](http://facebook.github.io/react/img/blog/thinking-in-react-mock.png)
</center>

--

### Step 0: Identify components

We will go with the following :

<center>
![Components](http://facebook.github.io/react/img/blog/thinking-in-react-components.png)
</center>

--
### Step 0: Identify components

The structure will look like this:
* `FilterableProductTable`
    * `SearchBar`
    * `ProductTable`
        * `ProductRow`
        * `CategoryRow`

--
### Step 1: Build a static structure

<center>
(plz `git checkout static-app`)
</center>

--
### Step 1: Build a static structure

To have a living prototype for the application, it's recommended to encode it as a structure of static React components.

Static doesn't mean without JS. ;)
Only that we will not handle any user input.

--
### A basic React component 

    var React = require('react');
    var view = require('./view');
    var SearchBar = React.createClass({
      render: function() {
        return view.main(this);
      }
    });

    module.exports = SearchBar;

--
### A basic React component - view

    <form>
        <input
          type="text"
          placeholder="Search..."
          value={component.props.filterText}
        />
        <p>
            <input
              id="inStockOnly"
              type="checkbox"
              value={component.props.inStockOnly}
            />
            <label htmlFor="inStockOnly">
              Only show products in stock
            </label>
        </p>
    </form>

--
### A basic React component

To use the `SearchBar`s  `props` in a parent component:

    <SearchBar
      filterText={...}
      inStockOnly={...}
    />

--
### Run the static app :)

    vagrant up && vagrant ssh
    cd /vagrant
    gulp watch


--
### Step 2: Introducing some state

<center>
(plz `git checkout introducing-state`)
</center>

--
### Step 2: Introducing some state

By state we mean React's specific notion of `state`.

`state` basically encapsulates data that changes over time.

As it is watchable, `state` has to be used with utmost care.

There are actually a few guidelines to determine when to use `state`.

--
### When should state be used?

You can put data in `state` if it fulfills these criteria:

- It is not passed from a parent via `props`.
- It changes over time.
- It is not computed from any other `state` or `props` in the component.

In short: _keep state to a minimum_, ideally push it down to a single point in a given part of the app.

-- 
### What should our app's state consist of?

<center>
![components](http://facebook.github.io/react/img/blog/thinking-in-react-components.png)
</center>

-- 
### What should our app's state consist of?

- Search text.
- Checkbox value.

--
### Step 3: State ownership

The next thing to do is to decide which component will *own* the state.

This is also important enough to have some guidelines.

--
### Step 3: State ownership

- See which components render based on that `state`.
- Find a common ancestor - it or another component higher up should own the `state`.
- If there is no common ancestor - introduce a new component whose sole purpose is to handle the `state`.

--
### Who should own the state?

<center>
![components](http://facebook.github.io/react/img/blog/thinking-in-react-components.png)
</center>

---
### Adding state handling to the components

It's best to see the source code diff, but following are the more salient bits based on `SearchBar`.

---
### Adding state handling to the components

In the main component's view:

    <SearchBar
      filterText={component.state.filterText}
      inStockOnly={component.state.inStockOnly}
    />

---
### Adding state handling to the components

In the main component:

    var FilterableProductTable = React.createClass({
      getInitialState: function() {
        return {
          filterText: '',
          inStockOnly: false
        };
      },
      render: function() {
        return view(this);
      }
    });

---
### Adding state handling to the components

In the `SearchBar` itself:

Nothing to do! The changes are propagated to `props` automagically.

Now, the application reacts to the initial state values (*one-way data flow*)- try setting something in `getInitialState`.

---
### Step 4: Reacting to input

<center>
(plz `git checkout step-3`)
</center>

---
### Step 4: Reacting to input

The last thing to do is handle *inverse* data flow- that is, from bottom to top of the hierarchy.

---
### Step 4: Reacting to input

First, we define a standard event handler for the `SearchBar`:

    <input
      type="text"
      placeholder="Search..."
      onChange={component.handleChange}
      value={component.props.filterText}
      ref="filterTextInput"
    />

Also, note the `ref` attribute - it's needed to access the DOM.

---
### Step 4: Reacting to input

The `SearchBar` should propagate its value changes upwards:

    var SearchBar = React.createClass({
      handleChange: function() {
        this.props.onUserInput(
          this.refs.filterTextInput.getDOMNode().value,
          this.refs.inStockOnlyInput.getDOMNode().checked
        );
      },
      render: function() {
        return view.main(this);
      }
    });

---
### Step 4: Reacting to input

Finally, we need to define what to do with that information in the `state` owner:

    <SearchBar
      filterText={component.state.filterText}
      inStockOnly={component.state.inStockOnly}
      onUserInput={component.handleUserInput}
    />

---
### Step 4: Reacting to input
Which is implemented like so:

    var FilterableProductTable = React.createClass({
      handleUserInput: function(filterText, inStockOnly) {
        this.setState({
          filterText: filterText,
          inStockOnly: inStockOnly
        });
      },
      /* ... */
    });

And from here all state changes are propagated downwards by means of the previous data flow.

--
# Flux

<center>
(plz `git checkout exercise`)
</center>

--
### The one video to rule them all
I strongly encourage everybody to watch this after this presentation, or anytime today:

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/nYkdrAPrdcw?list=PLb0IAmt7-GS188xDYE-u1ShQmFFGbrk0v" frameborder="0" allowfullscreen></iframe>
</center>

It explains the motivation behind Flux.

--
### How is Flux different from MVC

Flux is a specific *concept* of unidirectional data flow.

When a user interacts with a React **view**, it propagates an **action** through a central **dispatcher** to various **stores**.

--
### How does Flux flow  look like?
![Flux data flow](https://facebook.github.io/flux/img/flux-simple-f8-diagram-with-client-action-1300w.png)

--
### How does Flux flow work?

Example:

The User clicks a button.

The button's `onClick` handler is called, which is bound to a component's API method.

Within that method, an `action` is created.

One of the steps of constructing an `action` is informing the `dispatcher` about what happened.

A `store` which registered itself to the `dispatcher` gets notified about the `action` having happened.

The `store` does some data processing and informs all observing components that a change has occured.

--
# NUFF SAID!

<center>
![Nuff Said](http://www.rankopedia.com/CandidatePix/165290.gif)

</center>

--
### Getting our hands dirty

It's easier to understand Flux by looking at an example implementation, such as what is provided in the code.

There is a task for you to perform - try to implement the functionality of deleting a product.

To find clues, grep for `WORKSHOP-TODO`.

Don't hestitate to ask in case of *any* problems - the exercise should not pose a significant challenge overall.
