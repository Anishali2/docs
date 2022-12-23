This hook takes in a url and an optional options object as arguments, and returns an object with six properties:


**data**: the data that was returned from the fetch request <br/>
**error**: any error that occurred while making the request <br/>
**isValidating**: a boolean that indicates whether the hook is currently making a request <br/> 
**revalidate**: a function that you can call to manually trigger a refetch of the data <br/>
**doFetch**: a function that you can call to make a new fetch request with the specified url and options <br/>
**doMutate**: a function that you can call to update the data in the hook <br/>


The doFetch function will make a fetch request and update the data in the hook if the request is successful.
If the request fails, it will log the error to the console. The doMutate function allows you to update the
data in the hook without making a new fetch request. You can pass a boolean as the second argument to specify
whether the hook should revalidate (i.e., make a new fetch request) after the data is updated.
