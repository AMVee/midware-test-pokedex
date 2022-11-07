# Midware-Pokedex

This file explains the use of this create-react-app web application. Because of this, more detailed documentation can be found in the [CRA Documentation](https://create-react-app.dev/docs/getting-started). Here are also added some details about how things are handled behind the scenes, serving as an informal but convinient guide to the project.

Starting the application of course requires node. Then, from the midware-pokedex folder you may start the application with

 `npm start`

This should open the development server supplied by CRA on port 3000 as default.

## Loading Optimization

The left side of the application is a list of all 904 base pokémon, each with name, pokémon number and official artwork as a miniature icon. These icons are the heaviest part of the initialization load. While most internet speeds will manage to load all the assets in less than 5 seconds, doing this all at once may make the interface feel rough when starting. To solve this, the icons are loaded in batches, and reserving the first 2 seconds of load time to the first 30 images. The batches get bigger with each iteration, since the load has been done and we can speed up the process. Each batch signalizes wether the pokémon entry in the list should display its icon.

This is a band aid solution. A better one would be using the Intersection Observer API, by signalizing which list entries are in view, how close they are to other list items and using that proximity to determine wether to load the icons or not.

This approach would however need to solve for what happens on fast scrolls, catching the loads by surprise and finding some incomplete entries.

For now both methods would struggle on edgecases where the user is in a big hurry to find Overqwil at the very bottom of the list.

## Dynamic Styling

React handles styling fairly simply. Multiple css classes are added to the CSS file and can be conditionally added to every element of the project. Adding snappy, nonzero transitions, always gives the application a polished feel. For more visible changes like the searchbar to slide into view slower, but still subsecond transitions work better.

## Search Bar

The search bar is a react _controlled component_. This means its source of information are react states, which contain its information and command its change. This makes it easy to blend the information managed with the input with the effect it has in other components. Here, the state associated to the search bar was lifted up to the whole `MidwarePokedex` component in order to manage the effect on the list. The value of this state, which is the value in the input box, when not empty, is used to filter out the entries in the list which contain the input's value. All the entries filtered out are given the css class `NotVisible`, which sets their `display` property to `"none"`.

## Screen

The right side of the application is what I call the _screen_ of the pokédex. It contains two sections The `PokemonDisplay`, showing information of the currently selected pokémon, and the `EvolutionChart`, showing their, well, Evolution Chart. At all point the main component `MidwarePokedex` stores in its state all the information returned by the pokémon's base API call. This might not be enough sometimes, I'll get to that. By storing this almost globally, both the list to the left has information to select which entry should be singled out, and the screen to the right has most of the info to display. All the displayed stats for the pokémon are in that state except for the egg groups, which must be accessed through the species page (whose URL is in the original JSON response under `species.URL`). A similar thing happens for the evolution stages, which required a slightly more clever solution.

Many requests on this API are made by a common URL ending in the particular pokémon's ID. For example, the base call for Bulbasaur, pokémon #001 is https://pokeapi.co/api/v2/pokemon/**1**, while for Charmander, pokémon #004 is https://pokeapi.co/api/v2/pokemon/**4**. Similarly when accessing the official artwork sprite for each pokémon one must use https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/**1**.png and https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/**4**.png respectively, only changing the ID from the urls. Now, in order to access the selected pokémon's other evolution stages one must go into its specific species URL which was mentioned before, and from there the URL for the species' `evolution_chain` URL. This is a particular URL for the specific Evolution Chart the selected pokémon belongs to. The odd part is that in order to access the images for each pokémon in the chain by brute force one would have to make a request for each pokémon in the chain, and from each response get the URL for each image. However, understanding how this API works, it's clear that a fancier, easier, slightly more optimized solution, is to use the URL strings in the chain to just extract the IDs with splicing.

## Icons

Icons are free icons from the internet.

## API Calls

All API calls are handled with `axios` promises, as well as managed with the react hook `useEffect` to wait for said promises to resolve.
