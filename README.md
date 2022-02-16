# xhr-subscription
Subscribe to XHR requests from Greasemonkey scripts

Slightly modified version of
https://stackoverflow.com/a/53741846
made by
https://github.com/polezky


## Usage

1.  Add
    ```
    // @require      https://raw.githubusercontent.com/j-szulc/xhr-subscription/0ce6c5fd3e0dda6c2882045dcee5e297c111055c/xhr-subscription.js
    ```
    to your userScript
1.  To subscribe:
    ```
    const subscription = subscribeToXhr(xhr => {
      if (xhr.status != 200) return;
      ... do something here.
    });
    ```
1.  To unsubscribe:
    ```
    subscription.unsubscribe();
    ```
