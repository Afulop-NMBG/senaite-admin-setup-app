# MVP for Senaite UI
- when ready to hook up API, need to update fields to match the API 
	- [API Docs](https://senaitejsonapi.readthedocs.io/en/latest/api.html)
- Starting with just UI and form collection/cacheing 
- Add API if Jake thinks it's worth
- Write Readme
	- What it does
	- how to run it
	- going forward, what is possible


# API discovery 
## Lab Department Creation
### Endpoint
  POST http://localhost:8080/senaite/@@API/senaite/v1/create
  ### Authentication
  Postman Basic Auth tab

  ### parent_path is finnicky and doesn't match docs 
  - Departments: `/senaite/setup/departments`
  - Note: this install has mixed old/new paths. Always verify by navigating to the object in the browser UI and checking the
  URL.

  ### Field name casing matters
  - Check terminal logs for required field names, they appear as: `{"fieldname": "required field"}`

  ### Working Department payload
  ``` json 
  {
    "portal_type": "Department",
    "title": "Chemistry",
    "DepartmentID": "CHEM",
    "Manager": "",
    "parent_path": "/senaite/setup/departments"
  }
  ```

## Object Creation quirk
- When objects are created via API, they are not activated (and cannot be referenced) by default. This means that the JSON API is not fully equipped to handle this. Further, if this was made "to work", it would require going deeper into Plone (the platform that Senaite extends from) and hacking their internal workflows to activate objects after they are created
	- this is blocking the ability to link new objects to eachother like the UI can. Lab Department can be created, but when Analysis Category is created it cannot reference the UID for that Lab department right away. If the UID does get activated, it is not fast enough to be reliable for the multi step form. 

**This doesn't mean that the UI can't be extended this way, but it does cause trouble for any real Dashboard replacements.** 

- Objects can be easily created via API, but they are orphaned- cannot be linked to the other objects needed for sample flow. Extra step of linking via UI makes the app even less useful.

