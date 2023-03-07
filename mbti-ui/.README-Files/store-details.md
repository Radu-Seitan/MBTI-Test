# Store structure
src/store
├── entities # handles normalizr
│   ├── sagas.ts
│   ├── reducer.ts
├── store.ts # configures the store
├── sagas.ts # a file that aggregates multiple Sagas to a single entry point for the sagaMiddleware to run.

# More detailed info about each file

## store.ts

userPersistConfig - is used to persist the logged in user, without this, after each reload/refresh you'll be logged out from the application since 
the logged in user is not persisted, same happens if you'll paste the app url to another browser tab, the current session won't be persisted, hance 
you'll be asked to log in again.

const sagaMiddleware = createSagaMiddleware(); - Creates a Redux middleware and connects the Sagas to the Redux Store

const reducer = combineReducers({user: persistReducer(userPersistConfig, userReducer), orders: orderReducer }); - This is the place where an object
whose values are different reducing functions is transformed into a single reducing function you can pass to createStore. Hence every time you'll add a new slice to 
the store (eg. orderReducer) that slice needs to be added inside this combineReducers function.

configureStore - a function that accepts a single configuration object as a parameter. The input object should have a reducer property that defines either
 a function to be used as the root reducer, or an object of slice reducers which will be combined to create a root reducer.

sagaMiddleware.run(rootSaga); - afterwards we enhance the Store with a new method runSaga. Then in our main module, we will use the method to start the root Saga of the application.

## sagas.ts

export const sagas = [userSagas, ordersSagas]; - adding our sagas.ts files
yield all(sagas.map((saga) => fork(saga, sagas))); - Here, the all effect is used with an array, this means that your sagas will be executed in parallel
