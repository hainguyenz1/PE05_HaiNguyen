# PE05_HaiNguyen
Input

The application accepts user input through two primary forms: one for adding new cities and another for adding countries. In the “AddCity” tab, users enter the city name and country, while in the “AddCountry” tab, they input the country name and currency. Both forms validate for completeness and provide feedback if any fields are left blank.

Process

Upon submission, the app processes the input by creating an object representing the city or country, appending it to the corresponding state array (cities or countries). State management is handled with React hooks (useState), ensuring the UI updates reflect changes in real time. The app employs React Navigation to switch between tabs and stack screens, offering a seamless flow between adding entries and viewing lists.

Output

The application dynamically generates lists of cities and countries. In the "Cities" and "Countries" tabs, entries are displayed with their respective details, ensuring a responsive user experience.
