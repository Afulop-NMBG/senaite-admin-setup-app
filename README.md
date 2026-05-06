
# About
This is an MVP to test out Senaite's compatibility with custom React views. It is a multipart form that mirrors the admin setup from Senaite's [Quickstart Guide](https://www.senaite.com/docs/quickstart).


# Installation
### 1) Clone the repository
`git clone git@github.com:Afulop-NMBG/senaite-admin-setup-app.git`
`cd senaite-admin-setup-app`

### 2) Install dependencies
 `npm install`

### 3) Start the development server
`npm run dev`



# Going Forward
- Data entered in field inputs is saved for each step, so if the user needs to return to a previous step they don't have to re-enter the data

- Currently connecting this view with the [Senaite REST API](https://senaitejsonapi.readthedocs.io/en/latest/index.html) to POST requests for object creation

- For sample registry this would probably be overkill. But the default Senaite view for sample registration is pretty flexible, and we can add or remove the fields that are provided. (at least according to [this repo](https://github.com/senaite/senaite.app.listing))

- Fields in StepRenderer will need to be updated to match the exact API payload shape before hooking up, field names are currently human-readable and not API keys/ proper payload fields

- API calls need to be ordered: Department → Category → Service → Sample Type → Client → Client Contact, since each object depends on the previous
    - thinking that the requests could be made during each step on "Next" click if the API plays nice
    - could also add user feedback for API request success/fail, such as a status badge on the main form card

- Currently no validation — could add required field checks before allowing Continue

- The category and service steps have department/category dropdowns hardcoded as text inputs; ideally these would be populated dynamically from already-submitted steps or from a GET to the API

- A Senaite site needs to exist before any POST requests can be made 

- As final step, form could redirect to the Senaite site dashboard 

