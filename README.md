# README

This app is currently deployed in Firebase Hosting:\
[base url](https://enatividad-nested-todo.web.app/) -
`https://enatividad-nested-todo.web.app/`

## Implementation Notes

This app was live-coded during a skills assessment job interview with the
following constraints:
- no prior knowledge of what kind of app is going to be made
- no prior knowledge of the detailed specs of the app
- time limit of 2 hours

These are the core requirements of the app:
1. Create a TODO item
2. Toggle item as in/complete
3. Nest a TODO item-list inside an item

These were the extra feature requests, since I finished the core requirements
in more or less 45 minutes:
1. Data Persistence (either client or server)
2. Flat Array data structure, in preparation for SQLite data storage
3. Toggle an in/complete state of an item's subitems

Implementing the three feature requests took about 40 minutes.

This app is automatically deployed to Firebase Hosting whenever I push to the
`master` branch of this repository.

## Dependencies

- node 12+
- yarn 1

## Development Environment Setup

- run `yarn install` from inside the project directory to install the remaining
  dependencies
- run `yarn start` to start the local development server

## License

This app was developed by Emmanuel Natividad.
Copyright © 2021, Emmanuel Natividad
