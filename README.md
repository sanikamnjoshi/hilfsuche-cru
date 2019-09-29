#### THE VIEW / CREATE / EDIT POST FUNCTIONALITY FROM OUR APP IMPLEMENTED SEPARATELY USING NODE, EXPRESS, AXIOS, MONGOOSE


#### Refer to the following tutuorials (chronological) to understand the functionality:
1. <https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1/>
2. <https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-2/>
3. <https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-3/>
4. <https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-4/>


#### How to run:
1. In both hs/frontend and hs/backend, run  
`npm install`
2. Start mongo service on your machine
3. Create a folder data in hs/backend. Within the data folder, create db.
Navigate to hs/backend/data/db in your terminal, and run  
`mongo`  
This will start your mongo shell. In the shell, type  
`use posts`  
Hit enter. Then exit the shell.
(Refer to part 2 of the tutorial to understand this better. You can search for the phrase 'use todos' on that webpage.)
4. Navigate to hs/backend on a terminal and run  
`nodemon server`  
This will start the nodemon server and set it listening for any changes and queries we send it
5. Now, **in a different terminal**, navigate to hs/frontend and run  
`npm start`  


_Hope this works!_
