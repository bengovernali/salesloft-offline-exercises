# Simple SalesLoft App

# Overview

This app was created as part of a technical assesment for Salesloft. Using a provided API key, the app lists all the people in their API that the key has access to. In addition to this, there is a button that when clicked provides the amount of times a unique character is used in all of the email addresses for those people.

## Structure

This app was written entirely in React. There were some facets that would have been more easily done in a Node.js environment. Due to the simplicity of the task, I decided to deal entirely in the front end.

The project is broken up into two main components: the people list and the character list.

I utilized axios for making HTTP requests. This was done so that I could add the API key as a header when send requests. The API key is stored as an environment variable in order to keep it private.

## Challenges

Initially when making requests, a CORS error would be issued. I bypassed this issue by using a heroku proxy server. Unfortunately this means that the app in its current state only works on a local environment. This is where a backend server would have been helpful. When I attempted to deploy the app it didn't function correctly since the proxy doesn't work on builds.
