Method             | Arguments            | Description
-------------------|----------------------|------------
setProduct         | Product model | Options of this product will be shown
setAttributeCode   | Attribute code or array of attribute codes | Indicate attribute(s) to load
setAttributeToShow | Attribute code or array of attribute codes | Use to display only some of loaded options
setAttributeToHide | Attribute code or array of attribute codes | Use to hide some of loaded options
setParentPageIdentifier | String or key => value array | Use when some attribute is linked to multiple attribute pages and you want to clarify which to render. For example: `brands/amd` and `computers/amd` and you would like to build a link to `computers/amd`
setParentLinkTitle | String or key => value array | Use to show additional link aside of attribute image/text
setCssClass        | hidden-label<br/>a-center<br/>list-block<br/>clear | Hide page title<br/>Center options<br/>Show options line by line<br/>Use `clear: all` for options list
setCssStyle        | Css styles: `margin-top: 20px; border-bottom: 1px solid #eee;` | Use to customize any style
setUseImage        | Boolean or key => value array | Ability to toggle between image and text modes
setUseLink         | Boolean or key => value array | Ability to render option as link or as a plain image or text
setWidth           | Integer | Image width
setHeight          | Integer | Image height
setKeepFrame       | Boolean | Set false to resize image by larger side only
setTemplate        | String | Render options with custom template
